> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconversationcontext/entry/replythreadidentifier](https://developer.apple.com/documentation/uikit/uiconversationcontext/entry/replythreadidentifier)

# replyThreadIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An optional string that identifies another message in a conversation, when this entry is a reply to that message.

## Declaration

```swift
var replyThreadIdentifier: String? { get set }
```

<a id="discussion"></a>

## Discussion

When an entry is a reply to another conversation entry, this contains the identifier of the conversation entry that the person replied to.

## See Also

### Identifying the entry

- [entryIdentifier](entryidentifier.md): A string that uniquely identifies this specific entry in the conversation.

# replyThreadIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

An optional string that identifies another message in a conversation, when this entry is a reply to that message.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * replyThreadIdentifier;
```

<a id="discussion"></a>

## Discussion

When an entry is a reply to another conversation entry, this contains the identifier of the conversation entry that the person replied to.

## See Also

### Identifying the entry

- [entryIdentifier](entryidentifier.md): A string that uniquely identifies this specific entry in the conversation.
