> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/originaltransactionidentifier](https://developer.apple.com/documentation/storekittest/sktesttransaction/originaltransactionidentifier)

# originalTransactionIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The identifier of the original transaction.

## Declaration

```swift
var originalTransactionIdentifier: Int { get }
```

<a id="discussion"></a>

## Discussion

For subscription renewals, or if you restore a purchase, the [originalTransactionIdentifier](originaltransactionidentifier.md) is the original transaction for that subscription or in-app purchase.

## See Also

### Identifying Transactions and Products

- [identifier](identifier.md): The identifier of the transaction in the testing environment.
- [productIdentifier](productidentifier.md): An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

# originalTransactionIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The identifier of the original transaction.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger originalTransactionIdentifier;
```

<a id="discussion"></a>

## Discussion

For subscription renewals, or if you restore a purchase, the [originalTransactionIdentifier](originaltransactionidentifier.md) is the original transaction for that subscription or in-app purchase.

## See Also

### Identifying Transactions and Products

- [identifier](identifier.md): The identifier of the transaction in the testing environment.
- [productIdentifier](productidentifier.md): An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.
