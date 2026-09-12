> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotecapabilities](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilities)

# RCSService.RemoteCapabilities

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing the capabilities of a remote handle.

## Declaration

```swift
struct RemoteCapabilities
```

## Topics

### Accessing handle metadata

- [alternativeHandles](remotecapabilities/alternativehandles.md): Alternative handles for remote end.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [isBusinessHandle](remotecapabilities/isbusinesshandle.md): Whether remote end is a business handle.

### Accessing feature support

- [supportsChat](remotecapabilities/supportschat.md): Whether remote end supports chat.
- [supportsFileTransfer](remotecapabilities/supportsfiletransfer.md): Whether remote end supports file transfer.
- [supportsGeolocation](remotecapabilities/supportsgeolocation.md): Whether remote end supports geolocation.

### Accessing availability

- [availability](remotecapabilities/availability-swift.property.md): Availability of remote end.
- [RCSService.RemoteCapabilities.Availability](remotecapabilities/availability-swift.enum.md): Enumeration indicating the availability of the remote end.

### Determining capability validity

- [validUntil](remotecapabilities/validuntil.md): Expiration date for the contained capabilities.

### Supporting RCS encryption

- [supportsEndToEndEncryption](remotecapabilities/supportsendtoendencryption.md): A Boolean value indicating whether the remote end supports end-to-end encryption.

### Instance Properties

- [supportsExtendedMessagingCustomReaction](remotecapabilities/supportsextendedmessagingcustomreaction.md): Whether remote end supports extended messaging custom reaction feature.
- [supportsExtendedMessagingReaction](remotecapabilities/supportsextendedmessagingreaction.md): Whether remote end supports extended messaging reaction feature.
- [supportsExtendedMessagingReply](remotecapabilities/supportsextendedmessagingreply.md): Whether remote end supports extended messaging reply feature.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Discovering remote capabilities

- [remoteCapabilities(for:)](remotecapabilities%28for_%29.md): Requests remote capability discovery for a given handle
- [RCSService.RemoteCapabilitiesRequest](remotecapabilitiesrequest.md): A structure representing a request to retrieve the capabilities of a remote handle.
