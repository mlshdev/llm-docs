> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/path/offsetby(dx:dy:)

# offsetBy(dx:dy:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a path constructed by translating all its points.

## Declaration

```swift
func offsetBy(dx: CGFloat, dy: CGFloat) -> Path
```

## Parameters

- `dx`: The offset to apply in the horizontal axis.
- `dy`: The offset to apply in the vertical axis.

<a id="return-value"></a>

## Return Value

A new copy of the path with the offset applied to all points.

## See Also

### Transforming the path

- [applying(\_:)](applying%28__%29.md): Returns a path constructed by applying the transform to all points of the path.
- [trimmedPath(from:to:)](trimmedpath%28from_to_%29.md): Returns a partial copy of the path.
