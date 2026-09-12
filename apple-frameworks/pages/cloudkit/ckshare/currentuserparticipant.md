> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/currentuserparticipant](https://developer.apple.com/documentation/cloudkit/ckshare/currentuserparticipant)

# currentUserParticipant (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The participant that represents the current user.

## Declaration

```swift
@NSCopying var currentUserParticipant: CKShare.Participant? { get }
```

## See Also

### Accessing the Share’s Attributes

- [owner](owner.md): The participant that represents the share’s owner.
- [participants](participants.md): An array that contains the share’s participants.
- [url](url.md): The Uniform Resource Locator (URL) for inviting participants to the share.

# currentUserParticipant (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The participant that represents the current user.

## Declaration

```objectivec
@property (copy, readonly, nullable) CKShareParticipant * currentUserParticipant;
```

## See Also

### Accessing the Share’s Attributes

- [owner](owner.md): The participant that represents the share’s owner.
- [participants](participants.md): An array that contains the share’s participants.
- [URL](url.md): The Uniform Resource Locator (URL) for inviting participants to the share.
