> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-3vewj](https://developer.apple.com/documentation/appintents/appintent/requestconfirmation(conditions:actionname:dialog:showdialogasprompt:snippetintent:)-3vewj)

# requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Displays a confirmation prompt that includes an interactive snippet.

## Declaration

```swift
func requestConfirmation<Snippet>(conditions: ConfirmationConditions = [], actionName: ConfirmationActionName = .`continue`, dialog: IntentDialog? = nil, showDialogAsPrompt: Bool = true, snippetIntent: Snippet) async throws where Snippet : SnippetIntent
```

## Parameters

- `conditions`: The conditions to check before asking for confirmation.
- `actionName`: The action associated with the request. The system puts the action name in the button that confirms the action.
- `dialog`: The localized text you want the confirmation request to display or speak.
- `showDialogAsPrompt`: `true` to include the contents of the `dialog` parameter in the confirmation interface. Specify `false` to omit the dialog from the interface.
- `snippetIntent`: The snippet to display in the confirmation interface.

## Mentioned In

- [Displaying static and interactive snippets](../displaying-static-and-interactive-snippets.md)

<a id="discussion"></a>

## Discussion

Call this method when you want someone to confirm a particular choice. For example, call this method before someone performs an action that might be destructive or unsafe. The method displays a confirmation interface that includes the provided snippet and optional dialog text. The interface asks the person to confirm or cancel the operation, and returns normally if the person confirms the operation. If the person chooses the cancel option, the method throws an error.

The code that shows your snippet can potentially modify parameter values in your app intent type. After this function returns, retrieve the latest values from properties instead of relying on cached versions of that data.

## See Also

### Requesting confirmation

- [requestConfirmation()](requestconfirmation%28%29.md): Displays a prompt that asks the person for confirmation before performing the app intent.
- [requestConfirmation(conditions:actionName:dialog:)](requestconfirmation%28conditions_actionname_dialog_%29.md): Displays a confirmation prompt that includes the specified text and action details.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_content_%29.md): Displays a confirmation prompt with an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-jxb8.md): Displays a confirmation prompt with an interactive snippet.
