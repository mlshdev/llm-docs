> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtrawprocessingpropertykey_outputcolorattachments](https://developer.apple.com/documentation/videotoolbox/kvtrawprocessingpropertykey_outputcolorattachments)

# kVTRAWProcessingPropertyKey_OutputColorAttachments (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

The color-related image buffer keys and values that will be attachments to the returned pixel buffers.

## Declaration

```swift
let kVTRAWProcessingPropertyKey_OutputColorAttachments: CFString!
```

<a id="Discussion"></a>

## Discussion

This property may not be supported by all RAW Processors. Only color-related keys from `CVImageBuffer.h` are permitted in the returned dictionary.

## See Also

### Properties

- [kVTRAWProcessingPropertyKey_MetadataForSidecarFile](kvtrawprocessingpropertykey_metadataforsidecarfile.md)

# kVTRAWProcessingPropertyKey_OutputColorAttachments (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

The color-related image buffer keys and values that will be attachments to the returned pixel buffers.

## Declaration

```objectivec
extern CFStringRef const kVTRAWProcessingPropertyKey_OutputColorAttachments;
```

<a id="Discussion"></a>

## Discussion

This property may not be supported by all RAW Processors. Only color-related keys from `CVImageBuffer.h` are permitted in the returned dictionary.

## See Also

### Properties

- [kVTRAWProcessingPropertyKey_MetalDeviceRegistryID](kvtrawprocessingpropertykey_metaldeviceregistryid.md): This property requests that the Metal device corresponding to the specified registryID be used for any Metal related processing.
- [kVTRAWProcessingPropertyKey_MetadataForSidecarFile](kvtrawprocessingpropertykey_metadataforsidecarfile.md)
