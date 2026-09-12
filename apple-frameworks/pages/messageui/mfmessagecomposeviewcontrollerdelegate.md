> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontrollerdelegate](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontrollerdelegate)

# MFMessageComposeViewControllerDelegate (Swift)

**Framework:** Message UI  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An interface for responding to user interactions with a message compose view controller.

## Declaration

```swift
protocol MFMessageComposeViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [MFMessageComposeViewControllerDelegate](mfmessagecomposeviewcontrollerdelegate.md) protocol defines a single method that custom objects can implement to respond to updates from a message composition view (an instance of the  [MFMessageComposeViewController](mfmessagecomposeviewcontroller.md) class). Use the method of this protocol to respond to the end of the user composing an SMS message. The method includes information about whether the user chose to send or cancel the message, or whether the attempt to send it failed.

## Topics

### Responding to the Message Completion

- [messageComposeViewController(\_:didFinishWith:)](mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user finished composing the message.
- [MessageComposeResult](messagecomposeresult.md): These constants describe the result of the message-composition interface.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the view controller dismissal

- [messageComposeDelegate](mfmessagecomposeviewcontroller/messagecomposedelegate.md): The delegate to which message-related notifications should be sent.

# MFMessageComposeViewControllerDelegate (Objective-C)

**Framework:** Message UI  
**Kind:** Protocol  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An interface for responding to user interactions with a message compose view controller.

## Declaration

```objectivec
@protocol MFMessageComposeViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [MFMessageComposeViewControllerDelegate](mfmessagecomposeviewcontrollerdelegate.md) protocol defines a single method that custom objects can implement to respond to updates from a message composition view (an instance of the  [MFMessageComposeViewController](mfmessagecomposeviewcontroller.md) class). Use the method of this protocol to respond to the end of the user composing an SMS message. The method includes information about whether the user chose to send or cancel the message, or whether the attempt to send it failed.

## Topics

### Responding to the Message Completion

- [messageComposeViewController:didFinishWithResult:](mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user finished composing the message.
- [MessageComposeResult](messagecomposeresult.md): These constants describe the result of the message-composition interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to the view controller dismissal

- [messageComposeDelegate](mfmessagecomposeviewcontroller/messagecomposedelegate.md): The delegate to which message-related notifications should be sent.
