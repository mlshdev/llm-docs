> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewrepresentable/updatensview(_:context:)](https://developer.apple.com/documentation/swiftui/nsviewrepresentable/updatensview(_:context:))

# updateNSView(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Updates the state of the specified view with new information from SwiftUI.

## Declaration

```swift
@MainActor @preconcurrency func updateNSView(_ nsView: Self.NSViewType, context: Self.Context)
```

## Parameters

- `nsView`: Your custom view object.
- `context`: A context structure containing information about the current state of the system.

<a id="discussion"></a>

## Discussion

When the state of your app changes, SwiftUI updates the portions of your interface affected by those changes. SwiftUI calls this method for any changes affecting the corresponding AppKit view. Use this method to update the configuration of your view to match the new state information provided in the `context` parameter.

## See Also

### Creating and updating the view

- [makeNSView(context:)](makensview%28context_%29.md): Creates the view object and configures its initial state.
- [NSViewRepresentable.Context](context.md)
- [NSViewType](nsviewtype.md): The type of view to present.
