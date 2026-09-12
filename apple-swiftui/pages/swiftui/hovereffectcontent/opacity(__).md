> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent/opacity(_:)](https://developer.apple.com/documentation/swiftui/hovereffectcontent/opacity(_:))

# opacity(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Sets the transparency of the view.

## Declaration

```swift
func opacity(_ opacity: Double) -> some HoverEffectContent

```

## Parameters

- `opacity`: A value between 0 (fully transparent) and 1 (fully opaque).

<a id="return-value"></a>

## Return Value

An effect that sets the transparency of the view.

<a id="discussion"></a>

## Discussion

When applying the `opacity(_:)` effect to a view that has already had its opacity transformed, the effect of the underlying opacity transformation is multiplied.
