> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/renewsexpiringresponsedata](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/renewsexpiringresponsedata)

# renewsExpiringResponseData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the content key request renews previously provided response data.

## Declaration

```swift
var renewsExpiringResponseData: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `YES` if the request renews previously provided response data that is expiring or has already expired.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequest.Status](status-swift.enum.md): The status for a content key request.

# renewsExpiringResponseData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the content key request renews previously provided response data.

## Declaration

```objectivec
@property (readonly) BOOL renewsExpiringResponseData;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `YES` if the request renews previously provided response data that is expiring or has already expired.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequestStatus](status-swift.enum.md): The status for a content key request.
