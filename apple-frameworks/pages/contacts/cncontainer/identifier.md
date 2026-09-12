> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontainer/identifier](https://developer.apple.com/documentation/contacts/cncontainer/identifier)

# identifier (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a contacts container on the device.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the identifier when re-fetching the container. The identifier can be persisted between app launches.

## See Also

### Getting the Container Information

- [name](name.md): The name of the container.
- [type](type.md): The type of the container.
- [CNContainerType](../cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.

# identifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a contacts container on the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the identifier when re-fetching the container. The identifier can be persisted between app launches.

## See Also

### Getting the Container Information

- [name](name.md): The name of the container.
- [type](type.md): The type of the container.
- [CNContainerType](../cncontainertype.md): The container may be local on the device or associated with a server account that has contacts.
