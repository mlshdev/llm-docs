> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/position](https://developer.apple.com/documentation/quartzcore/calayer/position)

# position (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s position in its superlayer’s coordinate space. Animatable.

## Declaration

```swift
var position: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is specified in points and is always specified relative to the value in the [anchorPoint](anchorpoint.md) property. For new standalone layers, the default position is set to (0.0, 0.0). Changing the [frame](frame.md) property also updates the value in this property.

For more information about the relationship between the [frame](frame.md), [bounds](bounds.md), [anchorPoint](anchorpoint.md) and [position](position.md) properties, see [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514).

## See Also

### Modifying the layer geometry

- [frame](frame.md): The layer’s frame rectangle.
- [bounds](bounds.md): The layer’s bounds rectangle. Animatable.
- [zPosition](zposition.md): The layer’s position on the z axis. Animatable.
- [anchorPointZ](anchorpointz.md): The anchor point for the layer’s position along the z axis. Animatable.
- [anchorPoint](anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](contentsscale.md): The scale factor applied to the layer.

# position (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s position in its superlayer’s coordinate space. Animatable.

## Declaration

```objectivec
@property CGPoint position;
```

<a id="Discussion"></a>

## Discussion

The value of this property is specified in points and is always specified relative to the value in the [anchorPoint](anchorpoint.md) property. For new standalone layers, the default position is set to (0.0, 0.0). Changing the [frame](frame.md) property also updates the value in this property.

For more information about the relationship between the [frame](frame.md), [bounds](bounds.md), [anchorPoint](anchorpoint.md) and [position](position.md) properties, see [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514).

## See Also

### Modifying the layer geometry

- [frame](frame.md): The layer’s frame rectangle.
- [bounds](bounds.md): The layer’s bounds rectangle. Animatable.
- [zPosition](zposition.md): The layer’s position on the z axis. Animatable.
- [anchorPointZ](anchorpointz.md): The anchor point for the layer’s position along the z axis. Animatable.
- [anchorPoint](anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](contentsscale.md): The scale factor applied to the layer.
