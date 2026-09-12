> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer/name](https://developer.apple.com/documentation/contacts/cncontainer/name)

# name (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The name of the container.

## Declaration

```swift
var name: String { get }
```

## See Also

### Getting the Container Information

- [identifier](identifier.md): The unique identifier for a contacts container on the device.
- [type](type.md): The type of the container.
- [CNContainerType](../cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.

# name (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The name of the container.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * name;
```

```objectivec
@property (atomic, copy, readonly) NSString * name;
```

## See Also

### Getting the Container Information

- [identifier](identifier.md): The unique identifier for a contacts container on the device.
- [type](type.md): The type of the container.
- [CNContainerType](../cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.
