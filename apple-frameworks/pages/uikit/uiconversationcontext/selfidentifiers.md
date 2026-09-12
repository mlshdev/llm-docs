> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconversationcontext/selfidentifiers](https://developer.apple.com/documentation/uikit/uiconversationcontext/selfidentifiers)

# selfIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A set of strings that identifies the active person in the conversation on the current device.

## Declaration

```swift
var selfIdentifiers: Set<String> { get set }
```

## See Also

### Getting conversation participants

- [responsePrimaryRecipientIdentifiers](responseprimaryrecipientidentifiers.md): A dictionary that relates participant identifiers to participant names.
- [participantNameByIdentifier](participantnamebyidentifier.md): A dictionary that relates participant identifiers to participant names.

# selfIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A set of strings that identifies the active person in the conversation on the current device.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSSet<NSString *> * selfIdentifiers;
```

## See Also

### Getting conversation participants

- [responsePrimaryRecipientIdentifiers](responseprimaryrecipientidentifiers.md): A dictionary that relates participant identifiers to participant names.
- [participantNameByIdentifier](participantnamebyidentifier.md): A dictionary that relates participant identifiers to participant names.
