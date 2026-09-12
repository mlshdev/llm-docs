> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdeprecation](https://developer.apple.com/documentation/appintents/intentdeprecation)

# IntentDeprecation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
struct IntentDeprecation<ReplacementIntent> where ReplacementIntent : AppIntent
```

## Topics

### Initializers

- [init(message:)](intentdeprecation/init%28message_%29.md)
- [init(message:replacedBy:)](intentdeprecation/init%28message_replacedby_%29.md)
- [init(replacedBy:)](intentdeprecation/init%28replacedby_%29.md)

### Instance Properties

- [message](intentdeprecation/message.md): A short, localized, human-readable string that describes the deprecation of this intent using sentence case and followed by a period.
- [replacedBy](intentdeprecation/replacedby.md): Optionally, the AppIntent that replaces this one. Note: This is used by the Shortcuts app to help the user find the new AppIntent to use.

## See Also

### Intent-related data

- [IntentModes](intentmodes.md): A set of options you use to configure the runtime behavior of an app intent.
- [IntentSystemContext](intentsystemcontext.md): Contextual information that the system provides while it performs an app intent.
- [IntentDescription](intentdescription.md): The human-readable description and metadata for an app intent.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentProjection](intentprojection.md): Projections for an app intent that returns non-optional values for parameters.
