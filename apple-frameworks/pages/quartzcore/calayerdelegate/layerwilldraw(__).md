> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayerdelegate/layerwilldraw(_:)](https://developer.apple.com/documentation/quartzcore/calayerdelegate/layerwilldraw(_:))

# layerWillDraw(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate of an imminent draw.

## Declaration

```swift
optional func layerWillDraw(_ layer: CALayer)
```

## Parameters

- `layer`: The layer whose contents will be drawn.

<a id="Discussion"></a>

## Discussion

The [layerWillDraw(\_:)](layerwilldraw%28__%29.md) method is called before [draw(\_:in:)](draw%28__in_%29.md). You can use this method to configure any layer state affecting contents prior to [draw(\_:in:)](draw%28__in_%29.md) such as [contentsFormat](../calayer/contentsformat.md) and [isOpaque](../calayer/isopaque.md).

> **Important**

>  This method is not called if the delegate implements [display(\_:)](display%28__%29.md).

## See Also

### Providing the Layer’s Content

- [display(\_:)](display%28__%29.md): Tells the delegate to implement the display process.
- [draw(\_:in:)](draw%28__in_%29.md): Tells the delegate to implement the display process using the layer’s context.

# layerWillDraw: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Notifies the delegate of an imminent draw.

## Declaration

```objectivec
- (void) layerWillDraw:(CALayer *) layer;
```

## Parameters

- `layer`: The layer whose contents will be drawn.

<a id="Discussion"></a>

## Discussion

The [layerWillDraw:](layerwilldraw%28__%29.md) method is called before [drawLayer:inContext:](draw%28__in_%29.md). You can use this method to configure any layer state affecting contents prior to [drawLayer:inContext:](draw%28__in_%29.md) such as [contentsFormat](../calayer/contentsformat.md) and [opaque](../calayer/isopaque.md).

> **Important**

>  This method is not called if the delegate implements [displayLayer:](display%28__%29.md).

## See Also

### Providing the Layer’s Content

- [displayLayer:](display%28__%29.md): Tells the delegate to implement the display process.
- [drawLayer:inContext:](draw%28__in_%29.md): Tells the delegate to implement the display process using the layer’s context.
