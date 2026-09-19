> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsgroupcontext

# RCSGroupContext

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure containing information about a message’s group.

## Declaration

```swift
struct RCSGroupContext
```

## Topics

### Accessing group context properties

- [handle](rcsgroupcontext/handle.md): The handle associated with the group.

### Supporting RCS encryption

- [isEndToEndEncrypted](rcsgroupcontext/isendtoendencrypted.md): A Boolean value that indicates whether the associated group is end-to-end encrypted.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSFileTransferMetadata](rcsfiletransfermetadata.md): A structure that contains metadata about an RCS file transfer.
