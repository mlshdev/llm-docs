> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skshapenode](https://developer.apple.com/documentation/spritekit/skshapenode)

# SKShapeNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mathematical shape that can be stroked or filled.

## Declaration

```swift
class SKShapeNode
```

## Mentioned In

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Creating a Shape Node from an Array of Points](creating-a-shape-node-from-an-array-of-points.md)
- [Getting Started with Shape Nodes](getting-started-with-shape-nodes.md)

<a id="overview"></a>

## Overview

`SKShapeNode` allows you to create onscreen graphical elements from mathematical points, lines, and curves. The advantage this has over rasterized graphics, such as those displayed by textures, is that shapes are rasterized dynamically at runtime to produce crisp detail and smoother edges.

## Topics

### First Steps

- [Getting Started with Shape Nodes](getting-started-with-shape-nodes.md): Create a filled or stroked shape from a path object.

### Creating a Shape from a Path

- [init(path:)](skshapenode/init%28path_%29.md): Creates a shape node from a Core Graphics path.
- [init(path:centered:)](skshapenode/init%28path_centered_%29.md): Creates a shape node from a Core Graphics path, centered around its position.
- [path](skshapenode/path.md): The path that defines the shape.

### Creating a Shape from a Rectangle

- [init(rect:)](skshapenode/init%28rect_%29.md): Creates a shape node with a rectangular path.
- [init(rectOf:)](skshapenode/init%28rectof_%29.md): Creates a shape node with a rectangular path centered on the node’s origin.
- [init(rect:cornerRadius:)](skshapenode/init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
- [init(rectOf:cornerRadius:)](skshapenode/init%28rectof_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners centered on the node’s position.

### Creating a Circle Shape

- [init(circleOfRadius:)](skshapenode/init%28circleofradius_%29.md): Creates a shape node with a circular path centered on the node’s origin.

### Creating an Ellipse Shape

- [init(ellipseOf:)](skshapenode/init%28ellipseof_%29.md): Creates a shape node with an elliptical path centered on the node’s origin.
- [init(ellipseIn:)](skshapenode/init%28ellipsein_%29.md): Creates a shape node with an elliptical path that fills the specified rectangle.

### Creating a Shape from an Array of Points

- [Creating a Shape Node from an Array of Points](creating-a-shape-node-from-an-array-of-points.md): Create jagged or smooth shapes from the same array of points.
- [init(points:count:)](skshapenode/init%28points_count_%29.md): Creates a shape node from a series of points.
- [init(splinePoints:count:)](skshapenode/init%28splinepoints_count_%29.md): Creates a shape node from a series of spline points.

### Filling a Shape

- [fillColor](skshapenode/fillcolor.md): The color used to fill the shape.
- [fillTexture](skshapenode/filltexture.md): The texture used to fill the shape.

### Stroking a Shape

- [lineWidth](skshapenode/linewidth.md): The width used to stroke the path.
- [strokeColor](skshapenode/strokecolor.md): The color used to stroke the shape.
- [strokeTexture](skshapenode/stroketexture.md): The texture used to stroke the shape.
- [glowWidth](skshapenode/glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](skshapenode/linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](skshapenode/linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](skshapenode/miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [isAntialiased](skshapenode/isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

### Configuring Alpha Blending

Change how a shape uses its alpha value, such as additive blending, that results in the shape being brighter than it was before.

- [blendMode](skshapenode/blendmode.md): The blend mode used to blend the shape into the parent’s framebuffer.

### Controlling or Animating Sroke Length

Adjust or animate a shape’s stroke.

- [lineLength](skshapenode/linelength.md): The length of the line defined by the shape node.

### Customizing Stroking or Fill Drawing

Take per-pixel control of drawing the stroke or fill by supplying a custom code file.

- [Controlling Shape Drawing with Shaders](controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](skshapenode/strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](skshapenode/fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](skshapenode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](skshapenode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](skshapenode/value%28forattributenamed_%29.md): The value of a shader attribute.

### Instance Properties

- [customPlaygroundQuickLook](skshapenode/customplaygroundquicklook.md): Deprecated. A custom playground quick look for this instance.

### Initializers

- [init(ellipseInRect:)](skshapenode/init%28ellipseinrect_%29.md)
- [init(ellipseOfSize:)](skshapenode/init%28ellipseofsize_%29.md)
- [init(rectOfSize:)](skshapenode/init%28rectofsize_%29.md)
- [init(rectOfSize:cornerRadius:)](skshapenode/init%28rectofsize_cornerradius_%29.md)

## Relationships

### Inherits From

- [SKNode](sknode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.

# SKShapeNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mathematical shape that can be stroked or filled.

## Declaration

```objectivec
@interface SKShapeNode : SKNode
```

## Mentioned In

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Creating a Shape Node from an Array of Points](creating-a-shape-node-from-an-array-of-points.md)
- [Getting Started with Shape Nodes](getting-started-with-shape-nodes.md)

<a id="overview"></a>

## Overview

`SKShapeNode` allows you to create onscreen graphical elements from mathematical points, lines, and curves. The advantage this has over rasterized graphics, such as those displayed by textures, is that shapes are rasterized dynamically at runtime to produce crisp detail and smoother edges.

## Topics

### First Steps

- [Getting Started with Shape Nodes](getting-started-with-shape-nodes.md): Create a filled or stroked shape from a path object.

### Creating a Shape from a Path

- [shapeNodeWithPath:](skshapenode/init%28path_%29.md): Creates a shape node from a Core Graphics path.
- [shapeNodeWithPath:centered:](skshapenode/init%28path_centered_%29.md): Creates a shape node from a Core Graphics path, centered around its position.
- [path](skshapenode/path.md): The path that defines the shape.

### Creating a Shape from a Rectangle

- [shapeNodeWithRect:](skshapenode/init%28rect_%29.md): Creates a shape node with a rectangular path.
- [shapeNodeWithRectOfSize:](skshapenode/init%28rectof_%29.md): Creates a shape node with a rectangular path centered on the node’s origin.
- [shapeNodeWithRect:cornerRadius:](skshapenode/init%28rect_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners.
- [shapeNodeWithRectOfSize:cornerRadius:](skshapenode/init%28rectof_cornerradius_%29.md): Creates a shape with a rectangular path that has rounded corners centered on the node’s position.

### Creating a Circle Shape

- [shapeNodeWithCircleOfRadius:](skshapenode/init%28circleofradius_%29.md): Creates a shape node with a circular path centered on the node’s origin.

### Creating an Ellipse Shape

- [shapeNodeWithEllipseOfSize:](skshapenode/init%28ellipseof_%29.md): Creates a shape node with an elliptical path centered on the node’s origin.
- [shapeNodeWithEllipseInRect:](skshapenode/init%28ellipsein_%29.md): Creates a shape node with an elliptical path that fills the specified rectangle.

### Creating a Shape from an Array of Points

- [Creating a Shape Node from an Array of Points](creating-a-shape-node-from-an-array-of-points.md): Create jagged or smooth shapes from the same array of points.
- [shapeNodeWithPoints:count:](skshapenode/init%28points_count_%29.md): Creates a shape node from a series of points.
- [shapeNodeWithSplinePoints:count:](skshapenode/init%28splinepoints_count_%29.md): Creates a shape node from a series of spline points.

### Filling a Shape

- [fillColor](skshapenode/fillcolor.md): The color used to fill the shape.
- [fillTexture](skshapenode/filltexture.md): The texture used to fill the shape.

### Stroking a Shape

- [lineWidth](skshapenode/linewidth.md): The width used to stroke the path.
- [strokeColor](skshapenode/strokecolor.md): The color used to stroke the shape.
- [strokeTexture](skshapenode/stroketexture.md): The texture used to stroke the shape.
- [glowWidth](skshapenode/glowwidth.md): A glow that extends outward from the stroked line.
- [lineCap](skshapenode/linecap.md): The style used to render the endpoints of the stroked portion of the shape node.
- [lineJoin](skshapenode/linejoin.md): The junction type used when the stroked portion of the shape node is rendered.
- [miterLimit](skshapenode/miterlimit.md): The miter limit to use when the line is stroked using a miter join style.
- [antialiased](skshapenode/isantialiased.md): A Boolean value that determines whether the stroked path is smoothed when drawn.

### Configuring Alpha Blending

Change how a shape uses its alpha value, such as additive blending, that results in the shape being brighter than it was before.

- [blendMode](skshapenode/blendmode.md): The blend mode used to blend the shape into the parent’s framebuffer.

### Controlling or Animating Sroke Length

Adjust or animate a shape’s stroke.

- [lineLength](skshapenode/linelength.md): The length of the line defined by the shape node.

### Customizing Stroking or Fill Drawing

Take per-pixel control of drawing the stroke or fill by supplying a custom code file.

- [Controlling Shape Drawing with Shaders](controlling-shape-drawing-with-shaders.md): Change a shape node’s appearance by supplying custom shader code.
- [strokeShader](skshapenode/strokeshader.md): A custom shader used to determine the color of the stroked portion of the shape node.
- [fillShader](skshapenode/fillshader.md): A custom shader used to determine the color of the filled portion of the shape node.
- [attributeValues](skshapenode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](skshapenode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](skshapenode/value%28forattributenamed_%29.md): The value of a shader attribute.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKEmitterNode](skemitternode.md): A source of various particle effects.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.
