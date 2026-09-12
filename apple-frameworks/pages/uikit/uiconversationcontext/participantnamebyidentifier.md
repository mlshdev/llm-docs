> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconversationcontext/participantnamebyidentifier](https://developer.apple.com/documentation/uikit/uiconversationcontext/participantnamebyidentifier)

# participantNameByIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A dictionary that relates participant identifiers to participant names.

## Declaration

```swift
var participantNameByIdentifier: [String : PersonNameComponents] { get set }
```

## See Also

### Getting conversation participants

- [selfIdentifiers](selfidentifiers.md): A set of strings that identifies the active person in the conversation on the current device.
- [responsePrimaryRecipientIdentifiers](responseprimaryrecipientidentifiers.md): A dictionary that relates participant identifiers to participant names.

# participantNameByIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A dictionary that relates participant identifiers to participant names.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,NSPersonNameComponents *> * participantNameByIdentifier;
```

## See Also

### Getting conversation participants

- [selfIdentifiers](selfidentifiers.md): A set of strings that identifies the active person in the conversation on the current device.
- [responsePrimaryRecipientIdentifiers](responseprimaryrecipientidentifiers.md): A dictionary that relates participant identifiers to participant names.
