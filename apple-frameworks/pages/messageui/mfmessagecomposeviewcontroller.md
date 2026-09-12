> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller)

# MFMessageComposeViewController (Swift)

**Framework:** Message UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A standard view controller whose interface lets the user compose and send SMS or MMS messages.

## Declaration

```swift
class MFMessageComposeViewController
```

<a id="overview"></a>

## Overview

Use an [MFMessageComposeViewController](mfmessagecomposeviewcontroller.md) object to display the standard message composition interface inside your app. Before presenting the interface, populate the fields with the set of initial recipients and the message you want to send. After presenting the interface, a person can edit your initial values before sending the message.

The composition interface doesn’t guarantee the delivery of your message; it only lets you construct the initial message and present it for a person’s approval. The person may opt to cancel the composition interface which discards the message and its contents. If the person opts to send the message, the Messages app takes on the responsibility of sending the message.

![a screenshot of the New Message screen, with a phone number in the To field and a short sentence in the composition text field.](https://developer.apple.com/images/com.apple.messageui/media-4288093@2x.png)

> **Important**

>  You must not modify the view hierarchy presented by this view controller. However, you can customize the appearance of the interface using the [UIAppearance](../uikit/uiappearance.md) protocol.

An alternate way to compose SMS messages is to create and open a URL that uses the `sms` scheme. URLs of that type go directly to the Messages app, which uses your URL to configure the message. For information about the structure of `sms` URLs, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).

<a id="Checking-the-availability-of-the-composition-interface"></a>

### Checking the availability of the composition interface

