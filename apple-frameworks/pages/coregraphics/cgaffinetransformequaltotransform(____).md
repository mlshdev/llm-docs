> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformequaltotransform(_:_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformequaltotransform(_:_:))

# CGAffineTransformEqualToTransform(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks whether two affine transforms are equal.

## Declaration

```swift
func CGAffineTransformEqualToTransform(_ t1: CGAffineTransform, _ t2: CGAffineTransform) -> Bool
```

## Parameters

- `t1`: An affine transform.
- `t2`: An affine transform.

<a id="return-value"></a>

## Return Value

Returns `true` if `t1` and `t2` are equal, `false` otherwise.

## See Also

### Evaluating Affine Transforms

- [CGAffineTransformIsIdentity(\_:)](cgaffinetransformisidentity%28__%29.md): Checks whether an affine transform is the identity transform.

# CGAffineTransformEqualToTransform (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks whether two affine transforms are equal.

## Declaration

```objectivec
extern bool CGAffineTransformEqualToTransform(CGAffineTransform t1, CGAffineTransform t2);
```

## Parameters

- `t1`: An affine transform.
- `t2`: An affine transform.

<a id="return-value"></a>

## Return Value

Returns `true` if `t1` and `t2` are equal, `false` otherwise.

## See Also

### Evaluating Affine Transforms

- [CGAffineTransformIsIdentity](cgaffinetransformisidentity%28__%29.md): Checks whether an affine transform is the identity transform.
