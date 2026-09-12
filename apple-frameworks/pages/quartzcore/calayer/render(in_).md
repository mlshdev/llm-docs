> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/render(in:)](https://developer.apple.com/documentation/quartzcore/calayer/render(in:))

# render(in:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Renders the layer and its sublayers into the specified context.

## Declaration

```swift
func render(in ctx: CGContext)
```

## Parameters

- `ctx`: The graphics context to use to render the layer.

<a id="Discussion"></a>

## Discussion

This method renders directly from the layer tree, ignoring any animations added to the render tree. Renders in the coordinate space of the layer.

The following code shows how you can use [render(in:)](render%28in_%29.md) to create a [UIImage](../../uikit/uiimage.md) from a [CAShapeLayer](../cashapelayer.md) with a [path](../cashapelayer/path.md) that describes a circle. After creating the layer, the code creates a [CGContext](../../coregraphics/cgcontext.md) into which the circle is rendered. After rendering, [UIGraphicsGetImageFromCurrentImageContext()](../../uikit/uigraphicsgetimagefromcurrentimagecontext%28%29.md) generates the image.

```swift
let diameter: CGFloat = 100
let rect = CGRect(origin: CGPoint.zero,
                  size: CGSize(width: diameter, height: diameter))
    
let shapeLayer = CAShapeLayer()
shapeLayer.fillColor = UIColor.white.cgColor
shapeLayer.lineWidth = 10
shapeLayer.path = CGPath(ellipseIn: rect,
                         transform: nil)
        
let renderer = UIGraphicsImageRenderer(size: rect.size)
     
let image = renderer.image {
    context in

    return shapeLayer.render(in: context.cgContext)
}

```

> **Important**

>  The OS X v10.5 implementation of this method does not support the entire Core Animation composition model. `QCCompositionLayer`, `CAOpenGLLayer`, and `QTMovieLayer` layers are not rendered. Additionally, layers that use 3D transforms are not rendered, nor are layers that specify [backgroundFilters](backgroundfilters.md), [filters](filters.md), [compositingFilter](compositingfilter.md), or a [mask](mask.md) values. Future versions of macOS may add support for rendering these layers and properties.

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped()](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.

# renderInContext: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Renders the layer and its sublayers into the specified context.

## Declaration

```objectivec
- (void) renderInContext:(CGContextRef) ctx;
```

## Parameters

- `ctx`: The graphics context to use to render the layer.

<a id="Discussion"></a>

## Discussion

This method renders directly from the layer tree, ignoring any animations added to the render tree. Renders in the coordinate space of the layer.

The following code shows how you can use [renderInContext:](render%28in_%29.md) to create a [UIImage](../../uikit/uiimage.md) from a [CAShapeLayer](../cashapelayer.md) with a [path](../cashapelayer/path.md) that describes a circle. After creating the layer, the code creates a [CGContextRef](../../coregraphics/cgcontext.md) into which the circle is rendered. After rendering, [UIGraphicsGetImageFromCurrentImageContext](../../uikit/uigraphicsgetimagefromcurrentimagecontext%28%29.md) generates the image.

```swift
let diameter: CGFloat = 100
let rect = CGRect(origin: CGPoint.zero,
                  size: CGSize(width: diameter, height: diameter))
    
let shapeLayer = CAShapeLayer()
shapeLayer.fillColor = UIColor.white.cgColor
shapeLayer.lineWidth = 10
shapeLayer.path = CGPath(ellipseIn: rect,
                         transform: nil)
        
let renderer = UIGraphicsImageRenderer(size: rect.size)
     
let image = renderer.image {
    context in

    return shapeLayer.render(in: context.cgContext)
}

```

> **Important**

>  The OS X v10.5 implementation of this method does not support the entire Core Animation composition model. `QCCompositionLayer`, `CAOpenGLLayer`, and `QTMovieLayer` layers are not rendered. Additionally, layers that use 3D transforms are not rendered, nor are layers that specify [backgroundFilters](backgroundfilters.md), [filters](filters.md), [compositingFilter](compositingfilter.md), or a [mask](mask.md) values. Future versions of macOS may add support for rendering these layers and properties.

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [geometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
