> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusable(_:)](https://developer.apple.com/documentation/swiftui/view/focusable(_:))

# focusable(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Specifies if the view is focusable.

## Declaration

```swift
nonisolated func focusable(_ isFocusable: Bool = true) -> some View

```

## Parameters

- `isFocusable`: A Boolean value that indicates whether this view is focusable.

<a id="return-value"></a>

## Return Value

A view that sets whether a view is focusable.

## See Also

### Indicating that a view can receive focus

- [focusable(\_:interactions:)](focusable%28__interactions_%29.md): Specifies if the view is focusable, and if so, what focus-driven interactions it supports.
- [FocusInteractions](../focusinteractions.md): Values describe different focus interactions that a view can support.
