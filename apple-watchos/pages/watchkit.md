> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit](https://developer.apple.com/documentation/watchkit)

# WatchKit (Swift)

**Framework:** WatchKit  
**Kind:** Framework  
**Availability:** watchOS 2.0+

Build watchOS apps that use features the app delegate monitors or controls, such as background tasks and extended runtime sessions.

<a id="overview"></a>

## Overview

The WatchKit framework provides infrastructure for creating watchOS apps, including an extension delegate that manages background tasks, extended runtime sessions, and Siri intents. The framework also performs other support tasks, such as accessing information about the user’s Apple Watch.

![An illustration showing a blueprint. The central image displays a drawing of an Apple Watch with gears inside it. There are sketches of icons on either side of the watch.](https://developer.apple.com/images/com.apple.watchkit/media-3987848@2x.png)

You can also use WatchKit to design your app’s user interface in a storyboard, connecting UI elements to an interface controller.

> **Note**

>  Building your app with SwiftUI gives you more control over the user interface than designing it in a storyboard. When creating a new watchOS app, strongly consider using [SwiftUI](https://developer.apple.com/documentation/swiftui). For more information, see [Building a watchOS app](watchos-apps/building_a_watchos_app.md).

For more information on building watchOS apps, see [watchOS apps](watchos-apps.md).

## Topics

### App structure

- [Setting up a watchOS project](watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplication](watchkit/wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](watchkit/wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](watchkit/wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](watchkit/wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain(\_:\_:\_:)](watchkit/wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](watchkit/wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

### Runtime management

- [Background execution](watchkit/background-execution.md): Manage background sessions and tasks.
- [Life cycles](watchkit/life-cycles.md): Receive and respond to life-cycle notifications.
- [Using extended runtime sessions](watchkit/using-extended-runtime-sessions.md): Create an extended runtime session that continues running your app after the user stops interacting with it.
- [WKExtendedRuntimeSession](watchkit/wkextendedruntimesession.md): A session that continues to run your app after the user has stopped interacting.
- [Interacting with Bluetooth peripherals during background app refresh](watchkit/interacting-with-bluetooth-peripherals-during-background-app-refresh.md): Keep your complications up-to-date by reading values from a Bluetooth peripheral while your app is running in the background.

### User interface

- [Storyboard support](watchkit/storyboard-support.md): Connect your code to storyboard elements using interface controllers, interface objects, and event handlers.
- [NowPlayingView](watchkit/nowplayingview.md): A view that displays the system’s Now Playing interface so that the user can control audio.

### Errors

- [WatchKitError](watchkit/watchkiterror.md): An error reported by WatchKit.

# WatchKit (Objective-C)

**Framework:** WatchKit  
**Kind:** Framework  
**Availability:** watchOS 2.0+

Build watchOS apps that use features the app delegate monitors or controls, such as background tasks and extended runtime sessions.

<a id="overview"></a>

## Overview

The WatchKit framework provides infrastructure for creating watchOS apps, including an extension delegate that manages background tasks, extended runtime sessions, and Siri intents. The framework also performs other support tasks, such as accessing information about the user’s Apple Watch.

![An illustration showing a blueprint. The central image displays a drawing of an Apple Watch with gears inside it. There are sketches of icons on either side of the watch.](https://developer.apple.com/images/com.apple.watchkit/media-3987848@2x.png)

You can also use WatchKit to design your app’s user interface in a storyboard, connecting UI elements to an interface controller.

> **Note**

>  Building your app with SwiftUI gives you more control over the user interface than designing it in a storyboard. When creating a new watchOS app, strongly consider using [SwiftUI](https://developer.apple.com/documentation/swiftui). For more information, see [Building a watchOS app](watchos-apps/building_a_watchos_app.md).

For more information on building watchOS apps, see [watchOS apps](watchos-apps.md).

## Topics

### App structure

- [Setting up a watchOS project](watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplication](watchkit/wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](watchkit/wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](watchkit/wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](watchkit/wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain](watchkit/wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKInterfaceDevice](watchkit/wkinterfacedevice.md): An object that provides information about the user’s Apple Watch.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

### Runtime management

- [Background execution](watchkit/background-execution.md): Manage background sessions and tasks.
- [Life cycles](watchkit/life-cycles.md): Receive and respond to life-cycle notifications.
- [Using extended runtime sessions](watchkit/using-extended-runtime-sessions.md): Create an extended runtime session that continues running your app after the user stops interacting with it.
- [WKExtendedRuntimeSession](watchkit/wkextendedruntimesession.md): A session that continues to run your app after the user has stopped interacting.
- [Interacting with Bluetooth peripherals during background app refresh](watchkit/interacting-with-bluetooth-peripherals-during-background-app-refresh.md): Keep your complications up-to-date by reading values from a Bluetooth peripheral while your app is running in the background.

### User interface

- [Storyboard support](watchkit/storyboard-support.md): Connect your code to storyboard elements using interface controllers, interface objects, and event handlers.

### Errors

- [WatchKitErrorCode](watchkit/watchkiterror/code.md): Error codes reported by WatchKit.
- [WatchKitErrorDomain](watchkit/watchkiterrordomain.md): The domain for WatchKit errors.

### Macros

- [Macros](watchkit/watchkit-macros.md)
