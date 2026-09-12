> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentable/makecoordinator()](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentable/makecoordinator())

# makeCoordinator()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates the custom object that you use to communicate changes from your view controller to other parts of your SwiftUI interface.

## Declaration

```swift
@MainActor @preconcurrency func makeCoordinator() -> Self.Coordinator
```

<a id="discussion"></a>

## Discussion

Implement this method if changes to your view controller might affect other parts of your app. In your implementation, create a custom Swift instance that can communicate with other parts of your interface. For example, you might provide an instance that binds its variables to SwiftUI properties, causing the two to remain synchronized. If your view controller doesn’t interact with other parts of your app, providing a coordinator is unnecessary.

SwiftUI calls this method before calling the [makeNSViewController(context:)](makensviewcontroller%28context_%29.md) method. The system provides your coordinator instance either directly or as part of a context structure when calling the other methods of your representable instance.

## Default Implementations

### NSViewControllerRepresentable Implementations

- [makeCoordinator()](makecoordinator%28%29-72re2.md): Conforms when `Coordinator` is `()`. Creates an object to coordinate with the AppKit view controller.

## See Also

### Providing a custom coordinator object

- [Coordinator](coordinator.md): A type to coordinate with the view controller.
