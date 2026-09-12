> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didprovide:)-3coq5](https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didprovide:)-3coq5)

# contentKeySession(\_:didProvide:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Provides the receiver with a new content key request object.

## Declaration

```swift
func contentKeySession(_ session: AVContentKeySession, didProvide keyRequest: AVContentKeyRequest)
```

## Parameters

- `session`: The content key session that is providing the new content key request.
- `keyRequest`: The request for a new content key.

## See Also

### Providing new content key requests

- [contentKeySession(\_:didProvideRenewingContentKeyRequest:)](contentkeysession%28__didproviderenewingcontentkeyrequest_%29.md): Provides the receiver with a new content key request object for the renewal of an existing content key.
- [contentKeySession(\_:didProvide:)](contentkeysession%28__didprovide_%29-2wdgz.md): Provides the receiver with a new content key request object to process a persistable content key.

# contentKeySession:didProvideContentKeyRequest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Provides the receiver with a new content key request object.

## Declaration

```objectivec
- (void) contentKeySession:(AVContentKeySession *) session didProvideContentKeyRequest:(AVContentKeyRequest *) keyRequest;
```

## Parameters

- `session`: The content key session that is providing the new content key request.
- `keyRequest`: The request for a new content key.

## See Also

### Providing new content key requests

- [contentKeySession:didProvideRenewingContentKeyRequest:](contentkeysession%28__didproviderenewingcontentkeyrequest_%29.md): Provides the receiver with a new content key request object for the renewal of an existing content key.
- [contentKeySession:didProvidePersistableContentKeyRequest:](contentkeysession%28__didprovide_%29-2wdgz.md): Provides the receiver with a new content key request object to process a persistable content key.
