> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattributepermissions](https://developer.apple.com/documentation/corebluetooth/cbattributepermissions)

# CBAttributePermissions (Swift)

**Framework:** Core Bluetooth  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values that represent the read, write, and encryption permissions for a characteristic’s value.

## Declaration

```swift
struct CBAttributePermissions
```

<a id="overview"></a>

## Overview

When you initialize a new mutable characteristic, you set the read, write, and encryption permissions for the characteristic’s value. Setting the read and write *permissions* for a characteristic’s value is different from specifying the read and write *properties* for a characteristic’s value. When you specify the read and write properties, the client (a central) inspects the read and write permissions of the characteristic’s value. When you specify the read and write permissions for a characteristic’s value, you set the permissions for the server (the peripheral) to allow the type of read or write specified by the characteristic’s properties. Therefore, when you initialize a mutable characteristic, you need to specify read or write properties and their corresponding permissions.

If you want to enforce encryption requirements for reads and writes on a characteristic’s value, you must specify the relevant permission ([readEncryptionRequired](cbattributepermissions/readencryptionrequired.md) or [writeEncryptionRequired](cbattributepermissions/writeencryptionrequired.md)). You may set more than one permission for a characteristic’s value.

## Topics

### Creating a Permissions Instance

- [init(rawValue:)](cbattributepermissions/init%28rawvalue_%29.md): Creates a permissions instance from the provided raw value.

### Permissions

- [readable](cbattributepermissions/readable.md): A permission that indicates a peripheral can read the attribute’s value.
- [writeable](cbattributepermissions/writeable.md): A permission that indicates a peripheral can write the attribute’s value.
- [readEncryptionRequired](cbattributepermissions/readencryptionrequired.md): A permission that indicates only trusted devices can read the attribute’s value.
- [writeEncryptionRequired](cbattributepermissions/writeencryptionrequired.md): A permission that indicates only trusted devices can write the attribute’s value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.

# CBAttributePermissions (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values that represent the read, write, and encryption permissions for a characteristic’s value.

## Declaration

```objectivec
enum CBAttributePermissions : NSUInteger;
```

<a id="overview"></a>

## Overview

When you initialize a new mutable characteristic, you set the read, write, and encryption permissions for the characteristic’s value. Setting the read and write *permissions* for a characteristic’s value is different from specifying the read and write *properties* for a characteristic’s value. When you specify the read and write properties, the client (a central) inspects the read and write permissions of the characteristic’s value. When you specify the read and write permissions for a characteristic’s value, you set the permissions for the server (the peripheral) to allow the type of read or write specified by the characteristic’s properties. Therefore, when you initialize a mutable characteristic, you need to specify read or write properties and their corresponding permissions.

If you want to enforce encryption requirements for reads and writes on a characteristic’s value, you must specify the relevant permission ([CBAttributePermissionsReadEncryptionRequired](cbattributepermissions/readencryptionrequired.md) or [CBAttributePermissionsWriteEncryptionRequired](cbattributepermissions/writeencryptionrequired.md)). You may set more than one permission for a characteristic’s value.

## Topics

### Permissions

- [CBAttributePermissionsReadable](cbattributepermissions/readable.md): A permission that indicates a peripheral can read the attribute’s value.
- [CBAttributePermissionsWriteable](cbattributepermissions/writeable.md): A permission that indicates a peripheral can write the attribute’s value.
- [CBAttributePermissionsReadEncryptionRequired](cbattributepermissions/readencryptionrequired.md): A permission that indicates only trusted devices can read the attribute’s value.
- [CBAttributePermissionsWriteEncryptionRequired](cbattributepermissions/writeencryptionrequired.md): A permission that indicates only trusted devices can write the attribute’s value.

## See Also

### Peripherals

- [CBPeripheral](cbperipheral.md): A remote peripheral device.
- [CBPeripheralDelegate](cbperipheraldelegate.md): A protocol that provides updates on the use of a peripheral’s services.
- [CBPeripheralManager](cbperipheralmanager.md): An object that manages and advertises peripheral services exposed by this app.
- [CBPeripheralManagerDelegate](cbperipheralmanagerdelegate.md): A protocol that provides updates for local peripheral state and interactions with remote central devices.
- [CBAttribute](cbattribute.md): A representation of common aspects of services offered by a peripheral.
