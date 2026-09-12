> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconversationcontext/responseprimaryrecipientidentifiers](https://developer.apple.com/documentation/uikit/uiconversationcontext/responseprimaryrecipientidentifiers)

# responsePrimaryRecipientIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A dictionary that relates participant identifiers to participant names.

## Declaration

```swift
var responsePrimaryRecipientIdentifiers: Set<String> { get set }
```

## See Also

### Getting conversation participants

- [selfIdentifiers](selfidentifiers.md): A set of strings that identifies the active person in the conversation on the current device.
- [participantNameByIdentifier](participantnamebyidentifier.md): A dictionary that relates participant identifiers to participant names.

# responsePrimaryRecipientIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A dictionary that relates participant identifiers to participant names.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSSet<NSString *> * responsePrimaryRecipientIdentifiers;
```

## See Also

### Getting conversation participants

- [selfIdentifiers](selfidentifiers.md): A set of strings that identifies the active person in the conversation on the current device.
- [participantNameByIdentifier](participantnamebyidentifier.md): A dictionary that relates participant identifiers to participant names.
