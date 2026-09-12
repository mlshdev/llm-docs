> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/assistantintent](https://developer.apple.com/documentation/appintents/appschema/assistantintent)

# AppSchema.AssistantIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Assistant schema conformance for app intents that offer support for the side button on iPhone in Japan.

## Declaration

```swift
protocol AssistantIntent : AppSchema.Kind
```

<a id="Overview"></a>

## Overview

Functionality provided by `AssistantIntent` and the [activate](assistantintent/activate.md) schema is only available on iPhone in Japan and requires the [Side Button Access](../../bundleresources/entitlements/com.apple.developer.side-button-access.allow.md) entitlement. During development, install your provisioning profile on your iPhone test device to test the functionality. For a production device, the country or region of your Apple Account must be set to Japan, and you must physically be located in Japan. For additional information, refer to [Launching your voice-based conversational app from the side button of iPhone](../launching-your-voice-based-conversational-app-from-the-side-button-of-iphone.md).

## Topics

### Schemas

- [activate](assistantintent/activate.md): The app intent conforms to the schema for launching your voice-based conversational app from the side button on iPhone in Japan.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [activate](assistantintent/activate.md): The app intent conforms to the schema for launching your voice-based conversational app from the side button on iPhone in Japan.
