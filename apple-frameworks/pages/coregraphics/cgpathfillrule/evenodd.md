> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathfillrule/evenodd](https://developer.apple.com/documentation/coregraphics/cgpathfillrule/evenodd)

# CGPathFillRule.evenOdd

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A rule that considers a region to be interior to a path based on the number of times it is enclosed by path elements.

## Declaration

```swift
case evenOdd
```

<a id="Discussion"></a>

## Discussion

This rule plots a ray from any region to be evaluated toward the bounds of the drawing, then counts the closed path elements that the ray crosses. The rule defines interior regions as those where the sum of crossings is an odd number, and exterior regions as those where the sum of crossings is an even number.

## See Also

### Enumeration Cases

- [CGPathFillRule.winding](winding.md): A rule that considers a region to be interior to a path if the winding number for that region is nonzero.
