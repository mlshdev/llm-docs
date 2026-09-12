> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/widgeturl(_:)](https://developer.apple.com/documentation/swiftui/view/widgeturl(_:))

# widgetURL(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Sets the URL to open in the containing app when the user clicks the widget.

## Declaration

```swift
@MainActor @preconcurrency func widgetURL(_ url: URL?) -> some View

```

## Parameters

- `url`: The URL to open in the containing app.

<a id="return-value"></a>

## Return Value

A view that opens the specified URL when the user clicks the widget.

<a id="discussion"></a>

## Discussion

Widgets support one `widgetURL` modifier in their view hierarchy. If multiple views have `widgetURL` modifiers, the behavior is undefined.

## See Also

### URLs

- [onOpenURL(perform:)](onopenurl%28perform_%29.md): Registers a handler to invoke in response to a URL that your app receives.
- [onOpenURL(prefersInApp:)](onopenurl%28prefersinapp_%29.md): Sets an `OpenURLAction` that prefers opening URL with an in-app browser. The `handler` closure takes a URL as input, and returns a `OpenURLAction.Result` that indicates the outcome of the action.
