> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkextensiondelegateadaptor/init(_:)](https://developer.apple.com/documentation/swiftui/wkextensiondelegateadaptor/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 10.0+ (deprecated in 10.0)

Creates a WatchKit extension delegate adaptor using an observable delegate.

> Use WKApplicationDelegateAdaptor with a WKApplicationDelegate instead.

## Declaration

```swift
@MainActor @preconcurrency init(_ delegateType: DelegateType.Type = DelegateType.self)
```

## Parameters

- `delegateType`: The type of extension delegate that you define in your app, which conforms to the [WKExtensionDelegate](https://developer.apple.com/documentation/watchkit/wkextensiondelegate) and [Observable](https://developer.apple.com/documentation/observation/observable) protocols.

<a id="discussion"></a>

## Discussion

Call this initializer indirectly by creating a property with the [WKExtensionDelegateAdaptor](../wkextensiondelegateadaptor.md) property wrapper from inside your [App](../app.md) declaration:

```swift
@main
struct MyApp: App {
    @WKExtensionDelegateAdaptor private var extensionDelegate: MyExtensionDelegate

    var body: some Scene { ... }
}
```

SwiftUI initializes the delegate and manages its lifetime, calling it as needed to handle extension delegate callbacks.

SwiftUI invokes this method when your app delegate conforms to the [Observable](https://developer.apple.com/documentation/observation/observable) protocol. In this case, SwiftUI automatically places the delegate in the [Environment](../environment.md). You can access such a delegate from any scene or view in your app using the [Environment](../environment.md) property wrapper:

```swift
@Environment(MyAppDelegate.self) private var appDelegate
```

If your delegate isn’t observable, SwiftUI invokes the [init(\_:)](https://developer.apple.com/documentation/swiftui/wkextensiondelegateadaptor/init%28_:%29-2556) initializer rather than this one, and doesn’t put the delegate instance in the environment.
