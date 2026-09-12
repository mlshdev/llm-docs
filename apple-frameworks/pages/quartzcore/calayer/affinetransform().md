> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/affinetransform()](https://developer.apple.com/documentation/quartzcore/calayer/affinetransform())

# affineTransform() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns an affine version of the layer’s transform.

## Declaration

```swift
func affineTransform() -> CGAffineTransform
```

<a id="return-value"></a>

## Return Value

The affine transform structure that corresponds to the value in the layer’s [transform](transform.md) property.

## See Also

### Managing the layer’s transform

- [transform](transform.md): The transform applied to the layer’s contents. Animatable.
- [sublayerTransform](sublayertransform.md): Specifies the transform to apply to sublayers when rendering. Animatable.
- [setAffineTransform(\_:)](setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.

# affineTransform (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns an affine version of the layer’s transform.

## Declaration

```objectivec
- (CGAffineTransform) affineTransform;
```

<a id="return-value"></a>

## Return Value

The affine transform structure that corresponds to the value in the layer’s [transform](transform.md) property.

## See Also

### Managing the layer’s transform

- [transform](transform.md): The transform applied to the layer’s contents. Animatable.
- [sublayerTransform](sublayertransform.md): Specifies the transform to apply to sublayers when rendering. Animatable.
- [setAffineTransform:](setaffinetransform%28__%29.md): Sets the layer’s transform to the specified affine transform.
