> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconversationcontext/entry/primaryrecipientidentifiers

# primaryRecipientIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A set of strings that identifies the primary recipients of the message.

## Declaration

```swift
var primaryRecipientIdentifiers: Set<String> { get set }
```

## See Also

### Identifying entry participants

- [senderIdentifier](senderidentifier.md): A string that identifies the message’s sender.

# primaryRecipientIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A set of strings that identifies the primary recipients of the message.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSSet<NSString *> * primaryRecipientIdentifiers;
```

## See Also

### Identifying entry participants

- [senderIdentifier](senderidentifier.md): A string that identifies the message’s sender.
