> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/showsnodecount](https://developer.apple.com/documentation/spritekit/skview/showsnodecount)

# showsNodeCount (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.

## Declaration

```swift
var showsNodeCount: Bool { get set }
```

## Mentioned In

- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

<a id="Discussion"></a>

## Discussion

When you enable this option, it shows the number of nodes currently in the scene’s node tree.

> **Note**

>  The[shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md) property affects how many nodes in the node tree are included in SpriteKit’s render pass but it doesn’t affect the [showsNodeCount](showsnodecount.md) statistic.

You may achieve additional performance gain by actually removing nodes from the node tree manually which are off screen. For example, in the case of [shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md), there would be less nodes for SpriteKit to test every frame whether they’re on screen.

## See Also

### Enabling Visual Statistics for Debugging

- [showsFPS](showsfps.md): A Boolean value that indicates whether the view displays a frame rate indicator.
- [showsDrawCount](showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsQuadCount](showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

# showsNodeCount (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.

## Declaration

```objectivec
@property (nonatomic) BOOL showsNodeCount;
```

## Mentioned In

- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

<a id="Discussion"></a>

## Discussion

When you enable this option, it shows the number of nodes currently in the scene’s node tree.

> **Note**

>  The[shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md) property affects how many nodes in the node tree are included in SpriteKit’s render pass but it doesn’t affect the [showsNodeCount](showsnodecount.md) statistic.

You may achieve additional performance gain by actually removing nodes from the node tree manually which are off screen. For example, in the case of [shouldCullNonVisibleNodes](shouldcullnonvisiblenodes.md), there would be less nodes for SpriteKit to test every frame whether they’re on screen.

## See Also

### Enabling Visual Statistics for Debugging

- [showsFPS](showsfps.md): A Boolean value that indicates whether the view displays a frame rate indicator.
- [showsDrawCount](showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsQuadCount](showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.
