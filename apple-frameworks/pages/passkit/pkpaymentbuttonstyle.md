> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentbuttonstyle](https://developer.apple.com/documentation/passkit/pkpaymentbuttonstyle)

# PKPaymentButtonStyle (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A type that indicates the available appearances for an Apple Pay button.

## Declaration

```swift
enum PKPaymentButtonStyle
```

## Topics

### Payment button styles

- [PKPaymentButtonStyle.white](pkpaymentbuttonstyle/white.md): A white button with black lettering.
- [PKPaymentButtonStyle.whiteOutline](pkpaymentbuttonstyle/whiteoutline.md): A white button with black lettering and a black outline.
- [PKPaymentButtonStyle.black](pkpaymentbuttonstyle/black.md): A black button with white lettering.
- [PKPaymentButtonStyle.automatic](pkpaymentbuttonstyle/automatic.md): A button that automatically changes its appearance when the user switches between Light Mode and Dark Mode.

### Initializers

- [init(rawValue:)](pkpaymentbuttonstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the appearance

- [PKPaymentButtonType](pkpaymentbuttontype.md): The Apple Pay button types you can display to initiate Apple Pay transactions.
- [cornerRadius](pkpaymentbutton/cornerradius.md): The radius, in points, for the rounded corners on the button.

# PKPaymentButtonStyle (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A type that indicates the available appearances for an Apple Pay button.

## Declaration

```objectivec
enum PKPaymentButtonStyle : NSInteger;
```

## Topics

### Payment button styles

- [PKPaymentButtonStyleWhite](pkpaymentbuttonstyle/white.md): A white button with black lettering.
- [PKPaymentButtonStyleWhiteOutline](pkpaymentbuttonstyle/whiteoutline.md): A white button with black lettering and a black outline.
- [PKPaymentButtonStyleBlack](pkpaymentbuttonstyle/black.md): A black button with white lettering.
- [PKPaymentButtonStyleAutomatic](pkpaymentbuttonstyle/automatic.md): A button that automatically changes its appearance when the user switches between Light Mode and Dark Mode.

## See Also

### Configuring the appearance

- [PKPaymentButtonType](pkpaymentbuttontype.md): The Apple Pay button types you can display to initiate Apple Pay transactions.
- [cornerRadius](pkpaymentbutton/cornerradius.md): The radius, in points, for the rounded corners on the button.
