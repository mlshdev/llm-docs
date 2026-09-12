> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcopyvideodecoderextensionproperties](https://developer.apple.com/documentation/videotoolbox/vtcopyvideodecoderextensionproperties)

# VTCopyVideoDecoderExtensionProperties

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 15.0+

Returns information about the Media Extension video decoder required to decode the specified format.

## Declaration

```objectivec
extern OSStatus VTCopyVideoDecoderExtensionProperties(CMFormatDescriptionRef formatDesc, CFDictionaryRef*mediaExtensionPropertiesOut);
```

## Parameters

- `formatDesc`: The format description for the video format for which information is being requested.
- `mediaExtensionPropertiesOut`: If a [MediaExtension](https://developer.apple.com/documentation/mediaextension) video decoder will be used to decode the specified format, this pointer will return a dictionary with a set of properties describing the extension video decoder. The dictionary keys are VTExtensionPropertiesKey values.

<a id="return-value"></a>

## Return Value

If the function succeeds and a [MediaExtension](https://developer.apple.com/documentation/mediaextension) video decoder will be used to decode this format, the return value will be `noErr`. If the function succeeds but a Media Extension video decoder will not be used to decode this format, the return value will be [kVTCouldNotFindExtensionErr](kvtcouldnotfindextensionerr.md). Otherwise, the return value will be an error code describing the failure.

<a id="Discussion"></a>

## Discussion

If a Media Extension video decoder will be used to decode the specified format, this function will return information about the Media Extension that will be used.

## See Also

### Media Extension

- [VTExtensionPropertiesKey](vtextensionpropertieskey.md): A key in a Media Extension extension properties dictionary.
