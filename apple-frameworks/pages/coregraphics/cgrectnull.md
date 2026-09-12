> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectnull](https://developer.apple.com/documentation/coregraphics/cgrectnull)

# CGRectNull (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The null rectangle, representing an invalid value.

## Declaration

```swift
let CGRectNull: CGRect
```

<a id="Discussion"></a>

## Discussion

This is the rectangle returned when, for example, you intersect two disjoint rectangles. Note that the null rectangle is not the same as the [CGRectZero](cgrectzero.md) rectangle. For example, the union of a rectangle with the null rectangle is the original rectangle (that is, the null rectangle contributes nothing).

## See Also

### Constants

- [CGRectInfinite](cgrectinfinite.md): A rectangle that has infinite extent.
- [Geometric Zeros](geometric-zeros.md): A zero point, zero rectangle, or zero size.
- [CGRectEdge](../corefoundation/cgrectedge.md)
- [CGFloat Informational Macros](cgfloat-informational-macros.md): Informational macros for the `CGFloat` type.

# CGRectNull (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The null rectangle, representing an invalid value.

## Declaration

```objectivec
extern const CGRect CGRectNull;
```

<a id="Discussion"></a>

## Discussion

This is the rectangle returned when, for example, you intersect two disjoint rectangles. Note that the null rectangle is not the same as the [CGRectZero](cgrectzero.md) rectangle. For example, the union of a rectangle with the null rectangle is the original rectangle (that is, the null rectangle contributes nothing).

## See Also

### Constants

- [CGRectInfinite](cgrectinfinite.md): A rectangle that has infinite extent.
- [Geometric Zeros](geometric-zeros.md): A zero point, zero rectangle, or zero size.
- [CGRectEdge](../corefoundation/cgrectedge.md)
- [CGFloat Informational Macros](cgfloat-informational-macros.md): Informational macros for the `CGFloat` type.
