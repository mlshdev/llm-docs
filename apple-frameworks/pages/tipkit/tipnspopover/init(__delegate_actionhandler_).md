> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipnspopover/init(_:delegate:actionhandler:)](https://developer.apple.com/documentation/tipkit/tipnspopover/init(_:delegate:actionhandler:))

# init(\_:delegate:actionHandler:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Initializes a popover with the specified tip.

## Declaration

```swift
@MainActor @preconcurrency required init(_ tip: any Tip, delegate: (any NSPopoverDelegate)? = nil, actionHandler: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in })
```

## Parameters

- `tip`: The tip to display.
- `delegate`: A set of optional methods that a popover delegate can implement to provide additional or custom functionality
- `actionHandler`: The closure to perform when the user triggers a tip’s action.
