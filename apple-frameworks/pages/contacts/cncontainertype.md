> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainertype](https://developer.apple.com/documentation/contacts/cncontainertype)

# CNContainerType (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The container may be local on the device or associated with a server account that has contacts.

## Declaration

```swift
enum CNContainerType
```

## Topics

### Constants

- [CNContainerType.local](cncontainertype/local.md): A container for contacts only stored locally on the device.
- [CNContainerType.exchange](cncontainertype/exchange.md): A container for contacts stored in an Exchange folder from an Exchange server.
- [CNContainerType.cardDAV](cncontainertype/carddav.md): A container for contacts stored in an CardDAV server, such as iCloud.
- [CNContainerType.unassigned](cncontainertype/unassigned.md): A container where the system hasn’t assigned the container type.

### Initializers

- [init(rawValue:)](cncontainertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Container Information

- [name](cncontainer/name.md): The name of the container.
- [identifier](cncontainer/identifier.md): The unique identifier for a contacts container on the device.
- [type](cncontainer/type.md): The type of the container.

# CNContainerType (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The container may be local on the device or associated with a server account that has contacts.

## Declaration

```objectivec
enum CNContainerType : NSInteger;
```

## Topics

### Constants

- [CNContainerTypeLocal](cncontainertype/local.md): A container for contacts only stored locally on the device.
- [CNContainerTypeExchange](cncontainertype/exchange.md): A container for contacts stored in an Exchange folder from an Exchange server.
- [CNContainerTypeCardDAV](cncontainertype/carddav.md): A container for contacts stored in an CardDAV server, such as iCloud.
- [CNContainerTypeUnassigned](cncontainertype/unassigned.md): A container where the system hasn’t assigned the container type.

## See Also

### Getting the Container Information

- [name](cncontainer/name.md): The name of the container.
- [identifier](cncontainer/identifier.md): The unique identifier for a contacts container on the device.
- [type](cncontainer/type.md): The type of the container.
