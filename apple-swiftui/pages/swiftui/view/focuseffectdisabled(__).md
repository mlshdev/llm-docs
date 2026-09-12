> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focuseffectdisabled(_:)](https://developer.apple.com/documentation/swiftui/view/focuseffectdisabled(_:))

# focusEffectDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Adds a condition that controls whether this view can display focus effects, such as a default focus ring or hover effect.

## Declaration

```swift
nonisolated func focusEffectDisabled(_ disabled: Bool = true) -> some View

```

## Parameters

- `disabled`: A Boolean value that determines whether this view can display focus effects.

<a id="return-value"></a>

## Return Value

A view that controls whether focus effects can be displayed in this view.

<a id="discussion"></a>

## Discussion

The higher views in a view hierarchy can override the value you set on this view. In the following example, the button does not display a focus effect because the outer `focusEffectDisabled(_:)` modifier overrides the inner one:

```swift
HStack {
    Button("Press") {}
        .focusEffectDisabled(false)
}
.focusEffectDisabled(true)
```

## See Also

### Configuring effects

- [isFocusEffectEnabled](../environmentvalues/isfocuseffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows focus effects to be displayed.
