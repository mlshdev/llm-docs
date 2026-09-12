> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkusernotificationhostingcontroller](https://developer.apple.com/documentation/swiftui/wkusernotificationhostingcontroller)

# WKUserNotificationHostingController

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** watchOS 6.0+

A WatchKit user notification interface controller that hosts a SwiftUI view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency class WKUserNotificationHostingController<Body> where Body : View
```

<a id="overview"></a>

## Overview

A [WKUserNotificationHostingController](wkusernotificationhostingcontroller.md) presents and manages your app’s notification interface using SwiftUI views. You must subclass [WKUserNotificationHostingController](wkusernotificationhostingcontroller.md) and override the [body](wkusernotificationhostingcontroller/body.md) property to provide the set of SwiftUI views you want to display. In the storyboard of your watch app, specify the name of your custom class for your dynamic interactive interface.

## Topics

### Creating a hosting controller object

- [init()](wkusernotificationhostingcontroller/init%28%29.md): Creates a notification hosting controller object that you can use to implement your notification interfaces using SwiftUI views.

### Getting the root view

- [body](wkusernotificationhostingcontroller/body.md): The root view of the view hierarchy to display for your notification interface.

### Configuring the notification

- [coalescedDescriptionFormat](wkusernotificationhostingcontroller/coalesceddescriptionformat.md): The format string to display when multiple notifications of the same type arrive simultaneously. If you specify a custom string, you can use the %d variable to reflect the number of notifications. If `nil` format will be the system default.
- [isInteractive](wkusernotificationhostingcontroller/isinteractive.md): If the notification should accept user input.
- [sashColor](wkusernotificationhostingcontroller/sashcolor.md): Color to use within the sash of the long look interface. If `nil` the sash will be the default system color.
- [subtitleColor](wkusernotificationhostingcontroller/subtitlecolor.md): The color to apply to the subtitle text displayed in the short look interface. If `nil` the text will be the default system color.
- [titleColor](wkusernotificationhostingcontroller/titlecolor.md): The color to apply to the text displayed in the sash. If `nil` the text will be the default system color.
- [wantsSashBlur](wkusernotificationhostingcontroller/wantssashblur.md): If the sash should include a blur over the background.

## Relationships

### Inherits From

- [WKUserNotificationInterfaceController](https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Displaying SwiftUI views in WatchKit

- [WKHostingController](wkhostingcontroller.md): A WatchKit interface controller that hosts a SwiftUI view hierarchy.
