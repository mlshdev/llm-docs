> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityintenttostore/maystore](https://developer.apple.com/documentation/passkit/pkidentityintenttostore/maystore)

# mayStore (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that indicates your app may store a data element for an indefinite length of time.

## Declaration

```swift
class var mayStore: PKIdentityIntentToStore { get }
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting default intents

- [willNotStore](willnotstore.md): An object that indicates your app won’t store a data element any longer than necessary to complete a request.

# mayStoreIntent (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that indicates your app may store a data element for an indefinite length of time.

## Declaration

```objectivec
@property (class, nonatomic, readonly) PKIdentityIntentToStore * mayStoreIntent;
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting default intents

- [willNotStoreIntent](willnotstore.md): An object that indicates your app won’t store a data element any longer than necessary to complete a request.
