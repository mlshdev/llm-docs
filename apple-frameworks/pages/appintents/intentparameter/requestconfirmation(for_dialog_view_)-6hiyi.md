> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/requestconfirmation(for:dialog:view:)-6hiyi](https://developer.apple.com/documentation/appintents/intentparameter/requestconfirmation(for:dialog:view:)-6hiyi)

# requestConfirmation(for:dialog:view:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Use `requestConfirmation` when you need to the ask user to confirm the parameter value.

## Declaration

```swift
final func requestConfirmation<ViewType>(for itemToConfirm: Value.ValueType, dialog: IntentDialog? = nil, view: ViewType) async throws -> Bool where ViewType : View
```

## Parameters

- `itemToConfirm`: The items to be presented to the user for confirmation
- `dialog`: A custom dialog that may be used when prompting the user for the value
- `view`: A view to display when requesting confirmation.

## See Also

### Requesting confirmation

- [requestConfirmation(for:dialog:)](requestconfirmation%28for_dialog_%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Request that the user confirm the parameter value.
- [requestConfirmation(for:dialog:view:)](requestconfirmation%28for_dialog_view_%29-9z0pe.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Use `requestConfirmation` when you need to the ask user to confirm the parameter value.
