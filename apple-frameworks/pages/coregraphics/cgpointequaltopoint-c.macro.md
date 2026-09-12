> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpointequaltopoint-c.macro](https://developer.apple.com/documentation/coregraphics/cgpointequaltopoint-c.macro)

# CGPointEqualToPoint

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether two points are equal.

## Declaration

```objectivec
#define CGPointEqualToPoint
```

## Parameters

- `point1`: The first point to examine.
- `point2`: The second point to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two specified points are the same; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [CGSizeEqualToSize](cgsizeequaltosize-c.macro.md): Returns whether two sizes are equal.
- [CGRectEqualToRect](cgrectequaltorect%28____%29.md): Deprecated. Returns whether two rectangles are equal in size and position.
- [CGRectIntersectsRect](cgrectintersectsrect%28____%29.md): Returns whether two rectangles intersect.
