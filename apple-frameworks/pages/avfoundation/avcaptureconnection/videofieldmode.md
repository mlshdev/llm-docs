> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videofieldmode](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videofieldmode)

# videoFieldMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A setting that tells the connection how to interlace video flowing through it.

## Declaration

```swift
var videoFieldMode: AVVideoFieldMode { get set }
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection and when [isVideoFieldModeSupported](isvideofieldmodesupported.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Interlacing video

- [isVideoFieldModeSupported](isvideofieldmodesupported.md): A Boolean value that indicates whether the connection supports setting a video field mode.
- [AVVideoFieldMode](../avvideofieldmode.md): Constants that indicate which interlacing modes the connection applies to video flowing through it.

# videoFieldMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A setting that tells the connection how to interlace video flowing through it.

## Declaration

```objectivec
@property (nonatomic) AVVideoFieldMode videoFieldMode;
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection and when [supportsVideoFieldMode](isvideofieldmodesupported.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Interlacing video

- [supportsVideoFieldMode](isvideofieldmodesupported.md): A Boolean value that indicates whether the connection supports setting a video field mode.
- [AVVideoFieldMode](../avvideofieldmode.md): Constants that indicate which interlacing modes the connection applies to video flowing through it.
