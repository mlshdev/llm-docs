> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/requestchoice(between:dialog:)](https://developer.apple.com/documentation/appintents/appintent/requestchoice(between:dialog:))

# requestChoice(between:dialog:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Pauses the app intent and asks the person to choose an option from the specified list.

## Declaration

```swift
func requestChoice(between options: [IntentChoiceOption], dialog: IntentDialog? = nil) async throws -> IntentChoiceOption
```

## Parameters

- `options`: The options to choose from. The prompt displays the options in the same order as they appear in the array, with one exception. If the list includes the [cancel](../intentchoiceoption/cancel.md) option, the system places that option according to the platform’s conventions.
- `dialog`: The localized text you want the system to display or speak. Provide instructional text or a question to help the person choose an option.

<a id="return-value"></a>

## Return Value

The option the person chose.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the person chooses a cancel option from the interface.

Call this method from the [perform()](perform%28%29.md) method of your app intent when you need someone to confirm an action, disambiguate from a set of possibilities, or select an intent-specific behavior before proceeding. The system displays a standard interface with the provided set of options and asks the person to choose one. When someone makes a selection, the method returns the option and your app intent continues to run. This method throws an error if someone cancels the request using a cancel button, a [cancel](../intentchoiceoption/cancel.md) option, or a system-provided gesture.

## See Also

### Requesting more information

- [requestChoice(between:dialog:content:)](requestchoice%28between_dialog_content_%29.md): Pauses the app intent, asks the person to choose from the specified options, and provides additional content related to those options.
- [requestChoice(between:dialog:view:)](requestchoice%28between_dialog_view_%29.md): Pauses the app intent, asks the person to choose from the specified options, and provides a view with additional data.
