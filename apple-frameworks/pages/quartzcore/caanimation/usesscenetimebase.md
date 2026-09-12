> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation/usesscenetimebase](https://developer.apple.com/documentation/quartzcore/caanimation/usesscenetimebase)

# usesSceneTimeBase (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

For animations attached to SceneKit objects, a Boolean value that determines whether the animation is evaluated using the scene time or the system time.

## Declaration

```swift
var usesSceneTimeBase: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), animation timing is governed by the currentTime property of the view, layer, or custom renderer responsible for drawing the scene. The default value is [false](https://developer.apple.com/documentation/swift/false).

To attach animations to SceneKit objects, see [SCNAnimatable](../../scenekit/scnanimatable.md).

# usesSceneTimeBase (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

For animations attached to SceneKit objects, a Boolean value that determines whether the animation is evaluated using the scene time or the system time.

## Declaration

```objectivec
@property BOOL usesSceneTimeBase;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), animation timing is governed by the currentTime property of the view, layer, or custom renderer responsible for drawing the scene. The default value is [false](https://developer.apple.com/documentation/swift/false).

To attach animations to SceneKit objects, see [SCNAnimatable](../../scenekit/scnanimatable.md).
