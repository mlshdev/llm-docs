> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:content:)](https://developer.apple.com/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:content:))

# requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Displays a confirmation prompt with an interactive snippet.

## Declaration

```swift
func requestConfirmation<Content>(conditions: ConfirmationConditions = [], actionName: ConfirmationActionName = .`continue`, dialog: IntentDialog? = nil, showDialogAsPrompt: Bool = true, @ViewBuilder content: () -> Content) async throws where Content : View
```

## Parameters

- `conditions`: The conditions to check before asking for confirmation.
- `actionName`: The name to use in the button that confirms the action.
- `dialog`: The localized text you want the confirmation request to display or speak.
- `showDialogAsPrompt`: `true` to include the contents of the `dialog` parameter in the confirmation interface. Specify `false` to omit the dialog from the interface.
- `content`: The SwiftUI view to display in the confirmation interface.

<a id="discussion"></a>

## Discussion

Call this method when you want someone to confirm a particular choice. For example, call this method before someone performs an action that might be destructive or unsafe. The method displays a prompt with the provided snippet, and asks the person to confirm or cancel the operation. The method returns normally if the person confirms the operation, but throws an error if they cancel it.

## See Also

### Requesting confirmation

- [requestConfirmation()](requestconfirmation%28%29.md): Displays a prompt that asks the person for confirmation before performing the app intent.
- [requestConfirmation(conditions:actionName:dialog:)](requestconfirmation%28conditions_actionname_dialog_%29.md): Displays a confirmation prompt that includes the specified text and action details.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-3vewj.md): Displays a confirmation prompt that includes an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-jxb8.md): Displays a confirmation prompt with an interactive snippet.
