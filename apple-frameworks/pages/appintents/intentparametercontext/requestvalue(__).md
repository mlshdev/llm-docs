> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentparametercontext/requestvalue(_:)

# requestValue(\_:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Request a value from the user for this parameter.

## Declaration

```swift
func requestValue(_ dialog: IntentDialog? = nil) async throws -> Value.ValueType
```

## Parameters

- `dialog`: A custom dialog that may be used when prompting the user for the value

<a id="return-value"></a>

## Return Value

The value supplied by the user
