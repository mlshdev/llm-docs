> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inshortcut-swift.enum/useractivity

# userActivity

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 11.0+ · watchOS 5.0+

The user activity that defines the action to perform when invoking the shortcut.

## Declaration

```swift
var userActivity: NSUserActivity? { get }
```

<a id="Discussion"></a>

## Discussion

This property is nil when you create the shortcut with an [INIntent](../inintent.md) object.
