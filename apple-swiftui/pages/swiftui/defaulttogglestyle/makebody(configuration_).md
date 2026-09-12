> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/defaulttogglestyle/makebody(configuration:)](https://developer.apple.com/documentation/swiftui/defaulttogglestyle/makebody(configuration:))

# makeBody(configuration:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a view that represents the body of a toggle.

## Declaration

```swift
nonisolated func makeBody(configuration: DefaultToggleStyle.Configuration) -> some View

```

## Parameters

- `configuration`: The properties of the toggle, including a label and a binding to the toggle’s state.

<a id="return-value"></a>

## Return Value

A view that acts as a toggle.

<a id="discussion"></a>

## Discussion

SwiftUI implements this required method of the [ToggleStyle](../togglestyle.md) protocol to define the behavior and appearance of the [automatic](../togglestyle/automatic.md) toggle style. Don’t call this method directly. Rather, the system calls this method for each [Toggle](../toggle.md) instance in a view hierarchy that needs the default style.
