> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipuipopoverviewcontroller/init(_:sourceitem:actionhandler:)](https://developer.apple.com/documentation/tipkit/tipuipopoverviewcontroller/init(_:sourceitem:actionhandler:))

# init(\_:sourceItem:actionHandler:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Initializes a popover controller with the specified tip.

## Declaration

```swift
@MainActor @preconcurrency convenience init(_ tip: any Tip, sourceItem: any UIPopoverPresentationControllerSourceItem, actionHandler: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in })
```

## Parameters

- `tip`: The tip to display.
- `sourceItem`: The item on which to anchor the tip popover.
- `actionHandler`: The closure to perform when the user triggers a tip’s action.
