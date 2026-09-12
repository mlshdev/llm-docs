> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewrepresentable/makensview(context:)](https://developer.apple.com/documentation/swiftui/nsviewrepresentable/makensview(context:))

# makeNSView(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates the view object and configures its initial state.

## Declaration

```swift
@MainActor @preconcurrency func makeNSView(context: Self.Context) -> Self.NSViewType
```

## Parameters

- `context`: A context structure containing information about the current state of the system.

<a id="return-value"></a>

## Return Value

Your AppKit view configured with the provided information.

<a id="discussion"></a>

## Discussion

You must implement this method and use it to create your view object. Configure the view using your app’s current data and contents of the `context` parameter. The system calls this method only once, when it creates your view for the first time. For all subsequent updates, the system calls the [updateNSView(\_:context:)](updatensview%28__context_%29.md) method.

## See Also

### Creating and updating the view

- [updateNSView(\_:context:)](updatensview%28__context_%29.md): Updates the state of the specified view with new information from SwiftUI.
- [NSViewRepresentable.Context](context.md)
- [NSViewType](nsviewtype.md): The type of view to present.
