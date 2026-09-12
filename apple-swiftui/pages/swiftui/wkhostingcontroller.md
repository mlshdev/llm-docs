> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkhostingcontroller](https://developer.apple.com/documentation/swiftui/wkhostingcontroller)

# WKHostingController

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** watchOS 6.0+

A WatchKit interface controller that hosts a SwiftUI view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency class WKHostingController<Body> where Body : View
```

<a id="overview"></a>

## Overview

A [WKHostingController](wkhostingcontroller.md) presents and manages your app’s main interface using SwiftUI views. You must subclass [WKHostingController](wkhostingcontroller.md) and override the [body](wkhostingcontroller/body.md) property to provide the set of SwiftUI views you want to display. Display the content of your hosting controller as you would any other [WKInterfaceController](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller) object. For example, you can include it as one of your app’s root interface controllers, or present it modally.

## Topics

### Creating a hosting controller object

- [init()](wkhostingcontroller/init%28%29.md): Creates a hosting controller object that you can use to implement your app’s main interface using SwiftUI views

### Getting the root view

- [body](wkhostingcontroller/body.md): The root view of the view hierarchy to display for your interface controller.

### Updating the root view

- [updateBodyIfNeeded()](wkhostingcontroller/updatebodyifneeded%28%29.md): Updates the interface controller’s set of views immediately, if updates are pending.
- [setNeedsBodyUpdate()](wkhostingcontroller/setneedsbodyupdate%28%29.md): Invalidates the current SwiftUI views and triggers an update during the next cycle.

## Relationships

### Inherits From

- [WKInterfaceController](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Displaying SwiftUI views in WatchKit

- [WKUserNotificationHostingController](wkusernotificationhostingcontroller.md): A WatchKit user notification interface controller that hosts a SwiftUI view hierarchy.
