> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimailconversationcontext/responsesubject](https://developer.apple.com/documentation/uikit/uimailconversationcontext/responsesubject)

# responseSubject (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A string that contains the subject line of an intended response.

## Declaration

```swift
var responseSubject: String { get set }
```

## See Also

### Getting message details

- [responseHasCustomSignature](responsehascustomsignature.md): A Boolean value that indicates whether the intended response contains a custom signature.
- [responseSecondaryRecipientIdentifiers](responsesecondaryrecipientidentifiers.md): A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.

# responseSubject (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A string that contains the subject line of an intended response.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * responseSubject;
```

## See Also

### Getting message details

- [responseHasCustomSignature](responsehascustomsignature.md): A Boolean value that indicates whether the intended response contains a custom signature.
- [responseSecondaryRecipientIdentifiers](responsesecondaryrecipientidentifiers.md): A set of strings that identifies the secondary recipients of the message, such as those in CC or BCC messages.
