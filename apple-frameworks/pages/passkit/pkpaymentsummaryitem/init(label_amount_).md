> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitem/init(label:amount:)](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitem/init(label:amount:))

# init(label:amount:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a summary item with the given label and amount.

## Declaration

```swift
convenience init(label: String, amount: NSDecimalNumber)
```

## Parameters

- `label`: A short, localized description of the summary item.
- `amount`: The amount associated with the summary item.

<a id="return-value"></a>

## Return Value

A summary item with the given label and amount. The resulting item has a [PKPaymentSummaryItemType.final](../pkpaymentsummaryitemtype/final.md) type.

## See Also

### Creating  summary items

- [init(label:amount:type:)](init%28label_amount_type_%29.md): Initializes and returns a summary item with the given label, amount, and type.

# summaryItemWithLabel:amount: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a summary item with the given label and amount.

## Declaration

```objectivec
+ (instancetype) summaryItemWithLabel:(NSString *) label amount:(NSDecimalNumber *) amount;
```

## Parameters

- `label`: A short, localized description of the summary item.
- `amount`: The amount associated with the summary item.

<a id="return-value"></a>

## Return Value

A summary item with the given label and amount. The resulting item has a [PKPaymentSummaryItemTypeFinal](../pkpaymentsummaryitemtype/final.md) type.

## See Also

### Creating  summary items

- [summaryItemWithLabel:amount:type:](init%28label_amount_type_%29.md): Initializes and returns a summary item with the given label, amount, and type.
