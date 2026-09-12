> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/contains(_:eofill:)](https://developer.apple.com/documentation/swiftui/path/contains(_:eofill:))

# contains(\_:eoFill:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns true if the path contains a specified point.

## Declaration

```swift
func contains(_ p: CGPoint, eoFill: Bool = false) -> Bool
```

<a id="discussion"></a>

## Discussion

If `eoFill` is true, this method uses the even-odd rule to define which points are inside the path. Otherwise, it uses the non-zero rule.

## See Also

### Getting the path’s characteristics

- [boundingRect](boundingrect.md): A rectangle containing all path segments.
- [cgPath](cgpath.md): An immutable path representing the elements in the path.
- [currentPoint](currentpoint.md): Returns the last point in the path, or nil if the path contains no points.
- [description](description.md): A description of the path that may be used to recreate the path via `init?(_:)`.
- [isEmpty](isempty.md): A Boolean value indicating whether the path contains zero elements.
