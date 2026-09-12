> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayerdelegate/display(_:)](https://developer.apple.com/documentation/quartzcore/calayerdelegate/display(_:))

# display(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to implement the display process.

## Declaration

```swift
optional func display(_ layer: CALayer)
```

## Parameters

- `layer`: The layer whose contents need updating.

<a id="Discussion"></a>

## Discussion

The [display(\_:)](display%28__%29.md) delegate method is called when the layer is marked for its content to be reloaded, typically initiated by the [setNeedsDisplay()](../calayer/setneedsdisplay%28%29.md) method. The typical technique for updating is to set the layer’s `contents` property.

The following code shows how you can create a class named `LayerDelegate` that implements [CALayerDelegate](../calayerdelegate.md) and sets it as a layer’s (named `sublayer`) delegate. When [setNeedsDisplay()](../calayer/setneedsdisplay%28%29.md) is called on `sublayer`, the delegate’s [display(\_:)](display%28__%29.md) replaces its contents with a specified image.

```swift
let delegate = LayerDelegate()
     
lazy var sublayer: CALayer = {
    let layer = CALayer()
    
    layer.delegate = self.delegate
    
    return layer
}()
     
// When `sublayer.setNeedsDisplay()` is called, `sublayer.contents` are updated.
     
class LayerDelegate: NSObject, CALayerDelegate {
    func display(_ layer: CALayer) {
        layer.contents = UIImage(named: "rabbit.png")?.cgImage
    }
}
```

## See Also

### Providing the Layer’s Content

- [draw(\_:in:)](draw%28__in_%29.md): Tells the delegate to implement the display process using the layer’s context.
- [layerWillDraw(\_:)](layerwilldraw%28__%29.md): Notifies the delegate of an imminent draw.

# displayLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate to implement the display process.

## Declaration

```objectivec
- (void) displayLayer:(CALayer *) layer;
```

## Parameters

- `layer`: The layer whose contents need updating.

<a id="Discussion"></a>

## Discussion

The [displayLayer:](display%28__%29.md) delegate method is called when the layer is marked for its content to be reloaded, typically initiated by the [setNeedsDisplay](../calayer/setneedsdisplay%28%29.md) method. The typical technique for updating is to set the layer’s `contents` property.

The following code shows how you can create a class named `LayerDelegate` that implements [CALayerDelegate](../calayerdelegate.md) and sets it as a layer’s (named `sublayer`) delegate. When [setNeedsDisplay](../calayer/setneedsdisplay%28%29.md) is called on `sublayer`, the delegate’s [displayLayer:](display%28__%29.md) replaces its contents with a specified image.

```swift
let delegate = LayerDelegate()
     
lazy var sublayer: CALayer = {
    let layer = CALayer()
    
    layer.delegate = self.delegate
    
    return layer
}()
     
// When `sublayer.setNeedsDisplay()` is called, `sublayer.contents` are updated.
     
class LayerDelegate: NSObject, CALayerDelegate {
    func display(_ layer: CALayer) {
        layer.contents = UIImage(named: "rabbit.png")?.cgImage
    }
}
```

## See Also

### Providing the Layer’s Content

- [drawLayer:inContext:](draw%28__in_%29.md): Tells the delegate to implement the display process using the layer’s context.
- [layerWillDraw:](layerwilldraw%28__%29.md): Notifies the delegate of an imminent draw.
