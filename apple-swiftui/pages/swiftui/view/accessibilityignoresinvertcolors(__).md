> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityignoresinvertcolors(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityignoresinvertcolors(_:))

# accessibilityIgnoresInvertColors(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets whether this view should ignore the system Smart Invert setting.

## Declaration

```swift
nonisolated func accessibilityIgnoresInvertColors(_ active: Bool = true) -> some View

```

## Parameters

- `active`: A true value ignores the system Smart Invert setting. A false value follows the system setting.

<a id="discussion"></a>

## Discussion

Use this modifier to suppress Smart Invert in a view that shouldn’t be inverted. Or pass an `active` argument of `false` to begin following the Smart Invert setting again when it was previously disabled.

## See Also

### Managing color

- [accessibilityInvertColors](../environmentvalues/accessibilityinvertcolors.md): Whether the system preference for Invert Colors is enabled.
- [accessibilityDifferentiateWithoutColor](../environmentvalues/accessibilitydifferentiatewithoutcolor.md): Whether the system preference for Differentiate without Color is enabled.
