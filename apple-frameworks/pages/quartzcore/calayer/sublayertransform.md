> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/sublayertransform](https://developer.apple.com/documentation/quartzcore/calayer/sublayertransform)

# sublayerTransform (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the transform to apply to sublayers when rendering. Animatable.

## Declaration

```swift
var sublayerTransform: CATransform3D { get set }
```

<a id="Discussion"></a>

## Discussion

You typically use this property to add perspective and other viewing effects to embedded layers. You add perspective by setting the sublayer transform to the desired projection matrix. The default value of this property is the identity transform.

## See Also

### Managing the layer’s transform

- [transform](transform.md): The transform applied to the layer’s contents. Animatable.
- [affineTransform()](affinetransform%28%29.md): Returns an affine version of the layer’s transform.
- [setAffineTransform(\_:)](setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.

# sublayerTransform (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Specifies the transform to apply to sublayers when rendering. Animatable.

## Declaration

```objectivec
@property CATransform3D sublayerTransform;
```

<a id="Discussion"></a>

## Discussion

You typically use this property to add perspective and other viewing effects to embedded layers. You add perspective by setting the sublayer transform to the desired projection matrix. The default value of this property is the identity transform.

## See Also

### Managing the layer’s transform

- [transform](transform.md): The transform applied to the layer’s contents. Animatable.
- [affineTransform](affinetransform%28%29.md): Returns an affine version of the layer’s transform.
- [setAffineTransform:](setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.
