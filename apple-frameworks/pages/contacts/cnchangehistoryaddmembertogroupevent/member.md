> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cnchangehistoryaddmembertogroupevent/member

# member (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The contact the user added to the group.

## Declaration

```swift
var member: CNContact { get }
```

## See Also

### Getting event details

- [group](group.md): The group where the user added a contact.

# member (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The contact the user added to the group.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CNContact * member;
```

## See Also

### Getting event details

- [group](group.md): The group where the user added a contact.
