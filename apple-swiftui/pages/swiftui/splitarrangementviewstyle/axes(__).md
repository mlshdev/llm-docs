> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/splitarrangementviewstyle/axes(_:)

# axes(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a split arrangement that supports the given axes.

## Declaration

```swift
nonisolated func axes(_ axes: Axis.Set) -> SplitArrangementViewStyle
```

## Parameters

- `axes`: The supported axes the view can split to.

<a id="discussion"></a>

## Discussion

For example, you could make a split arrangement which will only split its views into a vertical split layout using the `vertical` axis.

```swift
ArrangementView {
    PrimaryContent()
} secondary: {
    SecondaryContent()
}
.arrangementViewStyle(.split.axes(.vertical))
```
