> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcshandle/group

# RCSHandle.Group

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an RCS group handle.

## Declaration

```swift
struct Group
```

## Topics

### Accessing group properties

- [focus](group/focus.md): A string that represents the focus of this group, as described in RFC 4353.
- [conversationID](group/conversationid.md): A string that represents the conversation identifier for this group.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing handle values

- [RCSHandle.uri(\_:)](uri%28__%29.md): A handle that represents a single recipient or sender, as identified by a URI.
- [RCSHandle.URI](uri.md): A structure that represents an RCS URI handle.
- [RCSHandle.group(\_:)](group%28__%29.md): A handle that represents a group.
