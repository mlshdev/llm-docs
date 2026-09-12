> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/refundtransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/refundtransaction(identifier:))

# refundTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Simulates a refund for an in-app purchase that completes outside of the app.

## Declaration

```swift
func refundTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of an in-app purchase to get a refund.

<a id="discussion"></a>

## Discussion

In the testing environment, the system always approves refund requests, and processes them immediately. You can choose the reason for the refund by using [beginRefundRequest(in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28in:%29-9k0pj) in your app and selecting a reason. (Your app may also use [beginRefundRequest(for:in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28for:in:%29-65tph), [beginRefundRequest(in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28in:%29-63bvd), or [beginRefundRequest(in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28in:%29-63bvd).  If your app uses SwiftUI, it may use [refundRequestSheet(for:isPresented:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/refundrequestsheet%28for:ispresented:ondismiss:%29).) Otherwise, the refund reason defaults to [other](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.struct/other).

After calling this function, handle the new transaction in [updates](https://developer.apple.com/documentation/storekit/transaction/updates) or in your payment queue. Look for the [revocationDate](https://developer.apple.com/documentation/storekit/transaction/revocationdate) and [revocationReason](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.property) properties, which indicate the refund.

## See Also

### Testing externally performed transactions

- [buyProduct(productIdentifier:)](buyproduct%28productidentifier_%29.md): Deprecated. Simulates buying an in-app purchase or subscription outside the app.

# refundTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Simulates a refund for an in-app purchase that completes outside of the app.

## Declaration

```objectivec
- (BOOL) refundTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of an in-app purchase to get a refund.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

In the testing environment, the system always approves refund requests, and processes them immediately. You can choose the reason for the refund by using [beginRefundRequest(in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28in:%29-9k0pj) in your app and selecting a reason. (Your app may also use [beginRefundRequest(for:in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28for:in:%29-65tph), [beginRefundRequest(in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28in:%29-63bvd), or [beginRefundRequest(in:)](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest%28in:%29-63bvd).  If your app uses SwiftUI, it may use [refundRequestSheet(for:isPresented:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/refundrequestsheet%28for:ispresented:ondismiss:%29).) Otherwise, the refund reason defaults to [other](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.struct/other).

After calling this function, handle the new transaction in [updates](https://developer.apple.com/documentation/storekit/transaction/updates) or in your payment queue. Look for the [revocationDate](https://developer.apple.com/documentation/storekit/transaction/revocationdate) and [revocationReason](https://developer.apple.com/documentation/storekit/transaction/revocationreason-swift.property) properties, which indicate the refund.

## See Also

### Testing externally performed transactions

- [buyProductWithIdentifier:error:](buyproduct%28productidentifier_%29.md): Deprecated. Simulates buying an in-app purchase or subscription outside the app.
