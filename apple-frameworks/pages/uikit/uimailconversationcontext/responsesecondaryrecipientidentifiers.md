> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimailconversationcontext/responsesecondaryrecipientidentifiers

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
