> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipview/init(_:ispresented:arrowedge:action:)](https://developer.apple.com/documentation/tipkit/tipview/init(_:ispresented:arrowedge:action:))

# init(\_:isPresented:arrowEdge:action:)

**Framework:** TipKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a tip view with an optional arrow.

## Declaration

```swift
@MainActor @preconcurrency init(_ tip: (any Tip)?, isPresented: Binding<Bool>? = nil, arrowEdge: Edge? = nil, action: @escaping @MainActor @Sendable (Tips.Action) -> Void = { _ in }) where Content == AnyTip
```

## Parameters

- `tip`: The tip to display.
- `isPresented`: A binding that will automatically update to true when a tip is displayed. This value can be changed to temporarily hide or show a currently displayable tip. If this value is `nil`, the view will automatically disappear based on the tip’s status and display rules.
- `arrowEdge`: The edge of the tip view that displays the arrow.
- `action`: The closure to perform when the user triggers a tip’s action.

<a id="discussion"></a>

## Discussion

Use a `TipView` when you want to indicate the UI element to which the tip applies, but don’t want to directly anchor the tip view to that element. Use the [popoverTip(\_:arrowEdge:action:)](https://developer.apple.com/documentation/swiftui/view/popovertip%28_:arrowedge:action:%29) to anchor your tip to an element.

## See Also

### Creating a tip view

- [init(\_:arrowEdge:action:)](init%28__arrowedge_action_%29.md): Conforms when `Content` conforms to `Tip`. Creates a tip view with an optional arrow.
- [init(\_:isPresented:arrowEdge:anchorID:action:)](init%28__ispresented_arrowedge_anchorid_action_%29.md): Conforms when `Content` conforms to `Tip`. Creates a tip view with an optional arrow.
