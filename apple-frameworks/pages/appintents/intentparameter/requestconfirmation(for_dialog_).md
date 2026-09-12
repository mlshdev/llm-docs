> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/requestconfirmation(for:dialog:)](https://developer.apple.com/documentation/appintents/intentparameter/requestconfirmation(for:dialog:))

# requestConfirmation(for:dialog:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Request that the user confirm the parameter value.

## Declaration

```swift
final func requestConfirmation(for itemToConfirm: Value.ValueType, dialog: IntentDialog? = nil) async throws -> Bool
```

## Parameters

- `itemToConfirm`: The items to be presented to the user for confirmation
- `dialog`: A custom dialog that may be used when prompting the user for the value

<a id="return-value"></a>

## Return Value

Whether or not the user confirmed the value

## See Also

### Requesting confirmation

- [requestConfirmation(for:dialog:view:)](requestconfirmation%28for_dialog_view_%29-6hiyi.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Use `requestConfirmation` when you need to the ask user to confirm the parameter value.
- [requestConfirmation(for:dialog:view:)](requestconfirmation%28for_dialog_view_%29-9z0pe.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Use `requestConfirmation` when you need to the ask user to confirm the parameter value.
