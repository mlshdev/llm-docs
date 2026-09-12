> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/transform](https://developer.apple.com/documentation/quartzcore/calayer/transform)

# transform (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The transform applied to the layer’s contents. Animatable.

## Declaration

```swift
var transform: CATransform3D { get set }
```

<a id="Discussion"></a>

## Discussion

This property is set to the identity transform by default. Any transformations you apply to the layer occur relative to the layer’s anchor point.

## See Also

### Managing the layer’s transform

- [sublayerTransform](sublayertransform.md): Specifies the transform to apply to sublayers when rendering. Animatable.
- [affineTransform()](affinetransform%28%29.md): Returns an affine version of the layer’s transform.
- [setAffineTransform(\_:)](setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.

# transform (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The transform applied to the layer’s contents. Animatable.

## Declaration

```objectivec
@property CATransform3D transform;
```

<a id="Discussion"></a>

## Discussion

This property is set to the identity transform by default. Any transformations you apply to the layer occur relative to the layer’s anchor point.

## See Also

### Managing the layer’s transform

- [sublayerTransform](sublayertransform.md): Specifies the transform to apply to sublayers when rendering. Animatable.
- [affineTransform](affinetransform%28%29.md): Returns an affine version of the layer’s transform.
- [setAffineTransform:](setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.
