> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/status-swift.property](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The current state of the content key request.

## Declaration

```swift
var status: AVContentKeyRequest.Status { get }
```

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [AVContentKeyRequest.Status](status-swift.enum.md): The status for a content key request.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The current state of the content key request.

## Declaration

```objectivec
@property (readonly) AVContentKeyRequestStatus status;
```

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [AVContentKeyRequestStatus](status-swift.enum.md): The status for a content key request.
