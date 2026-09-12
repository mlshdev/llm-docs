> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayerdelegate/draw(_:in:)](https://developer.apple.com/documentation/quartzcore/calayerdelegate/draw(_:in:))

# draw(\_:in:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to implement the display process using the layer’s context.

## Declaration

```swift
optional func draw(_ layer: CALayer, in ctx: CGContext)
```

## Parameters

- `layer`: The layer whose contents need to be drawn.
- `ctx`: The graphics context to use for drawing. The graphics context incorporates the appropriate scale factor for drawing to the target screen.

<a id="Discussion"></a>

## Discussion

The [draw(\_:in:)](draw%28__in_%29.md) method is called when the layer is marked for its content to be reloaded, typically with the [setNeedsDisplay()](../calayer/setneedsdisplay%28%29.md) method. It is not called if the delegate implements the [display(\_:)](display%28__%29.md) method. You can use the context to draw vectors, such as curves and lines, or images with the [draw(\_:in:byTiling:)](../../coregraphics/cgcontext/draw%28__in_bytiling_%29.md) method.

The following code shows how you can create a class named `LayerDelegate` that implements [CALayerDelegate](../calayerdelegate.md) and sets it as a layer’s (named `sublayer`) delegate. When [setNeedsDisplay()](../calayer/setneedsdisplay%28%29.md) is called on `sublayer`, the delegate’s [draw(\_:in:)](draw%28__in_%29.md) method draws an ellipse fitting the bounding box of the layer using the [boundingBoxOfClipPath](../../coregraphics/cgcontext/boundingboxofclippath.md) function.

```swift
let delegate = LayerDelegate()
    
lazy var sublayer: CALayer = {
    let layer = CALayer()
    
    layer.delegate = self.delegate
    
    return layer
}()
    
// sublayer.setNeedsDisplay()
    
class LayerDelegate: NSObject, CALayerDelegate {
    func draw(_ layer: CALayer, in ctx: CGContext) {
        ctx.addEllipse(in: ctx.boundingBoxOfClipPath)
        ctx.strokePath()
    }
}
```

> **Important**

>  This method is not called if the delegate implements [display(\_:)](display%28__%29.md).

## See Also

### Providing the Layer’s Content

- [display(\_:)](display%28__%29.md): Tells the delegate to implement the display process.
- [layerWillDraw(\_:)](layerwilldraw%28__%29.md): Notifies the delegate of an imminent draw.

# drawLayer:inContext: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to implement the display process using the layer’s context.

## Declaration

```objectivec
- (void) drawLayer:(CALayer *) layer inContext:(CGContextRef) ctx;
```

## Parameters

- `layer`: The layer whose contents need to be drawn.
- `ctx`: The graphics context to use for drawing. The graphics context incorporates the appropriate scale factor for drawing to the target screen.

<a id="Discussion"></a>

## Discussion

The [drawLayer:inContext:](draw%28__in_%29.md) method is called when the layer is marked for its content to be reloaded, typically with the [setNeedsDisplay](../calayer/setneedsdisplay%28%29.md) method. It is not called if the delegate implements the [displayLayer:](display%28__%29.md) method. You can use the context to draw vectors, such as curves and lines, or images with the [draw(\_:in:byTiling:)](../../coregraphics/cgcontext/draw%28__in_bytiling_%29.md) method.

The following code shows how you can create a class named `LayerDelegate` that implements [CALayerDelegate](../calayerdelegate.md) and sets it as a layer’s (named `sublayer`) delegate. When [setNeedsDisplay](../calayer/setneedsdisplay%28%29.md) is called on `sublayer`, the delegate’s [drawLayer:inContext:](draw%28__in_%29.md) method draws an ellipse fitting the bounding box of the layer using the [CGContextGetClipBoundingBox](../../coregraphics/cgcontext/boundingboxofclippath.md) function.

```swift
let delegate = LayerDelegate()
    
lazy var sublayer: CALayer = {
    let layer = CALayer()
    
    layer.delegate = self.delegate
    
    return layer
}()
    
// sublayer.setNeedsDisplay()
    
class LayerDelegate: NSObject, CALayerDelegate {
    func draw(_ layer: CALayer, in ctx: CGContext) {
        ctx.addEllipse(in: ctx.boundingBoxOfClipPath)
        ctx.strokePath()
    }
}
```

> **Important**

>  This method is not called if the delegate implements [displayLayer:](display%28__%29.md).

## See Also

### Providing the Layer’s Content

- [displayLayer:](display%28__%29.md): Tells the delegate to implement the display process.
- [layerWillDraw:](layerwilldraw%28__%29.md): Notifies the delegate of an imminent draw.
