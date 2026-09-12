> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/view](https://developer.apple.com/documentation/spritekit/skscene/view)

# view (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The view that is currently presenting the scene.

## Declaration

```swift
weak var view: SKView? { get }
```

<a id="Discussion"></a>

## Discussion

To present a scene, you call the [presentScene(\_:)](../skview/presentscene%28__%29.md) method or [presentScene(\_:transition:)](../skview/presentscene%28__transition_%29.md) method on the [SKView](../skview.md) class. If the scene is not currently presented, this property holds `nil`.

## See Also

### Setting the Background Appearance

- [Creating a Scene with a Transparent Background](../creating-a-scene-with-a-transparent-background.md): Set a transparent background color to show the content of the views below.
- [backgroundColor](backgroundcolor.md): The background color of the scene.

# view (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The view that is currently presenting the scene.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) SKView * view;
```

<a id="Discussion"></a>

## Discussion

To present a scene, you call the [presentScene:](../skview/presentscene%28__%29.md) method or [presentScene:transition:](../skview/presentscene%28__transition_%29.md) method on the [SKView](../skview.md) class. If the scene is not currently presented, this property holds `nil`.

## See Also

### Setting the Background Appearance

- [Creating a Scene with a Transparent Background](../creating-a-scene-with-a-transparent-background.md): Set a transparent background color to show the content of the views below.
- [backgroundColor](backgroundcolor.md): The background color of the scene.
