> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onappear(perform:)](https://developer.apple.com/documentation/swiftui/view/onappear(perform:))

# onAppear(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform before this view appears.

## Declaration

```swift
nonisolated func onAppear(perform action: (() -> Void)? = nil) -> some View

```

## Parameters

- `action`: The action to perform. If `action` is `nil`, the call has no effect.

<a id="return-value"></a>

## Return Value

A view that triggers `action` before it appears.

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)

<a id="discussion"></a>

## Discussion

The exact moment that SwiftUI calls this method depends on the specific view type that you apply it to, but the `action` closure completes before the first rendered frame appears.

## See Also

### Responding to view life cycle updates

- [onDisappear(perform:)](ondisappear%28perform_%29.md): Adds an action to perform after this view disappears.
