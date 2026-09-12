> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/requestconfirmation(output:confirmationactionname:showprompt:)](https://developer.apple.com/documentation/appintents/appintent/requestconfirmation(output:confirmationactionname:showprompt:))

# requestConfirmation(output:confirmationActionName:showPrompt:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

> Please use requestConfirmation(conditions:actionName:dialog:) or requestConfirmation(conditions:actionName:dialog:showDialogAsPrompt:content:)

## Declaration

```swift
func requestConfirmation<Result>(output: Result, confirmationActionName: ConfirmationActionName = .`continue`, showPrompt: Bool = true) async throws where Result : IntentResult
```

## See Also

### Deprecated

- [openAppWhenRun](openappwhenrun.md): Deprecated. A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.
- [requestConfirmation(result:confirmationActionName:showPrompt:)](requestconfirmation%28result_confirmationactionname_showprompt_%29.md): Deprecated. Requests user confirmation before performing the app intent.
