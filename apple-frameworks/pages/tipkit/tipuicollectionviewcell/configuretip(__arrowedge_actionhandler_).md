> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipuicollectionviewcell/configuretip(_:arrowedge:actionhandler:)](https://developer.apple.com/documentation/tipkit/tipuicollectionviewcell/configuretip(_:arrowedge:actionhandler:))

# configureTip(\_:arrowEdge:actionHandler:)

**Framework:** TipKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Configures the cell to display an embedded tip view.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency final func configureTip(_ tip: any Tip, arrowEdge: Edge? = nil, actionHandler: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in }) -> Self
```

## Parameters

- `tip`: The tip to display.
- `arrowEdge`: The edge of the tip view that displays the arrow.
- `actionHandler`: The closure to perform when the user triggers a tip’s action.

<a id="return-value"></a>

## Return Value

A collection cell view that embeds the specified tip.
