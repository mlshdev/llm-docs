> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintenthandling/resolveduedaterange(for:with:)](https://developer.apple.com/documentation/intents/insearchforbillsintenthandling/resolveduedaterange(for:with:))

# resolveDueDateRange(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the due date to use during your search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveDueDateRange(for intent: INSearchForBillsIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveDueDateRange(for intent: INSearchForBillsIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object containing the [INDateComponentsRange](../indatecomponentsrange.md) object that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the due date for a bill. Use the [dueDateRange](../insearchforbillsintent/duedaterange.md) property of the intent object to identify the date range to search. If a date range is available and usable, return a successful resolution with that date range. You can also make adjustments to the date range as needed and ask the user for confirmation.

If the user didn’t specify a date range, return a resolution of not required from this method. When the user didn’t specify a date range, you must decide how you want to filter results when performing the subsequent search. For example, you might want to return only the currently due bills. Alternatively, you could return all bills from the past month or from the past year.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the bill type to use during your search.
- [resolvePaymentDateRange(for:with:)](resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the bill status to use during your search.

# resolveDueDateRangeForSearchForBills:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the due date to use during your search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveDueDateRangeForSearchForBills:(INSearchForBillsIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object containing the [INDateComponentsRange](../indatecomponentsrange.md) object that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the due date for a bill. Use the [dueDateRange](../insearchforbillsintent/duedaterange.md) property of the intent object to identify the date range to search. If a date range is available and usable, return a successful resolution with that date range. You can also make adjustments to the date range as needed and ask the user for confirmation.

If the user didn’t specify a date range, return a resolution of not required from this method. When the user didn’t specify a date range, you must decide how you want to filter results when performing the subsequent search. For example, you might want to return only the currently due bills. Alternatively, you could return all bills from the past month or from the past year.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForSearchForBills:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveBillTypeForSearchForBills:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the bill type to use during your search.
- [resolvePaymentDateRangeForSearchForBills:withCompletion:](resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
- [resolveStatusForSearchForBills:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the bill status to use during your search.
