> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipnsview/init(_:arrowedge:actionhandler:)](https://developer.apple.com/documentation/tipkit/tipnsview/init(_:arrowedge:actionhandler:))

# init(\_:arrowEdge:actionHandler:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a tip view with an optional arrow.

## Declaration

```swift
@MainActor @preconcurrency convenience init(_ tip: any Tip, arrowEdge: Edge? = nil, actionHandler: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in })
```

## Parameters

- `tip`: The tip to display.
- `arrowEdge`: The edge of the tip view that displays the arrow.
- `actionHandler`: The closure to perform when the user triggers a tip’s action.

<a id="discussion"></a>

## Discussion

Use a `TipNSView` when you want to indicate the UI element to which the tip applies, but do not want to directly anchor the tip view to that element.
