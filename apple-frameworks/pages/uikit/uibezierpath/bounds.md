> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibezierpath/bounds](https://developer.apple.com/documentation/uikit/uibezierpath/bounds)

# bounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The bounding rectangle of the path.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property represents the smallest rectangle that completely encloses all points in the path, including any control points for Bézier and quadratic curves.

## See Also

### Performing hit-testing

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.
- [isEmpty](isempty.md): A Boolean value that indicates whether the path has any valid elements.

# bounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The bounding rectangle of the path.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

The value in this property represents the smallest rectangle that completely encloses all points in the path, including any control points for Bézier and quadratic curves.

## See Also

### Performing hit-testing

- [containsPoint:](contains%28__%29.md): Returns a Boolean value that indicates whether the specified point is within the region that the path encloses.
- [empty](isempty.md): A Boolean value that indicates whether the path has any valid elements.
