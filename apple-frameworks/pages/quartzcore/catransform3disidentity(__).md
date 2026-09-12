> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3disidentity(_:)](https://developer.apple.com/documentation/quartzcore/catransform3disidentity(_:))

# CATransform3DIsIdentity(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the transform is the identity transform.

## Declaration

```swift
func CATransform3DIsIdentity(_ t: CATransform3D) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `t` is the identity transform, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Transform Properties

- [CATransform3DIsAffine(\_:)](catransform3disaffine%28__%29.md): Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.
- [CATransform3DEqualToTransform(\_:\_:)](catransform3dequaltotransform%28____%29.md): Returns a Boolean value that indicates whether the two transforms are exactly equal.

# CATransform3DIsIdentity (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the transform is the identity transform.

## Declaration

```objectivec
extern bool CATransform3DIsIdentity(CATransform3D t);
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `t` is the identity transform, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Transform Properties

- [CATransform3DIsAffine](catransform3disaffine%28__%29.md): Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.
- [CATransform3DEqualToTransform](catransform3dequaltotransform%28____%29.md): Returns a Boolean value that indicates whether the two transforms are exactly equal.
