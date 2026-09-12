> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideofieldmodesupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideofieldmodesupported)

# isVideoFieldModeSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the connection supports setting a video field mode.

## Declaration

```swift
var isVideoFieldModeSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection’s [videoFieldMode](videofieldmode.md) property.

## See Also

### Interlacing video

- [videoFieldMode](videofieldmode.md): A setting that tells the connection how to interlace video flowing through it.
- [AVVideoFieldMode](../avvideofieldmode.md): Constants that indicate which interlacing modes the connection applies to video flowing through it.

# supportsVideoFieldMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the connection supports setting a video field mode.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoFieldModeSupported) BOOL supportsVideoFieldMode;
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection’s [videoFieldMode](videofieldmode.md) property.

## See Also

### Interlacing video

- [videoFieldMode](videofieldmode.md): A setting that tells the connection how to interlace video flowing through it.
- [AVVideoFieldMode](../avvideofieldmode.md): Constants that indicate which interlacing modes the connection applies to video flowing through it.
