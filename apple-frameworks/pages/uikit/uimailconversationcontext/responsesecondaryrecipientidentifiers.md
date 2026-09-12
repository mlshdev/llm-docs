> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimailconversationcontext/responsesecondaryrecipientidentifiers](https://developer.apple.com/documentation/uikit/uimailconversationcontext/responsesecondaryrecipientidentifiers)

# responseSecondaryRecipientIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.

## Declaration

```swift
var responseSecondaryRecipientIdentifiers: Set<String> { get set }
```

## See Also

### Getting message details

- [responseSubject](responsesubject.md): A string that contains the subject line of an intended response.
- [responseHasCustomSignature](responsehascustomsignature.md): A Boolean value that indicates whether the intended response contains a custom signature.

# responseSecondaryRecipientIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSSet<NSString *> * responseSecondaryRecipientIdentifiers;
```

## See Also

### Getting message details

- [responseSubject](responsesubject.md): A string that contains the subject line of an intended response.
- [responseHasCustomSignature](responsehascustomsignature.md): A Boolean value that indicates whether the intended response contains a custom signature.
