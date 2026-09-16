> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/checkboxtogglestyle/makebody(configuration:)

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates a view that represents the body of a toggle checkbox.

## Declaration

```swift
nonisolated func makeBody(configuration: CheckboxToggleStyle.Configuration) -> some View

```

## Parameters

- `configuration`: The properties of the toggle, including a label and a binding to the toggle’s state.

<a id="return-value"></a>

## Return Value

A view that represents a checkbox.

<a id="discussion"></a>

## Discussion

SwiftUI implements this required method of the [ToggleStyle](../togglestyle.md) protocol to define the behavior and appearance of the [checkbox](../togglestyle/checkbox.md) toggle style. Don’t call this method directly. Rather, the system calls this method for each [Toggle](../toggle.md) instance in a view hierarchy that’s styled as a checkbox.
