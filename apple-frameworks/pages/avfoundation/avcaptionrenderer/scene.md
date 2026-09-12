> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer/scene](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/scene)

# AVCaptionRenderer.Scene (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that holds a time range and an associated state which indicates when the renderer draws output.

## Declaration

```swift
class Scene
```

<a id="overview"></a>

## Overview

To render a scene, the object considers state like the existence of captions and regions, their temporal overlaps, and whether captions use animation effects. Your app can request time ranges where visual differences exist and use these time ranges to optimize drawing performance, like drawing once per scene. Alternatively, it can ignore scenes, and instead call [render(in:for:)](render%28in_for_%29.md) repeatedly, but this may have additional performance impact.

## Topics

### Inspecting the scene

- [timeRange](scene/timerange.md): The time range during which the system doesn’t modify the scene.
- [hasActiveCaptions](scene/hasactivecaptions.md): A Boolean value that indicates whether the scene contains one or more active captions.
- [needsPeriodicRefresh](scene/needsperiodicrefresh.md): A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining scene changes

- [captionSceneChanges(in:)](captionscenechanges%28in_%29.md): Determine render time ranges within an enclosing time range to account for visual changes among captions.

# AVCaptionRendererScene (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that holds a time range and an associated state which indicates when the renderer draws output.

## Declaration

```objectivec
@interface AVCaptionRendererScene : NSObject
```

<a id="overview"></a>

## Overview

To render a scene, the object considers state like the existence of captions and regions, their temporal overlaps, and whether captions use animation effects. Your app can request time ranges where visual differences exist and use these time ranges to optimize drawing performance, like drawing once per scene. Alternatively, it can ignore scenes, and instead call [renderInContext:forTime:](render%28in_for_%29.md) repeatedly, but this may have additional performance impact.

## Topics

### Inspecting the scene

- [timeRange](scene/timerange.md): The time range during which the system doesn’t modify the scene.
- [hasActiveCaptions](scene/hasactivecaptions.md): A Boolean value that indicates whether the scene contains one or more active captions.
- [needsPeriodicRefresh](scene/needsperiodicrefresh.md): A Boolean value that indicates whether the scene requires redrawing while your app progresses through the content.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Determining scene changes

- [captionSceneChangesInRange:](captionscenechanges%28in_%29.md): Determine render time ranges within an enclosing time range to account for visual changes among captions.
