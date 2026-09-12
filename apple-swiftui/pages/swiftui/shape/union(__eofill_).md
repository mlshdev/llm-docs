> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/union(_:eofill:)](https://developer.apple.com/documentation/swiftui/shape/union(_:eofill:))

# union(\_:eoFill:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new shape with filled regions in either this shape or the given shape.

## Declaration

```swift
@export(implementation) nonisolated func union<T>(_ other: T, eoFill: Bool = false) -> some Shape where T : Shape

```

## Parameters

- `other`: The shape to union.
- `eoFill`: Whether to use the even-odd rule for determining which areas to treat as the interior of the shapes (if true), or the non-zero rule (if false).

<a id="return-value"></a>

## Return Value

A new shape.

<a id="discussion"></a>

## Discussion

The filled region of resulting shape is the combination of the filled region of both shapes added together.

Any unclosed subpaths in either shape are assumed to be closed. The result of filling this shape using either even-odd or non-zero fill rules is identical.

## See Also

### Performing operations on a shape

- [intersection(\_:eoFill:)](intersection%28__eofill_%29.md): Returns a new shape with filled regions common to both shapes.
- [lineIntersection(\_:eoFill:)](lineintersection%28__eofill_%29.md): Returns a new shape with a line from this shape that overlaps the filled regions of the given shape.
- [lineSubtraction(\_:eoFill:)](linesubtraction%28__eofill_%29.md): Returns a new shape with a line from this shape that does not overlap the filled region of the given shape.
- [subtracting(\_:eoFill:)](subtracting%28__eofill_%29.md): Returns a new shape with filled regions from this shape that are not in the given shape.
- [symmetricDifference(\_:eoFill:)](symmetricdifference%28__eofill_%29.md): Returns a new shape with filled regions either from this shape or the given shape, but not in both.
