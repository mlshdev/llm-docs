> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/boundingrect](https://developer.apple.com/documentation/swiftui/path/boundingrect)

# boundingRect

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A rectangle containing all path segments.

## Declaration

```swift
var boundingRect: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This is the smallest rectangle completely enclosing all points in the path but not including control points for Bézier curves.

## See Also

### Getting the path’s characteristics

- [cgPath](cgpath.md): An immutable path representing the elements in the path.
- [contains(\_:eoFill:)](contains%28__eofill_%29.md): Returns true if the path contains a specified point.
- [currentPoint](currentpoint.md): Returns the last point in the path, or nil if the path contains no points.
- [description](description.md): A description of the path that may be used to recreate the path via `init?(_:)`.
- [isEmpty](isempty.md): A Boolean value indicating whether the path contains zero elements.
