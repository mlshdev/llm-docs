> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:actionbuttonintent:activityidentifier:dialog:)](https://developer.apple.com/documentation/appintents/intentresult/result(value:actionbuttonintent:activityidentifier:dialog:))

# result(value:actionButtonIntent:activityIdentifier:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

Indicates the Intent finished performing with an `AppIntent` to continue with

## Declaration

```swift
static func result<Value, Intent>(value: Value, actionButtonIntent: Intent, activityIdentifier: String, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Value, Never, Never, IntentDialog>, Value : _IntentValue, Intent : AppIntent
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `actionButtonIntent`: An intent that runs when a person presses the Action Button.
- `activityIdentifier`: An identifier for the activity.
- `dialog`: A custom success dialog
