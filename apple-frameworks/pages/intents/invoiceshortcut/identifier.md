> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invoiceshortcut/identifier](https://developer.apple.com/documentation/intents/invoiceshortcut/identifier)

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The unique identifier for the shortcut.

## Declaration

```swift
var identifier: UUID { get }
```

## See Also

### Accessing Shortcut Information

- [invocationPhrase](invocationphrase.md): The phrase the user speaks to invoke the shortcut.
- [shortcut](shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The unique identifier for the shortcut.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSUUID * identifier;
```

```objectivec
@property (atomic, strong, readonly) NSUUID * identifier;
```

## See Also

### Accessing Shortcut Information

- [invocationPhrase](invocationphrase.md): The phrase the user speaks to invoke the shortcut.
- [shortcut](shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
