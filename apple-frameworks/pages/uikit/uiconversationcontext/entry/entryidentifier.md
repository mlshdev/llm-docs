> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconversationcontext/entry/entryidentifier

# entryIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A string that uniquely identifies this specific entry in the conversation.

## Declaration

```swift
var entryIdentifier: String { get set }
```

## See Also

### Identifying the entry

- [replyThreadIdentifier](replythreadidentifier.md): An optional string that identifies another message in a conversation, when this entry is a reply to that message.

# entryIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A string that uniquely identifies this specific entry in the conversation.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * entryIdentifier;
```

## See Also

### Identifying the entry

- [replyThreadIdentifier](replythreadidentifier.md): An optional string that identifies another message in a conversation, when this entry is a reply to that message.
