> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/callasfunction(donate:)-3qvbt](https://developer.apple.com/documentation/appintents/appintent/callasfunction(donate:)-3qvbt)

# callAsFunction(donate:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Runs the intent’s action after resolving any parameters, returns the resulting value, and optionally donates the intent to the system.

## Declaration

```swift
func callAsFunction(donate donateOnCompletion: Bool = true) async throws -> Self.PerformResult.Value where Self.PerformResult : ReturnsValue
```

## Parameters

- `donateOnCompletion`: `true` if you want to donate the intent to the system after performing the action.

<a id="return-value"></a>

## Return Value

The value the action returns, if any.

<a id="discussion"></a>

## Discussion

Call this method when you want to perform the current app intent’s action. For example, you might call this method if you use your app intent types to implement your app’s underlying features. This method resolves the parameters of the intent, calls its [perform()](perform%28%29.md) method, and returns the resulting value.

## See Also

### Donating the intent to the system

- [donate()](donate%28%29-1e60c.md): Donates the app intent to the system asynchronously.
- [donate()](donate%28%29-jp6k.md): Donates the app intent to the system.
- [donate(result:)](donate%28result_%29-36cia.md): Donates the app intent and a result to the system asynchronously.
- [donate(result:)](donate%28result_%29-9b25i.md): Donates the app intent and a result to the system asynchronously.
- [callAsFunction(donate:)](callasfunction%28donate_%29-7v1om.md): Runs the intent’s action after resolving any parameters, and optionally donates the intent to the system.
