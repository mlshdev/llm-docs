> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/expire()](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/expire())

# expire() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the delegate that the session expired as the result of normal, intentional processes.

## Declaration

```swift
func expire()
```

## See Also

### Managing expiration

- [makeSecureTokenForExpirationDate(ofPersistableContentKey:completionHandler:)](makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [renewExpiringResponseData(for:)](renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
- [contentProtectionSessionIdentifier](contentprotectionsessionidentifier.md): The identifier for the current content protection session.

# expire (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the delegate that the session expired as the result of normal, intentional processes.

## Declaration

```objectivec
- (void) expire;
```

## See Also

### Managing expiration

- [makeSecureTokenForExpirationDateOfPersistableContentKey:completionHandler:](makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [renewExpiringResponseDataForContentKeyRequest:](renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
- [contentProtectionSessionIdentifier](contentprotectionsessionidentifier.md): The identifier for the current content protection session.
