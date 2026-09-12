> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/windowingbehaviors](https://developer.apple.com/documentation/uikit/uiwindowscene/windowingbehaviors)

# windowingBehaviors (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object that specifies the behaviors of the window.

## Declaration

```swift
var windowingBehaviors: UISceneWindowingBehaviors? { get }
```

<a id="Discussion"></a>

## Discussion

For Mac apps built with Mac Catalyst, use this property to specify whether the scene’s window displays minimize and close buttons. This property is `nil` on unsupported platforms.

## See Also

### Determining window behaviors

- [isFullScreen](isfullscreen.md): A Boolean value that indicates whether the window scene is full screen or windowed.
- [UISceneWindowingBehaviors](../uiscenewindowingbehaviors.md): An object with properties that determine the behavior of a window.

# windowingBehaviors (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object that specifies the behaviors of the window.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UISceneWindowingBehaviors * windowingBehaviors;
```

<a id="Discussion"></a>

## Discussion

For Mac apps built with Mac Catalyst, use this property to specify whether the scene’s window displays minimize and close buttons. This property is `nil` on unsupported platforms.

## See Also

### Determining window behaviors

- [fullScreen](isfullscreen.md): A Boolean value that indicates whether the window scene is full screen or windowed.
- [UISceneWindowingBehaviors](../uiscenewindowingbehaviors.md): An object with properties that determine the behavior of a window.
