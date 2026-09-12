> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgaffinetransformisidentity(_:)](https://developer.apple.com/documentation/coregraphics/cgaffinetransformisidentity(_:))

# CGAffineTransformIsIdentity(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks whether an affine transform is the identity transform.

## Declaration

```swift
func CGAffineTransformIsIdentity(_ t: CGAffineTransform) -> Bool
```

## Parameters

- `t`: The affine transform to check.

<a id="return-value"></a>

## Return Value

Returns `true` if `t` is the identity transform, `false` otherwise.

## See Also

### Evaluating Affine Transforms

- [CGAffineTransformEqualToTransform(\_:\_:)](cgaffinetransformequaltotransform%28____%29.md): Checks whether two affine transforms are equal.

# CGAffineTransformIsIdentity (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Checks whether an affine transform is the identity transform.

## Declaration

```objectivec
extern bool CGAffineTransformIsIdentity(CGAffineTransform t);
```

## Parameters

- `t`: The affine transform to check.

<a id="return-value"></a>

## Return Value

Returns `true` if `t` is the identity transform, `false` otherwise.

## See Also

### Evaluating Affine Transforms

- [CGAffineTransformEqualToTransform](cgaffinetransformequaltotransform%28____%29.md): Checks whether two affine transforms are equal.
