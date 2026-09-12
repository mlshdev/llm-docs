> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsapplicationdelegateadaptor/projectedvalue](https://developer.apple.com/documentation/swiftui/nsapplicationdelegateadaptor/projectedvalue)

# projectedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A projection of the observed object that provides bindings to its properties.

## Declaration

```swift
@MainActor @preconcurrency var projectedValue: ObservedObject<DelegateType>.Wrapper { get }
```

<a id="discussion"></a>

## Discussion

Use the projected value to get a binding to a value that the delegate publishes. Access the projected value by prefixing the name of the delegate instance with a dollar sign (`$`). For example, you might publish a Boolean value in your application delegate:

```swift
class MyAppDelegate: NSObject, NSApplicationDelegate, ObservableObject {
    @Published var isEnabled = false

    // ...
}
```

If you declare the delegate in your [App](../app.md) using the [NSApplicationDelegateAdaptor](../nsapplicationdelegateadaptor.md) property wrapper, you can get the delegate that SwiftUI instantiates from the environment and access a binding to its published values from any view in your app:

```swift
struct MyView: View {
    @EnvironmentObject private var appDelegate: MyAppDelegate

    var body: some View {
        Toggle("Enabled", isOn: $appDelegate.isEnabled)
    }
}
```

## See Also

### Getting the delegate adaptor

- [wrappedValue](wrappedvalue.md): The underlying delegate.
