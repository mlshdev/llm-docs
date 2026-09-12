> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/supporteddepthdataformats](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supporteddepthdataformats)

# supportedDepthDataFormats (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of data formats compatible with this video format.

## Declaration

```swift
var supportedDepthDataFormats: [AVCaptureDevice.Format] { get }
```

<a id="Discussion"></a>

## Discussion

Depth data capture requires a compatible pairing of video format and depth data format. After you set a capture device’s [activeFormat](../activeformat.md) property to this format, you can set the device’s [activeDepthDataFormat](../activedepthdataformat.md) property to one of the formats in this array.

Supported depth data formats always match the aspect ratio of their corresponding video format.

## See Also

### Determining depth capture support

- [supportedVideoZoomFactorsForDepthDataDelivery](supportedvideozoomfactorsfordepthdatadelivery.md): Deprecated. The zoom factors that a format supports for depth data delivery.

# supportedDepthDataFormats (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of data formats compatible with this video format.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureDeviceFormat *> * supportedDepthDataFormats;
```

<a id="Discussion"></a>

## Discussion

Depth data capture requires a compatible pairing of video format and depth data format. After you set a capture device’s [activeFormat](../activeformat.md) property to this format, you can set the device’s [activeDepthDataFormat](../activedepthdataformat.md) property to one of the formats in this array.

Supported depth data formats always match the aspect ratio of their corresponding video format.
