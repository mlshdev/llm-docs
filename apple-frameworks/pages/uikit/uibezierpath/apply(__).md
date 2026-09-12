> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/apply(_:)](https://developer.apple.com/documentation/uikit/uibezierpath/apply(_:))

# apply(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Transforms all points in the path using the specified affine transform matrix.

## Declaration

```swift
func apply(_ transform: CGAffineTransform)
```

## Parameters

- `transform`: The transform matrix to apply to the path.

<a id="Discussion"></a>

## Discussion

This method applies the specified transform to the path’s points immediately. The modifications made to the path object are permanent. If you do not want to permanently modify a path object, you should consider applying the transform to a copy.

# applyTransform: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Transforms all points in the path using the specified affine transform matrix.

## Declaration

```objectivec
- (void) applyTransform:(CGAffineTransform) transform;
```

## Parameters

- `transform`: The transform matrix to apply to the path.

<a id="Discussion"></a>

## Discussion

This method applies the specified transform to the path’s points immediately. The modifications made to the path object are permanent. If you do not want to permanently modify a path object, you should consider applying the transform to a copy.
