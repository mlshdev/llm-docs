> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invoiceshortcut/shortcut](https://developer.apple.com/documentation/intents/invoiceshortcut/shortcut)

# shortcut (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The shortcut Siri invokes when the user speaks the invocation phrase.

## Declaration

```swift
var shortcut: INShortcut { get }
```

<a id="Discussion"></a>

## Discussion

Use the [shortcut](shortcut.md) property to access the [intent](../inshortcutreference/intent.md) or [userActivity](../inshortcutreference/useractivity.md) used to create the [INShortcutReference](../inshortcutreference.md) object.

## See Also

### Accessing Shortcut Information

- [identifier](identifier.md): The unique identifier for the shortcut.
- [invocationPhrase](invocationphrase.md): The phrase the user speaks to invoke the shortcut.

# shortcut (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The shortcut Siri invokes when the user speaks the invocation phrase.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INShortcut * shortcut;
```

```objectivec
@property (atomic, copy, readonly) INShortcut * shortcut;
```

<a id="Discussion"></a>

## Discussion

Use the [shortcut](shortcut.md) property to access the [intent](../inshortcutreference/intent.md) or [userActivity](../inshortcutreference/useractivity.md) used to create the [INShortcut](../inshortcutreference.md) object.

## See Also

### Accessing Shortcut Information

- [identifier](identifier.md): The unique identifier for the shortcut.
- [invocationPhrase](invocationphrase.md): The phrase the user speaks to invoke the shortcut.
