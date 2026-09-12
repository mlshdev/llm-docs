> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentbutton/init(paymentbuttontype:paymentbuttonstyle:)](https://developer.apple.com/documentation/passkit/pkpaymentbutton/init(paymentbuttontype:paymentbuttonstyle:))

# init(paymentButtonType:paymentButtonStyle:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Creates a new payment button with the specified type and style.

## Declaration

```swift
init(paymentButtonType type: PKPaymentButtonType, paymentButtonStyle style: PKPaymentButtonStyle)
```

## Parameters

- `type`: The button’s content. For a complete list of button types, see [PKPaymentButtonType](../pkpaymentbuttontype.md).
- `style`: The button’s appearance. For a complete list of button styles, see [PKPaymentButtonStyle](../pkpaymentbuttonstyle.md).

<a id="return-value"></a>

## Return Value

Returns a `PKPaymentButton` instance with the specified type and style.

# initWithPaymentButtonType:paymentButtonStyle: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Creates a new payment button with the specified type and style.

## Declaration

```objectivec
- (instancetype) initWithPaymentButtonType:(PKPaymentButtonType) type paymentButtonStyle:(PKPaymentButtonStyle) style;
```

## Parameters

- `type`: The button’s content. For a complete list of button types, see [PKPaymentButtonType](../pkpaymentbuttontype.md).
- `style`: The button’s appearance. For a complete list of button styles, see [PKPaymentButtonStyle](../pkpaymentbuttonstyle.md).

<a id="return-value"></a>

## Return Value

Returns a `PKPaymentButton` instance with the specified type and style.

## See Also

### Creating payment buttons

- [buttonWithType:style:](buttonwithtype_style_.md): Creates a new payment button with the specified type and style.
