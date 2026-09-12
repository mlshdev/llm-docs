> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nsapplicationdelegateadaptor](https://developer.apple.com/documentation/swiftui/nsapplicationdelegateadaptor)

# NSApplicationDelegateAdaptor

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 11.0+

A property wrapper type that you use to create an AppKit app delegate.

## Declaration

```swift
@MainActor @preconcurrency @propertyWrapper struct NSApplicationDelegateAdaptor<DelegateType> where DelegateType : NSObject, DelegateType : NSApplicationDelegate
```

## Mentioned In

- [Migrating to the SwiftUI life cycle](migrating-to-the-swiftui-life-cycle.md)

<a id="overview"></a>

## Overview

To handle app delegate callbacks in an app that uses the SwiftUI life cycle, define a type that conforms to the [NSApplicationDelegate](https://developer.apple.com/documentation/appkit/nsapplicationdelegate) protocol, and implement the delegate methods that you need. For example, you can implement the [application(\_:didRegisterForRemoteNotificationsWithDeviceToken:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:didregisterforremotenotificationswithdevicetoken:%29) method to handle remote notification registration:

```swift
class MyAppDelegate: NSObject, NSApplicationDelegate, ObservableObject {
    func application(
        _ application: NSApplication,
        didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
    ) {
        // Record the device token.
    }
}
```

Then use the `NSApplicationDelegateAdaptor` property wrapper inside your [App](app.md) declaration to tell SwiftUI about the delegate type:

```swift
@main
struct MyApp: App {
    @NSApplicationDelegateAdaptor private var appDelegate: MyAppDelegate

    var body: some Scene { ... }
}
```

SwiftUI instantiates the delegate and calls the delegate’s methods in response to life cycle events. Define the delegate adaptor only in your [App](app.md) declaration, and only once for a given app. If you declare it more than once, SwiftUI generates a runtime error.

If your app delegate conforms to the [ObservableObject](https://developer.apple.com/documentation/combine/observableobject) protocol, as in the example above, then SwiftUI puts the delegate it creates into the [Environment](environment.md). You can access the delegate from any scene or view in your app using the [EnvironmentObject](environmentobject.md) property wrapper:

```swift
@EnvironmentObject private var appDelegate: MyAppDelegate
```

This enables you to use the dollar sign (`$`) prefix to get a binding to published properties that you declare in the delegate. For more information, see [projectedValue](nsapplicationdelegateadaptor/projectedvalue.md).

> **Important**

> Manage an app’s life cycle events without using an app delegate whenever possible. For example, prefer to handle changes in [ScenePhase](scenephase.md) instead of relying on delegate callbacks, like [applicationDidFinishLaunching(\_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidfinishlaunching%28_:%29).

## Topics

### Creating a delegate adaptor

- [init(\_:)](nsapplicationdelegateadaptor/init%28__%29.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `NSApplicationDelegate`, and `DelegateType` conforms to `Observable`. Creates an AppKit app delegate adaptor using an observable delegate.

### Getting the delegate adaptor

- [projectedValue](nsapplicationdelegateadaptor/projectedvalue.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `NSApplicationDelegate`, and `DelegateType` conforms to `ObservableObject`. A projection of the observed object that provides bindings to its properties.
- [wrappedValue](nsapplicationdelegateadaptor/wrappedvalue.md): The underlying delegate.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
