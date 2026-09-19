> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentresult/result(value:dialog:)

# result(value:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<Value>(value: Value, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Value, Never, Never, IntentDialog>, Value : _IntentValue
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `dialog`: A custom success dialog
