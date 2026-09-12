> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsapplicationdelegateadaptor/init(_:)](https://developer.apple.com/documentation/swiftui/nsapplicationdelegateadaptor/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates an AppKit app delegate adaptor using an observable delegate.

## Declaration

```swift
@MainActor @preconcurrency init(_ delegateType: DelegateType.Type = DelegateType.self)
```

## Parameters

- `delegateType`: The type of application delegate that you define in your app, which conforms to the [NSApplicationDelegate](https://developer.apple.com/documentation/appkit/nsapplicationdelegate) and [Observable](https://developer.apple.com/documentation/observation/observable) protocols.

<a id="discussion"></a>

## Discussion

Call this initializer indirectly by creating a property with the [NSApplicationDelegateAdaptor](../nsapplicationdelegateadaptor.md) property wrapper from inside your [App](../app.md) declaration:

```swift
@main
struct MyApp: App {
    @NSApplicationDelegateAdaptor private var appDelegate: MyAppDelegate

    var body: some Scene { ... }
}
```

SwiftUI initializes the delegate and manages its lifetime, calling it as needed to handle application delegate callbacks.

SwiftUI invokes this method when your app delegate conforms to the [Observable](https://developer.apple.com/documentation/observation/observable) protocol. In this case, SwiftUI automatically places the delegate in the [Environment](../environment.md). You can access such a delegate from any scene or view in your app using the [Environment](../environment.md) property wrapper:

```swift
@Environment(MyAppDelegate.self) private var appDelegate
```

If your delegate isn’t observable, SwiftUI invokes the [init(\_:)](https://developer.apple.com/documentation/swiftui/nsapplicationdelegateadaptor/init%28_:%29-67u91) initializer rather than this one, and doesn’t put the delegate instance in the environment.
