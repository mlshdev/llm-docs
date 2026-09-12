> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/canceldate](https://developer.apple.com/documentation/storekittest/sktesttransaction/canceldate)

# cancelDate (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The date when the system refunded the transaction.

## Declaration

```swift
var cancelDate: Date? { get }
```

<a id="discussion"></a>

## Discussion

The [cancelDate](canceldate.md) is equivalent to the [revocationDate](https://developer.apple.com/documentation/storekit/transaction/revocationdate) in [Transaction](https://developer.apple.com/documentation/storekit/transaction). The system sets the [cancelDate](canceldate.md) if it refunds or revokes the in-app purchase. Otherwise, the value is `nil`.

A subscription can have a `nil` [cancelDate](canceldate.md) and be inactive if its expiration date passed.

The system doesn’t set [cancelDate](canceldate.md) if the user turns off auto-renewing for the subscription. If the user upgrades the subscription, the system sets [isUpgraded](https://developer.apple.com/documentation/storekit/transaction/isupgraded) in [Transaction](https://developer.apple.com/documentation/storekit/transaction) to `true` and sends a new transaction for the upgraded subscription. The system doesn’t set [cancelDate](canceldate.md) in this case.

## See Also

### Getting Dates

- [purchaseDate](purchasedate.md): The date of purchase for the transaction.
- [expirationDate](expirationdate.md): The date a subscription expires.

# cancelDate (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The date when the system refunded the transaction.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * cancelDate;
```

<a id="discussion"></a>

## Discussion

The [cancelDate](canceldate.md) is equivalent to the [revocationDate](https://developer.apple.com/documentation/storekit/transaction/revocationdate) in [Transaction](https://developer.apple.com/documentation/storekit/transaction). The system sets the [cancelDate](canceldate.md) if it refunds or revokes the in-app purchase. Otherwise, the value is `nil`.

A subscription can have a `nil` [cancelDate](canceldate.md) and be inactive if its expiration date passed.

The system doesn’t set [cancelDate](canceldate.md) if the user turns off auto-renewing for the subscription. If the user upgrades the subscription, the system sets [isUpgraded](https://developer.apple.com/documentation/storekit/transaction/isupgraded) in [Transaction](https://developer.apple.com/documentation/storekit/transaction) to `true` and sends a new transaction for the upgraded subscription. The system doesn’t set [cancelDate](canceldate.md) in this case.

## See Also

### Getting Dates

- [purchaseDate](purchasedate.md): The date of purchase for the transaction.
- [expirationDate](expirationdate.md): The date a subscription expires.
