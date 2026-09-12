> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/runsystemshortcutintent/perform()](https://developer.apple.com/documentation/appintents/runsystemshortcutintent/perform())

# perform()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Performs a widget’s configured action, like opening another app or performing an App Shortcut, custom shortcut, or system action.

## Declaration

```swift
func perform() async throws -> IntentResultContainer<Never, Never, Never, Never>
```

<a id="discussion"></a>

## Discussion

The system only performs the intent if it’s triggered by a button you place in widget. The intent doesn’t have any effect in other contexts.
