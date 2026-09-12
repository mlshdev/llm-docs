> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor/metaldeviceregistryid](https://developer.apple.com/documentation/mediaextension/merawprocessor/metaldeviceregistryid)

# metalDeviceRegistryID (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Requests the processor use the provided Metal device for processing.

## Declaration

```swift
optional var metalDeviceRegistryID: UInt64 { get set }
```

<a id="Discussion"></a>

## Discussion

This optional property requests that [MERAWProcessor](../merawprocessor.md) use `MTLDevice` corresponding to this ID for any Metal-based processing. This is optional and doesn’t need to be implemented if the processor does not use Metal.

## See Also

### Inspecting a RAW processor

- [outputColorAttachments](outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [processingParameters](processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.

# metalDeviceRegistryID (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Requests the processor use the provided Metal device for processing.

## Declaration

```objectivec
@property (nonatomic) uint64_t metalDeviceRegistryID;
```

<a id="Discussion"></a>

## Discussion

This optional property requests that [MERAWProcessor](../merawprocessor.md) use `MTLDevice` corresponding to this ID for any Metal-based processing. This is optional and doesn’t need to be implemented if the processor does not use Metal.

## See Also

### Inspecting a RAW processor

- [outputColorAttachments](outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [processingParameters](processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
- [readyForMoreMediaData](isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.