Before presenting the message compose view controller, always call the [canSendText()](mfmessagecomposeviewcontroller/cansendtext%28%29.md) method to see if the person configured the current device to send messages. If the user’s device isn’t set up to send or receive messages, you can notify the user or disable the messaging features in your application. You shouldn’t attempt to use this interface if the [canSendText()](mfmessagecomposeviewcontroller/cansendtext%28%29.md) method returns [false](https://developer.apple.com/documentation/swift/false). If messaging is available, you can also use the [canSendAttachments()](mfmessagecomposeviewcontroller/cansendattachments%28%29.md) and [canSendSubject()](mfmessagecomposeviewcontroller/cansendsubject%28%29.md) methods to determine if those specific messaging features are available.

**Swift**

```swift
if !MFMessageComposeViewController.canSendText() {
    print("SMS services are not available")
}

```

**Obj-C**

```objc
if (![MFMessageComposeViewController canSendText]) {
   NSLog(@"Message services are not available.");
}
```

<a id="Configuring-and-displaying-the-composition-interface"></a>

### Configuring and displaying the composition interface

After verifying that message services are available, you can create and configure the message composition view controller and then present it like any other view controller. Use the methods of this class to specify the message’s recipients and the contents of the message. If attachments or a subject line are supported, you can set values for them as well. The sample code below shows how to configure the composition interface and present it modally. Always assign a delegate to the [messageComposeDelegate](mfmessagecomposeviewcontroller/messagecomposedelegate.md) property, because the delegate is responsible for dismissing the composition interface later. The delegate object must conform to the [MFMessageComposeViewControllerDelegate](mfmessagecomposeviewcontrollerdelegate.md) protocol.

**Swift**

```swift
let composeVC = MFMessageComposeViewController()
composeVC.messageComposeDelegate = self
 
// Configure the fields of the interface.
composeVC.recipients = ["4085551212"]
composeVC.body = "Hello from California!"
 
// Present the view controller modally.
self.present(composeVC, animated: true, completion: nil)

```

**Obj-C**

```objc
MFMessageComposeViewController* composeVC = [[MFMessageComposeViewController alloc] init];
composeVC.messageComposeDelegate = self;
 
// Configure the fields of the interface.
composeVC.recipients = @[@"14085551212"];
composeVC.body = @"Hello from California!";
 
// Present the view controller modally.
[self present:composeVC animated:YES completion:nil];

```

The message compose view controller isn’t dismissed automatically. When the user taps the buttons to send the message or cancel the interface, the message compose view controller calls the [messageComposeViewController(\_:didFinishWith:)](mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller%28__didfinishwith_%29.md) method of its delegate. Your implementation of that method must dismiss the view controller explicitly, as shown in the sample code below. You can also use this method to check the result of the operation.

**Swift**

```swift
func messageComposeViewController(controller: MFMessageComposeViewController,
                                  didFinishWithResult result: MessageComposeResult) {
    // Check the result or perform other tasks.
    
    // Dismiss the message compose view controller.
    controller.dismissViewControllerAnimated(true, completion: nil)}

```

**Obj-C**

```objc
- (void)messageComposeViewController:(MFMessageComposeViewController *)controller
                 didFinishWithResult:(MessageComposeResult)result {
   // Check the result or perform other tasks.    // Dismiss the message compose view controller.
   [self dismissViewControllerAnimated:YES completion:nil];}

```

For more information on how to present and dismiss view controllers, see [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457).

<a id="Detecting-changes-to-the-availability-of-messaging"></a>

### Detecting changes to the availability of messaging

Add an observer to the [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md) notification to get notified of changes to the messaging capabilities of the current device. The system delivers that notification to your observer when the status of messaging changes.

## Topics

### Responding to the view controller dismissal

- [messageComposeDelegate](mfmessagecomposeviewcontroller/messagecomposedelegate.md): The delegate to which message-related notifications should be sent.
- [MFMessageComposeViewControllerDelegate](mfmessagecomposeviewcontrollerdelegate.md): An interface for responding to user interactions with a message compose view controller.

### Determining if message composition is available

- [canSendText()](mfmessagecomposeviewcontroller/cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendAttachments()](mfmessagecomposeviewcontroller/cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [canSendSubject()](mfmessagecomposeviewcontroller/cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
- [isSupportedAttachmentUTI(\_:)](mfmessagecomposeviewcontroller/issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

### Setting the initial message information

- [recipients](mfmessagecomposeviewcontroller/recipients.md): An array of strings that contains the initial recipients of the message.
- [subject](mfmessagecomposeviewcontroller/subject.md): The initial subject of the message.
- [body](mfmessagecomposeviewcontroller/body.md): The initial content of the message.
- [message](mfmessagecomposeviewcontroller/message.md): A message object from your iMessage app extension.

### Managing attachments

- [disableUserAttachments()](mfmessagecomposeviewcontroller/disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](mfmessagecomposeviewcontroller/attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL(\_:withAlternateFilename:)](mfmessagecomposeviewcontroller/addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData(\_:typeIdentifier:filename:)](mfmessagecomposeviewcontroller/addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider(\_:)](mfmessagecomposeviewcontroller/insertcollaborationitemprovider%28__%29.md)

### Handling notifications

- [MFMessageComposeViewControllerTextMessageAvailabilityKey](mfmessagecomposeviewcontrollertextmessageavailabilitykey.md): The value of this key is a number object that contains a Boolean value.

### Configuring device validation

- [setUPIVerificationCodeSendCompletion(\_:)](mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md): Configures the instance of a view for Unified Payments Interface (UPI) device validation.

### Structures

- [MFMessageComposeViewController.TextMessageAvailabilityDidChangeMessage](mfmessagecomposeviewcontroller/textmessageavailabilitydidchangemessage.md): Message type for text message availability change notifications.

## Relationships

### Inherits From

- [UINavigationController](../uikit/uinavigationcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

# MFMessageComposeViewController (Objective-C)

**Framework:** Message UI  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A standard view controller whose interface lets the user compose and send SMS or MMS messages.

## Declaration

```objectivec
@interface MFMessageComposeViewController : UINavigationController
```

<a id="overview"></a>

## Overview

Use an [MFMessageComposeViewController](mfmessagecomposeviewcontroller.md) object to display the standard message composition interface inside your app. Before presenting the interface, populate the fields with the set of initial recipients and the message you want to send. After presenting the interface, a person can edit your initial values before sending the message.

The composition interface doesn’t guarantee the delivery of your message; it only lets you construct the initial message and present it for a person’s approval. The person may opt to cancel the composition interface which discards the message and its contents. If the person opts to send the message, the Messages app takes on the responsibility of sending the message.

![a screenshot of the New Message screen, with a phone number in the To field and a short sentence in the composition text field.](https://developer.apple.com/images/com.apple.messageui/media-4288093@2x.png)

> **Important**

>  You must not modify the view hierarchy presented by this view controller. However, you can customize the appearance of the interface using the [UIAppearance](../uikit/uiappearance.md) protocol.

An alternate way to compose SMS messages is to create and open a URL that uses the `sms` scheme. URLs of that type go directly to the Messages app, which uses your URL to configure the message. For information about the structure of `sms` URLs, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).

<a id="Checking-the-availability-of-the-composition-interface"></a>

### Checking the availability of the composition interface

Before presenting the message compose view controller, always call the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) method to see if the person configured the current device to send messages. If the user’s device isn’t set up to send or receive messages, you can notify the user or disable the messaging features in your application. You shouldn’t attempt to use this interface if the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) method returns [false](https://developer.apple.com/documentation/swift/false). If messaging is available, you can also use the [canSendAttachments](mfmessagecomposeviewcontroller/cansendattachments%28%29.md) and [canSendSubject](mfmessagecomposeviewcontroller/cansendsubject%28%29.md) methods to determine if those specific messaging features are available.

**Swift**

```swift
if !MFMessageComposeViewController.canSendText() {
    print("SMS services are not available")
}

```

**Obj-C**

```objc
if (![MFMessageComposeViewController canSendText]) {
   NSLog(@"Message services are not available.");
}
```

<a id="Configuring-and-displaying-the-composition-interface"></a>

### Configuring and displaying the composition interface

After verifying that message services are available, you can create and configure the message composition view controller and then present it like any other view controller. Use the methods of this class to specify the message’s recipients and the contents of the message. If attachments or a subject line are supported, you can set values for them as well. The sample code below shows how to configure the composition interface and present it modally. Always assign a delegate to the [messageComposeDelegate](mfmessagecomposeviewcontroller/messagecomposedelegate.md) property, because the delegate is responsible for dismissing the composition interface later. The delegate object must conform to the [MFMessageComposeViewControllerDelegate](mfmessagecomposeviewcontrollerdelegate.md) protocol.

**Swift**

```swift
let composeVC = MFMessageComposeViewController()
composeVC.messageComposeDelegate = self
 
// Configure the fields of the interface.
composeVC.recipients = ["4085551212"]
composeVC.body = "Hello from California!"
 
// Present the view controller modally.
self.present(composeVC, animated: true, completion: nil)

```

**Obj-C**

```objc
MFMessageComposeViewController* composeVC = [[MFMessageComposeViewController alloc] init];
composeVC.messageComposeDelegate = self;
 
// Configure the fields of the interface.
composeVC.recipients = @[@"14085551212"];
composeVC.body = @"Hello from California!";
 
// Present the view controller modally.
[self present:composeVC animated:YES completion:nil];

```

The message compose view controller isn’t dismissed automatically. When the user taps the buttons to send the message or cancel the interface, the message compose view controller calls the [messageComposeViewController:didFinishWithResult:](mfmessagecomposeviewcontrollerdelegate/messagecomposeviewcontroller%28__didfinishwith_%29.md) method of its delegate. Your implementation of that method must dismiss the view controller explicitly, as shown in the sample code below. You can also use this method to check the result of the operation.

**Swift**

```swift
func messageComposeViewController(controller: MFMessageComposeViewController,
                                  didFinishWithResult result: MessageComposeResult) {
    // Check the result or perform other tasks.
    
    // Dismiss the message compose view controller.
    controller.dismissViewControllerAnimated(true, completion: nil)}

```

**Obj-C**

```objc
- (void)messageComposeViewController:(MFMessageComposeViewController *)controller
                 didFinishWithResult:(MessageComposeResult)result {
   // Check the result or perform other tasks.    // Dismiss the message compose view controller.
   [self dismissViewControllerAnimated:YES completion:nil];}

```

For more information on how to present and dismiss view controllers, see [View Controller Programming Guide for iOS](https://developer.apple.com/library/archive/featuredarticles/ViewControllerPGforiPhoneOS/index.html#//apple_ref/doc/uid/TP40007457).

<a id="Detecting-changes-to-the-availability-of-messaging"></a>

### Detecting changes to the availability of messaging

Add an observer to the [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md) notification to get notified of changes to the messaging capabilities of the current device. The system delivers that notification to your observer when the status of messaging changes.

## Topics

### Responding to the view controller dismissal

- [messageComposeDelegate](mfmessagecomposeviewcontroller/messagecomposedelegate.md): The delegate to which message-related notifications should be sent.
- [MFMessageComposeViewControllerDelegate](mfmessagecomposeviewcontrollerdelegate.md): An interface for responding to user interactions with a message compose view controller.

### Determining if message composition is available

- [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md): Returns a Boolean value that indicates whether the current device is capable of sending text messages.
- [canSendAttachments](mfmessagecomposeviewcontroller/cansendattachments%28%29.md): Indicates whether or not messages can include attachments.
- [canSendSubject](mfmessagecomposeviewcontroller/cansendsubject%28%29.md): Indicates whether or not messages can include subject lines, according to the user’s configuration in Settings.
- [isSupportedAttachmentUTI:](mfmessagecomposeviewcontroller/issupportedattachmentuti%28__%29.md): Indicates whether or not the message can accept a file, with the specified UTI, as an attachment.

### Setting the initial message information

- [recipients](mfmessagecomposeviewcontroller/recipients.md): An array of strings that contains the initial recipients of the message.
- [subject](mfmessagecomposeviewcontroller/subject.md): The initial subject of the message.
- [body](mfmessagecomposeviewcontroller/body.md): The initial content of the message.
- [message](mfmessagecomposeviewcontroller/message.md): A message object from your iMessage app extension.

### Managing attachments

- [disableUserAttachments](mfmessagecomposeviewcontroller/disableuserattachments%28%29.md): Disables the camera/attachment button in the message composition view.
- [attachments](mfmessagecomposeviewcontroller/attachments.md): Returns an array of dictionaries that describe the properties of an attachment.
- [addAttachmentURL:withAlternateFilename:](mfmessagecomposeviewcontroller/addattachmenturl%28__withalternatefilename_%29.md): Attaches a specified file to the message.
- [addAttachmentData:typeIdentifier:filename:](mfmessagecomposeviewcontroller/addattachmentdata%28__typeidentifier_filename_%29.md): Attaches arbitrary content to the message.
- [MFMessageComposeViewControllerAttachmentURL](mfmessagecomposeviewcontrollerattachmenturl.md): The URL for the item that is attached to the message.
- [MFMessageComposeViewControllerAttachmentAlternateFilename](mfmessagecomposeviewcontrollerattachmentalternatefilename.md): The key for the alternate filename for the file-based item attached to the message.
- [insertCollaborationItemProvider:](mfmessagecomposeviewcontroller/insertcollaborationitemprovider%28__%29.md)

### Handling notifications

- [MFMessageComposeViewControllerTextMessageAvailabilityDidChangeNotification](mfmessagecomposeviewcontrollertextmessageavailabilitydidchangenotification.md): Posted when the value returned by the [canSendText](mfmessagecomposeviewcontroller/cansendtext%28%29.md) class method has changed.
- [MFMessageComposeViewControllerTextMessageAvailabilityKey](mfmessagecomposeviewcontrollertextmessageavailabilitykey.md): The value of this key is a number object that contains a Boolean value.

### Configuring device validation

- [setUPIVerificationCodeSendCompletion:](mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md): Configures the instance of a view for Unified Payments Interface (UPI) device validation.

## Relationships

### Inherits From

- [UINavigationController](../uikit/uinavigationcontroller.md)
