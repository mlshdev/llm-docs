> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimessageconversationcontext/messageentry/datakind-swift.enum](https://developer.apple.com/documentation/uikit/uimessageconversationcontext/messageentry/datakind-swift.enum)

# UIMessageConversationContext.MessageEntry.DataKind (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A list of options that represent the kinds of data a message can contain.

## Declaration

```swift
enum DataKind
```

## Topics

### Kinds of data in a message

- [UIMessageConversationContext.MessageEntry.DataKind.attachment](datakind-swift.enum/attachment.md): The message contains an attachment, such as an image or file.
- [UIMessageConversationContext.MessageEntry.DataKind.other](datakind-swift.enum/other.md): The message contains other data, such as data that represents a sticker or a payment.
- [UIMessageConversationContext.MessageEntry.DataKind.text](datakind-swift.enum/text.md): The message contains text.

### Initializers

- [init(rawValue:)](datakind-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Categorizing the entry

- [dataKind](datakind-swift.property.md): An item that represents the kind of data the message contains.
- [wasSentBySelf](wassentbyself.md): A Boolean value that indicates whether the current user sent the message.

# UIMessageConversationEntryDataKind (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A list of options that represent the kinds of data a message can contain.

## Declaration

```objectivec
enum UIMessageConversationEntryDataKind : NSInteger;
```

## Topics

### Kinds of data in a message

- [UIMessageConversationEntryDataKindAttachment](datakind-swift.enum/attachment.md): The message contains an attachment, such as an image or file.
- [UIMessageConversationEntryDataKindOther](datakind-swift.enum/other.md): The message contains other data, such as data that represents a sticker or a payment.
- [UIMessageConversationEntryDataKindText](datakind-swift.enum/text.md): The message contains text.

## See Also

### Categorizing the entry

- [dataKind](datakind-swift.property.md): An item that represents the kind of data the message contains.
- [wasSentBySelf](wassentbyself.md): A Boolean value that indicates whether the current user sent the message.
