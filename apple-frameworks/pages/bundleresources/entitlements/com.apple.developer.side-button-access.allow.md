> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.side-button-access.allow](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.side-button-access.allow)

# Side Button Access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.2+ · iPadOS 26.2+

A Boolean value that indicates whether a person in Japan can configure the side button of iPhone to launch your voice-based conversational app.

## Details

`com.apple.developer.side-button-access.allow`

<a id="Discussion"></a>

## Discussion

Add the Side Button Access entitlement by following these steps:

1. In the Xcode project navigator, select your app’s target, and then the Signing & Capabilities tab.
2. Add a new capability by clicking the + Capability button and then type “Side Button Access” in the search field.
3. Double-click the Side Button Access entry to add the entitlement to your app.

Xcode displays the Side Button Access entitlement, along with any other entitlements, in the capabilities list under your app’s signing information. For more information about allowing people to invoke your voice-based conversational app using the side button, refer to [Launching your voice-based conversational app from the side button of iPhone](../../appintents/launching-your-voice-based-conversational-app-from-the-side-button-of-iphone.md).

> **Important**

> Functionality to launch your voice-based conversational app using the side button is only available on iPhone in Japan.
