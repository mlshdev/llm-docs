> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/showsdrawcount](https://developer.apple.com/documentation/spritekit/skview/showsdrawcount)

# showsDrawCount (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.

## Declaration

```swift
var showsDrawCount: Bool { get set }
```

## Mentioned In

- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

<a id="Discussion"></a>

## Discussion

Some operations in SpriteKit can require multiple rendering passes to draw a scene’s content. For example, an [SKEffectNode](../skeffectnode.md) object must render its children into a separate buffer, apply the effect, and then perform another pass to blend those results into its parent node. These additional rendering passes use more rendering resources, reducing your game’s frame rate or increasing its total power consumption.  Use the draw count as another piece of data when you profile your game’s performance.

## See Also

### Enabling Visual Statistics for Debugging

- [showsFPS](showsfps.md): A Boolean value that indicates whether the view displays a frame rate indicator.
- [showsNodeCount](showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsQuadCount](showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

# showsDrawCount (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.

## Declaration

```objectivec
@property (nonatomic) BOOL showsDrawCount;
```

## Mentioned In

- [Maximizing Node Drawing Performance](../maximizing-node-drawing-performance.md)

<a id="Discussion"></a>

## Discussion

Some operations in SpriteKit can require multiple rendering passes to draw a scene’s content. For example, an [SKEffectNode](../skeffectnode.md) object must render its children into a separate buffer, apply the effect, and then perform another pass to blend those results into its parent node. These additional rendering passes use more rendering resources, reducing your game’s frame rate or increasing its total power consumption.  Use the draw count as another piece of data when you profile your game’s performance.

## See Also

### Enabling Visual Statistics for Debugging

- [showsFPS](showsfps.md): A Boolean value that indicates whether the view displays a frame rate indicator.
- [showsNodeCount](showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsQuadCount](showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.
