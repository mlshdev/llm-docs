> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skreceiptrefreshrequest/receiptproperties](https://developer.apple.com/documentation/storekit/skreceiptrefreshrequest/receiptproperties)

# receiptProperties (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The properties of the receipt.

> Use Transaction.all and AppTransaction.shared.

## Declaration

```swift
var receiptProperties: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

Receipt properties include [SKReceiptPropertyIsExpired](../skreceiptpropertyisexpired.md), [SKReceiptPropertyIsRevoked](../skreceiptpropertyisrevoked.md), and [SKReceiptPropertyIsVolumePurchase](../skreceiptpropertyisvolumepurchase.md).

## See Also

### Receipt Properties and Keys

- [SKReceiptPropertyIsExpired](../skreceiptpropertyisexpired.md): Deprecated. A key with a value that indicates whether the receipt is in an expired state.
- [SKReceiptPropertyIsRevoked](../skreceiptpropertyisrevoked.md): Deprecated. A key with a value that indicates whether the receipt is in a revoked state.
- [SKReceiptPropertyIsVolumePurchase](../skreceiptpropertyisvolumepurchase.md): Deprecated. A key with a value that indicates whether the receipt is a Volume Purchase Plan receipt.

# receiptProperties (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The properties of the receipt.

> Use Transaction.all and AppTransaction.shared.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * receiptProperties;
```

<a id="Discussion"></a>

## Discussion

Receipt properties include [SKReceiptPropertyIsExpired](../skreceiptpropertyisexpired.md), [SKReceiptPropertyIsRevoked](../skreceiptpropertyisrevoked.md), and [SKReceiptPropertyIsVolumePurchase](../skreceiptpropertyisvolumepurchase.md).

## See Also

### Receipt Properties and Keys

- [SKReceiptPropertyIsExpired](../skreceiptpropertyisexpired.md): Deprecated. A key with a value that indicates whether the receipt is in an expired state.
- [SKReceiptPropertyIsRevoked](../skreceiptpropertyisrevoked.md): Deprecated. A key with a value that indicates whether the receipt is in a revoked state.
- [SKReceiptPropertyIsVolumePurchase](../skreceiptpropertyisvolumepurchase.md): Deprecated. A key with a value that indicates whether the receipt is a Volume Purchase Plan receipt.
