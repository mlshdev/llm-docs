> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invoiceshortcut/invocationphrase](https://developer.apple.com/documentation/intents/invoiceshortcut/invocationphrase)

# invocationPhrase (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The phrase the user speaks to invoke the shortcut.

## Declaration

```swift
var invocationPhrase: String { get }
```

<a id="Discussion"></a>

## Discussion

The user sets the invocation phrase when they add the shortcut to Siri.

## See Also

### Accessing Shortcut Information

- [identifier](identifier.md): The unique identifier for the shortcut.
- [shortcut](shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.

# invocationPhrase (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The phrase the user speaks to invoke the shortcut.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * invocationPhrase;
```

```objectivec
@property (atomic, copy, readonly) NSString * invocationPhrase;
```

<a id="Discussion"></a>

## Discussion

The user sets the invocation phrase when they add the shortcut to Siri.

## See Also

### Accessing Shortcut Information

- [identifier](identifier.md): The unique identifier for the shortcut.
- [shortcut](shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
