> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymanager](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymanager)

# AAUSBAccessoryManager (Swift)

**Framework:** Accessory Access  
**Kind:** Class  
**Availability:** macOS 27.0+

A class your app uses to manage USB accessories and the listener objects for those accessories.

## Declaration

```swift
class AAUSBAccessoryManager
```

<a id="Discussion"></a>

## Discussion

Don’t instantiate an `AAUSBAccessoryManager` directly, instead obtain the manager through the class property [shared](aausbaccessorymanager/shared.md).

Use the `AAUSBAccessoryManager` to manage accessories and register interest in events from USB accessories through [AAUSBAccessoryListener](aausbaccessorylistener.md) objects.  When a USB accessory connects to the system, the USB accessory manager notifies the listener and provides it an [AAUSBAccessory](aausbaccessory.md) object that represents this accessory. Your app can open this [AAUSBAccessory](aausbaccessory.md) object exclusively, and use it for performing USB transfers to the connected accessory.

A USB accessory listener receives notifications when a USB accessories connect to or disconnect from the system. These listeners can register or unregister with the USB accessory manager object. The accessory manager notifies your app about the USB accessories as long an accessory’s listener remains registered with the manager. The framework delivers all the notifications to the listener on the internal serial queue of the accessory manager.

The `AAUSBAccessoryManager` presents UI on behalf of your application, which means you can only use it from an application that implements a UI, that is, one that appears in the Dock.

> **Note**

> To use the AccessoryAccess framework, add the `com.apple.developer.accessory-access.usb` entitlement to your app’s Xcode configuration. For more information, see [Claim USB Accessory](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.accessory-access.usb).

## Topics

### Accessing the shared manager

- [shared](aausbaccessorymanager/shared.md): Returns the shared USB accessory manager object for this process.

### Registering and unregistering listeners

- [registerListener(\_:matchingCriteria:completionHandler:)](aausbaccessorymanager/registerlistener%28__matchingcriteria_completionhandler_%29.md): Registers a USB accessory listener.
- [unregisterListener(\_:completionHandler:)](aausbaccessorymanager/unregisterlistener%28__completionhandler_%29.md): Unregister a previously registered listener.

### Finding events that apply to an accessory

- [events(matching:)](aausbaccessorymanager/events%28matching_%29.md): Returns an asynchronous list of events that match the provided criteria.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing accessories

- [AAUSBAccessory](aausbaccessory.md): A class that represents a USB accessory.

# AAUSBAccessoryManager (Objective-C)

**Framework:** Accessory Access  
**Kind:** Class  
**Availability:** macOS 27.0+

A class your app uses to manage USB accessories and the listener objects for those accessories.

## Declaration

```objectivec
@interface AAUSBAccessoryManager : NSObject
```

<a id="Discussion"></a>

## Discussion

Don’t instantiate an `AAUSBAccessoryManager` directly, instead obtain the manager through the class property [sharedManager](aausbaccessorymanager/shared.md).

Use the `AAUSBAccessoryManager` to manage accessories and register interest in events from USB accessories through [AAUSBAccessoryListener](aausbaccessorylistener.md) objects.  When a USB accessory connects to the system, the USB accessory manager notifies the listener and provides it an [AAUSBAccessory](aausbaccessory.md) object that represents this accessory. Your app can open this [AAUSBAccessory](aausbaccessory.md) object exclusively, and use it for performing USB transfers to the connected accessory.

A USB accessory listener receives notifications when a USB accessories connect to or disconnect from the system. These listeners can register or unregister with the USB accessory manager object. The accessory manager notifies your app about the USB accessories as long an accessory’s listener remains registered with the manager. The framework delivers all the notifications to the listener on the internal serial queue of the accessory manager.

The `AAUSBAccessoryManager` presents UI on behalf of your application, which means you can only use it from an application that implements a UI, that is, one that appears in the Dock.

> **Note**

> To use the AccessoryAccess framework, add the `com.apple.developer.accessory-access.usb` entitlement to your app’s Xcode configuration. For more information, see [Claim USB Accessory](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.accessory-access.usb).

## Topics

### Accessing the shared manager

- [sharedManager](aausbaccessorymanager/shared.md): Returns the shared USB accessory manager object for this process.

### Registering and unregistering listeners

- [registerListener:withMatchingCriteria:completionHandler:](aausbaccessorymanager/registerlistener%28__matchingcriteria_completionhandler_%29.md): Registers a USB accessory listener.
- [unregisterListener:completionHandler:](aausbaccessorymanager/unregisterlistener%28__completionhandler_%29.md): Unregister a previously registered listener.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Managing accessories

- [AAUSBAccessory](aausbaccessory.md): A class that represents a USB accessory.
