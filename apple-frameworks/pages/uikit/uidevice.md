> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice](https://developer.apple.com/documentation/uikit/uidevice)

# UIDevice (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A representation of the current device.

## Declaration

```swift
@MainActor class UIDevice
```

<a id="overview"></a>

## Overview

Use a [UIDevice](uidevice.md) object to get information about the device such as assigned name, device model, and operating-system name and version. You also use the `UIDevice` instance to detect changes in the device’s characteristics, such as physical orientation. You get the current orientation using the [orientation](uidevice/orientation.md) property or receive change notifications by registering for the [orientationDidChangeNotification](uidevice/orientationdidchangenotification.md) notification. Before using either of these techniques to get orientation data, you must enable data delivery using the [beginGeneratingDeviceOrientationNotifications()](uidevice/begingeneratingdeviceorientationnotifications%28%29.md) method. When you no longer need to track the device orientation, call the [endGeneratingDeviceOrientationNotifications()](uidevice/endgeneratingdeviceorientationnotifications%28%29.md) method to disable the delivery of notifications.

Similarly, you can use the `UIDevice` instance to obtain information and notifications about changes to the battery’s charge state (described by the [batteryState](uidevice/batterystate-swift.property.md) property) and charge level (described by the [batteryLevel](uidevice/batterylevel.md) property). The `UIDevice` instance also provides access to the proximity sensor state (described by the [proximityState](uidevice/proximitystate.md) property). The proximity sensor detects whether the user is holding the device close to their face. Enable battery monitoring or proximity sensing only when you need it.

You can also use the [playInputClick()](uidevice/playinputclick%28%29.md) instance method to play keyboard input clicks in custom input and keyboard accessory views.

## Topics

### Getting the shared device instance

- [current](uidevice/current.md): An object that represents the current device.

### Identifying the device and operating system

- [name](uidevice/name.md): The name of the device.
- [systemName](uidevice/systemname.md): The name of the operating system running on the device.
- [systemVersion](uidevice/systemversion.md): The current version of the operating system.
- [model](uidevice/model.md): The model of the device.
- [localizedModel](uidevice/localizedmodel.md): The model of the device as a localized string.
- [userInterfaceIdiom](uidevice/userinterfaceidiom.md): The style of interface to use on the current device.
- [identifierForVendor](uidevice/identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

### Determining the available features

- [isMultitaskingSupported](uidevice/ismultitaskingsupported.md): A Boolean value that indicates whether the current device supports multitasking.

### Tracking the device orientation

- [orientation](uidevice/orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](uideviceorientation.md): Constants that describe the physical orientation of the device.
- [isGeneratingDeviceOrientationNotifications](uidevice/isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications()](uidevice/begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications()](uidevice/endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.

### Determining the current orientation

- [isPortrait](uideviceorientation/isportrait.md): A Boolean value that indicates whether the device is in a portrait orientation.
- [isLandscape](uideviceorientation/islandscape.md): A Boolean value that indicates whether the device is in a landscape orientation.
- [isFlat](uideviceorientation/isflat.md): A Boolean value that indicates whether the specified orientation is face up or face down.
- [isValidInterfaceOrientation](uideviceorientation/isvalidinterfaceorientation.md): A Boolean value that indicates whether the specified orientation is one of the portrait or landscape orientations.

### Getting the device battery state

- [batteryLevel](uidevice/batterylevel.md): The battery charge level for the device.
- [isBatteryMonitoringEnabled](uidevice/isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [batteryState](uidevice/batterystate-swift.property.md): The battery state for the device.
- [UIDevice.BatteryState](uidevice/batterystate-swift.enum.md): Constants that describe the battery power state of the device.

### Using the proximity sensor

- [isProximityMonitoringEnabled](uidevice/isproximitymonitoringenabled.md): A Boolean value that indicates whether proximity monitoring is enabled.
- [proximityState](uidevice/proximitystate.md): A Boolean value that indicates whether the proximity sensor is close to the user.

### Playing input clicks

- [playInputClick()](uidevice/playinputclick%28%29.md): Plays an input click in an enabled input view.

### Getting the current idiom

- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [UI_USER_INTERFACE_IDIOM()](ui_user_interface_idiom%28%29.md): Deprecated. Returns the interface idiom supported by the current device (recommended for apps that run in versions of iOS earlier than 3.2).

### Managing notifications

All [UIDevice](uidevice.md) notifications are posted by the singleton device instance returned by [current](uidevice/current.md).

- [batteryLevelDidChangeNotification](uidevice/batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [batteryStateDidChangeNotification](uidevice/batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [orientationDidChangeNotification](uidevice/orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [proximityStateDidChangeNotification](uidevice/proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.

### Structures

- [UIDevice.BatteryLevelDidChangeMessage](uidevice/batteryleveldidchangemessage.md)
- [UIDevice.BatteryStateDidChangeMessage](uidevice/batterystatedidchangemessage.md)
- [UIDevice.OrientationDidChangeMessage](uidevice/orientationdidchangemessage.md)
- [UIDevice.ProximityStateDidChangeMessage](uidevice/proximitystatedidchangemessage.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Device environment

- [UIStatusBarManager](uistatusbarmanager.md): An object that describes the configuration of the status bar.

# UIDevice (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A representation of the current device.

## Declaration

```objectivec
@interface UIDevice : NSObject
```

<a id="overview"></a>

## Overview

Use a [UIDevice](uidevice.md) object to get information about the device such as assigned name, device model, and operating-system name and version. You also use the `UIDevice` instance to detect changes in the device’s characteristics, such as physical orientation. You get the current orientation using the [orientation](uidevice/orientation.md) property or receive change notifications by registering for the [UIDeviceOrientationDidChangeNotification](uidevice/orientationdidchangenotification.md) notification. Before using either of these techniques to get orientation data, you must enable data delivery using the [beginGeneratingDeviceOrientationNotifications](uidevice/begingeneratingdeviceorientationnotifications%28%29.md) method. When you no longer need to track the device orientation, call the [endGeneratingDeviceOrientationNotifications](uidevice/endgeneratingdeviceorientationnotifications%28%29.md) method to disable the delivery of notifications.

Similarly, you can use the `UIDevice` instance to obtain information and notifications about changes to the battery’s charge state (described by the [batteryState](uidevice/batterystate-swift.property.md) property) and charge level (described by the [batteryLevel](uidevice/batterylevel.md) property). The `UIDevice` instance also provides access to the proximity sensor state (described by the [proximityState](uidevice/proximitystate.md) property). The proximity sensor detects whether the user is holding the device close to their face. Enable battery monitoring or proximity sensing only when you need it.

You can also use the [playInputClick](uidevice/playinputclick%28%29.md) instance method to play keyboard input clicks in custom input and keyboard accessory views.

## Topics

### Getting the shared device instance

- [currentDevice](uidevice/current.md): An object that represents the current device.

### Identifying the device and operating system

- [name](uidevice/name.md): The name of the device.
- [systemName](uidevice/systemname.md): The name of the operating system running on the device.
- [systemVersion](uidevice/systemversion.md): The current version of the operating system.
- [model](uidevice/model.md): The model of the device.
- [localizedModel](uidevice/localizedmodel.md): The model of the device as a localized string.
- [userInterfaceIdiom](uidevice/userinterfaceidiom.md): The style of interface to use on the current device.
- [identifierForVendor](uidevice/identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

### Determining the available features

- [multitaskingSupported](uidevice/ismultitaskingsupported.md): A Boolean value that indicates whether the current device supports multitasking.

### Tracking the device orientation

- [orientation](uidevice/orientation.md): The physical orientation of the device.
- [UIDeviceOrientation](uideviceorientation.md): Constants that describe the physical orientation of the device.
- [generatesDeviceOrientationNotifications](uidevice/isgeneratingdeviceorientationnotifications.md): A Boolean value that indicates whether the device generates orientation notifications.
- [beginGeneratingDeviceOrientationNotifications](uidevice/begingeneratingdeviceorientationnotifications%28%29.md): Begins the generation of notifications of device orientation changes.
- [endGeneratingDeviceOrientationNotifications](uidevice/endgeneratingdeviceorientationnotifications%28%29.md): Ends the generation of notifications of device orientation changes.

### Determining the current orientation

- [UIDeviceOrientationIsPortrait](uideviceorientation/isportrait.md): A Boolean value that indicates whether the device is in a portrait orientation.
- [UIDeviceOrientationIsLandscape](uideviceorientation/islandscape.md): A Boolean value that indicates whether the device is in a landscape orientation.
- [UIDeviceOrientationIsFlat](uideviceorientation/isflat.md): A Boolean value that indicates whether the specified orientation is face up or face down.
- [UIDeviceOrientationIsValidInterfaceOrientation](uideviceorientation/isvalidinterfaceorientation.md): A Boolean value that indicates whether the specified orientation is one of the portrait or landscape orientations.

### Getting the device battery state

- [batteryLevel](uidevice/batterylevel.md): The battery charge level for the device.
- [batteryMonitoringEnabled](uidevice/isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [batteryState](uidevice/batterystate-swift.property.md): The battery state for the device.
- [UIDeviceBatteryState](uidevice/batterystate-swift.enum.md): Constants that describe the battery power state of the device.

### Using the proximity sensor

- [proximityMonitoringEnabled](uidevice/isproximitymonitoringenabled.md): A Boolean value that indicates whether proximity monitoring is enabled.
- [proximityState](uidevice/proximitystate.md): A Boolean value that indicates whether the proximity sensor is close to the user.

### Playing input clicks

- [playInputClick](uidevice/playinputclick%28%29.md): Plays an input click in an enabled input view.

### Getting the current idiom

- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [UI_USER_INTERFACE_IDIOM](ui_user_interface_idiom%28%29.md): Deprecated. Returns the interface idiom supported by the current device (recommended for apps that run in versions of iOS earlier than 3.2).

### Managing notifications

All [UIDevice](uidevice.md) notifications are posted by the singleton device instance returned by [currentDevice](uidevice/current.md).

- [UIDeviceBatteryLevelDidChangeNotification](uidevice/batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [UIDeviceBatteryStateDidChangeNotification](uidevice/batterystatedidchangenotification.md): A notification that posts when battery state changes.
- [UIDeviceOrientationDidChangeNotification](uidevice/orientationdidchangenotification.md): A notification that posts when the orientation of the device changes.
- [UIDeviceProximityStateDidChangeNotification](uidevice/proximitystatedidchangenotification.md): A notification that posts when the state of the proximity sensor changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Device environment

- [UIStatusBarManager](uistatusbarmanager.md): An object that describes the configuration of the status bar.
