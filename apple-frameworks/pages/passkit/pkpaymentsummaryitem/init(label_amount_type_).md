> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitem/init(label:amount:type:)](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitem/init(label:amount:type:))

# init(label:amount:type:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a summary item with the given label, amount, and type.

## Declaration

```swift
convenience init(label: String, amount: NSDecimalNumber, type: PKPaymentSummaryItemType)
```

## Parameters

- `label`: A short, localized description of the summary item.
- `amount`: The amount associated with the summary item.
- `type`: The type of the summary item.

<a id="return-value"></a>

## Return Value

A summary item with the given label, amount, and type.

<a id="Discussion"></a>

## Discussion

When creating summary items for estimates or charges whose final value isn’t yet known, use a [PKPaymentSummaryItemType.pending](../pkpaymentsummaryitemtype/pending.md) type. Use [zero](../../foundation/nsdecimalnumber/zero.md) for the amount of pending items. The payment sheet doesn’t show the value of pending items.

> **Note**

>  The payment request’s total must include a final value, even if the payment request includes one or more pending summary items. This total represents the total of all the known costs; don’t include the value of any pending items.

## See Also

### Creating  summary items

- [init(label:amount:)](init%28label_amount_%29.md): Initializes and returns a summary item with the given label and amount.

# summaryItemWithLabel:amount:type: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a summary item with the given label, amount, and type.

## Declaration

```objectivec
+ (instancetype) summaryItemWithLabel:(NSString *) label amount:(NSDecimalNumber *) amount type:(PKPaymentSummaryItemType) type;
```

## Parameters

- `label`: A short, localized description of the summary item.
- `amount`: The amount associated with the summary item.
- `type`: The type of the summary item.

<a id="return-value"></a>

## Return Value

A summary item with the given label, amount, and type.

<a id="Discussion"></a>

## Discussion

When creating summary items for estimates or charges whose final value isn’t yet known, use a [PKPaymentSummaryItemTypePending](../pkpaymentsummaryitemtype/pending.md) type. Use [zero](../../foundation/nsdecimalnumber/zero.md) for the amount of pending items. The payment sheet doesn’t show the value of pending items.

> **Note**

>  The payment request’s total must include a final value, even if the payment request includes one or more pending summary items. This total represents the total of all the known costs; don’t include the value of any pending items.

## See Also

### Creating  summary items

- [summaryItemWithLabel:amount:](init%28label_amount_%29.md): Initializes and returns a summary item with the given label and amount.
