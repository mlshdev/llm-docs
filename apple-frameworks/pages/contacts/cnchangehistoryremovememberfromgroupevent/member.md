> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryremovememberfromgroupevent/member](https://developer.apple.com/documentation/contacts/cnchangehistoryremovememberfromgroupevent/member)

# member (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The contact that the user removed from the group.

## Declaration

```swift
var member: CNContact { get }
```

## See Also

### Getting event details

- [group](group.md): The group where the user removed a contact.

# member (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The contact that the user removed from the group.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CNContact * member;
```

## See Also

### Getting event details

- [group](group.md): The group where the user removed a contact.
