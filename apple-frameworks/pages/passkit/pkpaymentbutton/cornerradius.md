> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentbutton/cornerradius](https://developer.apple.com/documentation/passkit/pkpaymentbutton/cornerradius)

# cornerRadius (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

The radius, in points, for the rounded corners on the button.

## Declaration

```swift
var cornerRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

To remove the rounded corners, set this value to 0.0.

The default value is `4.0`.

## See Also

### Configuring the appearance

- [PKPaymentButtonType](../pkpaymentbuttontype.md): The Apple Pay button types you can display to initiate Apple Pay transactions.
- [PKPaymentButtonStyle](../pkpaymentbuttonstyle.md): A type that indicates the available appearances for an Apple Pay button.

# cornerRadius (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

The radius, in points, for the rounded corners on the button.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat cornerRadius;
```

<a id="Discussion"></a>

## Discussion

To remove the rounded corners, set this value to 0.0.

The default value is `4.0`.

## See Also

### Configuring the appearance

- [PKPaymentButtonType](../pkpaymentbuttontype.md): The Apple Pay button types you can display to initiate Apple Pay transactions.
- [PKPaymentButtonStyle](../pkpaymentbuttonstyle.md): A type that indicates the available appearances for an Apple Pay button.
