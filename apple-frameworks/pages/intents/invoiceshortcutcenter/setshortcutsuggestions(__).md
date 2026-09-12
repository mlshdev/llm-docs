> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invoiceshortcutcenter/setshortcutsuggestions(_:)](https://developer.apple.com/documentation/intents/invoiceshortcutcenter/setshortcutsuggestions(_:))

# setShortcutSuggestions(\_:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Suggests shortcuts the user may want to add to Siri.

## Declaration

```swift
func setShortcutSuggestions(_ suggestions: [INShortcut])
```

## Parameters

- `suggestions`: A list of suggested shortcuts that the Settings app shows to the user in the *Siri & Search* section.

## Mentioned In

- [Offering Actions in the Shortcuts App](../../sirikit/offering-actions-in-the-shortcuts-app.md)

<a id="Discussion"></a>

## Discussion

To replace the list of shortcut suggestions, call setShortcutSuggestions(\_:), passing in a new list of suggestions. To remove suggestions made by your app, call the same method, passing in an empty array. For more information, see [Offering Actions in the Shortcuts App](../../sirikit/offering-actions-in-the-shortcuts-app.md).

> **Note**

>  Changes to the list of shortcut suggestions don’t effect shortcuts that the user added to Siri.

## See Also

### Setting Suggested Shortcuts

- [INShortcutReference](../inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.

# setShortcutSuggestions: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Suggests shortcuts the user may want to add to Siri.

## Declaration

```objectivec
- (void) setShortcutSuggestions:(NSArray<INShortcut *> *) suggestions;
```

## Parameters

- `suggestions`: A list of suggested shortcuts that the Settings app shows to the user in the *Siri & Search* section.

## Mentioned In

- [Offering Actions in the Shortcuts App](../../sirikit/offering-actions-in-the-shortcuts-app.md)

<a id="Discussion"></a>

## Discussion

To replace the list of shortcut suggestions, call setShortcutSuggestions(\_:), passing in a new list of suggestions. To remove suggestions made by your app, call the same method, passing in an empty array. For more information, see [Offering Actions in the Shortcuts App](../../sirikit/offering-actions-in-the-shortcuts-app.md).

> **Note**

>  Changes to the list of shortcut suggestions don’t effect shortcuts that the user added to Siri.

## See Also

### Setting Suggested Shortcuts

- [INShortcut](../inshortcutreference.md): An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
