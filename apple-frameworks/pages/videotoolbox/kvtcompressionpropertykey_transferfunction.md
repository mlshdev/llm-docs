> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_transferfunction](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_transferfunction)

# kVTCompressionPropertyKey_TransferFunction (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The transfer function for compressed content.

## Declaration

```swift
let kVTCompressionPropertyKey_TransferFunction: CFString
```

<a id="Discussion"></a>

## Discussion

If the video encoder enforces specific colorimetry, this property will be read-only ([VTSessionSetProperty(\_:key:value:)](vtsessionsetproperty%28__key_value_%29.md) will return [kVTPropertyReadOnlyErr](kvtpropertyreadonlyerr.md)). The value is set on the format description for output sample buffers.

## See Also

### Color

- [kVTCompressionPropertyKey_AlphaChannelMode](kvtcompressionpropertykey_alphachannelmode.md)
- [kVTCompressionPropertyKey_ColorPrimaries](kvtcompressionpropertykey_colorprimaries.md): The color primaries for compressed content.
- [kVTCompressionPropertyKey_ContentLightLevelInfo](kvtcompressionpropertykey_contentlightlevelinfo.md)
- [kVTCompressionPropertyKey_GammaLevel](kvtcompressionpropertykey_gammalevel.md)
- [kVTCompressionPropertyKey_ICCProfile](kvtcompressionpropertykey_iccprofile.md): The ICC profile for compressed content.
- [kVTCompressionPropertyKey_MasteringDisplayColorVolume](kvtcompressionpropertykey_masteringdisplaycolorvolume.md)
- [kVTCompressionPropertyKey_YCbCrMatrix](kvtcompressionpropertykey_ycbcrmatrix.md): The YCbCr matrix for compressed content.

# kVTCompressionPropertyKey_TransferFunction (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The transfer function for compressed content.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_TransferFunction;
```

<a id="Discussion"></a>

## Discussion

If the video encoder enforces specific colorimetry, this property will be read-only ([VTSessionSetProperty](vtsessionsetproperty%28__key_value_%29.md) will return [kVTPropertyReadOnlyErr](kvtpropertyreadonlyerr.md)). The value is set on the format description for output sample buffers.

## See Also

### Color

- [kVTCompressionPropertyKey_AlphaChannelMode](kvtcompressionpropertykey_alphachannelmode.md)
- [kVTCompressionPropertyKey_ColorPrimaries](kvtcompressionpropertykey_colorprimaries.md): The color primaries for compressed content.
- [kVTCompressionPropertyKey_ContentLightLevelInfo](kvtcompressionpropertykey_contentlightlevelinfo.md)
- [kVTCompressionPropertyKey_GammaLevel](kvtcompressionpropertykey_gammalevel.md)
- [kVTCompressionPropertyKey_ICCProfile](kvtcompressionpropertykey_iccprofile.md): The ICC profile for compressed content.
- [kVTCompressionPropertyKey_MasteringDisplayColorVolume](kvtcompressionpropertykey_masteringdisplaycolorvolume.md)
- [kVTCompressionPropertyKey_YCbCrMatrix](kvtcompressionpropertykey_ycbcrmatrix.md): The YCbCr matrix for compressed content.
