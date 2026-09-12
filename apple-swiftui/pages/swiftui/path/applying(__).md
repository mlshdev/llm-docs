> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/applying(_:)](https://developer.apple.com/documentation/swiftui/path/applying(_:))

# applying(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a path constructed by applying the transform to all points of the path.

## Declaration

```swift
func applying(_ transform: CGAffineTransform) -> Path
```

## Parameters

- `transform`: An affine transform to apply to the path.

<a id="return-value"></a>

## Return Value

A new copy of the path with the transform applied to all points.

## See Also

### Transforming the path

- [offsetBy(dx:dy:)](offsetby%28dx_dy_%29.md): Returns a path constructed by translating all its points.
- [trimmedPath(from:to:)](trimmedpath%28from_to_%29.md): Returns a partial copy of the path.
