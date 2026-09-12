> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/requestconfirmation()](https://developer.apple.com/documentation/appintents/appintent/requestconfirmation())

# requestConfirmation()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Displays a prompt that asks the person for confirmation before performing the app intent.

## Declaration

```swift
func requestConfirmation() async throws
```

<a id="discussion"></a>

## Discussion

Call this method before performing any work that might be destructive or unsafe. The method displays a prompt that asks the person to confirm or cancel the operation. The method returns normally if they confirm the operation, but throws an error if they cancel it.

## See Also

### Requesting confirmation

- [requestConfirmation(conditions:actionName:dialog:)](requestconfirmation%28conditions_actionname_dialog_%29.md): Displays a confirmation prompt that includes the specified text and action details.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_content_%29.md): Displays a confirmation prompt with an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-3vewj.md): Displays a confirmation prompt that includes an interactive snippet.
- [requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:snippetIntent:)](requestconfirmation%28conditions_actionname_dialog_showdialogasprompt_snippetintent_%29-jxb8.md): Displays a confirmation prompt with an interactive snippet.
