> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3disaffine(_:)](https://developer.apple.com/documentation/quartzcore/catransform3disaffine(_:))

# CATransform3DIsAffine(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.

## Declaration

```swift
func CATransform3DIsAffine(_ t: CATransform3D) -> Bool
```

<a id="discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if `t` can be exactly represented by an affine transform.

## See Also

### Determining Transform Properties

- [CATransform3DIsIdentity(\_:)](catransform3disidentity%28__%29.md): Returns a Boolean value that indicates whether the transform is the identity transform.
- [CATransform3DEqualToTransform(\_:\_:)](catransform3dequaltotransform%28____%29.md): Returns a Boolean value that indicates whether the two transforms are exactly equal.

# CATransform3DIsAffine (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a transform can be exactly represented by an affine transform.

## Declaration

```objectivec
extern bool CATransform3DIsAffine(CATransform3D t);
```

<a id="discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if `t` can be exactly represented by an affine transform.

## See Also

### Determining Transform Properties

- [CATransform3DIsIdentity](catransform3disidentity%28__%29.md): Returns a Boolean value that indicates whether the transform is the identity transform.
- [CATransform3DEqualToTransform](catransform3dequaltotransform%28____%29.md): Returns a Boolean value that indicates whether the two transforms are exactly equal.
