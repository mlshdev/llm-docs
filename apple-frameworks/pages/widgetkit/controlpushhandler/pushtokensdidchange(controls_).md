> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlpushhandler/pushtokensdidchange(controls:)](https://developer.apple.com/documentation/widgetkit/controlpushhandler/pushtokensdidchange(controls:))

# pushTokensDidChange(controls:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Handle push tokens changing for configured controls.

## Declaration

```swift
func pushTokensDidChange(controls: [ControlInfo])
```

## Parameters

- `controls`: Information about controls that support push updates.

<a id="discussion"></a>

## Discussion

This function always provides information for all controls that support push updates even if only some of the tokens have changed.
