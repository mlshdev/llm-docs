> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimailconversationcontext/responsehascustomsignature](https://developer.apple.com/documentation/uikit/uimailconversationcontext/responsehascustomsignature)

# responseHasCustomSignature (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Boolean value that indicates whether the intended response contains a custom signature.

## Declaration

```swift
var responseHasCustomSignature: Bool { get set }
```

## See Also

### Getting message details

- [responseSubject](responsesubject.md): A string that contains the subject line of an intended response.
- [responseSecondaryRecipientIdentifiers](responsesecondaryrecipientidentifiers.md): A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.

# responseHasCustomSignature (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A Boolean value that indicates whether the intended response contains a custom signature.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL responseHasCustomSignature;
```

## See Also

### Getting message details

- [responseSubject](responsesubject.md): A string that contains the subject line of an intended response.
- [responseSecondaryRecipientIdentifiers](responsesecondaryrecipientidentifiers.md): A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.
