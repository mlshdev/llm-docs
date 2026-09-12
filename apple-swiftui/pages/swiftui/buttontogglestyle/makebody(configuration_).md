> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttontogglestyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/buttontogglestyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a view that represents the body of a toggle button.

## Declaration

```swift
nonisolated func makeBody(configuration: ButtonToggleStyle.Configuration) -> some View

```

## Parameters

- `configuration`: The properties of the toggle, including a label and a binding to the toggle’s state.

<a id="return-value"></a>

## Return Value

A view that acts as a button that controls a Boolean state.

<a id="discussion"></a>

## Discussion

SwiftUI implements this required method of the [ToggleStyle](../togglestyle.md) protocol to define the behavior and appearance of the [button](../togglestyle/button.md) toggle style. Don’t call this method directly; the system calls this method for each [Toggle](../toggle.md) instance in a view hierarchy that’s styled as a button.
