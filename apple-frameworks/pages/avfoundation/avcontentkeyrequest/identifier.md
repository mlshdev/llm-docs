> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/identifier](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/identifier)

# identifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The identifier for the content key.

## Declaration

```swift
var identifier: (any Sendable)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is specific to the container and the protocol. To use the key with an HTTP Live Streaming [AVURLAsset](../avurlasset.md), the identifier must be an [NSURL](../../foundation/nsurl.md) that matches a key `URI` in the media playlist.

## See Also

### Getting content key request properties

- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequest.Status](status-swift.enum.md): The status for a content key request.

# identifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The identifier for the content key.

## Declaration

```objectivec
@property (readonly, nullable) id identifier;
```

<a id="Discussion"></a>

## Discussion

This property is specific to the container and the protocol. To use the key with an HTTP Live Streaming [AVURLAsset](../avurlasset.md), the identifier must be an [NSURL](../../foundation/nsurl.md) that matches a key `URI` in the media playlist.

## See Also

### Getting content key request properties

- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequestStatus](status-swift.enum.md): The status for a content key request.
