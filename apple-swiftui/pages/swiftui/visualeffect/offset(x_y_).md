> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/offset(x:y:)](https://developer.apple.com/documentation/swiftui/visualeffect/offset(x:y:))

# offset(x:y:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Offsets the view by the specified horizontal and vertical distances.

## Declaration

```swift
func offset(x: CGFloat = 0, y: CGFloat = 0) -> some VisualEffect

```

## Parameters

- `x`: The horizontal distance to offset the view.
- `y`: The vertical distance to offset the view.

<a id="return-value"></a>

## Return Value

An effect that offsets the view by `x` and `y`.

## See Also

### Translating

- [offset(\_:)](offset%28__%29.md): Offsets the view by the horizontal and vertical amount specified in the offset parameter.
- [offset(z:)](offset%28z_%29.md): Brings a view forward in Z by the provided distance in points.
