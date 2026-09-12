> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/owner](https://developer.apple.com/documentation/cloudkit/ckshare/owner)

# owner (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The participant that represents the share’s owner.

## Declaration

```swift
@NSCopying var owner: CKShare.Participant { get }
```

## See Also

### Accessing the Share’s Attributes

- [currentUserParticipant](currentuserparticipant.md): The participant that represents the current user.
- [participants](participants.md): An array that contains the share’s participants.
- [url](url.md): The Uniform Resource Locator (URL) for inviting participants to the share.

# owner (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The participant that represents the share’s owner.

## Declaration

```objectivec
@property (copy, readonly) CKShareParticipant * owner;
```

## See Also

### Accessing the Share’s Attributes

- [currentUserParticipant](currentuserparticipant.md): The participant that represents the current user.
- [participants](participants.md): An array that contains the share’s participants.
- [URL](url.md): The Uniform Resource Locator (URL) for inviting participants to the share.
