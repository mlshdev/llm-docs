> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dgetaffinetransform(_:)](https://developer.apple.com/documentation/quartzcore/catransform3dgetaffinetransform(_:))

# CATransform3DGetAffineTransform(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the affine transform represented by `t`.

## Declaration

```swift
func CATransform3DGetAffineTransform(_ t: CATransform3D) -> CGAffineTransform
```

<a id="Discussion"></a>

## Discussion

If `t` can not be exactly represented as an affine transform, the return value is undefined.

## See Also

### Converting to and from Core Graphics Affine Transforms

- [CATransform3DMakeAffineTransform(\_:)](catransform3dmakeaffinetransform%28__%29.md): Returns a transform with the same effect as affine transform `m`.

# CATransform3DGetAffineTransform (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the affine transform represented by `t`.

## Declaration

```objectivec
extern CGAffineTransform CATransform3DGetAffineTransform(CATransform3D t);
```

<a id="Discussion"></a>

## Discussion

If `t` can not be exactly represented as an affine transform, the return value is undefined.

## See Also

### Converting to and from Core Graphics Affine Transforms

- [CATransform3DMakeAffineTransform](catransform3dmakeaffinetransform%28__%29.md): Returns a transform with the same effect as affine transform `m`.
