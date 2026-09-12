> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skreceiptrefreshrequest/init(receiptproperties:)](https://developer.apple.com/documentation/storekit/skreceiptrefreshrequest/init(receiptproperties:))

# init(receiptProperties:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Creates a receipt refresh request with optional properties.

> Use Transaction.all and AppTransaction.shared.

## Declaration

```swift
init(receiptProperties properties: [String : Any]?)
```

## Parameters

- `properties`: In the test environment, the properties that the new receipt is to have. For keys, see Receipt Properties and Keys.

  In the production environment, set this parameter to `nil`.

<a id="return-value"></a>

## Return Value

The initialized request.

## Mentioned In

- [Restoring purchased products](../restoring-purchased-products.md)

<a id="Discussion"></a>

## Discussion

In the sandbox environment, you can initialize a receipt with any combination of properties to test the state transitions related to Volume Purchase Plan receipts. Set the `properties` when you call this initializer.

# initWithReceiptProperties: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Creates a receipt refresh request with optional properties.

> Use Transaction.all and AppTransaction.shared.

## Declaration

```objectivec
- (instancetype) initWithReceiptProperties:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `properties`: In the test environment, the properties that the new receipt is to have. For keys, see Receipt Properties and Keys.

  In the production environment, set this parameter to `nil`.

<a id="return-value"></a>

## Return Value

The initialized request.

## Mentioned In

- [Restoring purchased products](../restoring-purchased-products.md)

<a id="Discussion"></a>

## Discussion

In the sandbox environment, you can initialize a receipt with any combination of properties to test the state transitions related to Volume Purchase Plan receipts. Set the `properties` when you call this initializer.
