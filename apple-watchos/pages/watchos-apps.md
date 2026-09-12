> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-apps](https://developer.apple.com/documentation/watchos-apps)

# watchOS apps

Build watchOS apps that combine complications, notifications, and Siri to create a personal experience on Apple Watch.

<a id="Overview"></a>

## Overview

Apple Watch provides easy access to vital information on someone’s wrist. The watchOS experience focuses on quick actions that achieve useful tasks through brief, punctuated interactions.

![An illustration showing an Apple Watch surrounded by icons representing common features, including creating user interfaces, playing background audio, and displaying custom notifications.](https://developer.apple.com/images/com.apple.watchOS-Apps/WatchKit-1@2x.png)

On Apple Watch, keep interactions as short as possible. Provide vital information at a glance, encouraging the wearer to respond with just a few taps, and then drop their wrist and move on. They don’t need to wait to see if the action succeeds; instead, the watchOS app automatically notifies them of any important updates.

For watchOS, expect to spend more time planning, designing, and refining your app’s experience than writing the actual code. For design guidance, see [Designing for watchOS](https://developer.apple.com/design/human-interface-guidelines/platforms/designing-for-watchos/).

When designing a watchOS app, mix a combination of the following technologies to create a richer experience.

<a id="The-watchOS-app"></a>

## The watchOS app

The main app serves as the foundation for your watchOS app experience. Anyone can launch and interact with your app directly. However, the app’s interface isn’t necessarily the primary way people interact with your app. Many may prefer to interact through complications or notifications, and may never explicitly launch your app.

![An illustration of a watch face showing four watchOS app icons.](https://developer.apple.com/images/com.apple.watchOS-Apps/app@2x.png)

<a id="Complications"></a>

## Complications

Complications provide small glimpses into your app’s data directly on the watch face. People can add complications to most watch faces, but space is limited. Design complications to show information that is timely, up to date, and useful. People can also launch the watchOS app quickly and easily by tapping a complication.

![An illustration of a watch face with the corners highlighted to represent corner complications.](https://developer.apple.com/images/com.apple.watchOS-Apps/complications@2x.png)

<a id="Notifications"></a>

## Notifications

Use notifications to alert people of significant events. You can also provide actions so that people can respond immediately without opening your app. You can use either local or remote notifications to communicate, even when your app isn’t running.

![An illustration of a watch face showing a notification icon and two bars representing notification text.](https://developer.apple.com/images/com.apple.watchOS-Apps/notification@2x.png)

<a id="Siri"></a>

## Siri

Use SiriKit and App intents to expand the ways people can interact with your app. If your app uses domains like messaging or media, use [SiriKit](https://developer.apple.com/documentation/sirikit) to add Siri support to your app. For other features, use [App Intents](https://developer.apple.com/documentation/appintents) to expose your app’s functionality to system services like Siri and the Shortcuts app.

![An illustration of a watch face showing the Siri icon and the text What can I help you with?](https://developer.apple.com/images/com.apple.watchOS-Apps/siri@2x.png)

## Topics

### Essentials

Create your first watchOS app.

- [Creating an intuitive and effective UI in watchOS 10](watchos-apps/creating-an-intuitive-and-effective-ui-in-watchos-10.md): Provide an even more streamlined, consistent, and glanceable user experience with new design features.
- [Updating your app and widgets for watchOS 10](watchos-apps/updating-your-app-and-widgets-for-watchos-10.md): Integrate SwiftUI elements and watch-specific features, and build widgets for the Smart Stack.
- [Building a watchOS app](watchos-apps/building_a_watchos_app.md): Set up your app’s life cycle and create its user interface with SwiftUI.
- [watchOS updates](https://developer.apple.com/documentation/updates/watchos): Learn about important changes to watchOS.
- [Migrating to a single-target watchOS app](watchos-apps/migrating-to-a-single-target-watchos-app.md): Adopt the single-target configuration to simplify your project and avoid ambiguity about where to store resources and apply entitlements.

### App experience

Craft a complete app experience on the wearer’s wrist.

- [Setting up a watchOS project](watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [Creating independent watchOS apps](watchos-apps/creating-independent-watchos-apps.md): Set up a watchOS app that installs and runs without a companion iOS app.
- [Keeping your watchOS content up to date](watchos-apps/keeping-your-watchos-app-s-content-up-to-date.md): Ensure that your app’s content is relevant and up to date.
- [Updating watchOS apps with timelines](watchos-apps/updating-watchos-apps-with-timelines.md): Seamlessly schedule updates to your user interface, even while it’s inactive.
- [Authenticating users on Apple Watch](watchos-apps/authenticating-users-on-apple-watch.md): Create an account sign-up and sign-in strategy for your app.
- [Responding to the Action button on Apple Watch Ultra](https://developer.apple.com/documentation/appintents/actionbuttonarticle): Use App Intents to register actions for your app.
- [Enabling the double-tap gesture on Apple Watch](watchos-apps/enabling-double-tap.md): Customize your app’s response to the double-tap gesture on Apple Watch.

### Accessibility

Build accessibility into your app’s initial design. For a detailed discussion about helping a wide range of people more easily interact with your app, see [Accessibility](https://developer.apple.com/documentation/accessibility).

- [Create accessible experiences for watchOS](watchos-apps/create-accessible-experiences-for-watchos.md): Learn how to make your watchOS app more accessible.

### User interface

Design an adaptive interface that highlights your app’s most important data. For a detailed discussion about building user interfaces, see [SwiftUI](https://developer.apple.com/documentation/swiftui).

- [Building a productivity app for Apple Watch](watchos-apps/building-a-productivity-app-for-apple-watch.md): Create a watch app to manage and share a task list and visualize the status with a chart.
- [Supporting multiple watch sizes](watchos-apps/supporting-multiple-watch-sizes.md): Customize the layout of your user interface to support all Apple Watch sizes.
- [Designing your app for the Always On state](watchos-apps/designing-your-app-for-the-always-on-state.md): Customize your watchOS app’s user interface for continuous display.
- [Setting the app’s accent color](watchos-apps/setting-the-app-s-accent-color.md): Set your app’s accent color.

### Complications

Use WidgetKit to create complications on the watch face that provide quick access to useful information from your app. For a detailed discussion on creating and updating complications, see [WidgetKit](https://developer.apple.com/documentation/widgetkit).

- [Creating accessory widgets and watch complications](https://developer.apple.com/documentation/widgetkit/creating-accessory-widgets-and-watch-complications): Support accessory widgets that appear on the Lock Screen and as complications on Apple Watch.
- [Migrating ClockKit complications to WidgetKit](https://developer.apple.com/documentation/widgetkit/converting-a-clockkit-app): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [Creating a widget extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension): Display your app’s content in a convenient, informative widget on various devices.
- [Keeping a widget up to date](https://developer.apple.com/documentation/widgetkit/keeping-a-widget-up-to-date): Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.
- [Increasing the visibility of widgets in Smart Stacks](https://developer.apple.com/documentation/widgetkit/widget-suggestions-in-smart-stacks): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.

### Notifications

Use notifications to string together longer workflows.

- [Notifications](watchos-apps/notifications.md): Communicate with users even when your app isn’t running.

### Siri

Build a voice-based interface for your app. For a detailed discussion about exposing your app’s features to system services like Siri and the Shortcut app, see [App Intents](https://developer.apple.com/documentation/appintents) and [SiriKit](https://developer.apple.com/documentation/sirikit).

- [Making actions and content discoverable by Apple Intelligence](https://developer.apple.com/documentation/appintents/making-actions-and-content-discoverable-by-apple-intelligence): Equip the system so that Siri can work with your app by adding specific schemas from relevant domains.
- [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension): Add and configure an Intents app extension in your Xcode project.

### Health and fitness

Create health and fitness apps for watchOS. For detailed information about designing health and fitness apps, see [HealthKit](https://developer.apple.com/documentation/healthkit).

- [Setting up HealthKit](https://developer.apple.com/documentation/healthkit/setting-up-healthkit): Set up and configure your HealthKit store.
- [Authorizing access to health data](https://developer.apple.com/documentation/healthkit/authorizing-access-to-health-data): Request permission to read and share data in your app.
- [Saving data to HealthKit](https://developer.apple.com/documentation/healthkit/saving-data-to-healthkit): Create and share HealthKit samples.
- [Reading data from HealthKit](https://developer.apple.com/documentation/healthkit/reading-data-from-healthkit): Use queries to request sample data from HealthKit.
- [Build a workout app for Apple Watch](https://developer.apple.com/documentation/healthkit/build-a-workout-app-for-apple-watch): Create your own workout app, quickly and easily, with HealthKit and SwiftUI.

### Runtime management

Extend your watch’s ability to run even when no one is interacting with it. For the complete API, see [WatchKit](watchkit.md).

- [Background execution](watchkit/background-execution.md): Manage background sessions and tasks.
- [Life cycles](watchkit/life-cycles.md): Receive and respond to life-cycle notifications.
- [Using extended runtime sessions](watchkit/using-extended-runtime-sessions.md): Create an extended runtime session that continues running your app after the user stops interacting with it.
- [Interacting with Bluetooth peripherals during background app refresh](watchkit/interacting-with-bluetooth-peripherals-during-background-app-refresh.md): Keep your complications up-to-date by reading values from a Bluetooth peripheral while your app is running in the background.

### Network requests

Download information directly to the watch. For a detailed discussion about downloading and uploading data, see [URLSession](https://developer.apple.com/documentation/foundation/urlsession).

- [Making default and ephemeral requests](watchos-apps/making-default-and-ephemeral-requests.md): Send requests from your app when it’s running in the foreground.
- [Making background requests](watchos-apps/making-background-requests.md): Send requests from your app when it’s running in the background.

### Unit tests

Build and run unit tests for your watchOS app. For a detailed discussion about creating unit tests, see [XCTest](https://developer.apple.com/documentation/xctest).

- [Setting up tests for your watchOS app](watchos-apps/setting-up-tests-for-your-watchos-app.md): Configure your watch-only project with unit tests and user interface tests.
