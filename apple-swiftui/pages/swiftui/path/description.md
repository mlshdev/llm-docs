> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/path/description

# description

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of the path that may be used to recreate the path via `init?(_:)`.

## Declaration

```swift
var description: String { get }
```

## See Also

### Getting the path’s characteristics

- [boundingRect](boundingrect.md): A rectangle containing all path segments.
- [cgPath](cgpath.md): An immutable path representing the elements in the path.
- [contains(\_:eoFill:)](contains%28__eofill_%29.md): Returns true if the path contains a specified point.
- [currentPoint](currentpoint.md): Returns the last point in the path, or nil if the path contains no points.
- [isEmpty](isempty.md): A Boolean value indicating whether the path contains zero elements.
