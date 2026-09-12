> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cngroup/identifier](https://developer.apple.com/documentation/contacts/cngroup/identifier)

# identifier (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a group on the device.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the identifier when re-fetching the group. The identifier can be persisted between app launches.

## See Also

### Getting the Group Information

- [name](name.md): The name of the group.

# identifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a group on the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the identifier when re-fetching the group. The identifier can be persisted between app launches.

## See Also

### Getting the Group Information

- [name](name.md): The name of the group.
