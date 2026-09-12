> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/productidentifier](https://developer.apple.com/documentation/storekittest/sktesttransaction/productidentifier)

# productIdentifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

## Declaration

```swift
var productIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

You configure the product identifiers in the .`storekit` configuration file. Each product identifier must be unique.

> **Note**

>  The StoreKitTest framework never accesses App Store Connect, so it doesn’t retrieve actual product identifiers you may have configured there.

## See Also

### Identifying Transactions and Products

- [identifier](identifier.md): The identifier of the transaction in the testing environment.
- [originalTransactionIdentifier](originaltransactionidentifier.md): The identifier of the original transaction.

# productIdentifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * productIdentifier;
```

<a id="discussion"></a>

## Discussion

You configure the product identifiers in the .`storekit` configuration file. Each product identifier must be unique.

> **Note**

>  The StoreKitTest framework never accesses App Store Connect, so it doesn’t retrieve actual product identifiers you may have configured there.

## See Also

### Identifying Transactions and Products

- [identifier](identifier.md): The identifier of the transaction in the testing environment.
- [originalTransactionIdentifier](originaltransactionidentifier.md): The identifier of the original transaction.
