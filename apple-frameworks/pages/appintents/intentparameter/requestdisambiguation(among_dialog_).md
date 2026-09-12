> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/requestdisambiguation(among:dialog:)](https://developer.apple.com/documentation/appintents/intentparameter/requestdisambiguation(among:dialog:))

# requestDisambiguation(among:dialog:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Request that the user disambiguate amongst an array of values for this parameter.

## Declaration

```swift
final func requestDisambiguation(among itemsToDisambiguate: [Value.ValueType], dialog: IntentDialog? = nil) async throws -> Value.ValueType
```

## Parameters

- `itemsToDisambiguate`: The list of items to be presented to the user for disambiguation
- `dialog`: A custom dialog that may be used when prompting the user for the value

<a id="return-value"></a>

## Return Value

The value supplied by the user

## See Also

### Requesting disambiguation

- [needsDisambiguationError(among:dialog:)](needsdisambiguationerror%28among_dialog_%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Returns a `restartPerform` error with context for the user to disambiguate amongst an array of values from for this parameter and re-perform the intent with the new value.
