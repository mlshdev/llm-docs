> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/automaticallyadjustsvideohdrenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsvideohdrenabled)

# automaticallyAdjustsVideoHDREnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device automatically manages the state of high dynamic range (HDR) video streaming.

## Declaration

```swift
var automaticallyAdjustsVideoHDREnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this value is `true`, and a capture device automatically enables [isVideoHDREnabled](isvideohdrenabled.md) if it’s a good fit for the active format.

This property is key-value observable.

## See Also

### Configuring HDR settings

- [isVideoHDREnabled](isvideohdrenabled.md): A Boolean value that indicates whether the device streams high dynamic range video buffers, also known as extended dynamic range (EDR).

# automaticallyAdjustsVideoHDREnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device automatically manages the state of high dynamic range (HDR) video streaming.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyAdjustsVideoHDREnabled;
```

<a id="Discussion"></a>

## Discussion

By default, this value is `true`, and a capture device automatically enables [videoHDREnabled](isvideohdrenabled.md) if it’s a good fit for the active format.

This property is key-value observable.

## See Also

### Configuring HDR settings

- [videoHDREnabled](isvideohdrenabled.md): A Boolean value that indicates whether the device streams high dynamic range video buffers, also known as extended dynamic range (EDR).
