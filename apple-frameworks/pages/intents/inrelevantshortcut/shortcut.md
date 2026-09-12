> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcut/shortcut](https://developer.apple.com/documentation/intents/inrelevantshortcut/shortcut)

# shortcut (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A reference to the shortcut used to create the relevant shortcut.

## Declaration

```swift
var shortcut: INShortcut { get }
```

## See Also

### Accessing Relevant Shortcut Information

- [shortcutRole](shortcutrole.md): The role of the relevant shortcut.
- [INRelevantShortcutRole](../inrelevantshortcutrole.md): Roles for a relevant shortcut.

# shortcut (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A reference to the shortcut used to create the relevant shortcut.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INShortcut * shortcut;
```

```objectivec
@property (atomic, copy, readonly) INShortcut * shortcut;
```

## See Also

### Accessing Relevant Shortcut Information

- [shortcutRole](shortcutrole.md): The role of the relevant shortcut.
- [INRelevantShortcutRole](../inrelevantshortcutrole.md): Roles for a relevant shortcut.
