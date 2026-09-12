> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/trimmedpath(from:to:)](https://developer.apple.com/documentation/swiftui/path/trimmedpath(from:to:))

# trimmedPath(from:to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a partial copy of the path.

## Declaration

```swift
func trimmedPath(from: CGFloat, to: CGFloat) -> Path
```

<a id="discussion"></a>

## Discussion

The returned path contains the region between `from` and `to`, both of which must be fractions between zero and one defining points linearly-interpolated along the path.

## See Also

### Transforming the path

- [applying(\_:)](applying%28__%29.md): Returns a path constructed by applying the transform to all points of the path.
- [offsetBy(dx:dy:)](offsetby%28dx_dy_%29.md): Returns a path constructed by translating all its points.
