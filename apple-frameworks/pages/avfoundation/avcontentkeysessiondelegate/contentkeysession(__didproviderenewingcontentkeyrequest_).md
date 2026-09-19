> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didproviderenewingcontentkeyrequest:)

# contentKeySession(\_:didProvideRenewingContentKeyRequest:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Provides the receiver with a new content key request object for the renewal of an existing content key.

## Declaration

```swift
optional func contentKeySession(_ session: AVContentKeySession, didProvideRenewingContentKeyRequest keyRequest: AVContentKeyRequest)
```

## Parameters

- `session`: The content key session that is providing the new content key request.
- `keyRequest`: The request for the renewal of a previous content key.

## See Also

### Providing new content key requests

- [contentKeySession(\_:didProvide:)](contentkeysession%28__didprovide_%29-3coq5.md): Provides the receiver with a new content key request object.
- [contentKeySession(\_:didProvide:)](contentkeysession%28__didprovide_%29-2wdgz.md): Provides the receiver with a new content key request object to process a persistable content key.

# contentKeySession:didProvideRenewingContentKeyRequest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Provides the receiver with a new content key request object for the renewal of an existing content key.

## Declaration

```objectivec
- (void) contentKeySession:(AVContentKeySession *) session didProvideRenewingContentKeyRequest:(AVContentKeyRequest *) keyRequest;
```

## Parameters

- `session`: The content key session that is providing the new content key request.
- `keyRequest`: The request for the renewal of a previous content key.

## See Also

### Providing new content key requests

- [contentKeySession:didProvideContentKeyRequest:](contentkeysession%28__didprovide_%29-3coq5.md): Provides the receiver with a new content key request object.
- [contentKeySession:didProvidePersistableContentKeyRequest:](contentkeysession%28__didprovide_%29-2wdgz.md): Provides the receiver with a new content key request object to process a persistable content key.
