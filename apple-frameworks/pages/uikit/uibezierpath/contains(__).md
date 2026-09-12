> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/contains(_:)](https://developer.apple.com/documentation/uikit/uibezierpath/contains(_:))

# contains(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.

## Declaration

```swift
func contains(_ point: CGPoint) -> Bool
```

## Parameters

- `point`: The point to test against the path, specified in the path object’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point is considered to be within the path’s enclosed area or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

The receiver contains the specified point if that point is in a portion of a closed subpath that would normally be painted during a fill operation. This method uses the value of the [usesEvenOddFillRule](usesevenoddfillrule.md) property to determine which parts of the subpath would be filled.

A point is not considered to be enclosed by the path if it is inside an open subpath, regardless of whether that area would be painted during a fill operation. Therefore, to determine mouse hits on open paths, you must create a copy of the path object and explicitly close any subpaths (using the [close()](close%28%29.md) method) before calling this method.

## See Also

### Performing hit-testing

- [isEmpty](isempty.md): A Boolean value that indicates whether the path has any valid elements.
- [bounds](bounds.md): The bounding rectangle of the path.

# containsPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.

## Declaration

```objectivec
- (BOOL) containsPoint:(CGPoint) point;
```

## Parameters

- `point`: The point to test against the path, specified in the path object’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the point is considered to be within the path’s enclosed area or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

The receiver contains the specified point if that point is in a portion of a closed subpath that would normally be painted during a fill operation. This method uses the value of the [usesEvenOddFillRule](usesevenoddfillrule.md) property to determine which parts of the subpath would be filled.

A point is not considered to be enclosed by the path if it is inside an open subpath, regardless of whether that area would be painted during a fill operation. Therefore, to determine mouse hits on open paths, you must create a copy of the path object and explicitly close any subpaths (using the [closePath](close%28%29.md) method) before calling this method.

## See Also

### Performing hit-testing

- [empty](isempty.md): A Boolean value that indicates whether the path has any valid elements.
- [bounds](bounds.md): The bounding rectangle of the path.
