> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsviewcontrollerrepresentablecontext/coordinator](https://developer.apple.com/documentation/swiftui/nsviewcontrollerrepresentablecontext/coordinator)

# coordinator

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

An object you use to communicate your AppKit view controller’s behavior and state out to SwiftUI objects.

## Declaration

```swift
@MainActor @preconcurrency let coordinator: ViewController.Coordinator
```

<a id="discussion"></a>

## Discussion

The coordinator is a custom object you define. When updating your view controller, communicate changes to SwiftUI by updating the properties of your coordinator, or by calling relevant methods to make those changes. The implementation of those properties and methods are responsible for updating the appropriate SwiftUI values. For example, you might define a property in your coordinator that binds to a SwiftUI value, as shown in the following code example. Changing the property updates the value of the corresponding SwiftUI variable.

```swift
class Coordinator: NSObject {
   @Binding var rating: Int
   init(rating: Binding<Int>) {
      $rating = rating
   }
}
```

To create and configure your custom coordinator, implement the [makeCoordinator()](../nsviewcontrollerrepresentable/makecoordinator%28%29.md) method of your [NSViewControllerRepresentable](../nsviewcontrollerrepresentable.md) object.

## See Also

### Coordinating view-related interactions

- [transaction](transaction.md): The current transaction.
