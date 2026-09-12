> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequestandreturnerror()](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequestandreturnerror())

# respondByRequestingPersistableContentKeyRequestAndReturnError() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Tells the receiver that the app requires a persistable content key request object for processing.

## Declaration

```swift
func respondByRequestingPersistableContentKeyRequestAndReturnError() throws
```

```swift
func respondByRequestingPersistableContentKeyRequest() throws
```

<a id="Discussion"></a>

## Discussion

To create a key that persists across multiple playback sessions, use this method to request an [AVPersistableContentKeyRequest](../avpersistablecontentkeyrequest.md) object. If the underlying protocol supports persistable content keys, the delegate receives a persistable content key request via the [contentKeySession(\_:didProvide:)](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md) method. An [internalInconsistencyException](../../foundation/nsexceptionname/internalinconsistencyexception.md) is returned if your delegate does not respond to [contentKeySession(\_:didProvide:)](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md).

# respondByRequestingPersistableContentKeyRequestAndReturnError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Tells the receiver that the app requires a persistable content key request object for processing.

## Declaration

```objectivec
- (BOOL) respondByRequestingPersistableContentKeyRequestAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: The error returned if a persistable content key request can’t be requested.

<a id="return-value"></a>

## Return Value

Returns `true` if successful. If `false`, respond to this request with either [processContentKeyResponse:](processcontentkeyresponse%28__%29.md) or [processContentKeyResponseError:](processcontentkeyresponseerror%28__%29.md).

<a id="Discussion"></a>

## Discussion

To create a key that persists across multiple playback sessions, use this method to request an [AVPersistableContentKeyRequest](../avpersistablecontentkeyrequest.md) object. If the underlying protocol supports persistable content keys, the delegate receives a persistable content key request via the [contentKeySession:didProvidePersistableContentKeyRequest:](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md) method. An [NSInternalInconsistencyException](../../foundation/nsexceptionname/internalinconsistencyexception.md) is returned if your delegate does not respond to [contentKeySession:didProvidePersistableContentKeyRequest:](../avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md).
