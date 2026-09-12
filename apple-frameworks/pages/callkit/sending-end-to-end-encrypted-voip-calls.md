> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/sending-end-to-end-encrypted-voip-calls](https://developer.apple.com/documentation/callkit/sending-end-to-end-encrypted-voip-calls)

# Sending End-to-End Encrypted VoIP Calls (Swift)

**Framework:** CallKit  
**Kind:** Article

Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.

<a id="Overview"></a>

## Overview

If your app can send multiple types of end-to-end encrypted (E2EE) data—for example both text messages and voice over IP (VoIP) calls—send the encrypted content as a remote notification. Then, on the receiving device, use a notification service extension to decrypt the incoming content. If the content represents a VoIP call, pass the call information to [CallKit](../callkit.md) by calling the [reportNewIncomingVoIPPushPayload(\_:completion:)](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method. The system launches your app before passing the message on to [CallKit](../callkit.md). [CallKit](../callkit.md) then displays the call to the user. It uses the same interface as the Phone app, giving your app a more native look and feel. It also responds appropriately to system-level behaviors such as Do Not Disturb.

> **Important**

>  Only use this approach when your server can’t determine whether an outgoing notification is a request for a VoIP call or some other data (such as a text message) due to metadata encryption. If your server knows that the outgoing content is a VoIP call, send a [voIP](../pushkit/pkpushtype/voip.md) push notification instead. For more information, see [PushKit](../pushkit.md).

<a id="Configure-your-App-to-Process-Multiple-Types-of-E2EE-Data"></a>

### Configure your App to Process Multiple Types of E2EE Data

The workflow for receiving, decrypting, and processing multiple types of E2EE data involves several different components working together. To set up these systems:

- Request permission to receive remote notifications through the [User Notifications](../usernotifications.md) framework. See [Asking permission to use notifications](../usernotifications/asking-permission-to-use-notifications.md).
- Register for VoIP calls using [PushKit](../pushkit.md). See [Supporting PushKit Notifications in Your App](../pushkit/supporting-pushkit-notifications-in-your-app.md).
- Add a Notification Service Extension target to your app. See [Modifying content in newly delivered notifications](../usernotifications/modifying-content-in-newly-delivered-notifications.md).
- Add the `com.apple.developer.usernotifications.filtering` entitlement to the Notification Service Extension target’s entitlements file. To apply for this entitlement, see [Notification Service Extension Filtering Entitlement Request](https://developer.apple.com/contact/request/notification-service).

<a id="Send-the-VoIP-Request"></a>

### Send the VoIP Request

To send an E2EE VoIP message:

1. A user initiates a VoIP call on their app. Their app then sends an encrypted VoIP call request to your server.
2. Your server sends the encrypted data to the receiver’s device using a regular remote notification. Be sure to set the `apns-push-type` header field to `alert`. For more information, see [Sending notification requests to APNs](../usernotifications/sending-notification-requests-to-apns.md).
3. On the receiver’s device, the notification service extension processes the incoming notification and decrypts it. If it’s an incoming VoIP call, the extension calls [reportNewIncomingVoIPPushPayload(\_:completion:)](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) to initiate the call. It then silences the push notification (see [com.apple.developer.usernotifications.filtering](../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md)).
4. Finally, the system launches the extension’s containing app and calls the [pushRegistry(\_:didReceiveIncomingPushWith:for:completion:)](../pushkit/pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) method. From this point, the app handles the call just like any incoming VoIP call. Specifically, your [pushRegistry(\_:didReceiveIncomingPushWith:for:completion:)](../pushkit/pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) implementation must call the [reportNewIncomingCall(with:update:completion:)](cxprovider/reportnewincomingcall%28with_update_completion_%29.md) method to report the call. [CallKit](../callkit.md) then presents the incoming call to the user.

## See Also

### Outgoing calls

- [CXCallController](cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXTransaction](cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
- [CXStartCallAction](cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.

# Sending End-to-End Encrypted VoIP Calls (Objective-C)

**Framework:** CallKit  
**Kind:** Article

Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.

<a id="Overview"></a>

## Overview

If your app can send multiple types of end-to-end encrypted (E2EE) data—for example both text messages and voice over IP (VoIP) calls—send the encrypted content as a remote notification. Then, on the receiving device, use a notification service extension to decrypt the incoming content. If the content represents a VoIP call, pass the call information to [CallKit](../callkit.md) by calling the [reportNewIncomingVoIPPushPayload:completion:](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) method. The system launches your app before passing the message on to [CallKit](../callkit.md). [CallKit](../callkit.md) then displays the call to the user. It uses the same interface as the Phone app, giving your app a more native look and feel. It also responds appropriately to system-level behaviors such as Do Not Disturb.

> **Important**

>  Only use this approach when your server can’t determine whether an outgoing notification is a request for a VoIP call or some other data (such as a text message) due to metadata encryption. If your server knows that the outgoing content is a VoIP call, send a [PKPushTypeVoIP](../pushkit/pkpushtype/voip.md) push notification instead. For more information, see [PushKit](../pushkit.md).

<a id="Configure-your-App-to-Process-Multiple-Types-of-E2EE-Data"></a>

### Configure your App to Process Multiple Types of E2EE Data

The workflow for receiving, decrypting, and processing multiple types of E2EE data involves several different components working together. To set up these systems:

- Request permission to receive remote notifications through the [User Notifications](../usernotifications.md) framework. See [Asking permission to use notifications](../usernotifications/asking-permission-to-use-notifications.md).
- Register for VoIP calls using [PushKit](../pushkit.md). See [Supporting PushKit Notifications in Your App](../pushkit/supporting-pushkit-notifications-in-your-app.md).
- Add a Notification Service Extension target to your app. See [Modifying content in newly delivered notifications](../usernotifications/modifying-content-in-newly-delivered-notifications.md).
- Add the `com.apple.developer.usernotifications.filtering` entitlement to the Notification Service Extension target’s entitlements file. To apply for this entitlement, see [Notification Service Extension Filtering Entitlement Request](https://developer.apple.com/contact/request/notification-service).

<a id="Send-the-VoIP-Request"></a>

### Send the VoIP Request

To send an E2EE VoIP message:

1. A user initiates a VoIP call on their app. Their app then sends an encrypted VoIP call request to your server.
2. Your server sends the encrypted data to the receiver’s device using a regular remote notification. Be sure to set the `apns-push-type` header field to `alert`. For more information, see [Sending notification requests to APNs](../usernotifications/sending-notification-requests-to-apns.md).
3. On the receiver’s device, the notification service extension processes the incoming notification and decrypts it. If it’s an incoming VoIP call, the extension calls [reportNewIncomingVoIPPushPayload:completion:](cxprovider/reportnewincomingvoippushpayload%28__completion_%29.md) to initiate the call. It then silences the push notification (see [com.apple.developer.usernotifications.filtering](../bundleresources/entitlements/com.apple.developer.usernotifications.filtering.md)).
4. Finally, the system launches the extension’s containing app and calls the [pushRegistry:didReceiveIncomingPushWithPayload:forType:withCompletionHandler:](../pushkit/pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) method. From this point, the app handles the call just like any incoming VoIP call. Specifically, your [pushRegistry:didReceiveIncomingPushWithPayload:forType:withCompletionHandler:](../pushkit/pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md) implementation must call the [reportNewIncomingCallWithUUID:update:completion:](cxprovider/reportnewincomingcall%28with_update_completion_%29.md) method to report the call. [CallKit](../callkit.md) then presents the incoming call to the user.

## See Also

### Outgoing calls

- [CXCallController](cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXTransaction](cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
- [CXStartCallAction](cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.
