> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewrepresentable/makecoordinator()](https://developer.apple.com/documentation/swiftui/nsviewrepresentable/makecoordinator())

# makeCoordinator()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates the custom instance that you use to communicate changes from your view to other parts of your SwiftUI interface.

## Declaration

```swift
@MainActor @preconcurrency func makeCoordinator() -> Self.Coordinator
```

<a id="discussion"></a>

## Discussion

Implement this method if changes to your view might affect other parts of your app. In your implementation, create a custom Swift instance that can communicate with other parts of your interface. For example, you might provide an instance that binds its variables to SwiftUI properties, causing the two to remain synchronized. If your view doesn’t interact with other parts of your app, you don’t have to provide a coordinator.

SwiftUI calls this method before calling the [makeNSView(context:)](makensview%28context_%29.md) method. The system provides your coordinator instance either directly or as part of a context structure when calling the other methods of your representable instance.

## Default Implementations

### NSViewRepresentable Implementations

- [makeCoordinator()](makecoordinator%28%29-6l2eg.md): Conforms when `Coordinator` is `()`. Creates a `Coordinator` instance to coordinate with the `NSView`.

## See Also

### Providing a custom coordinator object

- [Coordinator](coordinator.md): A type to coordinate with the view.
