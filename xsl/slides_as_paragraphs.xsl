<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:import href="./core/pretext-html.xsl"/>

    
    <xsl:template match="slide">
        
        <xsl:param name="b-original" select="true()" />
        <xsl:variable name="hidden">
            <xsl:apply-templates select="." mode="is-hidden" />
        </xsl:variable>
        <xsl:choose>
            <!-- born-hidden case -->
            <xsl:when test="$hidden = 'true'">
                <xsl:apply-templates select="." mode="born-hidden">
                    <xsl:with-param name="b-original" select="$b-original" />
                </xsl:apply-templates>
            </xsl:when>
            <!-- born-visible case -->
            <xsl:otherwise>
                <!-- pass-thru of b-original mandatory -->
                <xsl:apply-templates select="." mode="born-visible">
                    <xsl:with-param name="b-original" select="$b-original" />
                </xsl:apply-templates>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    
    <!-- Paragraphs -->
    <!-- Technically a division, but small enough to xref knowl -->

    <!-- Never born-hidden, does not make sense -->
    <xsl:template match="slide" mode="is-hidden">
        <xsl:text>false</xsl:text>
    </xsl:template>

    <!-- Overall enclosing element -->
    <xsl:template match="slide" mode="body-element">
        <xsl:text>section</xsl:text>
    </xsl:template>

    <!-- And its CSS class -->
    <xsl:template match="slide" mode="body-css-class">
        <xsl:value-of select="local-name()"/>
    </xsl:template>

    <!-- When born use this heading -->
    <xsl:template match="slide" mode="heading-birth">
        <xsl:apply-templates select="." mode="heading-title-paragraphs" />
    </xsl:template>

    <!-- Heading for interior of xref-knowl content -->
    <xsl:template match="slide" mode="heading-xref-knowl">
        <xsl:apply-templates select="." mode="heading-title-paragraphs" />
    </xsl:template>

    <!-- Primary content of generic "body" template   -->
    <!-- Pass along b-original flag                   -->
    <!-- Simply process contents, could restrict here -->
    <xsl:template match="slide" mode="wrapped-content">
        <xsl:param name="b-original" select="true()" />
        <xsl:apply-templates>
            <xsl:with-param name="b-original" select="$b-original" />
        </xsl:apply-templates>
    </xsl:template>


</xsl:stylesheet>