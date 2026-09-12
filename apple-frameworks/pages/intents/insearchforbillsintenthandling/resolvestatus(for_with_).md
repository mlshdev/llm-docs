> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintenthandling/resolvestatus(for:with:)](https://developer.apple.com/documentation/intents/insearchforbillsintenthandling/resolvestatus(for:with:))

# resolveStatus(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the bill status to use during your search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveStatus(for intent: INSearchForBillsIntent, with completion: @escaping @Sendable (INPaymentStatusResolutionResult) -> Void)
```

```swift
optional func resolveStatus(for intent: INSearchForBillsIntent) async -> INPaymentStatusResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object containing the [INPaymentStatus](../inpaymentstatus.md) value that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the status of a bill. Use the status property of the intent object to identify the status type to search. If the specified status type is one that your app supports, return a successful resolution with that type.

If the status type is [INPaymentStatus.unknown](../inpaymentstatus/unknown.md), return a resolution of not required from this method. When the status type is unknown, don’t filter the subsequent search results based on the bill’s current status. Instead, return all bills whether they’re pending, completed, canceled, or failed.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the bill type to use during your search.
- [resolveDueDateRange(for:with:)](resolveduedaterange%28for_with_%29.md): Deprecated. Resolves the due date to use during your search.
- [resolvePaymentDateRange(for:with:)](resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.

# resolveStatusForSearchForBills:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the bill status to use during your search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveStatusForSearchForBills:(INSearchForBillsIntent *) intent withCompletion:(void (^)(INPaymentStatusResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object containing the [INPaymentStatus](../inpaymentstatus.md) value that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the status of a bill. Use the status property of the intent object to identify the status type to search. If the specified status type is one that your app supports, return a successful resolution with that type.

If the status type is [INPaymentStatusUnknown](../inpaymentstatus/unknown.md), return a resolution of not required from this method. When the status type is unknown, don’t filter the subsequent search results based on the bill’s current status. Instead, return all bills whether they’re pending, completed, canceled, or failed.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForSearchForBills:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveBillTypeForSearchForBills:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the bill type to use during your search.
- [resolveDueDateRangeForSearchForBills:withCompletion:](resolveduedaterange%28for_with_%29.md): Deprecated. Resolves the due date to use during your search.
- [resolvePaymentDateRangeForSearchForBills:withCompletion:](resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
