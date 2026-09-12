> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentable/makensviewcontroller(context:)](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable/makensviewcontroller(context:))

# makeNSViewController(context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates the view controller object and configures its initial state.

## Declaration

```swift
@MainActor @preconcurrency func makeNSViewController(context: Self.Context) -> Self.NSViewControllerType
```

## Parameters

- `context`: A context structure containing information about the current state of the system.

<a id="return-value"></a>

## Return Value

Your AppKit view controller configured with the provided information.

<a id="discussion"></a>

## Discussion

You must implement this method and use it to create your view controller object. Create the view controller using your app’s current data and contents of the `context` parameter. The system calls this method only once, when it creates your view controller for the first time. For all subsequent updates, the system calls the [updateNSViewController(\_:context:)](updatensviewcontroller%28__context_%29.md) method.

## See Also

### Creating and updating the view controller

- [updateNSViewController(\_:context:)](updatensviewcontroller%28__context_%29.md): Updates the state of the specified view controller with new information from SwiftUI.
- [NSViewControllerRepresentable.Context](context.md)
- [NSViewControllerType](nsviewcontrollertype.md): The type of view controller to present.
