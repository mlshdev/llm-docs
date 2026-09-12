> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/intent-handling-infrastructure](https://developer.apple.com/documentation/sirikit/intent-handling-infrastructure)

# Intent Handling Infrastructure (Swift)

**Framework:** Intents  
**Kind:** API Collection

Specify required permissions and provide handlers for the intents your app supports, and configure app extensions.

## Topics

### Authorization

- [Requesting Authorization to Use Siri](requesting-authorization-to-use-siri.md): Request permission from the user for Siri and Maps to communicate with your app or Intents app extension.
- [Siri Entitlement](../bundleresources/entitlements/com.apple.developer.siri.md): A Boolean value that indicates whether the app handles Siri requests.
- [INSiriAuthorizationStatus](../intents/insiriauthorizationstatus.md): Constants indicating the authorization status of your Intents extension.
- [INPreferences](../intents/inpreferences.md): The preferences and authorization related to using SiriKit.

### Intents App Extension

- [Creating an Intents App Extension](creating-an-intents-app-extension.md): Add and configure an Intents app extension in your Xcode project.
- [Structuring Your Code to Support App Extensions](structuring-your-code-to-support-app-extensions.md): Move your back-end services to a private framework so your app and app extensions can use them.
- [INExtension](../intents/inextension.md): The entry point for an Intents extension.
- [INIntentHandlerProviding](../intents/inintenthandlerproviding.md): The interface for dispatching intents to the custom objects that handle those intents.

### Information Property List Keys

- [INIntentsSupported](../bundleresources/information-property-list/inintentssupported.md): The names of the intent classes your app handles directly.
- [INIntentsRestrictedWhileLocked](../bundleresources/information-property-list/inintentsrestrictedwhilelocked.md): The names of the intent classes your app can’t handle when the user locks the device.
- [INIntentsRestrictedWhileProtectedDataUnavailable](../bundleresources/information-property-list/inintentsrestrictedwhileprotecteddataunavailable.md): The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.

### Errors

- [INIntentError](../intents/inintenterror.md): Errors returned by SiriKit.
- [INIntentError.Code](../intents/inintenterror/code.md): Constants for error codes returned by the framework.
- [INIntentErrorDomain](../intents/inintenterrordomain.md): The error domain for the Intents framework.

## See Also

### Intents

- [Dispatching intents to handlers](dispatching-intents-to-handlers.md): Provide SiriKit with an intent handler capable of handling a specific intent.
- [Resolving and Handling Intents](resolving-and-handling-intents.md): Resolve, confirm, and handle user requests for your app’s services.
- [INIntent](../intents/inintent.md): A request to fulfill in your app or Intents extension.
- [INIntentResponse](../intents/inintentresponse.md): Your response to an intent object.
- [Providing Hands-Free App Control with Intents](providing-hands-free-app-control-with-intents.md): Resolve, confirm, and handle intents without an extension.
- [Resolution Results](resolution-results.md): Resolve common types of data like strings and dates into specific values that your app recognizes.
- [Common Data Types](common-data-types.md): Manage common data types such as strings, dates, currencies, images, and contacts.

# Intent Handling Infrastructure (Objective-C)

**Framework:** Intents  
**Kind:** API Collection

Specify required permissions and provide handlers for the intents your app supports, and configure app extensions.

## Topics

### Authorization

- [Requesting Authorization to Use Siri](requesting-authorization-to-use-siri.md): Request permission from the user for Siri and Maps to communicate with your app or Intents app extension.
- [Siri Entitlement](../bundleresources/entitlements/com.apple.developer.siri.md): A Boolean value that indicates whether the app handles Siri requests.
- [INSiriAuthorizationStatus](../intents/insiriauthorizationstatus.md): Constants indicating the authorization status of your Intents extension.
- [INPreferences](../intents/inpreferences.md): The preferences and authorization related to using SiriKit.

### Intents App Extension

- [Creating an Intents App Extension](creating-an-intents-app-extension.md): Add and configure an Intents app extension in your Xcode project.
- [Structuring Your Code to Support App Extensions](structuring-your-code-to-support-app-extensions.md): Move your back-end services to a private framework so your app and app extensions can use them.
- [INExtension](../intents/inextension.md): The entry point for an Intents extension.
- [INIntentHandlerProviding](../intents/inintenthandlerproviding.md): The interface for dispatching intents to the custom objects that handle those intents.

### Information Property List Keys

- [INIntentsSupported](../bundleresources/information-property-list/inintentssupported.md): The names of the intent classes your app handles directly.
- [INIntentsRestrictedWhileLocked](../bundleresources/information-property-list/inintentsrestrictedwhilelocked.md): The names of the intent classes your app can’t handle when the user locks the device.
- [INIntentsRestrictedWhileProtectedDataUnavailable](../bundleresources/information-property-list/inintentsrestrictedwhileprotecteddataunavailable.md): The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.

### Errors

- [INIntentErrorCode](../intents/inintenterror/code.md): Constants for error codes returned by the framework.
- [INIntentErrorDomain](../intents/inintenterrordomain.md): The error domain for the Intents framework.

## See Also

### Intents

- [Dispatching intents to handlers](dispatching-intents-to-handlers.md): Provide SiriKit with an intent handler capable of handling a specific intent.
- [Resolving and Handling Intents](resolving-and-handling-intents.md): Resolve, confirm, and handle user requests for your app’s services.
- [INIntent](../intents/inintent.md): A request to fulfill in your app or Intents extension.
- [INIntentResponse](../intents/inintentresponse.md): Your response to an intent object.
- [Providing Hands-Free App Control with Intents](providing-hands-free-app-control-with-intents.md): Resolve, confirm, and handle intents without an extension.
- [Resolution Results](resolution-results.md): Resolve common types of data like strings and dates into specific values that your app recognizes.
- [Common Data Types](common-data-types.md): Manage common data types such as strings, dates, currencies, images, and contacts.
