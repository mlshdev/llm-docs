> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparametercontext/requestdisambiguation(among:dialog:)

# requestDisambiguation(among:dialog:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Request that the user disambiguate amongst an array of values for this parameter.

## Declaration

```swift
func requestDisambiguation(among itemsToDisambiguate: [Value.ValueType], dialog: IntentDialog? = nil) async throws -> Value.ValueType
```

## Parameters

- `itemsToDisambiguate`: The list of items to be presented to the user for disambiguation
- `dialog`: A custom dialog that may be used when prompting the user for the value

<a id="return-value"></a>

## Return Value

The value supplied by the user
