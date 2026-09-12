> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/buyproduct(productidentifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/buyproduct(productidentifier:))

# buyProduct(productIdentifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · watchOS 7.0+ (deprecated in 10.0)

Simulates buying an in-app purchase or subscription outside the app.

> Use the Swift API: SKTestSession.buyProduct(identifier:, options:)

## Declaration

```swift
func buyProduct(productIdentifier: String) throws
```

## Parameters

- `productIdentifier`: Product identifier of the in-app purchase.

<a id="discussion"></a>

## Discussion

After calling this function, handle the new transaction in your payment queue.

## See Also

### Testing externally performed transactions

- [refundTransaction(identifier:)](refundtransaction%28identifier_%29.md): Simulates a refund for an in-app purchase that completes outside of the app.

# buyProductWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · watchOS 7.0+ (deprecated in 10.0)

Simulates buying an in-app purchase or subscription outside the app.

> Use the Swift API: SKTestSession.buyProduct(identifier:, options:)

## Declaration

```objectivec
- (BOOL) buyProductWithIdentifier:(NSString *) productIdentifier error:(NSError **) error;
```

## Parameters

- `productIdentifier`: Product identifier of the in-app purchase.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

After calling this function, handle the new transaction in your payment queue.

## See Also

### Testing externally performed transactions

- [refundTransactionWithIdentifier:error:](refundtransaction%28identifier_%29.md): Simulates a refund for an in-app purchase that completes outside of the app.
