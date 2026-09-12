> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentcurrencyamountresolutionresult/init(currencyamountresolutionresult:)](https://developer.apple.com/documentation/intents/insendpaymentcurrencyamountresolutionresult/init(currencyamountresolutionresult:))

# init(currencyAmountResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates a resolution result object with the specified currency amount resolution result object.

## Declaration

```swift
init(currencyAmountResolutionResult: INCurrencyAmountResolutionResult)
```

## Parameters

- `currencyAmountResolutionResult`: The [INCurrencyAmountResolutionResult](../incurrencyamountresolutionresult.md) object representing your proposed solution.

<a id="return-value"></a>

## Return Value

An initialized resolution result object.

<a id="Discussion"></a>

## Discussion

Typically, you do not call this method directly. Instead, you use the existing methods to create a resolution result of the appropriate type.

## See Also

### Creating a Resolution Result Object

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [INSendPaymentCurrencyAmountUnsupportedReason](../insendpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.

# initWithCurrencyAmountResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates a resolution result object with the specified currency amount resolution result object.

## Declaration

```objectivec
- (instancetype) initWithCurrencyAmountResolutionResult:(INCurrencyAmountResolutionResult *) currencyAmountResolutionResult;
```

## Parameters

- `currencyAmountResolutionResult`: The [INCurrencyAmountResolutionResult](../incurrencyamountresolutionresult.md) object representing your proposed solution.

<a id="return-value"></a>

## Return Value

An initialized resolution result object.

<a id="Discussion"></a>

## Discussion

Typically, you do not call this method directly. Instead, you use the existing methods to create a resolution result of the appropriate type.

## See Also

### Creating a Resolution Result Object

- [unsupportedForReason:](unsupported%28forreason_%29.md): Creates an object whose resolution indicates that the specified value is not supported.
- [INSendPaymentCurrencyAmountUnsupportedReason](../insendpaymentcurrencyamountunsupportedreason.md): Constants indicating the reason for being unable to resolve the currency amount.
