> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/expirationdate](https://developer.apple.com/documentation/storekittest/sktesttransaction/expirationdate)

# expirationDate (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The date a subscription expires.

## Declaration

```swift
var expirationDate: Date? { get }
```

<a id="discussion"></a>

## Discussion

The test environment sets the expiration date based on the subscription settings in your active StoreKit configuration file.

## See Also

### Getting Dates

- [purchaseDate](purchasedate.md): The date of purchase for the transaction.
- [cancelDate](canceldate.md): The date when the system refunded the transaction.

# expirationDate (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The date a subscription expires.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * expirationDate;
```

<a id="discussion"></a>

## Discussion

The test environment sets the expiration date based on the subscription settings in your active StoreKit configuration file.

## See Also

### Getting Dates

- [purchaseDate](purchasedate.md): The date of purchase for the transaction.
- [cancelDate](canceldate.md): The date when the system refunded the transaction.
