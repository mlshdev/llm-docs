> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessorymanager](https://developer.apple.com/documentation/externalaccessory/eaaccessorymanager)

# EAAccessoryManager (Swift)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The object you use to identify connected accessories, and begin delivery of connection and disconnection notifications.

## Declaration

```swift
class EAAccessoryManager
```

<a id="overview"></a>

## Overview

An [EAAccessoryManager](eaaccessorymanager.md) object coordinates the attached accessories for an iOS-based device. Use the shared accessory manager to retrieve a list of connected accessories, and start and stop the delivery of connection and disconnection notifications.

> **Important**

>  iPhone and iPad apps running on Macs with Apple silicon never receive connection notifications.

## Topics

### Getting the Shared Accessory Manager

- [shared()](eaaccessorymanager/shared%28%29.md): Returns the shared accessory manager object for the iOS-based device.

### Managing Connection Status Changes

- [registerForLocalNotifications()](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications()](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnect](../foundation/nsnotification/name-swift.struct/eaaccessorydidconnect.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnect](../foundation/nsnotification/name-swift.struct/eaaccessorydiddisconnect.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.

### Presenting the Bluetooth Picker

- [showBluetoothAccessoryPicker(withNameFilter:completion:)](eaaccessorymanager/showbluetoothaccessorypicker%28withnamefilter_completion_%29.md): Displays an alert that allows the user to pair the device with a Bluetooth accessory.
- [EABluetoothAccessoryPickerCompletion](eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerError](eabluetoothaccessorypickererror.md): Error codes returned by the Bluetooth accessory picker.
- [EABluetoothAccessoryPickerError.Code](eabluetoothaccessorypickererror/code.md): The error codes that may be passed in an error object for the Bluetooth picker completion block.
- [EABluetoothAccessoryPickerErrorDomain](eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.

### Getting the Available Accessories

- [connectedAccessories](eaaccessorymanager/connectedaccessories.md): The accessory objects corresponding to the list of currently connected accessories.

### Structures

- [EAAccessoryManager.AccessoryDidConnectMessage](eaaccessorymanager/accessorydidconnectmessage.md)
- [EAAccessoryManager.AccessoryDidDisconnectMessage](eaaccessorymanager/accessorydiddisconnectmessage.md)

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

## See Also

### Essentials

- [UISupportedExternalAccessoryProtocols](../bundleresources/information-property-list/uisupportedexternalaccessoryprotocols.md): The protocols that the app uses to communicate with external accessory hardware.

# EAAccessoryManager (Objective-C)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The object you use to identify connected accessories, and begin delivery of connection and disconnection notifications.

## Declaration

```objectivec
@interface EAAccessoryManager : NSObject
```

<a id="overview"></a>

## Overview

An [EAAccessoryManager](eaaccessorymanager.md) object coordinates the attached accessories for an iOS-based device. Use the shared accessory manager to retrieve a list of connected accessories, and start and stop the delivery of connection and disconnection notifications.

> **Important**

>  iPhone and iPad apps running on Macs with Apple silicon never receive connection notifications.

## Topics

### Getting the Shared Accessory Manager

- [sharedAccessoryManager](eaaccessorymanager/shared%28%29.md): Returns the shared accessory manager object for the iOS-based device.

### Managing Connection Status Changes

- [registerForLocalNotifications](eaaccessorymanager/registerforlocalnotifications%28%29.md): Begins the delivery of accessory-related notifications to the current application.
- [unregisterForLocalNotifications](eaaccessorymanager/unregisterforlocalnotifications%28%29.md): Stops the delivery of accessory-related notifications to the current application.
- [EAAccessoryDidConnectNotification](eaaccessorydidconnectnotification.md): A notification that the system sends when an accessory becomes connected and available for your application to use.
- [EAAccessoryDidDisconnectNotification](eaaccessorydiddisconnectnotification.md): A notification that is posted when an accessory is disconnected and no longer available for your application to use.
- [EAAccessoryKey](eaaccessorykey.md): A key that indicates the accessory object whose status changed.
- [EAAccessorySelectedKey](eaaccessoryselectedkey.md): A key that indicates the accessory object that the user selected.

### Presenting the Bluetooth Picker

- [showBluetoothAccessoryPickerWithNameFilter:completion:](eaaccessorymanager/showbluetoothaccessorypicker%28withnamefilter_completion_%29.md): Displays an alert that allows the user to pair the device with a Bluetooth accessory.
- [EABluetoothAccessoryPickerCompletion](eabluetoothaccessorypickercompletion.md): The completion block for the Bluetooth picker.
- [EABluetoothAccessoryPickerErrorCode](eabluetoothaccessorypickererror/code.md): The error codes that may be passed in an error object for the Bluetooth picker completion block.
- [EABluetoothAccessoryPickerErrorDomain](eabluetoothaccessorypickererrordomain.md): The domain for errors passed to a Bluetooth picker completion block.

### Getting the Available Accessories

- [connectedAccessories](eaaccessorymanager/connectedaccessories.md): The accessory objects corresponding to the list of currently connected accessories.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [UISupportedExternalAccessoryProtocols](../bundleresources/information-property-list/uisupportedexternalaccessoryprotocols.md): The protocols that the app uses to communicate with external accessory hardware.
