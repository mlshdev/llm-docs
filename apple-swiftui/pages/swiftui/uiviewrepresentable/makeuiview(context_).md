> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewrepresentable/makeuiview(context:)](https://developer.apple.com/documentation/swiftui/uiviewrepresentable/makeuiview(context:))

# makeUIView(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Creates the view object and configures its initial state.

## Declaration

```swift
@MainActor @preconcurrency func makeUIView(context: Self.Context) -> Self.UIViewType
```

## Parameters

- `context`: A context structure containing information about the current state of the system.

<a id="return-value"></a>

## Return Value

Your UIKit view configured with the provided information.

<a id="discussion"></a>

## Discussion

You must implement this method and use it to create your view object. Configure the view using your app’s current data and contents of the `context` parameter. The system calls this method only once, when it creates your view for the first time. For all subsequent updates, the system calls the [updateUIView(\_:context:)](updateuiview%28__context_%29.md) method.

## See Also

### Creating and updating the view

- [updateUIView(\_:context:)](updateuiview%28__context_%29.md): Updates the state of the specified view with new information from SwiftUI.
- [UIViewRepresentable.Context](context.md)
- [UIViewType](uiviewtype.md): The type of view to present.
