> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/allowedexecutiontargets](https://developer.apple.com/documentation/appintents/appintent/allowedexecutiontargets)

# allowedExecutionTargets

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The list of targets this intent can be executed against.

## Declaration

```swift
static var allowedExecutionTargets: IntentExecutionTargets { get }
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](../configuring-the-runtime-behavior-of-your-app-intents.md)

<a id="discussion"></a>

## Discussion

By default, an intent can be executed against any target. Use this property to restrict execution to specific targets such as the main app, an App Intents extension, or a WidgetKit extension.

## Default Implementations

### AppIntent Implementations

- [allowedExecutionTargets](allowedexecutiontargets-91kol.md): The list of targets this intent can be executed against.

## See Also

### Specifying the intent’s allowed target

- [IntentExecutionTargets](../intentexecutiontargets.md): A set of options that describes which process performs an intent or entity query.
- [AppIntent.ExecutionTargets](executiontargets.md)
