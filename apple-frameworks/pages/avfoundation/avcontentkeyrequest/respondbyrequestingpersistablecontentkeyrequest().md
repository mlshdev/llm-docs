> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest()](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest())

# respondByRequestingPersistableContentKeyRequest() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 11.2) · iPadOS 10.3+ (deprecated in 11.2) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the receiver that the app requires a persistable content key request object for processing.

> Use [respondByRequestingPersistableContentKeyRequestAndReturnError()](respondbyrequestingpersistablecontentkeyrequestandreturnerror%28%29.md).

## Declaration

```swift
func respondByRequestingPersistableContentKeyRequest()
```

<a id="Discussion"></a>

## Discussion

To create a key that persists across multiple playback sessions, use this method to request an [AVPersistableContentKeyRequest](../avpersistablecontentkeyrequest.md) object. If the underlying protocol supports persistable content keys, the delegate receives a persistable content key request via the [contentKeySession(\_:didProvide:)](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md) method. An [internalInconsistencyException](../../foundation/nsexceptionname/internalinconsistencyexception.md) is returned if your delegate does not respond to [contentKeySession(\_:didProvide:)](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md).

## See Also

### Responding to the content key request

- [processContentKeyResponse(\_:)](processcontentkeyresponse%28__%29.md): Sends the specified content key response to the receiver for processing.
- [processContentKeyResponseError(\_:)](processcontentkeyresponseerror%28__%29.md): Tells the receiver that the app was unable to obtain a content key response.

# respondByRequestingPersistableContentKeyRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 11.2) · iPadOS 10.3+ (deprecated in 11.2) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the receiver that the app requires a persistable content key request object for processing.

> Use [respondByRequestingPersistableContentKeyRequestAndReturnError:](respondbyrequestingpersistablecontentkeyrequestandreturnerror%28%29.md).

## Declaration

```objectivec
- (void) respondByRequestingPersistableContentKeyRequest;
```

<a id="Discussion"></a>

## Discussion

To create a key that persists across multiple playback sessions, use this method to request an [AVPersistableContentKeyRequest](../avpersistablecontentkeyrequest.md) object. If the underlying protocol supports persistable content keys, the delegate receives a persistable content key request via the [contentKeySession:didProvidePersistableContentKeyRequest:](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md) method. An [NSInternalInconsistencyException](../../foundation/nsexceptionname/internalinconsistencyexception.md) is returned if your delegate does not respond to [contentKeySession:didProvidePersistableContentKeyRequest:](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md).

## See Also

### Responding to the content key request

- [processContentKeyResponse:](processcontentkeyresponse%28__%29.md): Sends the specified content key response to the receiver for processing.
- [processContentKeyResponseError:](processcontentkeyresponseerror%28__%29.md): Tells the receiver that the app was unable to obtain a content key response.
