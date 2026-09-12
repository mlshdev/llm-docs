> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessory](https://developer.apple.com/documentation/externalaccessory/eaaccessory)

# EAAccessory (Swift)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that contains information about a single, connected hardware accessory.

## Declaration

```swift
class EAAccessory
```

<a id="overview"></a>

## Overview

An [EAAccessory](eaaccessory.md) object gives your app information about a single connected hardware accessory. You can use the information in this class to determine whether your app is able to open a session to a given accessory. After you have an open session, you can also associate a custom delegate with the accessory object to be notified to changes in the accessory state. Your delegate must adopt the [EAAccessoryDelegate](eaaccessorydelegate.md) protocol.

You use an accessory object to create an [EASession](easession.md) object, which itself provides the communications channel to and from the accessory hardware. The accessory object provides information about the communications protocols the accessory supports, along with information about current hardware and firmware revisions.

When deciding whether to connect to an accessory, you should always first check the accessory’s declared protocols in the [protocolStrings](eaaccessory/protocolstrings.md) array. This list indicates the types of data the accessory is capable of processing at that moment, which may not be the full list of protocols for which the accessory is designed. For example, an accessory that is connected but not yet authenticated will report no supported protocols until authentication is successful. Don’t connect to the accessory unless and until the list includes the protocol you intend to use.

Accessories can be physically connected to the device through the Lightning connector (or through the 30-pin connector on older devices) or wirelessly using Bluetooth.

## Topics

### Responding to Disconnection Events

- [delegate](eaaccessory/delegate.md): The object that acts as the delegate of the accessory.
- [EAAccessoryDelegate](eaaccessorydelegate.md): A protocol that defines an optional method for receiving notifications when the associated accessory object is disconnected.

### Getting Connection Information

- [isConnected](eaaccessory/isconnected.md): A Boolean value indicating whether the accessory is currently connected to the iOS-based device.
- [connectionID](eaaccessory/connectionid.md): The accessory’s unique ID for connecting to the iOS-based device.
- [Null Connection ID](null-connection-id.md): The ID for an unconnected accessory.

### Getting the Manufacturer-Supplied Attributes

- [name](eaaccessory/name.md): The display name of the accessory.
- [manufacturer](eaaccessory/manufacturer.md): The name of the accessory’s manufacturer.
- [modelNumber](eaaccessory/modelnumber.md): The model information for the accessory.
- [serialNumber](eaaccessory/serialnumber.md): The serial number of the accessory.
- [firmwareRevision](eaaccessory/firmwarerevision.md): The current firmware version for the accessory.
- [hardwareRevision](eaaccessory/hardwarerevision.md): The hardware version of the accessory.
- [protocolStrings](eaaccessory/protocolstrings.md): The communication protocols supported by the accessory.
- [dockType](eaaccessory/docktype.md): Deprecated.

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

### Accessory Communication

- [EASession](easession.md): The object you use to manage communications between your app and a connected hardware accessory.

# EAAccessory (Objective-C)

**Framework:** External Accessory  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that contains information about a single, connected hardware accessory.

## Declaration

```objectivec
@interface EAAccessory : NSObject
```

<a id="overview"></a>

## Overview

An [EAAccessory](eaaccessory.md) object gives your app information about a single connected hardware accessory. You can use the information in this class to determine whether your app is able to open a session to a given accessory. After you have an open session, you can also associate a custom delegate with the accessory object to be notified to changes in the accessory state. Your delegate must adopt the [EAAccessoryDelegate](eaaccessorydelegate.md) protocol.

You use an accessory object to create an [EASession](easession.md) object, which itself provides the communications channel to and from the accessory hardware. The accessory object provides information about the communications protocols the accessory supports, along with information about current hardware and firmware revisions.

When deciding whether to connect to an accessory, you should always first check the accessory’s declared protocols in the [protocolStrings](eaaccessory/protocolstrings.md) array. This list indicates the types of data the accessory is capable of processing at that moment, which may not be the full list of protocols for which the accessory is designed. For example, an accessory that is connected but not yet authenticated will report no supported protocols until authentication is successful. Don’t connect to the accessory unless and until the list includes the protocol you intend to use.

Accessories can be physically connected to the device through the Lightning connector (or through the 30-pin connector on older devices) or wirelessly using Bluetooth.

## Topics

### Responding to Disconnection Events

- [delegate](eaaccessory/delegate.md): The object that acts as the delegate of the accessory.
- [EAAccessoryDelegate](eaaccessorydelegate.md): A protocol that defines an optional method for receiving notifications when the associated accessory object is disconnected.

### Getting Connection Information

- [connected](eaaccessory/isconnected.md): A Boolean value indicating whether the accessory is currently connected to the iOS-based device.
- [connectionID](eaaccessory/connectionid.md): The accessory’s unique ID for connecting to the iOS-based device.
- [Null Connection ID](null-connection-id.md): The ID for an unconnected accessory.

### Getting the Manufacturer-Supplied Attributes

- [name](eaaccessory/name.md): The display name of the accessory.
- [manufacturer](eaaccessory/manufacturer.md): The name of the accessory’s manufacturer.
- [modelNumber](eaaccessory/modelnumber.md): The model information for the accessory.
- [serialNumber](eaaccessory/serialnumber.md): The serial number of the accessory.
- [firmwareRevision](eaaccessory/firmwarerevision.md): The current firmware version for the accessory.
- [hardwareRevision](eaaccessory/hardwarerevision.md): The hardware version of the accessory.
- [protocolStrings](eaaccessory/protocolstrings.md): The communication protocols supported by the accessory.
- [dockType](eaaccessory/docktype.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessory Communication

- [EASession](easession.md): The object you use to manage communications between your app and a connected hardware accessory.
