> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayerdelegate/layoutsublayers(of:)](https://developer.apple.com/documentation/quartzcore/calayerdelegate/layoutsublayers(of:))

# layoutSublayers(of:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate a layer’s bounds have changed.

## Declaration

```swift
optional func layoutSublayers(of layer: CALayer)
```

## Parameters

- `layer`: The layer that requires layout of its sublayers.

<a id="Discussion"></a>

## Discussion

The [layoutSublayers(of:)](layoutsublayers%28of_%29.md) method is called when a layer’s bounds have changed and its sublayers may need rearranging, for example by changing its frame’s size. You can implement this method if you need precise control over the layout of your layer’s sublayers.

The following code shows how you can create a class named `LayerDelegate` that implements `CALayerDelegate` and sets it as a layer’s (named `sublayer`) delegate. When the layer’s size changes, the delegate’s [layoutSublayers(of:)](layoutsublayers%28of_%29.md) iterates over all of the sublayers of `sublayer` and resizes them to fit within it.

```swift
let delegate = LayerDelegate()
    
lazy var sublayer: CALayer = {
    let layer = CALayer()
    
    layer.addSublayer(CALayer())
    layer.sublayers?.first?.backgroundColor = UIColor.blue.cgColor
    
    layer.delegate = self.delegate
    
    return layer
}()
    
// sublayer.frame = CGRect(x: 0, y: 0, width: 510, height: 510)
    
class LayerDelegate: NSObject, CALayerDelegate {
    func layoutSublayers(of layer: CALayer) {
        layer.sublayers?.forEach {
            $0.frame = layer.bounds
        }
    }
}
```

# layoutSublayersOfLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate a layer’s bounds have changed.

## Declaration

```objectivec
- (void) layoutSublayersOfLayer:(CALayer *) layer;
```

## Parameters

- `layer`: The layer that requires layout of its sublayers.

<a id="Discussion"></a>

## Discussion

The [layoutSublayersOfLayer:](layoutsublayers%28of_%29.md) method is called when a layer’s bounds have changed and its sublayers may need rearranging, for example by changing its frame’s size. You can implement this method if you need precise control over the layout of your layer’s sublayers.

The following code shows how you can create a class named `LayerDelegate` that implements `CALayerDelegate` and sets it as a layer’s (named `sublayer`) delegate. When the layer’s size changes, the delegate’s [layoutSublayersOfLayer:](layoutsublayers%28of_%29.md) iterates over all of the sublayers of `sublayer` and resizes them to fit within it.

```swift
let delegate = LayerDelegate()
    
lazy var sublayer: CALayer = {
    let layer = CALayer()
    
    layer.addSublayer(CALayer())
    layer.sublayers?.first?.backgroundColor = UIColor.blue.cgColor
    
    layer.delegate = self.delegate
    
    return layer
}()
    
// sublayer.frame = CGRect(x: 0, y: 0, width: 510, height: 510)
    
class LayerDelegate: NSObject, CALayerDelegate {
    func layoutSublayers(of layer: CALayer) {
        layer.sublayers?.forEach {
            $0.frame = layer.bounds
        }
    }
}
```
