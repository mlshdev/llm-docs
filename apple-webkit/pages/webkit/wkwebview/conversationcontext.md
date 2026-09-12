> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/conversationcontext](https://developer.apple.com/documentation/webkit/wkwebview/conversationcontext)

# conversationContext (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

## Declaration

```swift
var conversationContext: UIConversationContext { get set }
```

<a id="discussion"></a>

## Discussion

A reference to a conversation, such as a mail or messaging thread.

Set this conversation context before the keyboard appears; the keyboard uses this context to initialize its conversation context value. When your conversation updates, update the smart reply by setting this property.

## See Also

### Supporting Writing Tools

- [isWritingToolsActive](iswritingtoolsactive.md)

# conversationContext (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

## Declaration

```objectivec
@property (nonatomic, strong) UIConversationContext * conversationContext;
```

<a id="discussion"></a>

## Discussion

A reference to a conversation, such as a mail or messaging thread.

Set this conversation context before the keyboard appears; the keyboard uses this context to initialize its conversation context value. When your conversation updates, update the smart reply by setting this property.

## See Also

### Supporting Writing Tools

- [writingToolsActive](iswritingtoolsactive.md)
