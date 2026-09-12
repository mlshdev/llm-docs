> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/perform()-39thw](https://developer.apple.com/documentation/appintents/appintent/perform()-39thw)

# perform()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A default implementation that throws an error rather than perform an intent.

## Declaration

```swift
func perform() async throws -> Self.NeverResult
```

<a id="discussion"></a>

## Discussion

You don’t need to implement [perform()](perform%28%29-39thw.md) on your [ControlConfigurationIntent](../controlconfigurationintent.md) to use it for configuring a control. However, you may implement it if you also use this intent for widget configuration or as a runnable action.
