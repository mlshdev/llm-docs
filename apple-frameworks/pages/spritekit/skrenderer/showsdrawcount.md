> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrenderer/showsdrawcount](https://developer.apple.com/documentation/spritekit/skrenderer/showsdrawcount)

# showsDrawCount (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.

## Declaration

```swift
var showsDrawCount: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Some operations in SpriteKit can require multiple rendering passes to draw a scene’s content. For example, an [SKEffectNode](../skeffectnode.md) object must render its children into a separate buffer, apply the effect, and then perform another pass to blend those results into its parent node. These additional rendering passes use more rendering resources, reducing your game’s frame rate or increasing its total power consumption. Use the draw count as another piece of data when you profile your game’s performance.

## See Also

### Enabling Visual Statistics for Debugging

- [showsNodeCount](showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsQuadCount](showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

# showsDrawCount (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.

## Declaration

```objectivec
@property (nonatomic) BOOL showsDrawCount;
```

<a id="Discussion"></a>

## Discussion

Some operations in SpriteKit can require multiple rendering passes to draw a scene’s content. For example, an [SKEffectNode](../skeffectnode.md) object must render its children into a separate buffer, apply the effect, and then perform another pass to blend those results into its parent node. These additional rendering passes use more rendering resources, reducing your game’s frame rate or increasing its total power consumption. Use the draw count as another piece of data when you profile your game’s performance.

## See Also

### Enabling Visual Statistics for Debugging

- [showsNodeCount](showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsQuadCount](showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.
