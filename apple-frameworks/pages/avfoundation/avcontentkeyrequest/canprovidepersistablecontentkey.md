> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/canprovidepersistablecontentkey](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/canprovidepersistablecontentkey)

# canProvidePersistableContentKey (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The content key request used to create a persistable content key or respond to a previous request with a persistable content key.

## Declaration

```swift
var canProvidePersistableContentKey: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is automatically set to `YES` when the receiver is provided to the content key session’s delegate via the [contentKeySession(\_:didProvide:)](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md) method. When this property is set to `YES`, the [persistableContentKey(fromKeyVendorResponse:options:)](../avpersistablecontentkeyrequest/persistablecontentkey%28fromkeyvendorresponse_options_%29.md) method can be used to create a persistable content key from the response.

When this property is set to `NO` and there is a request for a persistable content key, send the [respondByRequestingPersistableContentKeyRequest()](respondbyrequestingpersistablecontentkeyrequest%28%29.md) method.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequest.Status](status-swift.enum.md): The status for a content key request.

# canProvidePersistableContentKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The content key request used to create a persistable content key or respond to a previous request with a persistable content key.

## Declaration

```objectivec
@property (readonly) BOOL canProvidePersistableContentKey;
```

<a id="Discussion"></a>

## Discussion

The value of this property is automatically set to `YES` when the receiver is provided to the content key session’s delegate via the [contentKeySession:didProvidePersistableContentKeyRequest:](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md) method. When this property is set to `YES`, the [persistableContentKeyFromKeyVendorResponse:options:error:](../avpersistablecontentkeyrequest/persistablecontentkey%28fromkeyvendorresponse_options_%29.md) method can be used to create a persistable content key from the response.

When this property is set to `NO` and there is a request for a persistable content key, send the [respondByRequestingPersistableContentKeyRequest](respondbyrequestingpersistablecontentkeyrequest%28%29.md) method.

## See Also

### Getting content key request properties

- [identifier](identifier.md): The identifier for the content key.
- [originatingRecipient](originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [error](error.md): The error description for a failed key request.
- [initializationData](initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequestStatus](status-swift.enum.md): The status for a content key request.
