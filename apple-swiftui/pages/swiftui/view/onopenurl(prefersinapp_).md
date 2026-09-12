> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onopenurl(prefersinapp:)](https://developer.apple.com/documentation/swiftui/view/onopenurl(prefersinapp:))

# onOpenURL(prefersInApp:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets an `OpenURLAction` that prefers opening URL with an in-app browser. The `handler` closure takes a URL as input, and returns a `OpenURLAction.Result` that indicates the outcome of the action.

## Declaration

```swift
@MainActor @preconcurrency func onOpenURL(prefersInApp: Bool) -> some View

```

## Parameters

- `prefersInApp`: A boolean value that specifies whether to prefer to open the URL with an in-app browser or not.

<a id="discussion"></a>

## Discussion

It’s equivalent to calling `.onOpenURL(_:)`

```swift
.onOpenURL { _ in
    .systemAction(prefersInApp: prefersInApp)
}
```

## See Also

### URLs

- [onOpenURL(perform:)](onopenurl%28perform_%29.md): Registers a handler to invoke in response to a URL that your app receives.
- [widgetURL(\_:)](widgeturl%28__%29.md): Sets the URL to open in the containing app when the user clicks the widget.
