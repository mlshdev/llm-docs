> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/prefersdefaultfocus(_:in:)](https://developer.apple.com/documentation/swiftui/view/prefersdefaultfocus(_:in:))

# prefersDefaultFocus(\_:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ · tvOS 14.0+ · watchOS 7.0+

Indicates that the view should receive focus by default for a given namespace.

## Declaration

```swift
nonisolated func prefersDefaultFocus(_ prefersDefaultFocus: Bool = true, in namespace: Namespace.ID) -> some View

```

## Parameters

- `prefersDefaultFocus`: A Boolean value that indicates whether this view prefers to receive focus by default. The default value, `true`, causes the view to receive focus by default.
- `namespace`: The namespace associated with the focus scope within which this view prefers default focus.

<a id="return-value"></a>

## Return Value

A modified view that sets whether it prefers to be focused by default.

<a id="discussion"></a>

## Discussion

This modifier sets the initial focus preference when no other view has focus. Use the environment value [resetFocus](../environmentvalues/resetfocus.md) to force a reevaluation of default focus at any time.

The following tvOS example shows three buttons, labeled “1”, “2”, and “3”, in a [VStack](../vstack.md). By default, the “1” button would receive focus, because it is the first child in the stack. However, the `prefersDefaultFocus(_:in:)` modifier allows button “3” to receive default focus instead. Once the buttons are visible, the user can move down to and focus the “Reset to default focus” button. When the user activates this button, it uses the [ResetFocusAction](../resetfocusaction.md) to reevaluate default focus in the `mainNamespace`, which returns the focus to button “3”.

```swift
struct ContentView: View {
    @Namespace var mainNamespace
    @Environment(\.resetFocus) var resetFocus

    var body: some View {
        VStack {
            Button ("1") {}
            Button ("2") {}
            Button ("3") {}
                .prefersDefaultFocus(in: mainNamespace)
            Button ("Reset to default focus") {
                resetFocus(in: mainNamespace)
            }
        }
        .focusScope(mainNamespace)
    }
}
```

The default focus preference is limited to the focusable ancestor that matches the provided namespace. If multiple views express this preference, then SwiftUI applies the current platform rules to determine which view receives focus.

## See Also

### Controlling default focus

- [defaultFocus(\_:\_:priority:)](defaultfocus%28____priority_%29.md): Defines a region of the window in which default focus is evaluated by assigning a value to a given focus state binding.
- [DefaultFocusEvaluationPriority](../defaultfocusevaluationpriority.md): Prioritizations for default focus preferences when evaluating where to move focus in different circumstances.
