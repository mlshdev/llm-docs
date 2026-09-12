> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/assistantintent/activate](https://developer.apple.com/documentation/appintents/appschema/assistantintent/activate)

# activate

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The app intent conforms to the schema for launching your voice-based conversational app from the side button on iPhone in Japan.

## Declaration

```swift
var activate: some AppSchemaIntent { get }
```

## Mentioned In

- [Launching your voice-based conversational app from the side button of iPhone](../../launching-your-voice-based-conversational-app-from-the-side-button-of-iphone.md)

<a id="Overview"></a>

## Overview

Functionality provided by the `activate` schema API is only available on iPhone in Japan and requires the [Side Button Access](../../../bundleresources/entitlements/com.apple.developer.side-button-access.allow.md) entitlement. During development, install your provisioning profile on your iPhone test device to test the functionality. For a production device, the country or region of your Apple Account must be set to Japan, and you must physically be located in Japan. For additional information, refer to [Launching your voice-based conversational app from the side button of iPhone](../../launching-your-voice-based-conversational-app-from-the-side-button-of-iphone.md).

## See Also

### Actions

- [AppSchema.AssistantIntent](../assistantintent.md): Assistant schema conformance for app intents that offer support for the side button on iPhone in Japan.
