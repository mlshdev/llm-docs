> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/status-swift.enum](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/status-swift.enum)

# AVContentKeyRequest.Status (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The status for a content key request.

## Declaration

```swift
enum Status
```

## Topics

### Request status

- [AVContentKeyRequest.Status.cancelled](status-swift.enum/cancelled.md): The key request was canceled.
- [AVContentKeyRequest.Status.failed](status-swift.enum/failed.md): The key request failed.
- [AVContentKeyRequest.Status.receivedResponse](status-swift.enum/receivedresponse.md): The key request was received, and the key is in use.
- [AVContentKeyRequest.Status.renewed](status-swift.enum/renewed.md): The key request was renewed.
- [AVContentKeyRequest.Status.requestingResponse](status-swift.enum/requestingresponse.md): The key request was just created.
- [AVContentKeyRequest.Status.retried](status-swift.enum/retried.md): The key request was retried.

### Initializers

- [init(rawValue:)](status-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.

# AVContentKeyRequestStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The status for a content key request.

## Declaration

```objectivec
enum AVContentKeyRequestStatus : NSInteger;
```

## Topics

### Request status

- [AVContentKeyRequestStatusCancelled](status-swift.enum/cancelled.md): The key request was canceled.
- [AVContentKeyRequestStatusFailed](status-swift.enum/failed.md): The key request failed.
- [AVContentKeyRequestStatusReceivedResponse](status-swift.enum/receivedresponse.md): The key request was received, and the key is in use.
- [AVContentKeyRequestStatusRenewed](status-swift.enum/renewed.md): The key request was renewed.
- [AVContentKeyRequestStatusRequestingResponse](status-swift.enum/requestingresponse.md): The key request was just created.
- [AVContentKeyRequestStatusRetried](status-swift.enum/retried.md): The key request was retried.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
