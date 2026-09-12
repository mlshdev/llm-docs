> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participants](https://developer.apple.com/documentation/cloudkit/ckshare/participants)

# participants (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array that contains the share’s participants.

## Declaration

```swift
var participants: [CKShare.Participant] { get }
```

<a id="discussion"></a>

## Discussion

The property’s value contains all of the share’s participants that the current user has permissions to see. At a minimum, it includes the share’s owner and the current user.

## See Also

### Accessing the Share’s Attributes

- [owner](owner.md): The participant that represents the share’s owner.
- [currentUserParticipant](currentuserparticipant.md): The participant that represents the current user.
- [url](url.md): The Uniform Resource Locator (URL) for inviting participants to the share.

# participants (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array that contains the share’s participants.

## Declaration

```objectivec
@property (copy, readonly) NSArray<CKShareParticipant *> * participants;
```

<a id="discussion"></a>

## Discussion

The property’s value contains all of the share’s participants that the current user has permissions to see. At a minimum, it includes the share’s owner and the current user.

## See Also

### Accessing the Share’s Attributes

- [owner](owner.md): The participant that represents the share’s owner.
- [currentUserParticipant](currentuserparticipant.md): The participant that represents the current user.
- [URL](url.md): The Uniform Resource Locator (URL) for inviting participants to the share.
