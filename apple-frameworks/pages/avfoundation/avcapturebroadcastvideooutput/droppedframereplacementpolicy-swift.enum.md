> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.enum)

# AVCaptureBroadcastVideoOutput.DroppedFrameReplacementPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Constants indicating the replacement policy when a video frame is dropped.

## Declaration

```swift
enum DroppedFrameReplacementPolicy
```

<a id="overview"></a>

## Overview

These constants specify how the broadcast video output should handle dropped frames by providing replacement content.

## Topics

### Enumeration Cases

- [AVCaptureBroadcastVideoOutput.DroppedFrameReplacementPolicy.blackFrame](droppedframereplacementpolicy-swift.enum/blackframe.md): Insert a black frame as replacement. When a frame is dropped, a black frame is inserted at the expected presentation time. This maintains output timing continuity while providing a clear visual indication of the dropped frame.
- [AVCaptureBroadcastVideoOutput.DroppedFrameReplacementPolicy.repeatPreviousFrame](droppedframereplacementpolicy-swift.enum/repeatpreviousframe.md): Repeat the previous frame as replacement. When a frame is dropped, the most recent successfully output frame is repeated at the expected presentation time. This is the default behavior and provides smoother visual continuity.

### Initializers

- [init(rawValue:)](droppedframereplacementpolicy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Constants indicating the replacement policy when a video frame is dropped.

## Declaration

```objectivec
enum AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicy : NSInteger;
```

<a id="overview"></a>

## Overview

These constants specify how the broadcast video output should handle dropped frames by providing replacement content.

## Topics

### Enumeration Cases

- [AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicyBlackFrame](droppedframereplacementpolicy-swift.enum/blackframe.md): Insert a black frame as replacement. When a frame is dropped, a black frame is inserted at the expected presentation time. This maintains output timing continuity while providing a clear visual indication of the dropped frame.
- [AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicyRepeatPreviousFrame](droppedframereplacementpolicy-swift.enum/repeatpreviousframe.md): Repeat the previous frame as replacement. When a frame is dropped, the most recent successfully output frame is repeated at the expected presentation time. This is the default behavior and provides smoother visual continuity.
