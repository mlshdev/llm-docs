> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontrollerdelegate](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontrollerdelegate)

# MFMailComposeViewControllerDelegate (Swift)

**Framework:** Message UI  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An interface for responding to user interactions with a mail compose view controller.

## Declaration

```swift
protocol MFMailComposeViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [MFMailComposeViewControllerDelegate](mfmailcomposeviewcontrollerdelegate.md) protocol defines the method that your delegate must implement to manage the mail composition interface. The method of this protocol notifies your delegate object when the user has finished with the interface and is ready to dismiss it.

Your delegate object is responsible for dismissing the picker when the operation completes. You do this by using the [dismiss(animated:completion:)](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent view controller, which is responsible for displaying the [MFMailComposeViewController](mfmailcomposeviewcontroller.md) object’s interface.

## Topics

### Responding to Email Completion

- [mailComposeController(\_:didFinishWith:error:)](mfmailcomposeviewcontrollerdelegate/mailcomposecontroller%28__didfinishwith_error_%29.md): Tells the delegate that the user wants to dismiss the mail composition view.
- [MFMailComposeResult](mfmailcomposeresult.md): Result codes returned when the mail composition interface is dismissed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the view controller dismissal

- [mailComposeDelegate](mfmailcomposeviewcontroller/mailcomposedelegate.md): The mail composition view controller’s delegate.

# MFMailComposeViewControllerDelegate (Objective-C)

**Framework:** Message UI  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An interface for responding to user interactions with a mail compose view controller.

## Declaration

```objectivec
@protocol MFMailComposeViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [MFMailComposeViewControllerDelegate](mfmailcomposeviewcontrollerdelegate.md) protocol defines the method that your delegate must implement to manage the mail composition interface. The method of this protocol notifies your delegate object when the user has finished with the interface and is ready to dismiss it.

Your delegate object is responsible for dismissing the picker when the operation completes. You do this by using the [dismissViewControllerAnimated:completion:](../uikit/uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent view controller, which is responsible for displaying the [MFMailComposeViewController](mfmailcomposeviewcontroller.md) object’s interface.

## Topics

### Responding to Email Completion

- [mailComposeController:didFinishWithResult:error:](mfmailcomposeviewcontrollerdelegate/mailcomposecontroller%28__didfinishwith_error_%29.md): Tells the delegate that the user wants to dismiss the mail composition view.
- [MFMailComposeResult](mfmailcomposeresult.md): Result codes returned when the mail composition interface is dismissed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the view controller dismissal

- [mailComposeDelegate](mfmailcomposeviewcontroller/mailcomposedelegate.md): The mail composition view controller’s delegate.
