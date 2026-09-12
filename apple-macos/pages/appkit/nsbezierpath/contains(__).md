> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/contains(_:)](https://developer.apple.com/documentation/appkit/nsbezierpath/contains(_:))

# contains(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the path contains the specified point.

## Declaration

```swift
func contains(_ point: NSPoint) -> Bool
```

## Parameters

- `point`: The point to test against the path, specified in the path object’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the path’s enclosed area contains the specified point; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method checks the point against the path itself and the area it encloses. When determining hits in the enclosed area, this method uses the non-zero winding rule ([NSNonZeroWindingRule](../nsnonzerowindingrule.md)). It does not take into account the line width used to stroke the path.

# containsPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the path contains the specified point.

## Declaration

```objectivec
- (BOOL) containsPoint:(NSPoint) point;
```

## Parameters

- `point`: The point to test against the path, specified in the path object’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the path’s enclosed area contains the specified point; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method checks the point against the path itself and the area it encloses. When determining hits in the enclosed area, this method uses the non-zero winding rule ([NSNonZeroWindingRule](../nsnonzerowindingrule.md)). It does not take into account the line width used to stroke the path.
