> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingscenedelegate](https://developer.apple.com/documentation/swiftui/uihostingscenedelegate)

# UIHostingSceneDelegate

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 27.0+ · visionOS 26.0+

Extends `UIKit/UISceneDelegate` to bridge SwiftUI scenes.

## Declaration

```swift
protocol UIHostingSceneDelegate : UISceneDelegate
```

<a id="overview"></a>

## Overview

Declare any SwiftUI scenes you wish to activate from UIKit in the static `rootScene` property of your conforming class:

```swift
class HostingSceneDelegate: UIHostingSceneDelegate {
    static var rootScene: some Scene {
        WindowGroup(id: "swiftui-window") {
            ContentView()
        }
    }

    // Add UISceneDelegate lifecycle callbacks here
}
```

Use a class conforming to [UIHostingSceneDelegate](uihostingscenedelegate.md) to  activate a scene by its ID or presented value with `UISceneSessionActivationRequest`:

```swift
if let requestWithID = UISceneSessionActivationRequest(
    hostingDelegateClass: HostingSceneDelegate.self,
    id: "swiftui-window"
) {
    UIApplication.shared.activateSceneSession(for: requestWithID)
}

if let requestWithData = UISceneSessionActivationRequest(
    hostingDelegateClass: HostingSceneDelegate.self,
    value: FavoriteNumber(13)
) {
    UIApplication.shared.activateSceneSession(for: requestWithData)
}
```

When a SwiftUI scene declared in your `rootScene` property is activated, an instance of your conforming class will be created by SwiftUI and receive window scene lifecycle callbacks.

Your `UIHostingSceneDelegate` class can be used with a `UISceneConfiguration` in your app delegate’s `application(_:configurationForConnecting:options:)`method to activate a SwiftUI scene in response to an external event:

```swift
class AppDelegate: UIApplicationDelegate {

    func application(
        _ app: UIApplication,
        configurationForConnecting sceneSession: UISceneSession,
        options: UIScene.ConnectionOptions
    ) -> UISceneConfiguration {
        let config = UISceneConfiguration(
            name: nil, sessionRole: sceneSession.role)
        config.delegateClass = HostingSceneDelegate.self
        return config
    }

}
```

## Topics

### Associated Types

- [RootScene](uihostingscenedelegate/rootscene-swift.associatedtype.md)

### Type Properties

- [rootScene](uihostingscenedelegate/rootscene-swift.type.property.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Displaying SwiftUI views in UIKit

- [Using SwiftUI with UIKit](https://developer.apple.com/documentation/uikit/using-swiftui-with-uikit): Learn how to incorporate SwiftUI views into a UIKit app.
- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [UIHostingController](uihostingcontroller.md): A UIKit view controller that manages a SwiftUI view hierarchy.
- [UIHostingControllerSizingOptions](uihostingcontrollersizingoptions.md): Options for how a hosting controller tracks its content’s size.
- [UIHostingConfiguration](uihostingconfiguration.md): A content configuration suitable for hosting a hierarchy of SwiftUI views.
