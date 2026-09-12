> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrenderer/showsquadcount](https://developer.apple.com/documentation/spritekit/skrenderer/showsquadcount)

# showsQuadCount (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.

## Declaration

```swift
var showsQuadCount: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

SpriteKit converts the node tree into one or more rendering passes. Each rendering pass is rendered using a series of textured rectangles (quads). The showsQuadCount property allows you to see the total number of quads that were used to render the scene’s contents. Use this as another piece of data when you profile your game’s performance. In most cases, fewer quads is better.

## See Also

### Enabling Visual Statistics for Debugging

- [showsNodeCount](showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsDrawCount](showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

# showsQuadCount (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.

## Declaration

```objectivec
@property (nonatomic) BOOL showsQuadCount;
```

<a id="Discussion"></a>

## Discussion

SpriteKit converts the node tree into one or more rendering passes. Each rendering pass is rendered using a series of textured rectangles (quads). The showsQuadCount property allows you to see the total number of quads that were used to render the scene’s contents. Use this as another piece of data when you profile your game’s performance. In most cases, fewer quads is better.

## See Also

### Enabling Visual Statistics for Debugging

- [showsNodeCount](showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsDrawCount](showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsPhysics](showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.
