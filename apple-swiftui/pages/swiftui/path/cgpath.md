> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/cgpath](https://developer.apple.com/documentation/swiftui/path/cgpath)

# cgPath

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An immutable path representing the elements in the path.

## Declaration

```swift
var cgPath: CGPath { get }
```

## See Also

### Getting the path’s characteristics

- [boundingRect](boundingrect.md): A rectangle containing all path segments.
- [contains(\_:eoFill:)](contains%28__eofill_%29.md): Returns true if the path contains a specified point.
- [currentPoint](currentpoint.md): Returns the last point in the path, or nil if the path contains no points.
- [description](description.md): A description of the path that may be used to recreate the path via `init?(_:)`.
- [isEmpty](isempty.md): A Boolean value indicating whether the path contains zero elements.
