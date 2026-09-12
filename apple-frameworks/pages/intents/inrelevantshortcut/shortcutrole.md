> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcut/shortcutrole](https://developer.apple.com/documentation/intents/inrelevantshortcut/shortcutrole)

# shortcutRole (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The role of the relevant shortcut.

## Declaration

```swift
var shortcutRole: INRelevantShortcutRole { get set }
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

The role provides a hint to Siri so it can provide a better experience to the user when suggesting the shortcut. The default is [INRelevantShortcutRole.action](../inrelevantshortcutrole/action.md).

## See Also

### Accessing Relevant Shortcut Information

- [shortcut](shortcut.md): A reference to the shortcut used to create the relevant shortcut.
- [INRelevantShortcutRole](../inrelevantshortcutrole.md): Roles for a relevant shortcut.

# shortcutRole (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The role of the relevant shortcut.

## Declaration

```objectivec
@property (nonatomic) INRelevantShortcutRole shortcutRole;
```

```objectivec
@property (atomic) INRelevantShortcutRole shortcutRole;
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

The role provides a hint to Siri so it can provide a better experience to the user when suggesting the shortcut. The default is [INRelevantShortcutRoleAction](../inrelevantshortcutrole/action.md).

## See Also

### Accessing Relevant Shortcut Information

- [shortcut](shortcut.md): A reference to the shortcut used to create the relevant shortcut.
- [INRelevantShortcutRole](../inrelevantshortcutrole.md): Roles for a relevant shortcut.
