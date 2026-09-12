> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtrawprocessingpropertykey_metadataforsidecarfile](https://developer.apple.com/documentation/videotoolbox/kvtrawprocessingpropertykey_metadataforsidecarfile)

# kVTRAWProcessingPropertyKey_MetadataForSidecarFile (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 26.0+

## Declaration

```swift
let kVTRAWProcessingPropertyKey_MetadataForSidecarFile: CFString!
```

<a id="discussion"></a>

## Discussion

This property, if supported, returns the current processing metadata on the RAW Processor. The returned value can be used by the caller to create, or overwrite an existing sidecar file.

This property is not supported by all RAWProcessors. The metadata returned represents a fully-formed sidecar file, and should be compatible with the MediaExtension FormatReader.

## See Also

### Properties

- [kVTRAWProcessingPropertyKey_OutputColorAttachments](kvtrawprocessingpropertykey_outputcolorattachments.md): The color-related image buffer keys and values that will be attachments to the returned pixel buffers.

# kVTRAWProcessingPropertyKey_MetadataForSidecarFile (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTRAWProcessingPropertyKey_MetadataForSidecarFile;
```

<a id="discussion"></a>

## Discussion

This property, if supported, returns the current processing metadata on the RAW Processor. The returned value can be used by the caller to create, or overwrite an existing sidecar file.

This property is not supported by all RAWProcessors. The metadata returned represents a fully-formed sidecar file, and should be compatible with the MediaExtension FormatReader.

## See Also

### Properties

- [kVTRAWProcessingPropertyKey_MetalDeviceRegistryID](kvtrawprocessingpropertykey_metaldeviceregistryid.md): This property requests that the Metal device corresponding to the specified registryID be used for any Metal related processing.
- [kVTRAWProcessingPropertyKey_OutputColorAttachments](kvtrawprocessingpropertykey_outputcolorattachments.md): The color-related image buffer keys and values that will be attachments to the returned pixel buffers.
