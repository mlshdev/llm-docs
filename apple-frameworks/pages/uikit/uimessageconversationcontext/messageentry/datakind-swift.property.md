> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimessageconversationcontext/messageentry/datakind-swift.property

# dataKind (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An item that represents the kind of data the message contains.

## Declaration

```swift
var dataKind: UIMessageConversationContext.MessageEntry.DataKind { get set }
```

## See Also

### Categorizing the entry

- [UIMessageConversationContext.MessageEntry.DataKind](datakind-swift.enum.md): A list of options that represent the kinds of data a message can contain.
- [wasSentBySelf](wassentbyself.md): A Boolean value that indicates whether the current user sent the message.

# dataKind (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

An item that represents the kind of data the message contains.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIMessageConversationEntryDataKind dataKind;
```

## See Also

### Categorizing the entry

- [UIMessageConversationEntryDataKind](datakind-swift.enum.md): A list of options that represent the kinds of data a message can contain.
- [wasSentBySelf](wassentbyself.md): A Boolean value that indicates whether the current user sent the message.
