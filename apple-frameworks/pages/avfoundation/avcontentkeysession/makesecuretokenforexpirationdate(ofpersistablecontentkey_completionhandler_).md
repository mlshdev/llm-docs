> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/makesecuretokenforexpirationdate(ofpersistablecontentkey:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/makesecuretokenforexpirationdate(ofpersistablecontentkey:completionhandler:))

# makeSecureTokenForExpirationDate(ofPersistableContentKey:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.

## Declaration

```swift
func makeSecureTokenForExpirationDate(ofPersistableContentKey persistableContentKeyData: Data, completionHandler handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func makeSecureTokenForExpirationDate(ofPersistableContentKey persistableContentKeyData: Data) async throws -> Data
```

## Parameters

- `persistableContentKeyData`: The previously created persistable content key data.
- `handler`: A block called after the secure token is ready.

  - **secureTokenData**: The new secure token.
  - **error**: A parameter that holds the error object that explains the error. If no error occurred, the value of this parameter is `nil`.

## See Also

### Managing expiration

- [expire()](expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [renewExpiringResponseData(for:)](renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
- [contentProtectionSessionIdentifier](contentprotectionsessionidentifier.md): The identifier for the current content protection session.

# makeSecureTokenForExpirationDateOfPersistableContentKey:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.

## Declaration

```objectivec
- (void) makeSecureTokenForExpirationDateOfPersistableContentKey:(NSData *) persistableContentKeyData completionHandler:(void (^)(NSData *secureTokenData, NSError *error)) handler;
```

## Parameters

- `persistableContentKeyData`: The previously created persistable content key data.
- `handler`: A block called after the secure token is ready.

  - **secureTokenData**: The new secure token.
  - **error**: A parameter that holds the error object that explains the error. If no error occurred, the value of this parameter is `nil`.

## See Also

### Managing expiration

- [expire](expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [renewExpiringResponseDataForContentKeyRequest:](renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
- [contentProtectionSessionIdentifier](contentprotectionsessionidentifier.md): The identifier for the current content protection session.
