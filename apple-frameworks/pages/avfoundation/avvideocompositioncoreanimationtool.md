> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioncoreanimationtool](https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool)

# AVVideoCompositionCoreAnimationTool (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object used to incorporate Core Animation into a video composition.

## Declaration

```swift
class AVVideoCompositionCoreAnimationTool
```

<a id="overview"></a>

## Overview

Any animations will be interpreted on the video’s timeline, not real-time, so you should:

1. Set animations’ [beginTime](../quartzcore/camediatiming/begintime.md) property to [AVCoreAnimationBeginTimeAtZero](avcoreanimationbegintimeatzero.md) rather than `0` (which CoreAnimation replaces with [CACurrentMediaTime()](../quartzcore/cacurrentmediatime%28%29.md));
2. Set [isRemovedOnCompletion](../quartzcore/caanimation/isremovedoncompletion.md) to [false](https://developer.apple.com/documentation/swift/false) on animations so they are not automatically removed;
3. Avoid using layers that are associated with [UIView](../uikit/uiview.md) objects.

## Topics

### Creating a composition tool

- [init(additionalLayer:asTrackID:)](avvideocompositioncoreanimationtool/init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [init(postProcessingAsVideoLayer:in:)](avvideocompositioncoreanimationtool/init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [init(postProcessingAsVideoLayers:in:)](avvideocompositioncoreanimationtool/init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.
- [init(configuration:)](avvideocompositioncoreanimationtool/init%28configuration_%29.md): Compose the composited video frames with the Core Animation layer.
- [AVVideoCompositionCoreAnimationTool.Configuration](avvideocompositioncoreanimationtool/configuration.md): Configurable properties for initializing a new AVVideoCompositionCoreAnimationTool instance.

### Initializers

- [init(postProcessingAsVideoLayer:inLayer:)](avvideocompositioncoreanimationtool/init%28postprocessingasvideolayer_inlayer_%29.md): Deprecated.
- [init(postProcessingAsVideoLayers:inLayer:)](avvideocompositioncoreanimationtool/init%28postprocessingasvideolayers_inlayer_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVVideoCompositionCoreAnimationTool (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object used to incorporate Core Animation into a video composition.

## Declaration

```objectivec
@interface AVVideoCompositionCoreAnimationTool : NSObject
```

<a id="overview"></a>

## Overview

Any animations will be interpreted on the video’s timeline, not real-time, so you should:

1. Set animations’ [beginTime](../quartzcore/camediatiming/begintime.md) property to [AVCoreAnimationBeginTimeAtZero](avcoreanimationbegintimeatzero.md) rather than `0` (which CoreAnimation replaces with [CACurrentMediaTime](../quartzcore/cacurrentmediatime%28%29.md));
2. Set [removedOnCompletion](../quartzcore/caanimation/isremovedoncompletion.md) to [false](https://developer.apple.com/documentation/swift/false) on animations so they are not automatically removed;
3. Avoid using layers that are associated with [UIView](../uikit/uiview.md) objects.

## Topics

### Creating a composition tool

- [videoCompositionCoreAnimationToolWithAdditionalLayer:asTrackID:](avvideocompositioncoreanimationtool/init%28additionallayer_astrackid_%29.md): Adds a Core Animation layer to the video composition.
- [videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer:inLayer:](avvideocompositioncoreanimationtool/init%28postprocessingasvideolayer_in_%29.md): Deprecated. Composes the composited video frame with a Core Animation layer.
- [videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayers:inLayer:](avvideocompositioncoreanimationtool/init%28postprocessingasvideolayers_in_%29.md): Composes the composited video frames with the Core Animation layer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
