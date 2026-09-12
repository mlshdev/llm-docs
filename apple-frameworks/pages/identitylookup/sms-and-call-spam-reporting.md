> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/sms-and-call-spam-reporting](https://developer.apple.com/documentation/identitylookup/sms-and-call-spam-reporting)

# SMS and Call Spam Reporting (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** API Collection

Create an app extension that lets users report unwanted SMS messages and calls as junk.

<a id="overview"></a>

## Overview

To report SMS messages and calls as spam, the user must enable an Unwanted Communication Reporting extension, called an SMS/Call Reporting extension in the Settings app (see Settings \> Phone \> SMS/Call Reporting). The user can only enable one Unwanted Communication Reporting extension at a time.

In order to report calls, the user swipes left on an item in the Recents list and selects Report. For SMS messages, they press the Report Messages button when it appears in the Messages transcript. Users can also select messages by long-pressing a message and selecting additional messages, then selecting Report Messages.

When the user reports an SMS message or call, the system launches your Unwanted Communication Reporting extension. Your extension gathers additional information from the user, before deciding whether to report or block the number, as shown in the figure below.

![An illustration showing the system instantiating and displaying your view controller in response to the user reporting an SMS message or call.](https://developer.apple.com/images/com.apple.identitylookup/media-3012154@2x.png)

Specifically, the system:

1. Instantiates your extension’s [ILClassificationUIExtensionViewController](../identitylookupui/ilclassificationuiextensionviewcontroller.md) subclass.
2. Calls your controller’s [prepare(for:)](../identitylookupui/ilclassificationuiextensionviewcontroller/prepare%28for_%29.md) method and presents the controller to the user.

Use your [ILClassificationUIExtensionViewController](../identitylookupui/ilclassificationuiextensionviewcontroller.md) subclass to gather data from the user. Override the [prepare(for:)](../identitylookupui/ilclassificationuiextensionviewcontroller/prepare%28for_%29.md) method to configure your controller.

<a id="Cancel-or-Complete-the-Report"></a>

### Cancel or Complete the Report

The system provides a Cancel and a Done button for the controller. By default, the system disables the Done button. As soon as the user has entered all the information you require, enable the Done button by setting the view controller’s [isReadyForClassificationResponse](../identitylookupui/ilclassificationuiextensioncontext/isreadyforclassificationresponse.md) property to [true](https://developer.apple.com/documentation/swift/true).

If the user presses the Cancel button, the system dismisses your view controller, as shown in the figure below.

![An illustration showing the user cancelling your view controller.](https://developer.apple.com/images/com.apple.identitylookup/media-3025730@2x.png)

If the user presses Done, the system calls your view controller’s [classificationResponse(for:)](../identitylookupui/ilclassificationuiextensionviewcontroller/classificationresponse%28for_%29.md) method, passing in an [ILClassificationRequest](ilclassificationrequest.md) object (see the figure below).

![An illustration showing the user tapping the Done button after entering all the required information in your user interface.](https://developer.apple.com/images/com.apple.identitylookup/media-3025729@2x.png)

Override the [classificationResponse(for:)](../identitylookupui/ilclassificationuiextensionviewcontroller/classificationresponse%28for_%29.md) method to return a [ILClassificationResponse](ilclassificationresponse.md) based on the data the user has entered and information about the SMS message or call from the request object.

<a id="Choose-a-Response"></a>

### Choose a Response

The system takes different actions based on the response. For [ILClassificationAction.none](ilclassificationaction/none.md), the system dismisses your view controller, but doesn’t take any other action, as shown in the figure below.

![A circle representing the System Response with a right-facing arrow that points to a rectangle representing an extension with view controller dismissed. That extension has a right-facing arrow that points to a rectangle representing an extension with Deleted for user privacy text. Below that is a dark version of the same diagram.](https://developer.apple.com/images/com.apple.identitylookup/media-3025747@2x.png)

For [ILClassificationAction.reportNotJunk](ilclassificationaction/reportnotjunk.md) or [ILClassificationAction.reportJunk](ilclassificationaction/reportjunk.md), the system generates a report based on your response’s [action](ilclassificationresponse/action.md) and [userInfo](ilclassificationresponse/userinfo.md) properties and then posts it to a network endpoint or sends it using an SMS message, depending on the keys specified in your extension’s `Info.plist` file.

To send a response over the network connection, you must add an associated domain to your extension. For general instructions, see [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains). Note that you must use `classificationreport` instead of `webcredentials` when specifying the domains. You must also specify the network endpoint’s address using the `ILClassificationExtensionNetworkReportDestination` key in your extension’s `Info.plist` file.

To send your response using SMS, specify a fully qualified destination telephony number using the `ILClassificationExtensionSMSReportDestination` key in your extension’s `Info.plist` file. When your app uses this report path, the system displays the SMS message to give the user the opportunity to send or cancel the message.

When the report step is complete, the system dismisses your view controller and any view controllers related to it (see the figure below).

![A circle representing the System Response with a right-facing arrow that points to a device with Cancel or Send buttons. That device has a right-facing arrow that points to a rectangle representing an extension with a view controller with Cancel and Send buttons. That extension has a right-facing arrow that points to a rectangle representing an extension with Deleted for user privacy text. Below that is a dark version of the same diagram.](https://developer.apple.com/images/com.apple.identitylookup/media-3025725@2x.png)

For [ILClassificationAction.reportJunkAndBlockSender](ilclassificationaction/reportjunkandblocksender.md), the system responds just like in the [ILClassificationAction.reportJunk](ilclassificationaction/reportjunk.md) action. However, after the report step, the system presents an alert letting the user know the number will be blocked. Finally, the system blocks the SMS or call number, and dismisses your view controller as shown in the figure below.

![A circle representing the System Response with a right-facing arrow that points to a device with Cancel or Send buttons. That device has a right-facing arrow that points to another device showing Alert SMS/Call blocked text. That device has a right-facing arrow that points to a rectangle representing an extension with a view controller dismissed. That extension has a right-facing arrow that points to a rectangle representing an extension with Deleted for user privacy text. Below that is a dark version of the same diagram.](https://developer.apple.com/images/com.apple.identitylookup/media-3025734@2x.png)

Blocked numbers are added to the device’s Blocked Contact list. Users can manage this list in the Settings app.

Finally, to protect user privacy, the system always deletes your extension’s container after your extension terminates. For more information, see [About the iOS File System](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP40010672-CH2-SW12).

## Topics

### App Extension

- [ILClassificationUIExtensionViewController](../identitylookupui/ilclassificationuiextensionviewcontroller.md): The superclass for an Unwanted Communication Reporting extension’s principal view controller.

### Communications

- [ILCommunication](ilcommunication.md): An abstract superclass representing a message or call to the user.
- [ILMessageCommunication](ilmessagecommunication.md): A concrete subclass representing a SMS message.
- [ILCallCommunication](ilcallcommunication.md): A concrete subclass representing a phone call.

### Requests

- [ILClassificationRequest](ilclassificationrequest.md): The abstract superclass for classification requests.
- [ILMessageClassificationRequest](ilmessageclassificationrequest.md): A classification request for SMS messages.
- [ILCallClassificationRequest](ilcallclassificationrequest.md): A classification request for phone calls.

### Responses

- [ILClassificationResponse](ilclassificationresponse.md): A response object that tells the system how to handle the reported communications.
- [ILClassificationAction](ilclassificationaction.md): The actions the system can take in response to the reported communication.

### Queries

- [ILMessageFilterCapabilitiesQueryRequest](ilmessagefiltercapabilitiesqueryrequest.md): A request to query a Message Filter extension about sharing its sub-category capabilities.
- [ILMessageFilterCapabilitiesQueryHandling](ilmessagefiltercapabilitiesqueryhandling.md): A set of methods implemented by a Message Filter app extension to handle capabilities query requests.

### Responses

- [ILMessageFilterCapabilitiesQueryResponse](ilmessagefiltercapabilitiesqueryresponse.md): A response to a message filter capabilities query request.
- [ILMessageFilterSubAction](ilmessagefiltersubaction.md): Responds to a received message with a filter subaction.

# SMS and Call Spam Reporting (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** API Collection

Create an app extension that lets users report unwanted SMS messages and calls as junk.

<a id="overview"></a>

## Overview

To report SMS messages and calls as spam, the user must enable an Unwanted Communication Reporting extension, called an SMS/Call Reporting extension in the Settings app (see Settings \> Phone \> SMS/Call Reporting). The user can only enable one Unwanted Communication Reporting extension at a time.

In order to report calls, the user swipes left on an item in the Recents list and selects Report. For SMS messages, they press the Report Messages button when it appears in the Messages transcript. Users can also select messages by long-pressing a message and selecting additional messages, then selecting Report Messages.

When the user reports an SMS message or call, the system launches your Unwanted Communication Reporting extension. Your extension gathers additional information from the user, before deciding whether to report or block the number, as shown in the figure below.

![An illustration showing the system instantiating and displaying your view controller in response to the user reporting an SMS message or call.](https://developer.apple.com/images/com.apple.identitylookup/media-3012154@2x.png)

Specifically, the system:

1. Instantiates your extension’s [ILClassificationUIExtensionViewController](../identitylookupui/ilclassificationuiextensionviewcontroller.md) subclass.
2. Calls your controller’s [prepareForClassificationRequest:](../identitylookupui/ilclassificationuiextensionviewcontroller/prepare%28for_%29.md) method and presents the controller to the user.

Use your [ILClassificationUIExtensionViewController](../identitylookupui/ilclassificationuiextensionviewcontroller.md) subclass to gather data from the user. Override the [prepareForClassificationRequest:](../identitylookupui/ilclassificationuiextensionviewcontroller/prepare%28for_%29.md) method to configure your controller.

<a id="Cancel-or-Complete-the-Report"></a>

### Cancel or Complete the Report

The system provides a Cancel and a Done button for the controller. By default, the system disables the Done button. As soon as the user has entered all the information you require, enable the Done button by setting the view controller’s [readyForClassificationResponse](../identitylookupui/ilclassificationuiextensioncontext/isreadyforclassificationresponse.md) property to [true](https://developer.apple.com/documentation/swift/true).

If the user presses the Cancel button, the system dismisses your view controller, as shown in the figure below.

![An illustration showing the user cancelling your view controller.](https://developer.apple.com/images/com.apple.identitylookup/media-3025730@2x.png)

If the user presses Done, the system calls your view controller’s [classificationResponseForRequest:](../identitylookupui/ilclassificationuiextensionviewcontroller/classificationresponse%28for_%29.md) method, passing in an [ILClassificationRequest](ilclassificationrequest.md) object (see the figure below).

![An illustration showing the user tapping the Done button after entering all the required information in your user interface.](https://developer.apple.com/images/com.apple.identitylookup/media-3025729@2x.png)

Override the [classificationResponseForRequest:](../identitylookupui/ilclassificationuiextensionviewcontroller/classificationresponse%28for_%29.md) method to return a [ILClassificationResponse](ilclassificationresponse.md) based on the data the user has entered and information about the SMS message or call from the request object.

<a id="Choose-a-Response"></a>

### Choose a Response

The system takes different actions based on the response. For [ILClassificationActionNone](ilclassificationaction/none.md), the system dismisses your view controller, but doesn’t take any other action, as shown in the figure below.

![A circle representing the System Response with a right-facing arrow that points to a rectangle representing an extension with view controller dismissed. That extension has a right-facing arrow that points to a rectangle representing an extension with Deleted for user privacy text. Below that is a dark version of the same diagram.](https://developer.apple.com/images/com.apple.identitylookup/media-3025747@2x.png)

For [ILClassificationActionReportNotJunk](ilclassificationaction/reportnotjunk.md) or [ILClassificationActionReportJunk](ilclassificationaction/reportjunk.md), the system generates a report based on your response’s [action](ilclassificationresponse/action.md) and [userInfo](ilclassificationresponse/userinfo.md) properties and then posts it to a network endpoint or sends it using an SMS message, depending on the keys specified in your extension’s `Info.plist` file.

To send a response over the network connection, you must add an associated domain to your extension. For general instructions, see [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains). Note that you must use `classificationreport` instead of `webcredentials` when specifying the domains. You must also specify the network endpoint’s address using the `ILClassificationExtensionNetworkReportDestination` key in your extension’s `Info.plist` file.

To send your response using SMS, specify a fully qualified destination telephony number using the `ILClassificationExtensionSMSReportDestination` key in your extension’s `Info.plist` file. When your app uses this report path, the system displays the SMS message to give the user the opportunity to send or cancel the message.

When the report step is complete, the system dismisses your view controller and any view controllers related to it (see the figure below).

![A circle representing the System Response with a right-facing arrow that points to a device with Cancel or Send buttons. That device has a right-facing arrow that points to a rectangle representing an extension with a view controller with Cancel and Send buttons. That extension has a right-facing arrow that points to a rectangle representing an extension with Deleted for user privacy text. Below that is a dark version of the same diagram.](https://developer.apple.com/images/com.apple.identitylookup/media-3025725@2x.png)

For [ILClassificationActionReportJunkAndBlockSender](ilclassificationaction/reportjunkandblocksender.md), the system responds just like in the [ILClassificationActionReportJunk](ilclassificationaction/reportjunk.md) action. However, after the report step, the system presents an alert letting the user know the number will be blocked. Finally, the system blocks the SMS or call number, and dismisses your view controller as shown in the figure below.

![A circle representing the System Response with a right-facing arrow that points to a device with Cancel or Send buttons. That device has a right-facing arrow that points to another device showing Alert SMS/Call blocked text. That device has a right-facing arrow that points to a rectangle representing an extension with a view controller dismissed. That extension has a right-facing arrow that points to a rectangle representing an extension with Deleted for user privacy text. Below that is a dark version of the same diagram.](https://developer.apple.com/images/com.apple.identitylookup/media-3025734@2x.png)

Blocked numbers are added to the device’s Blocked Contact list. Users can manage this list in the Settings app.

Finally, to protect user privacy, the system always deletes your extension’s container after your extension terminates. For more information, see [About the iOS File System](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP40010672-CH2-SW12).

## Topics

### App Extension

- [ILClassificationUIExtensionViewController](../identitylookupui/ilclassificationuiextensionviewcontroller.md): The superclass for an Unwanted Communication Reporting extension’s principal view controller.

### Communications

- [ILCommunication](ilcommunication.md): An abstract superclass representing a message or call to the user.
- [ILMessageCommunication](ilmessagecommunication.md): A concrete subclass representing a SMS message.
- [ILCallCommunication](ilcallcommunication.md): A concrete subclass representing a phone call.

### Requests

- [ILClassificationRequest](ilclassificationrequest.md): The abstract superclass for classification requests.
- [ILMessageClassificationRequest](ilmessageclassificationrequest.md): A classification request for SMS messages.
- [ILCallClassificationRequest](ilcallclassificationrequest.md): A classification request for phone calls.

### Responses

- [ILClassificationResponse](ilclassificationresponse.md): A response object that tells the system how to handle the reported communications.
- [ILClassificationAction](ilclassificationaction.md): The actions the system can take in response to the reported communication.

### Queries

- [ILMessageFilterCapabilitiesQueryRequest](ilmessagefiltercapabilitiesqueryrequest.md): A request to query a Message Filter extension about sharing its sub-category capabilities.
- [ILMessageFilterCapabilitiesQueryHandling](ilmessagefiltercapabilitiesqueryhandling.md): A set of methods implemented by a Message Filter app extension to handle capabilities query requests.

### Responses

- [ILMessageFilterCapabilitiesQueryResponse](ilmessagefiltercapabilitiesqueryresponse.md): A response to a message filter capabilities query request.
- [ILMessageFilterSubAction](ilmessagefiltersubaction.md): Responds to a received message with a filter subaction.
