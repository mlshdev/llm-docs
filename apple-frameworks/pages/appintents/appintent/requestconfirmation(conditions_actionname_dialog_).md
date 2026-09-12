> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:)](https://developer.apple.com/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:))

# requestConfirmation(conditions:actionName:dialog:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Displays a confirmation prompt that includes the specified text and action details.

## Declaration

```swift
func requestConfirmation(conditions: ConfirmationConditions = [], actionName: ConfirmationActionName = .`continue`, dialog: IntentDialog) async throws
```

## Parameters

- `conditions`: The conditions to check before asking for confirmation.
- `actionName`: The action associated with the request. The system puts the action name in the button that confirms the action.
- `dialog`: The localized text you want the confirmation request to display or speak.

<a id="discussion"></a>

## Discussion

Call this method when you want someone to confirm a particular choice. For example, call this method before someone performs an action that might be destructive or unsafe. The method displays a prompt that includes the provided information and asks the person to confirm or cancel the operation. The method returns normally if they confirm the operation, but throws an error if they cancel it.

## See Also

### Requesting confirmation

- [requestConfirmation()](requestconfirmation%28%29.md): Displays a prompt that asks the person for confirmation before performing the app intent.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_content_%29.md): Displays a confirmation prompt with an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-3vewj.md): Displays a confirmation prompt that includes an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-jxb8.md): Displays a confirmation prompt with an interactive snippet.
