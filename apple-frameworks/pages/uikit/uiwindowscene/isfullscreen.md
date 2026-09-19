> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscene/isfullscreen

# isFullScreen (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 16.0+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the window scene is full screen or windowed.

## Declaration

```swift
var isFullScreen: Bool { get }
```

<a id="discussion"></a>

## Discussion

The system only supports this property in Mac Catalyst apps.

## See Also

### Determining window behaviors

- [windowingBehaviors](windowingbehaviors.md): An object that specifies the behaviors of the window.
- [UISceneWindowingBehaviors](../uiscenewindowingbehaviors.md): An object with properties that determine the behavior of a window.

# fullScreen (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 16.0+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the window scene is full screen or windowed.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFullScreen) BOOL fullScreen;
```

<a id="discussion"></a>

## Discussion

The system only supports this property in Mac Catalyst apps.

## See Also

### Determining window behaviors

- [windowingBehaviors](windowingbehaviors.md): An object that specifies the behaviors of the window.
- [UISceneWindowingBehaviors](../uiscenewindowingbehaviors.md): An object with properties that determine the behavior of a window.
