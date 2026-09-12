> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/renewexpiringresponsedata(for:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/renewexpiringresponsedata(for:))

# renewExpiringResponseData(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the delegate that previously provided response data for a content key request is about to expire.

## Declaration

```swift
func renewExpiringResponseData(for contentKeyRequest: AVContentKeyRequest)
```

## Parameters

- `contentKeyRequest`: The content key request that’s about to expire.

## See Also

### Managing expiration

- [expire()](expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [makeSecureTokenForExpirationDate(ofPersistableContentKey:completionHandler:)](makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [contentProtectionSessionIdentifier](contentprotectionsessionidentifier.md): The identifier for the current content protection session.

# renewExpiringResponseDataForContentKeyRequest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the delegate that previously provided response data for a content key request is about to expire.

## Declaration

```objectivec
- (void) renewExpiringResponseDataForContentKeyRequest:(AVContentKeyRequest *) contentKeyRequest;
```

## Parameters

- `contentKeyRequest`: The content key request that’s about to expire.

## See Also

### Managing expiration

- [expire](expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [makeSecureTokenForExpirationDateOfPersistableContentKey:completionHandler:](makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [contentProtectionSessionIdentifier](contentprotectionsessionidentifier.md): The identifier for the current content protection session.
