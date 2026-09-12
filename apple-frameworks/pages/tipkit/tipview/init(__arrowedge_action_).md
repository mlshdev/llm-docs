> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipview/init(_:arrowedge:action:)](https://developer.apple.com/documentation/tipkit/tipview/init(_:arrowedge:action:))

# init(\_:arrowEdge:action:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a tip view with an optional arrow.

## Declaration

```swift
@MainActor @preconcurrency init(_ tip: (any Tip)?, arrowEdge: Edge? = nil, action: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in }) where Content == AnyTip
```

<a id="discussion"></a>

## Discussion

- arrowEdge: The edge of the tip view that displays the arrow.
- action: The closure to perform when the user triggers a tip’s action.

> **Tip**

> The tip to display.

<a id="Overview"></a>

## Overview

Use a `TipView` when you want to indicate the UI element to which the tip applies, but don’t want to directly anchor the tip view to that element. Use the [popoverTip(\_:arrowEdge:action:)](https://developer.apple.com/documentation/swiftui/view/popovertip%28_:arrowedge:action:%29) to anchor your tip to an element.

## See Also

### Creating a tip view

- [init(\_:isPresented:arrowEdge:action:)](init%28__ispresented_arrowedge_action_%29.md): Conforms when `Content` conforms to `Tip`. Creates a tip view with an optional arrow.
- [init(\_:isPresented:arrowEdge:anchorID:action:)](init%28__ispresented_arrowedge_anchorid_action_%29.md): Conforms when `Content` conforms to `Tip`. Creates a tip view with an optional arrow.
