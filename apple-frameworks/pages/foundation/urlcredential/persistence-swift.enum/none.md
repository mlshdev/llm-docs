> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/persistence-swift.enum/none](https://developer.apple.com/documentation/foundation/urlcredential/persistence-swift.enum/none)

# URLCredential.Persistence.none (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should not be stored.

## Declaration

```swift
case none
```

## See Also

### Persistence strategies

- [URLCredential.Persistence.forSession](forsession.md): The credential should be stored only for this session.
- [URLCredential.Persistence.permanent](permanent.md): The credential should be stored in the keychain.
- [URLCredential.Persistence.synchronizable](synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

# NSURLCredentialPersistenceNone (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should not be stored.

## Declaration

```objectivec
NSURLCredentialPersistenceNone
```

## See Also

### Persistence strategies

- [NSURLCredentialPersistenceForSession](forsession.md): The credential should be stored only for this session.
- [NSURLCredentialPersistencePermanent](permanent.md): The credential should be stored in the keychain.
- [NSURLCredentialPersistenceSynchronizable](synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.
