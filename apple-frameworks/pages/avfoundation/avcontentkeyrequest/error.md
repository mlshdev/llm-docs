> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/error](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The error description for a failed key request.

## Declaration

```swift
var error: (any Error)? { get }
```

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequest.Status](status-swift.enum.md): The status for a content key request.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The error description for a failed key request.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequestStatus](status-swift.enum.md): The status for a content key request.
