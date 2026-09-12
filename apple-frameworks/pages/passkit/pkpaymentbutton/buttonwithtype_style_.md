> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentbutton/buttonwithtype:style:](https://developer.apple.com/documentation/passkit/pkpaymentbutton/buttonwithtype:style:)

# buttonWithType:style:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Creates a new payment button with the specified type and style.

## Declaration

```objectivec
+ (instancetype) buttonWithType:(PKPaymentButtonType) buttonType style:(PKPaymentButtonStyle) buttonStyle;
```

## Parameters

- `buttonType`: The button’s content. For a complete list of button types, see [PKPaymentButtonType](../pkpaymentbuttontype.md).
- `buttonStyle`: The button’s appearance. For a complete list of button styles, see [PKPaymentButtonStyle](../pkpaymentbuttonstyle.md).

<a id="return-value"></a>

## Return Value

Returns a `PKPaymentButton` instance with the specified type and style.

<a id="Discussion"></a>

## Discussion

Use the returned button to trigger a purchase through Apple Pay. Add the button instance to your view hierarchy, and then set its [Target-Action](https://developer.apple.com/library/archive/documentation/General/Conceptual/Devpedia-CocoaApp/TargetAction.html#//apple_ref/doc/uid/TP40009071-CH3) by calling its [addTarget:action:forControlEvents:](../../uikit/uicontrol/addtarget%28__action_for_%29.md) method. In the action method, create the payment request and present the payment authorization view controller. These buttons can be used only to initiate Apple Pay transactions.

Do not display a button smaller than its intrinsic content size. You can extend the button’s width to fit your layout, but do not reduce the width or change the button’s height.

For more information on using Apple Pay, see [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764).

## See Also

### Creating payment buttons

- [initWithPaymentButtonType:paymentButtonStyle:](init%28paymentbuttontype_paymentbuttonstyle_%29.md): Creates a new payment button with the specified type and style.
