> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideofieldmode](https://developer.apple.com/documentation/avfoundation/avvideofieldmode)

# AVVideoFieldMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that indicate which interlacing modes the connection applies to video flowing through it.

## Declaration

```swift
enum AVVideoFieldMode
```

<a id="overview"></a>

## Overview

The values apply to the [videoFieldMode](avcaptureconnection/videofieldmode.md) property.

## Topics

### Constants

- [AVVideoFieldMode.both](avvideofieldmode/both.md): A value that indicates that a video connection passes both the top and bottom video fields.
- [AVVideoFieldMode.topOnly](avvideofieldmode/toponly.md): A value that indicates that a video connection only passes the top video field.
- [AVVideoFieldMode.bottomOnly](avvideofieldmode/bottomonly.md): A value that indicates that a video connection only passes the bottom video field.
- [AVVideoFieldMode.deinterlace](avvideofieldmode/deinterlace.md): A value that indicates that a video connection deinterlaces the top and bottom video fields.

### Initializers

- [init(rawValue:)](avvideofieldmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interlacing video

- [isVideoFieldModeSupported](avcaptureconnection/isvideofieldmodesupported.md): A Boolean value that indicates whether the connection supports setting a video field mode.
- [videoFieldMode](avcaptureconnection/videofieldmode.md): A setting that tells the connection how to interlace video flowing through it.

# AVVideoFieldMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that indicate which interlacing modes the connection applies to video flowing through it.

## Declaration

```objectivec
enum AVVideoFieldMode : NSInteger;
```

<a id="overview"></a>

## Overview

The values apply to the [videoFieldMode](avcaptureconnection/videofieldmode.md) property.

## Topics

### Constants

- [AVVideoFieldModeBoth](avvideofieldmode/both.md): A value that indicates that a video connection passes both the top and bottom video fields.
- [AVVideoFieldModeTopOnly](avvideofieldmode/toponly.md): A value that indicates that a video connection only passes the top video field.
- [AVVideoFieldModeBottomOnly](avvideofieldmode/bottomonly.md): A value that indicates that a video connection only passes the bottom video field.
- [AVVideoFieldModeDeinterlace](avvideofieldmode/deinterlace.md): A value that indicates that a video connection deinterlaces the top and bottom video fields.

## See Also

### Interlacing video

- [supportsVideoFieldMode](avcaptureconnection/isvideofieldmodesupported.md): A Boolean value that indicates whether the connection supports setting a video field mode.
- [videoFieldMode](avcaptureconnection/videofieldmode.md): A setting that tells the connection how to interlace video flowing through it.
