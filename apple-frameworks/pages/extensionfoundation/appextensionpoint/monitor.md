> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor)

# AppExtensionPoint.Monitor

**Framework:** ExtensionFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

A type you use to discover the app extensions available for your host app to use.

## Declaration

```swift
final class Monitor
```

## Mentioned In

- [Discovering app extensions from your app](../discovering-app-extensions-from-your-app.md)

<a id="overview"></a>

## Overview

A host app uses this type to discover the app extensions that are ready for it to use. This type provides both a static list of current extensions and a way for you to monitor changes in app extension availability. You can use items from this list to instantiate an [AppExtensionProcess](../appextensionprocess.md) type when you’re ready to run the app extension’s code.

Create a `Monitor` in your code and configure it with the extension points you want to track. When you add an extension point to the monitor, the type adds the associated app extensions to its [identities](monitor/identities.md) property. The property contains only the app extensions that are available for your app to use, and doesn’t include disabled or unapproved app extensions. The following example shows how to use the currently available app extensions for one of the app’s defined extension points.

```
let someExtensionPoint = AppExtensionPoint.myExampleExtensionPoint

// Get a snapshot of available extensions.
let identitiesSnapshot = try await AppExtensionPoint.Monitor(someExtensionPoint).identities
```

The system manages the list of installed app extensions and updates that list when someone installs or removes an app. The device owner must also approve any newly installed extensions before apps can use them. While your app runs, you can observe the [identities](monitor/identities.md) property and respond to these changes asynchronously. The following code creates a task to wait on changes to the list of identities:

```
let monitor = AppExtensionPoint.Monitor(appExtensionPoint:someExtensionPoint)

let identitiesUpdates = Observations { monitor.identities }
Task {
  for await update in identitiesUpdates {
    // Handle update.
  }
}
```

To present a UI with the list of enabled and disabled app extensions, use the [EXAppExtensionBrowserViewController](../../extensionkit/exappextensionbrowserviewcontroller.md) type.

## Topics

### Creating a monitor

- [init()](monitor/init%28%29.md): Creates a new monitor without any extension points.
- [init(appExtensionPoint:)](monitor/init%28appextensionpoint_%29.md): Creates a new monitor and configures it with the specified extension point.

### Adding and removing extension points

- [addAppExtensionPoint(\_:)](monitor/addappextensionpoint%28__%29.md): Begins the tracking of app extensions that support the specified extension point.
- [removeAppExtensionPoint(\_:)](monitor/removeappextensionpoint%28__%29.md): Removes the specified extension point and stops tracking the associated app extensions.

### Getting the available app extensions

- [identities](monitor/identities.md): The app extensions currently available to use with the monitored extension points.

### Getting the monitor state

- [state](monitor/state-swift.property.md): The current details about the available, disabled, and unapproved extensions.
- [AppExtensionPoint.Monitor.State](monitor/state-swift.struct.md): A type that contains a snapshot of a monitor’s state information.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
