> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/purchasedate](https://developer.apple.com/documentation/storekittest/sktesttransaction/purchasedate)

# purchaseDate (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The date of purchase for the transaction.

## Declaration

```swift
var purchaseDate: Date { get }
```

<a id="discussion"></a>

## Discussion

The purchase date applies to any type of in-app purchase.

## See Also

### Getting Dates

- [cancelDate](canceldate.md): The date when the system refunded the transaction.
- [expirationDate](expirationdate.md): The date a subscription expires.

# purchaseDate (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The date of purchase for the transaction.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * purchaseDate;
```

<a id="discussion"></a>

## Discussion

The purchase date applies to any type of in-app purchase.

## See Also

### Getting Dates

- [cancelDate](canceldate.md): The date when the system refunded the transaction.
- [expirationDate](expirationdate.md): The date a subscription expires.
