> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/calayer/anchorpointz

# anchorPointZ (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The anchor point for the layer’s position along the z axis. Animatable.

## Declaration

```swift
var anchorPointZ: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies the anchor point on the z axis around which geometric manipulations occur. The point is expressed as a distance (measured in points) along the z axis. The default value of this property is `0`.

## See Also

### Modifying the layer geometry

- [frame](frame.md): The layer’s frame rectangle.
- [bounds](bounds.md): The layer’s bounds rectangle. Animatable.
- [position](position.md): The layer’s position in its superlayer’s coordinate space. Animatable.
- [zPosition](zposition.md): The layer’s position on the z axis. Animatable.
- [anchorPoint](anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](contentsscale.md): The scale factor applied to the layer.

# anchorPointZ (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The anchor point for the layer’s position along the z axis. Animatable.

## Declaration

```objectivec
@property CGFloat anchorPointZ;
```

<a id="Discussion"></a>

## Discussion

This property specifies the anchor point on the z axis around which geometric manipulations occur. The point is expressed as a distance (measured in points) along the z axis. The default value of this property is `0`.

## See Also

### Modifying the layer geometry

- [frame](frame.md): The layer’s frame rectangle.
- [bounds](bounds.md): The layer’s bounds rectangle. Animatable.
- [position](position.md): The layer’s position in its superlayer’s coordinate space. Animatable.
- [zPosition](zposition.md): The layer’s position on the z axis. Animatable.
- [anchorPoint](anchorpoint.md): Defines the anchor point of the layer’s bounds rectangle. Animatable.
- [contentsScale](contentsscale.md): The scale factor applied to the layer.
