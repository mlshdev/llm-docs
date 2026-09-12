> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/persistence-swift.enum/synchronizable](https://developer.apple.com/documentation/foundation/urlcredential/persistence-swift.enum/synchronizable)

# URLCredential.Persistence.synchronizable (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

## Declaration

```swift
case synchronizable
```

## See Also

### Persistence strategies

- [URLCredential.Persistence.none](none.md): The credential should not be stored.
- [URLCredential.Persistence.forSession](forsession.md): The credential should be stored only for this session.
- [URLCredential.Persistence.permanent](permanent.md): The credential should be stored in the keychain.

# NSURLCredentialPersistenceSynchronizable (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

## Declaration

```objectivec
NSURLCredentialPersistenceSynchronizable
```

## See Also

### Persistence strategies

- [NSURLCredentialPersistenceNone](none.md): The credential should not be stored.
- [NSURLCredentialPersistenceForSession](forsession.md): The credential should be stored only for this session.
- [NSURLCredentialPersistencePermanent](permanent.md): The credential should be stored in the keychain.
