> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewrepresentable/updateuiview(_:context:)](https://developer.apple.com/documentation/swiftui/uiviewrepresentable/updateuiview(_:context:))

# updateUIView(\_:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Updates the state of the specified view with new information from SwiftUI.

## Declaration

```swift
@MainActor @preconcurrency func updateUIView(_ uiView: Self.UIViewType, context: Self.Context)
```

## Parameters

- `uiView`: Your custom view object.
- `context`: A context structure containing information about the current state of the system.

<a id="discussion"></a>

## Discussion

When the state of your app changes, SwiftUI updates the portions of your interface affected by those changes. SwiftUI calls this method for any changes affecting the corresponding UIKit view. Use this method to update the configuration of your view to match the new state information provided in the `context` parameter.

## See Also

### Creating and updating the view

- [makeUIView(context:)](makeuiview%28context_%29.md): Creates the view object and configures its initial state.
- [UIViewRepresentable.Context](context.md)
- [UIViewType](uiviewtype.md): The type of view to present.
