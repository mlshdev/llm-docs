> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcut-swift.enum/intent](https://developer.apple.com/documentation/intents/inshortcut-swift.enum/intent)

# intent

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 11.0+ · watchOS 5.0+

The intent that performs the action when invoking the shortcut.

## Declaration

```swift
var intent: INIntent? { get }
```

<a id="Discussion"></a>

## Discussion

This property is nil when you create the shortcut with an [NSUserActivity](../../foundation/nsuseractivity.md) object.
