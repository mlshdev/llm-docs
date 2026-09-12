> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintenthandling/resolvebilltype(for:with:)](https://developer.apple.com/documentation/intents/insearchforbillsintenthandling/resolvebilltype(for:with:))

# resolveBillType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the bill type to use during your search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveBillType(for intent: INSearchForBillsIntent, with completion: @escaping @Sendable (INBillTypeResolutionResult) -> Void)
```

```swift
optional func resolveBillType(for intent: INSearchForBillsIntent) async -> INBillTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object containing the [INBillType](../inbilltype.md) value that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the bill type for the search. Use the [billType](../insearchforbillsintent/billtype.md) property in the intent object to identify the requested bill type. If the bill type is [INBillType.unknown](../inbilltype/unknown.md), you may return a resolution of success with that value or you may return a resolution of not required. In either case, when the bill type is [INBillType.unknown](../inbilltype/unknown.md), your subsequent search should return all bills regardless of their type.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveDueDateRange(for:with:)](resolveduedaterange%28for_with_%29.md): Deprecated. Resolves the due date to use during your search.
- [resolvePaymentDateRange(for:with:)](resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the bill status to use during your search.

# resolveBillTypeForSearchForBills:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the bill type to use during your search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveBillTypeForSearchForBills:(INSearchForBillsIntent *) intent withCompletion:(void (^)(INBillTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object containing the [INBillType](../inbilltype.md) value that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the bill type for the search. Use the [billType](../insearchforbillsintent/billtype.md) property in the intent object to identify the requested bill type. If the bill type is [INBillTypeUnknown](../inbilltype/unknown.md), you may return a resolution of success with that value or you may return a resolution of not required. In either case, when the bill type is [INBillTypeUnknown](../inbilltype/unknown.md), your subsequent search should return all bills regardless of their type.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForSearchForBills:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveDueDateRangeForSearchForBills:withCompletion:](resolveduedaterange%28for_with_%29.md): Deprecated. Resolves the due date to use during your search.
- [resolvePaymentDateRangeForSearchForBills:withCompletion:](resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
- [resolveStatusForSearchForBills:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the bill status to use during your search.
