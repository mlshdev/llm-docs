> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/subtracting(_:eofill:)](https://developer.apple.com/documentation/swiftui/path/subtracting(_:eofill:))

# subtracting(\_:eoFill:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new path with filled regions from this path that are not in the given path.

## Declaration

```swift
func subtracting(_ other: Path, eoFill: Bool = false) -> Path
```

## Parameters

- `other`: The path to subtract.
- `eoFill`: Whether to use the even-odd rule for determining which areas to treat as the interior of the paths (if true), or the non-zero rule (if false).

<a id="return-value"></a>

## Return Value

A new path.

<a id="discussion"></a>

## Discussion

The filled region of the resulting path is the filled region of this path with the filled region `other` removed from it.

Any unclosed subpaths in either path are assumed to be closed. The result of filling this path using either even-odd or non-zero fill rules is identical.

## See Also

### Performing operations on the path

- [addRoundedRect(in:cornerSize:style:transform:)](addroundedrect%28in_cornersize_style_transform_%29.md): Adds a rounded rectangle to the path.
- [intersection(\_:eoFill:)](intersection%28__eofill_%29.md): Returns a new path with filled regions common to both paths.
- [lineIntersection(\_:eoFill:)](lineintersection%28__eofill_%29.md): Returns a new path with a line from this path that overlaps the filled regions of the given path.
- [lineSubtraction(\_:eoFill:)](linesubtraction%28__eofill_%29.md): Returns a new path with a line from this path that does not overlap the filled region of the given path.
- [normalized(eoFill:)](normalized%28eofill_%29.md): Returns a new weakly-simple copy of this path.
- [symmetricDifference(\_:eoFill:)](symmetricdifference%28__eofill_%29.md): Returns a new path with filled regions either from this path or the given path, but not in both.
- [union(\_:eoFill:)](union%28__eofill_%29.md): Returns a new path with filled regions in either this path or the given path.
