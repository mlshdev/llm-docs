> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dequaltotransform(_:_:)](https://developer.apple.com/documentation/quartzcore/catransform3dequaltotransform(_:_:))

# CATransform3DEqualToTransform(\_:\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the two transforms are exactly equal.

## Declaration

```swift
func CATransform3DEqualToTransform(_ a: CATransform3D, _ b: CATransform3D) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `a` and `b` are exactly equal, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Transform Properties

- [CATransform3DIsAffine(\_:)](catransform3disaffine%28__%29.md): Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.
- [CATransform3DIsIdentity(\_:)](catransform3disidentity%28__%29.md): Returns a Boolean value that indicates whether the transform is the identity transform.

# CATransform3DEqualToTransform (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the two transforms are exactly equal.

## Declaration

```objectivec
extern bool CATransform3DEqualToTransform(CATransform3D a, CATransform3D b);
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `a` and `b` are exactly equal, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Transform Properties

- [CATransform3DIsAffine](catransform3disaffine%28__%29.md): Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.
- [CATransform3DIsIdentity](catransform3disidentity%28__%29.md): Returns a Boolean value that indicates whether the transform is the identity transform.
