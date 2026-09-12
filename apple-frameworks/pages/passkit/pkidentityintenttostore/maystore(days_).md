> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityintenttostore/maystore(days:)](https://developer.apple.com/documentation/passkit/pkidentityintenttostore/maystore(days:))

# mayStore(days:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that indicates your app may store a data element for the length of time you specify.

## Declaration

```swift
class func mayStore(days: Int) -> Self
```

## Parameters

- `days`: The length of time to store a data element.

<a id="return-value"></a>

## Return Value

A new instance of [PKIdentityIntentToStore](../pkidentityintenttostore.md).

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

# mayStoreIntentForDays: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that indicates your app may store a data element for the length of time you specify.

## Declaration

```objectivec
+ (instancetype) mayStoreIntentForDays:(NSInteger) days;
```

## Parameters

- `days`: The length of time to store a data element.

<a id="return-value"></a>

## Return Value

A new instance of [PKIdentityIntentToStore](../pkidentityintenttostore.md).

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)
