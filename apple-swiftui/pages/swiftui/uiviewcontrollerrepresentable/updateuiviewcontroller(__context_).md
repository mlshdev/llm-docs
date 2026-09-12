> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewcontrollerrepresentable/updateuiviewcontroller(_:context:)](https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable/updateuiviewcontroller(_:context:))

# updateUIViewController(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Updates the state of the specified view controller with new information from SwiftUI.

## Declaration

```swift
@MainActor @preconcurrency func updateUIViewController(_ uiViewController: Self.UIViewControllerType, context: Self.Context)
```

## Parameters

- `uiViewController`: Your custom view controller object.
- `context`: A context structure containing information about the current state of the system.

<a id="discussion"></a>

## Discussion

When the state of your app changes, SwiftUI updates the portions of your interface affected by those changes. SwiftUI calls this method for any changes affecting the corresponding UIKit view controller. Use this method to update the configuration of your view controller to match the new state information provided in the `context` parameter.

## See Also

### Creating and updating the view controller

- [makeUIViewController(context:)](makeuiviewcontroller%28context_%29.md): Creates the view controller object and configures its initial state.
- [UIViewControllerRepresentable.Context](context.md)
- [UIViewControllerType](uiviewcontrollertype.md): The type of view controller to present.
