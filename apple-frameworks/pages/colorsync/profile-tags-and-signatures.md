> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/profile-tags-and-signatures](https://developer.apple.com/documentation/colorsync/profile-tags-and-signatures)

# Profile tags and signatures (Swift)

**Framework:** ColorSync  
**Kind:** API Collection

Identify the four-character signatures that describe an ICC profile’s tags, class, and color space.

<a id="Overview"></a>

## Overview

An International Color Consortium (ICC) profile is a collection of tags, represented as a four-character signature constant. Use these constants to look up a tag with [ColorSyncProfileCopyTag(\_:\_:)](colorsyncprofilecopytag%28____%29.md), or test for one with [ColorSyncProfileContainsTag(\_:\_:)](colorsyncprofilecontainstag%28____%29.md), and to interpret a profile’s class and color space.

## Topics

### Identifying profile classes

- [kColorSyncSigAbstractClass](kcolorsyncsigabstractclass.md): The signature identifying an abstract profile class.
- [kColorSyncSigColorSpaceClass](kcolorsyncsigcolorspaceclass.md): The signature identifying a color-space conversion profile class.
- [kColorSyncSigDisplayClass](kcolorsyncsigdisplayclass.md): The signature identifying a display device profile class.
- [kColorSyncSigInputClass](kcolorsyncsiginputclass.md): The signature identifying an input (scanner or camera) device profile class.
- [kColorSyncSigLinkClass](kcolorsyncsiglinkclass.md): The signature identifying a device-link profile class.
- [kColorSyncSigNamedColorClass](kcolorsyncsignamedcolorclass.md): The signature identifying a named color profile class.
- [kColorSyncSigOutputClass](kcolorsyncsigoutputclass.md): The signature identifying an output (printer) device profile class.

### Identifying color spaces

- [kColorSyncSigCmykData](kcolorsyncsigcmykdata.md): The signature identifying the CMYK data color space.
- [kColorSyncSigGrayData](kcolorsyncsiggraydata.md): The signature identifying the grayscale data color space.
- [kColorSyncSigLabData](kcolorsyncsiglabdata.md): The signature identifying the CIELAB data color space.
- [kColorSyncSigRgbData](kcolorsyncsigrgbdata.md): The signature identifying the RGB data color space.
- [kColorSyncSigXYZData](kcolorsyncsigxyzdata.md): The signature identifying the CIEXYZ data color space.

### Identifying transform tags

- [kColorSyncSigAToB0Tag](kcolorsyncsigatob0tag.md): The signature of the device-to-PCS transform tag for the perceptual rendering intent.
- [kColorSyncSigAToB1Tag](kcolorsyncsigatob1tag.md): The signature of the device-to-PCS transform tag for the media-relative colorimetric rendering intent.
- [kColorSyncSigAToB2Tag](kcolorsyncsigatob2tag.md): The signature of the device-to-PCS transform tag for the saturation rendering intent.
- [kColorSyncSigBToA0Tag](kcolorsyncsigbtoa0tag.md): The signature of the PCS-to-device transform tag for the perceptual rendering intent.
- [kColorSyncSigBToA1Tag](kcolorsyncsigbtoa1tag.md): The signature of the PCS-to-device transform tag for the media-relative colorimetric rendering intent.
- [kColorSyncSigBToA2Tag](kcolorsyncsigbtoa2tag.md): The signature of the PCS-to-device transform tag for the saturation rendering intent.

### Identifying colorant and curve tags

- [kColorSyncSigRedColorantTag](kcolorsyncsigredcoloranttag.md): The signature of the red colorant tag, giving the red channel’s PCSXYZ values.
- [kColorSyncSigGreenColorantTag](kcolorsyncsiggreencoloranttag.md): The signature of the green colorant tag, giving the green channel’s PCSXYZ values.
- [kColorSyncSigBlueColorantTag](kcolorsyncsigbluecoloranttag.md): The signature of the blue colorant tag, giving the blue channel’s PCSXYZ values.
- [kColorSyncSigRedTRCTag](kcolorsyncsigredtrctag.md): The signature of the red channel’s tone reproduction curve (TRC) tag.
- [kColorSyncSigGreenTRCTag](kcolorsyncsiggreentrctag.md): The signature of the green channel’s tone reproduction curve (TRC) tag.
- [kColorSyncSigBlueTRCTag](kcolorsyncsigbluetrctag.md): The signature of the blue channel’s tone reproduction curve (TRC) tag.
- [kColorSyncSigGrayTRCTag](kcolorsyncsiggraytrctag.md): The signature of the grayscale tone reproduction curve (TRC) tag.

### Identifying white and black points

- [kColorSyncSigMediaBlackPointTag](kcolorsyncsigmediablackpointtag.md): The signature of the media black point tag.
- [kColorSyncSigMediaWhitePointTag](kcolorsyncsigmediawhitepointtag.md): The signature of the media white point tag.

### Identifying preview tags

- [kColorSyncSigPreview0Tag](kcolorsyncsigpreview0tag.md): The signature of the preview tag for the perceptual rendering intent.
- [kColorSyncSigPreview1Tag](kcolorsyncsigpreview1tag.md): The signature of the preview tag for the media-relative colorimetric rendering intent.
- [kColorSyncSigPreview2Tag](kcolorsyncsigpreview2tag.md): The signature of the preview tag for the saturation rendering intent.

### Identifying metadata tags

- [kColorSyncSigCopyrightTag](kcolorsyncsigcopyrighttag.md): The signature of the profile copyright tag.
- [kColorSyncSigDeviceMfgDescTag](kcolorsyncsigdevicemfgdesctag.md): The signature of the device manufacturer description tag.
- [kColorSyncSigDeviceModelDescTag](kcolorsyncsigdevicemodeldesctag.md): The signature of the device model description tag.
- [kColorSyncSigGamutTag](kcolorsyncsiggamuttag.md): The signature of the gamut tag, marking which PCS colors fall outside the device gamut.
- [kColorSyncSigNamedColor2Tag](kcolorsyncsignamedcolor2tag.md): The signature of the named color (version 2) tag.
- [kColorSyncSigProfileDescriptionTag](kcolorsyncsigprofiledescriptiontag.md): The signature of the profile description tag.
- [kColorSyncSigProfileSequenceDescTag](kcolorsyncsigprofilesequencedesctag.md): The signature of the profile sequence description tag.
- [kColorSyncSigTechnologyTag](kcolorsyncsigtechnologytag.md): The signature of the technology tag, identifying the device technology.
- [kColorSyncSigViewingCondDescTag](kcolorsyncsigviewingconddesctag.md): The signature of the viewing conditions description tag.
- [kColorSyncSigViewingConditionsTag](kcolorsyncsigviewingconditionstag.md): The signature of the viewing conditions tag.

# Profile tags and signatures (Objective-C)

**Framework:** ColorSync  
**Kind:** API Collection

Identify the four-character signatures that describe an ICC profile’s tags, class, and color space.

<a id="Overview"></a>

## Overview

An International Color Consortium (ICC) profile is a collection of tags, represented as a four-character signature constant. Use these constants to look up a tag with [ColorSyncProfileCopyTag](colorsyncprofilecopytag%28____%29.md), or test for one with [ColorSyncProfileContainsTag](colorsyncprofilecontainstag%28____%29.md), and to interpret a profile’s class and color space.

## Topics

### Identifying profile classes

- [kColorSyncSigAbstractClass](kcolorsyncsigabstractclass.md): The signature identifying an abstract profile class.
- [kColorSyncSigColorSpaceClass](kcolorsyncsigcolorspaceclass.md): The signature identifying a color-space conversion profile class.
- [kColorSyncSigDisplayClass](kcolorsyncsigdisplayclass.md): The signature identifying a display device profile class.
- [kColorSyncSigInputClass](kcolorsyncsiginputclass.md): The signature identifying an input (scanner or camera) device profile class.
- [kColorSyncSigLinkClass](kcolorsyncsiglinkclass.md): The signature identifying a device-link profile class.
- [kColorSyncSigNamedColorClass](kcolorsyncsignamedcolorclass.md): The signature identifying a named color profile class.
- [kColorSyncSigOutputClass](kcolorsyncsigoutputclass.md): The signature identifying an output (printer) device profile class.

### Identifying color spaces

- [kColorSyncSigCmykData](kcolorsyncsigcmykdata.md): The signature identifying the CMYK data color space.
- [kColorSyncSigGrayData](kcolorsyncsiggraydata.md): The signature identifying the grayscale data color space.
- [kColorSyncSigLabData](kcolorsyncsiglabdata.md): The signature identifying the CIELAB data color space.
- [kColorSyncSigRgbData](kcolorsyncsigrgbdata.md): The signature identifying the RGB data color space.
- [kColorSyncSigXYZData](kcolorsyncsigxyzdata.md): The signature identifying the CIEXYZ data color space.

### Identifying transform tags

- [kColorSyncSigAToB0Tag](kcolorsyncsigatob0tag.md): The signature of the device-to-PCS transform tag for the perceptual rendering intent.
- [kColorSyncSigAToB1Tag](kcolorsyncsigatob1tag.md): The signature of the device-to-PCS transform tag for the media-relative colorimetric rendering intent.
- [kColorSyncSigAToB2Tag](kcolorsyncsigatob2tag.md): The signature of the device-to-PCS transform tag for the saturation rendering intent.
- [kColorSyncSigBToA0Tag](kcolorsyncsigbtoa0tag.md): The signature of the PCS-to-device transform tag for the perceptual rendering intent.
- [kColorSyncSigBToA1Tag](kcolorsyncsigbtoa1tag.md): The signature of the PCS-to-device transform tag for the media-relative colorimetric rendering intent.
- [kColorSyncSigBToA2Tag](kcolorsyncsigbtoa2tag.md): The signature of the PCS-to-device transform tag for the saturation rendering intent.

### Identifying colorant and curve tags

- [kColorSyncSigRedColorantTag](kcolorsyncsigredcoloranttag.md): The signature of the red colorant tag, giving the red channel’s PCSXYZ values.
- [kColorSyncSigGreenColorantTag](kcolorsyncsiggreencoloranttag.md): The signature of the green colorant tag, giving the green channel’s PCSXYZ values.
- [kColorSyncSigBlueColorantTag](kcolorsyncsigbluecoloranttag.md): The signature of the blue colorant tag, giving the blue channel’s PCSXYZ values.
- [kColorSyncSigRedTRCTag](kcolorsyncsigredtrctag.md): The signature of the red channel’s tone reproduction curve (TRC) tag.
- [kColorSyncSigGreenTRCTag](kcolorsyncsiggreentrctag.md): The signature of the green channel’s tone reproduction curve (TRC) tag.
- [kColorSyncSigBlueTRCTag](kcolorsyncsigbluetrctag.md): The signature of the blue channel’s tone reproduction curve (TRC) tag.
- [kColorSyncSigGrayTRCTag](kcolorsyncsiggraytrctag.md): The signature of the grayscale tone reproduction curve (TRC) tag.

### Identifying white and black points

- [kColorSyncSigMediaBlackPointTag](kcolorsyncsigmediablackpointtag.md): The signature of the media black point tag.
- [kColorSyncSigMediaWhitePointTag](kcolorsyncsigmediawhitepointtag.md): The signature of the media white point tag.

### Identifying preview tags

- [kColorSyncSigPreview0Tag](kcolorsyncsigpreview0tag.md): The signature of the preview tag for the perceptual rendering intent.
- [kColorSyncSigPreview1Tag](kcolorsyncsigpreview1tag.md): The signature of the preview tag for the media-relative colorimetric rendering intent.
- [kColorSyncSigPreview2Tag](kcolorsyncsigpreview2tag.md): The signature of the preview tag for the saturation rendering intent.

### Identifying metadata tags

- [kColorSyncSigCopyrightTag](kcolorsyncsigcopyrighttag.md): The signature of the profile copyright tag.
- [kColorSyncSigDeviceMfgDescTag](kcolorsyncsigdevicemfgdesctag.md): The signature of the device manufacturer description tag.
- [kColorSyncSigDeviceModelDescTag](kcolorsyncsigdevicemodeldesctag.md): The signature of the device model description tag.
- [kColorSyncSigGamutTag](kcolorsyncsiggamuttag.md): The signature of the gamut tag, marking which PCS colors fall outside the device gamut.
- [kColorSyncSigNamedColor2Tag](kcolorsyncsignamedcolor2tag.md): The signature of the named color (version 2) tag.
- [kColorSyncSigProfileDescriptionTag](kcolorsyncsigprofiledescriptiontag.md): The signature of the profile description tag.
- [kColorSyncSigProfileSequenceDescTag](kcolorsyncsigprofilesequencedesctag.md): The signature of the profile sequence description tag.
- [kColorSyncSigTechnologyTag](kcolorsyncsigtechnologytag.md): The signature of the technology tag, identifying the device technology.
- [kColorSyncSigViewingCondDescTag](kcolorsyncsigviewingconddesctag.md): The signature of the viewing conditions description tag.
- [kColorSyncSigViewingConditionsTag](kcolorsyncsigviewingconditionstag.md): The signature of the viewing conditions tag.
