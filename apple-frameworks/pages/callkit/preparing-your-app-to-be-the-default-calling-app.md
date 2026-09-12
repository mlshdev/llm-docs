> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/preparing-your-app-to-be-the-default-calling-app](https://developer.apple.com/documentation/callkit/preparing-your-app-to-be-the-default-calling-app)

# Preparing your app to be the default calling app (Swift)

**Framework:** CallKit  
**Kind:** Article

Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.

<a id="Overview"></a>

## Overview

In iOS and iPadOS 18.2 and later, a person may select an app other than the Phone app or FaceTime to handle calls. A calling app handles `tel:` URLs the system sends to it. For example, when someone selects your app as the default calling app, tapping on a telephone number in a contact card initiates an attempt to place the call using your app.

If your app places phone calls and you wish to optionally become the default calling app, there are several steps you need to take.

<a id="Add-the-Default-Calling-App-entitlement-to-your-project"></a>

### Add the Default Calling App entitlement to your project

Add the `com.apple.developer.calling-app` entitlement to the `.entitlements` file in your app’s Xcode project. For instructions on how to add this entitlement, see [Default Calling App](../bundleresources/entitlements/com.apple.developer.calling-app.md).

<a id="Apply-the-fallback-URL-scheme-in-your-app"></a>

### Apply the fallback URL scheme in your app

If starting a VoIP conversation fails, you may wish to have the conversation fall back to the system to handle it. While optional, providing a fallback gives people another opportunity to have the conversation. When you let the conversation fall back to the system, it handles the conversation as a cellular network conversation. To provide a fallback, adopt the `telephony:` URL scheme as the fallback handler for the  [scene(\_:continue:)](../uikit/uiscenedelegate/scene%28__continue_%29.md) delegate callback. For example:

```swift
    let handle = userActivity.startCallHandle // The `UserActivity` structure the system provides; the `startCallHandle` property is the phone number the system is passing to your app.
    var urlComponents = URLComponents()
    urlComponents.scheme = "telephony"
    urlComponents.path = handle  

    guard let url = urlComponents.url else { return } 

    UIApplication.shared.open(url)
```

> **Note**

> Only use the `telephony:` URL scheme as a fallback behavior in response to a person’s explicit action in your app, such as clicking a call button after your app presents the proposed number to call.

For more information on VoIP calling related intents, see [INStartCallIntent](../intents/instartcallintent.md).

<a id="Prepare-your-app-for-submission-to-App-Store-Connect"></a>

### Prepare your app for submission to App Store Connect

To submit your app to App Store Connect, your app needs to meet the following criteria:

- The `com.apple.developer.calling-app` entitlement is in its `.entitlements` file, and it’s set to a value of `true`.
- The `Info.plist` file has the `UIBackgroundModes` property array and contains an entry with the string `voip`.
- Your app links to either the [CallKit](../callkit.md) or [LiveCommunicationKit](../livecommunicationkit.md) frameworks.

> **Tip**

> To add a `voip` entry in the `Info.plist` file’s `UIBackgroundModes` property array, select the “App provides Voice over IP services” option from the dropdown menu.

## See Also

### Essentials

- [CXProvider](cxprovider.md): An object that represents a telephony provider.
- [CXProviderDelegate](cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [CXProviderConfiguration](cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [VoIP calling with CallKit](voip-calling-with-callkit.md): Use the CallKit framework to integrate native VoIP calling.
- [CallKit updates](https://developer.apple.com/documentation/updates/callkit): Learn about important changes to CallKit.

# Preparing your app to be the default calling app (Objective-C)

**Framework:** CallKit  
**Kind:** Article

Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.

<a id="Overview"></a>

## Overview

In iOS and iPadOS 18.2 and later, a person may select an app other than the Phone app or FaceTime to handle calls. A calling app handles `tel:` URLs the system sends to it. For example, when someone selects your app as the default calling app, tapping on a telephone number in a contact card initiates an attempt to place the call using your app.

If your app places phone calls and you wish to optionally become the default calling app, there are several steps you need to take.

<a id="Add-the-Default-Calling-App-entitlement-to-your-project"></a>

### Add the Default Calling App entitlement to your project

Add the `com.apple.developer.calling-app` entitlement to the `.entitlements` file in your app’s Xcode project. For instructions on how to add this entitlement, see [Default Calling App](../bundleresources/entitlements/com.apple.developer.calling-app.md).

<a id="Apply-the-fallback-URL-scheme-in-your-app"></a>

### Apply the fallback URL scheme in your app

If starting a VoIP conversation fails, you may wish to have the conversation fall back to the system to handle it. While optional, providing a fallback gives people another opportunity to have the conversation. When you let the conversation fall back to the system, it handles the conversation as a cellular network conversation. To provide a fallback, adopt the `telephony:` URL scheme as the fallback handler for the  [scene:continueUserActivity:](../uikit/uiscenedelegate/scene%28__continue_%29.md) delegate callback. For example:

```swift
    let handle = userActivity.startCallHandle // The `UserActivity` structure the system provides; the `startCallHandle` property is the phone number the system is passing to your app.
    var urlComponents = URLComponents()
    urlComponents.scheme = "telephony"
    urlComponents.path = handle  

    guard let url = urlComponents.url else { return } 

    UIApplication.shared.open(url)
```

> **Note**

> Only use the `telephony:` URL scheme as a fallback behavior in response to a person’s explicit action in your app, such as clicking a call button after your app presents the proposed number to call.

For more information on VoIP calling related intents, see [INStartCallIntent](../intents/instartcallintent.md).

<a id="Prepare-your-app-for-submission-to-App-Store-Connect"></a>

### Prepare your app for submission to App Store Connect

To submit your app to App Store Connect, your app needs to meet the following criteria:

- The `com.apple.developer.calling-app` entitlement is in its `.entitlements` file, and it’s set to a value of `true`.
- The `Info.plist` file has the `UIBackgroundModes` property array and contains an entry with the string `voip`.
- Your app links to either the [CallKit](../callkit.md) or [LiveCommunicationKit](../livecommunicationkit.md) frameworks.

> **Tip**

> To add a `voip` entry in the `Info.plist` file’s `UIBackgroundModes` property array, select the “App provides Voice over IP services” option from the dropdown menu.

## See Also

### Essentials

- [CXProvider](cxprovider.md): An object that represents a telephony provider.
- [CXProviderDelegate](cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [CXProviderConfiguration](cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
