> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsizeequaltosize-c.macro](https://developer.apple.com/documentation/coregraphics/cgsizeequaltosize-c.macro)

# CGSizeEqualToSize

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns whether two sizes are equal.

## Declaration

```objectivec
#define CGSizeEqualToSize
```

## Parameters

- `size1`: The first size to examine.
- `size2`: The second size to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two specified sizes are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [CGPointEqualToPoint](cgpointequaltopoint-c.macro.md): Returns whether two points are equal.
- [CGRectEqualToRect](cgrectequaltorect%28____%29.md): Deprecated. Returns whether two rectangles are equal in size and position.
- [CGRectIntersectsRect](cgrectintersectsrect%28____%29.md): Returns whether two rectangles intersect.
