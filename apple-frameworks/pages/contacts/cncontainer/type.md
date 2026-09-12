> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer/type](https://developer.apple.com/documentation/contacts/cncontainer/type)

# type (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The type of the container.

## Declaration

```swift
var type: CNContainerType { get }
```

<a id="Discussion"></a>

## Discussion

To learn more about different container types, see [CNContainerType](../cncontainertype.md).

## See Also

### Getting the Container Information

- [name](name.md): The name of the container.
- [identifier](identifier.md): The unique identifier for a contacts container on the device.
- [CNContainerType](../cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.

# type (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The type of the container.

## Declaration

```objectivec
@property (nonatomic, readonly) CNContainerType type;
```

```objectivec
@property (atomic, readonly) CNContainerType type;
```

<a id="Discussion"></a>

## Discussion

To learn more about different container types, see [CNContainerType](../cncontainertype.md).

## See Also

### Getting the Container Information

- [name](name.md): The name of the container.
- [identifier](identifier.md): The unique identifier for a contacts container on the device.
- [CNContainerType](../cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.
