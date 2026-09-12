> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/systemcontext](https://developer.apple.com/documentation/appintents/appintent/systemcontext)

# systemContext

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Contextual information that the system provides while it performs the app intent.

## Declaration

```swift
var systemContext: IntentSystemContext { get }
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](../configuring-the-runtime-behavior-of-your-app-intents.md)

<a id="discussion"></a>

## Discussion

Access information the system provides to your app intent while it performs its action in its [perform()](perform%28%29.md) implementation. The available information varies by platform. For example, in watchOS, the intent system context includes a precise timestamp when a person starts the app intent’s action using the Action button on Apple Watch Ultra.

## See Also

### Performing the action

- [perform()](perform%28%29.md): Performs the intent’s action and returns a result, after resolving any parameters.
- [PerformResult](performresult.md)
