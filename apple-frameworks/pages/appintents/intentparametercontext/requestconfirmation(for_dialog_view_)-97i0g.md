> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparametercontext/requestconfirmation(for:dialog:view:)-97i0g](https://developer.apple.com/documentation/appintents/intentparametercontext/requestconfirmation(for:dialog:view:)-97i0g)

# requestConfirmation(for:dialog:view:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Use `requestConfirmation` when you need to the ask user to confirm the parameter value.

## Declaration

```swift
func requestConfirmation<ViewType>(for itemToConfirm: Value.ValueType, dialog: IntentDialog? = nil, @ViewBuilder view: () -> ViewType) async throws -> Bool where ViewType : View
```

## Parameters

- `itemToConfirm`: The items to be presented to the user for confirmation
- `dialog`: A custom dialog that may be used when prompting the user for the value
- `view`: A view to display when requesting confirmation.
