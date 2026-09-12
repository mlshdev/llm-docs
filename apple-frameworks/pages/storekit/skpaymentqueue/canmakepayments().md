> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueue/canmakepayments()](https://developer.apple.com/documentation/storekit/skpaymentqueue/canmakepayments())

# canMakePayments() (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A method that indicates whether the person can make purchases.

> Use AppStore.canMakePayments.

## Declaration

```swift
class func canMakePayments() -> Bool
```

<a id="Discussion"></a>

## Discussion

The Boolean value that this method returns is identical to the value of the type property [canMakePayments](../appstore/canmakepayments.md) in the [AppStore](../appstore.md) object. For more information about using and interpreting this value, see the type property page [canMakePayments](../appstore/canmakepayments.md).

# canMakePayments (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 18.0) · iPadOS 3.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A method that indicates whether the person can make purchases.

> Use AppStore.canMakePayments.

## Declaration

```objectivec
+ (BOOL) canMakePayments;
```

<a id="Discussion"></a>

## Discussion

The Boolean value that this method returns is identical to the value of the type property [canMakePayments](../appstore/canmakepayments.md) in the [AppStore](../appstore.md) object. For more information about using and interpreting this value, see the type property page [canMakePayments](../appstore/canmakepayments.md).
