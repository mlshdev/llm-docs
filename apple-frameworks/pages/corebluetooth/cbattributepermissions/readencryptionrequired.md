> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattributepermissions/readencryptionrequired](https://developer.apple.com/documentation/corebluetooth/cbattributepermissions/readencryptionrequired)

# readEncryptionRequired (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A permission that indicates only trusted devices can read the attribute’s value.

## Declaration

```swift
static var readEncryptionRequired: CBAttributePermissions { get }
```

## See Also

### Permissions

- [readable](readable.md): A permission that indicates a peripheral can read the attribute’s value.
- [writeable](writeable.md): A permission that indicates a peripheral can write the attribute’s value.
- [writeEncryptionRequired](writeencryptionrequired.md): A permission that indicates only trusted devices can write the attribute’s value.

# CBAttributePermissionsReadEncryptionRequired (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A permission that indicates only trusted devices can read the attribute’s value.

## Declaration

```objectivec
CBAttributePermissionsReadEncryptionRequired
```

## See Also

### Permissions

- [CBAttributePermissionsReadable](readable.md): A permission that indicates a peripheral can read the attribute’s value.
- [CBAttributePermissionsWriteable](writeable.md): A permission that indicates a peripheral can write the attribute’s value.
- [CBAttributePermissionsWriteEncryptionRequired](writeencryptionrequired.md): A permission that indicates only trusted devices can write the attribute’s value.
