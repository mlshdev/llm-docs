> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentexecutiontargets/main](https://developer.apple.com/documentation/appintents/intentexecutiontargets/main)

# main

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The system performs the intent or query in the main app process.

## Declaration

```swift
static var main: IntentExecutionTargets { get }
```

## See Also

### Specifying the target

- [appIntentsExtension](appintentsextension.md): The system performs the intent or query in your app intents extension.
- [default](default.md): The system performs the intent or query in any available target.
- [widgetKitExtension](widgetkitextension.md): The system performs the intent or query in a widget extension.
