> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkinterfaceobjectrepresentable/makecoordinator()](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable/makecoordinator())

# makeCoordinator()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Creates the custom instance that you use to communicate changes from your interface object to other parts of your SwiftUI interface.

## Declaration

```swift
@MainActor @preconcurrency func makeCoordinator() -> Self.Coordinator
```

<a id="discussion"></a>

## Discussion

Implement this method if changes to your interface object might affect other parts of your app. In your implementation, create a custom Swift instance that can communicate with other parts of your interface. For example, you might provide an instance that binds its variables to SwiftUI properties, causing the two to remain synchronized. If your interface object doesn’t interact with other parts of your app, providing a coordinator is unnecessary.

SwiftUI calls this method before calling the [makeWKInterfaceObject(context:)](makewkinterfaceobject%28context_%29.md) method. The system provides your coordinator either directly or as part of a context structure when calling the other methods of your representable instance.

## Default Implementations

### WKInterfaceObjectRepresentable Implementations

- [makeCoordinator()](makecoordinator%28%29-80qlf.md): Conforms when `Coordinator` is `()`. Creates the custom instance that you use to communicate changes from your interface object to other parts of your SwiftUI interface.

## See Also

### Providing a custom coordinator object

- [Coordinator](coordinator.md): A type to coordinate with the WatchKit interface object.
- [WKInterfaceObjectType](wkinterfaceobjecttype.md): The type of WatchKit interface object to be presented.
