> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/openappwhenrun](https://developer.apple.com/documentation/appintents/appintent/openappwhenrun)

# openAppWhenRun

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ (deprecated in 26.0) · iPadOS 16.0+ (deprecated in 26.0) · Mac Catalyst 16.0+ (deprecated in 26.0) · macOS 13.0+ (deprecated in 26.0) · tvOS 16.0+ (deprecated in 26.0) · visionOS  (deprecated in 26.0) · watchOS 9.0+ (deprecated in 26.0)

A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.

> Please provide 'supportedModes' instead

## Declaration

```swift
static var openAppWhenRun: Bool { get }
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)

<a id="discussion"></a>

## Discussion

This property is deprecated. Use [supportedModes](supportedmodes.md) instead. Setting this property to `true` generates an error if the app intent runs in an app extension. For backward compatability, you can set this property to `true` for app intents you run inside your app. For example:

```swift
@available(*, deprecated)
extension OrderSoupIntent {
    static var openAppWhenRun: Bool { true }
}
```

## Default Implementations

### AppIntent Implementations

- [openAppWhenRun](openappwhenrun-223b1.md): A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.
- [openAppWhenRun](openappwhenrun-3ej7y.md): A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.
- [openAppWhenRun](openappwhenrun-475kn.md): A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.
- [openAppWhenRun](openappwhenrun-5iruo.md): A Boolean value that defines the presentation style for the intent.
- [openAppWhenRun](openappwhenrun-7ggw4.md): A Boolean property that tells the system to consider the app intent even if its app is not in the foreground.

## See Also

### Deprecated

- [requestConfirmation(result:confirmationActionName:showPrompt:)](requestconfirmation%28result_confirmationactionname_showprompt_%29.md): Deprecated. Requests user confirmation before performing the app intent.
- [requestConfirmation(output:confirmationActionName:showPrompt:)](requestconfirmation%28output_confirmationactionname_showprompt_%29.md): Deprecated.
