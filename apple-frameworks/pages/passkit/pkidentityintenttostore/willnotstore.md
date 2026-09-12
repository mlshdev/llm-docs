> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityintenttostore/willnotstore](https://developer.apple.com/documentation/passkit/pkidentityintenttostore/willnotstore)

# willNotStore (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that indicates your app won’t store a data element any longer than necessary to complete a request.

## Declaration

```swift
class var willNotStore: PKIdentityIntentToStore { get }
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting default intents

- [mayStore](maystore.md): An object that indicates your app may store a data element for an indefinite length of time.

# willNotStoreIntent (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that indicates your app won’t store a data element any longer than necessary to complete a request.

## Declaration

```objectivec
@property (class, nonatomic, readonly) PKIdentityIntentToStore * willNotStoreIntent;
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting default intents

- [mayStoreIntent](maystore.md): An object that indicates your app may store a data element for an indefinite length of time.
