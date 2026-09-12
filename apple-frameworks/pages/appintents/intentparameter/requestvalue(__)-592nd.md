> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/requestvalue(_:)-592nd](https://developer.apple.com/documentation/appintents/intentparameter/requestvalue(_:)-592nd)

# requestValue(\_:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Request a value from the user for this parameter.

## Declaration

```swift
final func requestValue(_ dialog: IntentDialog? = nil) async throws -> Value.ValueType
```

## Parameters

- `dialog`: A custom dialog that may be used when prompting the user for the value

<a id="return-value"></a>

## Return Value

The value supplied by the user

## See Also

### Requesting a value

- [needsValueError(\_:)](needsvalueerror%28__%29.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. Returns a `restartPerform` error with context to request a value from the user for this parameter and re-perform the intent with the new value.
