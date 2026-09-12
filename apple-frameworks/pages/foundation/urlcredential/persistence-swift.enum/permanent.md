> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/persistence-swift.enum/permanent](https://developer.apple.com/documentation/foundation/urlcredential/persistence-swift.enum/permanent)

# URLCredential.Persistence.permanent (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should be stored in the keychain.

## Declaration

```swift
case permanent
```

## See Also

### Persistence strategies

- [URLCredential.Persistence.none](none.md): The credential should not be stored.
- [URLCredential.Persistence.forSession](forsession.md): The credential should be stored only for this session.
- [URLCredential.Persistence.synchronizable](synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

# NSURLCredentialPersistencePermanent (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credential should be stored in the keychain.

## Declaration

```objectivec
NSURLCredentialPersistencePermanent
```

## See Also

### Persistence strategies

- [NSURLCredentialPersistenceNone](none.md): The credential should not be stored.
- [NSURLCredentialPersistenceForSession](forsession.md): The credential should be stored only for this session.
- [NSURLCredentialPersistenceSynchronizable](synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.
