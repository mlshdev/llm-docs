> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcredentialstorageremovesynchronizablecredentials](https://developer.apple.com/documentation/foundation/nsurlcredentialstorageremovesynchronizablecredentials)

# NSURLCredentialStorageRemoveSynchronizableCredentials (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The corresponding value is an `NSNumber` object representing a Boolean value that indicates whether credentials which contain the [URLCredential.Persistence.synchronizable](urlcredential/persistence-swift.enum/synchronizable.md) attribute should be removed.

## Declaration

```swift
let NSURLCredentialStorageRemoveSynchronizableCredentials: String
```

<a id="Discussion"></a>

## Discussion

If the key is missing or the value is `@NO`, then no attempt will be made to remove such a credential.

# NSURLCredentialStorageRemoveSynchronizableCredentials (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The corresponding value is an `NSNumber` object representing a Boolean value that indicates whether credentials which contain the [NSURLCredentialPersistenceSynchronizable](urlcredential/persistence-swift.enum/synchronizable.md) attribute should be removed.

## Declaration

```objectivec
extern NSString * const NSURLCredentialStorageRemoveSynchronizableCredentials;
```

<a id="Discussion"></a>

## Discussion

If the key is missing or the value is `@NO`, then no attempt will be made to remove such a credential.
