> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/contentprotectionsessionidentifier](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/contentprotectionsessionidentifier)

# contentProtectionSessionIdentifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The identifier for the current content protection session.

## Declaration

```swift
var contentProtectionSessionIdentifier: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The content protection session identifier is a unique string the session generates.

## See Also

### Managing expiration

- [expire()](expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [makeSecureTokenForExpirationDate(ofPersistableContentKey:completionHandler:)](makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [renewExpiringResponseData(for:)](renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.

# contentProtectionSessionIdentifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The identifier for the current content protection session.

## Declaration

```objectivec
@property (readonly, nullable) NSData * contentProtectionSessionIdentifier;
```

<a id="Discussion"></a>

## Discussion

The content protection session identifier is a unique string the session generates.

## See Also

### Managing expiration

- [expire](expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [makeSecureTokenForExpirationDateOfPersistableContentKey:completionHandler:](makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [renewExpiringResponseDataForContentKeyRequest:](renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
