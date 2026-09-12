> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtrawprocessingpropertykey_metaldeviceregistryid](https://developer.apple.com/documentation/videotoolbox/kvtrawprocessingpropertykey_metaldeviceregistryid)

# kVTRAWProcessingPropertyKey_MetalDeviceRegistryID

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 15.0+

This property requests that the Metal device corresponding to the specified registryID be used for any Metal related processing.

## Declaration

```objectivec
extern CFStringRef const kVTRAWProcessingPropertyKey_MetalDeviceRegistryID;
```

<a id="Discussion"></a>

## Discussion

This property is not supported by all RAW processors.

## See Also

### Properties

- [kVTRAWProcessingPropertyKey_OutputColorAttachments](kvtrawprocessingpropertykey_outputcolorattachments.md): The color-related image buffer keys and values that will be attachments to the returned pixel buffers.
- [kVTRAWProcessingPropertyKey_MetadataForSidecarFile](kvtrawprocessingpropertykey_metadataforsidecarfile.md)
