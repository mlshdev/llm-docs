> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ondisappear(perform:)](https://developer.apple.com/documentation/swiftui/view/ondisappear(perform:))

# onDisappear(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform after this view disappears.

## Declaration

```swift
nonisolated func onDisappear(perform action: (() -> Void)? = nil) -> some View

```

## Parameters

- `action`: The action to perform. If `action` is `nil`, the call has no effect.

<a id="return-value"></a>

## Return Value

A view that triggers `action` after it disappears.

<a id="discussion"></a>

## Discussion

The exact moment that SwiftUI calls this method depends on the specific view type that you apply it to, but the `action` closure doesn’t execute until the view disappears from the interface.

## See Also

### Responding to view life cycle updates

- [onAppear(perform:)](onappear%28perform_%29.md): Adds an action to perform before this view appears.
