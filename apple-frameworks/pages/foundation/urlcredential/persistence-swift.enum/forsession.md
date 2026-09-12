> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/persistence-swift.enum/forsession](https://developer.apple.com/documentation/foundation/urlcredential/persistence-swift.enum/forsession)

# URLCredential.Persistence.forSession (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should be stored only for this session.

## Declaration

```swift
case forSession
```

## See Also

### Persistence strategies

- [URLCredential.Persistence.none](none.md): The credential should not be stored.
- [URLCredential.Persistence.permanent](permanent.md): The credential should be stored in the keychain.
- [URLCredential.Persistence.synchronizable](synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

# NSURLCredentialPersistenceForSession (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should be stored only for this session.

## Declaration

```objectivec
NSURLCredentialPersistenceForSession
```

## See Also

### Persistence strategies

- [NSURLCredentialPersistenceNone](none.md): The credential should not be stored.
- [NSURLCredentialPersistencePermanent](permanent.md): The credential should be stored in the keychain.
- [NSURLCredentialPersistenceSynchronizable](synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.
