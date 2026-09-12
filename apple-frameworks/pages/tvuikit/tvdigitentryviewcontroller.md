> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvdigitentryviewcontroller](https://developer.apple.com/documentation/tvuikit/tvdigitentryviewcontroller)

# TVDigitEntryViewController (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A view controller that enables the user to enter digits, like a passcode, in your app.

## Declaration

```swift
class TVDigitEntryViewController
```

<a id="overview"></a>

## Overview

Use the `TVDigitEntryViewController` class to manage a digit entry view. The digit entry view is automatically presented by the view controller and consists of boxes that display digits and a digit keyboard.

![A fullscreen image with five grey boxes in the middle of the screen and a row of numbers from 1 to 0 below the boxes.](https://developer.apple.com/images/com.apple.tvuikit/media-3016866@2x.png)

## Topics

### Configuring the Digit Entry View

- [numberOfDigits](tvdigitentryviewcontroller/numberofdigits.md): The number of required digits.
- [titleText](tvdigitentryviewcontroller/titletext.md): The title of the digit entry view.
- [promptText](tvdigitentryviewcontroller/prompttext.md): A prompt that displays any additional required information.
- [isSecureDigitEntry](tvdigitentryviewcontroller/issecuredigitentry.md): A Boolean value that indicates whether an entered digit is immediately obscured.

### Entering Information

- [entryCompletionHandler](tvdigitentryviewcontroller/entrycompletionhandler.md): A completion handler that cues the app that the user has entered the required number of digits for the digit entry view.
- [clearEntry(animated:)](tvdigitentryviewcontroller/clearentry%28animated_%29.md): Removes all digits from the digit entry view.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

# TVDigitEntryViewController (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A view controller that enables the user to enter digits, like a passcode, in your app.

## Declaration

```objectivec
@interface TVDigitEntryViewController : UIViewController
```

<a id="overview"></a>

## Overview

Use the `TVDigitEntryViewController` class to manage a digit entry view. The digit entry view is automatically presented by the view controller and consists of boxes that display digits and a digit keyboard.

![A fullscreen image with five grey boxes in the middle of the screen and a row of numbers from 1 to 0 below the boxes.](https://developer.apple.com/images/com.apple.tvuikit/media-3016866@2x.png)

## Topics

### Configuring the Digit Entry View

- [numberOfDigits](tvdigitentryviewcontroller/numberofdigits.md): The number of required digits.
- [titleText](tvdigitentryviewcontroller/titletext.md): The title of the digit entry view.
- [promptText](tvdigitentryviewcontroller/prompttext.md): A prompt that displays any additional required information.
- [secureDigitEntry](tvdigitentryviewcontroller/issecuredigitentry.md): A Boolean value that indicates whether an entered digit is immediately obscured.

### Entering Information

- [entryCompletionHandler](tvdigitentryviewcontroller/entrycompletionhandler.md): A completion handler that cues the app that the user has entered the required number of digits for the digit entry view.
- [clearEntryAnimated:](tvdigitentryviewcontroller/clearentry%28animated_%29.md): Removes all digits from the digit entry view.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)
