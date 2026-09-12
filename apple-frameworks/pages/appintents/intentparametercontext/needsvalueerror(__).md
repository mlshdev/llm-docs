> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparametercontext/needsvalueerror(_:)](https://developer.apple.com/documentation/appintents/intentparametercontext/needsvalueerror(_:))

# needsValueError(\_:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a `restartPerform` error with context to request a value from the user for this parameter and re-perform the intent with the new value.

## Declaration

```swift
func needsValueError(_ dialog: IntentDialog? = nil) -> AppIntentError
```

## Parameters

- `dialog`: A custom dialog that may be used when prompting the user for the value

<a id="return-value"></a>

## Return Value

An error that should be thrown within the intent `perform()` method.
