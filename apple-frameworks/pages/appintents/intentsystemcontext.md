> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentsystemcontext](https://developer.apple.com/documentation/appintents/intentsystemcontext)

# IntentSystemContext

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Contextual information that the system provides while it performs an app intent.

## Declaration

```swift
struct IntentSystemContext
```

<a id="overview"></a>

## Overview

Access information that the system provides to your app intent while it performs its action in its [perform()](appintent/perform%28%29.md) implementation. The available information varies by platform. For example, in watchOS, the intent system context includes a precise timestamp when a person starts the app intent’s action using the Action button on Apple Watch Ultra.

## Topics

### Instance Properties

- [currentMode](intentsystemcontext/currentmode.md): A value that indicates the foreground and background behavior for app intent’s action.
- [isVoiceOnly](intentsystemcontext/isvoiceonly.md): A Boolean value that indicates whether the system performs the app intent in a voice-only context.
- [locale](intentsystemcontext/locale.md): The locale in which the system performs the app intent.
- [preciseTimestamp](intentsystemcontext/precisetimestamp.md): A precise timestamp for the performed action.

## See Also

### Intent-related data

- [IntentModes](intentmodes.md): A set of options you use to configure the runtime behavior of an app intent.
- [IntentDescription](intentdescription.md): The human-readable description and metadata for an app intent.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentDeprecation](intentdeprecation.md)
- [IntentProjection](intentprojection.md): Projections for an app intent that returns non-optional values for parameters.
