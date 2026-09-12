> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor/outputcolorattachments](https://developer.apple.com/documentation/mediaextension/merawprocessor/outputcolorattachments)

# outputColorAttachments (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.

## Declaration

```swift
optional var outputColorAttachments: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

This is an optional property. Only color-related keys from [Image Buffer Attachment Keys](https://developer.apple.com/documentation/corevideo/image-buffer-attachment-keys) are permitted in the returned dictionary.

## See Also

### Inspecting a RAW processor

- [metalDeviceRegistryID](metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [processingParameters](processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.

# outputColorAttachments (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,id> * outputColorAttachments;
```

<a id="Discussion"></a>

## Discussion

This is an optional property. Only color-related keys from [Image Buffer Attachment Keys](https://developer.apple.com/documentation/corevideo/image-buffer-attachment-keys) are permitted in the returned dictionary.

## See Also

### Inspecting a RAW processor

- [metalDeviceRegistryID](metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [processingParameters](processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
- [readyForMoreMediaData](isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.
