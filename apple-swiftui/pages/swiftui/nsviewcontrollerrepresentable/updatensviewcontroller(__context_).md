> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentable/updatensviewcontroller(_:context:)](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable/updatensviewcontroller(_:context:))

# updateNSViewController(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Updates the state of the specified view controller with new information from SwiftUI.

## Declaration

```swift
@MainActor @preconcurrency func updateNSViewController(_ nsViewController: Self.NSViewControllerType, context: Self.Context)
```

## Parameters

- `nsViewController`: Your custom view controller object.
- `context`: A context structure containing information about the current state of the system.

<a id="discussion"></a>

## Discussion

When the state of your app changes, SwiftUI updates the portions of your interface affected by those changes. SwiftUI calls this method for any changes affecting the corresponding AppKit view controller. Use this method to update the configuration of your view controller to match the new state information provided in the `context` parameter.

## See Also

### Creating and updating the view controller

- [makeNSViewController(context:)](makensviewcontroller%28context_%29.md): Creates the view controller object and configures its initial state.
- [NSViewControllerRepresentable.Context](context.md)
- [NSViewControllerType](nsviewcontrollertype.md): The type of view controller to present.
