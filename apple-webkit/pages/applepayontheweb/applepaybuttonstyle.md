> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaybuttonstyle](https://developer.apple.com/documentation/applepayontheweb/applepaybuttonstyle)

# ApplePayButtonStyle

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Enumeration  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A type that indicates the available appearances for an Apple Pay Button.

## Declaration

```
enum ApplePayButtonStyle
```

<a id="overview"></a>

## Overview

The values for the button style:

- **`"black"`**: A black button with white lettering.

For more information, see [PKPaymentButtonStyle.black](https://developer.apple.com/documentation/passkit/pkpaymentbuttonstyle/black).

- **`"white"`**: A white button with black lettering.

For more information, see [PKPaymentButtonStyle.white](https://developer.apple.com/documentation/passkit/pkpaymentbuttonstyle/white).

- **`"white-outline"`**: A white button with black lettering and a black outline.

For more information, see [PKPaymentButtonStyle.whiteOutline](https://developer.apple.com/documentation/passkit/pkpaymentbuttonstyle/whiteoutline).

## Topics

### Enumeration Cases

- [black](applepaybuttonstyle/black.md)
- [white](applepaybuttonstyle/white.md)

## See Also

### Configuring appearance

- [type](applepaybutton/type.md): The kind of Apple Pay button, such as a button for purchasing a subscription.
- [buttonstyle](applepaybutton/buttonstyle.md): The appearance of the Apple Pay button, such as a black button with white lettering.
- [locale](applepaybutton/locale.md): The language and region used for the displayed Apple Pay button.
- [ApplePayButtonType](applepaybuttontype.md): A type that indicates the button types that you can display to initiate Apple Pay transactions.
- [ApplePayButtonLocale](applepaybuttonlocale.md): A type that indicates the languages and regions that you can specify for the Apple Pay button.
