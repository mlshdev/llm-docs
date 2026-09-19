> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckshare/url

# url (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The Uniform Resource Locator (URL) for inviting participants to the share.

## Declaration

```swift
var url: URL? { get }
```

<a id="discussion"></a>

## Discussion

This property is only available after saving a share record to the server. This URL is stable and persists across shares and reshares of the same root record.

## See Also

### Accessing the Share’s Attributes

- [owner](owner.md): The participant that represents the share’s owner.
- [currentUserParticipant](currentuserparticipant.md): The participant that represents the current user.
- [participants](participants.md): An array that contains the share’s participants.

# URL (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The Uniform Resource Locator (URL) for inviting participants to the share.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URL;
```

<a id="discussion"></a>

## Discussion

This property is only available after saving a share record to the server. This URL is stable and persists across shares and reshares of the same root record.

## See Also

### Accessing the Share’s Attributes

- [owner](owner.md): The participant that represents the share’s owner.
- [currentUserParticipant](currentuserparticipant.md): The participant that represents the current user.
- [participants](participants.md): An array that contains the share’s participants.
