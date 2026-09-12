> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uiviewcontrollerrepresentable/makeuiviewcontroller(context:)](https://developer.apple.com/documentation/swiftui/uiviewcontrollerrepresentable/makeuiviewcontroller(context:))

# makeUIViewController(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Creates the view controller object and configures its initial state.

## Declaration

```swift
@MainActor @preconcurrency func makeUIViewController(context: Self.Context) -> Self.UIViewControllerType
```

## Parameters

- `context`: A context structure containing information about the current state of the system.

<a id="return-value"></a>

## Return Value

Your UIKit view controller configured with the provided information.

<a id="discussion"></a>

## Discussion

You must implement this method and use it to create your view controller object. Create the view controller using your app’s current data and contents of the `context` parameter. The system calls this method only once, when it creates your view controller for the first time. For all subsequent updates, the system calls the [updateUIViewController(\_:context:)](updateuiviewcontroller%28__context_%29.md) method.

## See Also

### Creating and updating the view controller

- [updateUIViewController(\_:context:)](updateuiviewcontroller%28__context_%29.md): Updates the state of the specified view controller with new information from SwiftUI.
- [UIViewControllerRepresentable.Context](context.md)
- [UIViewControllerType](uiviewcontrollertype.md): The type of view controller to present.
