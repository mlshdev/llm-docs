> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor/isreadyformoremediadata](https://developer.apple.com/documentation/mediaextension/merawprocessor/isreadyformoremediadata)

# isReadyForMoreMediaData (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Indicates the readiness of the processor to accept more sample buffers.

## Declaration

```swift
var isReadyForMoreMediaData: Bool { get }
```

<a id="Discussion"></a>

## Discussion

An [MERAWProcessor](../merawprocessor.md) operates asynchronously and often has a fixed capacity for buffers in flight in the processor. This property allows the processor to signal to [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) that its internal buffers are full and cannot accept more samples. The processor must use [MERAWProcessorReadyForMoreMediaDataDidChangeNotification](../merawprocessorreadyformoremediadatadidchangenotification.md) to notify Video Toolbox when this property changes.

## See Also

### Inspecting a RAW processor

- [metalDeviceRegistryID](metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [outputColorAttachments](outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [processingParameters](processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.

# readyForMoreMediaData (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Indicates the readiness of the processor to accept more sample buffers.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadyForMoreMediaData) BOOL readyForMoreMediaData;
```

<a id="Discussion"></a>

## Discussion

An [MERAWProcessor](../merawprocessor.md) operates asynchronously and often has a fixed capacity for buffers in flight in the processor. This property allows the processor to signal to [Video Toolbox](https://developer.apple.com/documentation/videotoolbox) that its internal buffers are full and cannot accept more samples. The processor must use [MERAWProcessorReadyForMoreMediaDataDidChangeNotification](../merawprocessorreadyformoremediadatadidchangenotification.md) to notify Video Toolbox when this property changes.

## See Also

### Inspecting a RAW processor

- [metalDeviceRegistryID](metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [outputColorAttachments](outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [processingParameters](processingparameters.md): Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.
