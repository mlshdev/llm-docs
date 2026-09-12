> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/zposition](https://developer.apple.com/documentation/quartzcore/calayer/zposition)

# zPosition (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s position on the z axis. Animatable.

## Declaration

```swift
var zPosition: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0`. Changing the value of this property changes the front-to-back ordering of layers onscreen. Higher values place this layer visually closer to the viewer than layers with lower values. This can affect the visibility of layers whose frame rectangles overlap.

The value of this property is measured in points. The range of this property is single-precision, floating-point `-`[greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/float/greatestfinitemagnitude) to [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/float/greatestfinitemagnitude).

## See Also

### Modifying the layer geometry

- [frame](frame.md): The layer’s frame rectangle.
- [bounds](bounds.md): The layer’s bounds rectangle. Animatable.
- [position](position.md): The layer’s position in its superlayer’s coordinate space. Animatable.
- [anchorPointZ](anchorpointz.md): The anchor point for the layer’s position along the z axis. Animatable.
- [anchorPoint](anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](contentsscale.md): The scale factor applied to the layer.

# zPosition (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s position on the z axis. Animatable.

## Declaration

```objectivec
@property CGFloat zPosition;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0`. Changing the value of this property changes the front-to-back ordering of layers onscreen. Higher values place this layer visually closer to the viewer than layers with lower values. This can affect the visibility of layers whose frame rectangles overlap.

The value of this property is measured in points. The range of this property is single-precision, floating-point `-`[greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/float/greatestfinitemagnitude) to [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/float/greatestfinitemagnitude).

## See Also

### Modifying the layer geometry

- [frame](frame.md): The layer’s frame rectangle.
- [bounds](bounds.md): The layer’s bounds rectangle. Animatable.
- [position](position.md): The layer’s position in its superlayer’s coordinate space. Animatable.
- [anchorPointZ](anchorpointz.md): The anchor point for the layer’s position along the z axis. Animatable.
- [anchorPoint](anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](contentsscale.md): The scale factor applied to the layer.
