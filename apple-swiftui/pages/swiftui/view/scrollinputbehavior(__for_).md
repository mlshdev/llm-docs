> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scrollinputbehavior(_:for:)](https://developer.apple.com/documentation/swiftui/view/scrollinputbehavior(_:for:))

# scrollInputBehavior(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Enables or disables scrolling in scrollable views when using particular inputs.

## Declaration

```swift
@MainActor @preconcurrency func scrollInputBehavior(_ behavior: ScrollInputBehavior, for input: ScrollInputKind) -> some View

```

## Parameters

- `behavior`: Whether scrolling should be enabled or disabled for this input.
- `input`: The input for which to enable or disable scrolling.

<a id="discussion"></a>

## Discussion

In contrast to [scrollDisabled(\_:)](scrolldisabled%28__%29.md), this modifier will enable or disable scrolling only for particular inputs. The following, for instance, disables double-tap-to-scroll on watchOS while preserving the ability to scroll via touch and the Digital Crown:

```swift
ScrollView(...)
    .scrollInputBehavior(.disabled, for: .handGestureShortcut)
```

If `scrollDisabled(true)` has been applied to this view, scrolling will be disabled for all inputs and this modifier cannot be used to re-enable scrolling.

## See Also

### Managing scrolling for different inputs

- [ScrollInputKind](../scrollinputkind.md): Inputs used to scroll views.
- [ScrollInputBehavior](../scrollinputbehavior.md): A type that defines whether input should scroll a view.
