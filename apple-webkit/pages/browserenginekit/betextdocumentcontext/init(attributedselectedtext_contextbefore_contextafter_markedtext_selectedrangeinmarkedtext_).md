> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextdocumentcontext/init(attributedselectedtext:contextbefore:contextafter:markedtext:selectedrangeinmarkedtext:)](https://developer.apple.com/documentation/browserenginekit/betextdocumentcontext/init(attributedselectedtext:contextbefore:contextafter:markedtext:selectedrangeinmarkedtext:))

# init(attributedSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Initializes a document with attributed strings that represent the selection and its surrounding context.

## Declaration

```swift
init(attributedSelectedText selectedText: NSAttributedString?, contextBefore: NSAttributedString?, contextAfter: NSAttributedString?, markedText: NSAttributedString?, selectedRangeInMarkedText: NSRange)
```

<a id="discussion"></a>

## Discussion

The `attributedSelectedText`, `contextBefore`, and `contextAfter` parameters represent the same ranges as their counterparts in [init(selectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:)](init%28selectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md), and carry the same requirements, with the addition of text formatting and style attributes.

## See Also

### Creating a text document context

- [init(selectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:)](init%28selectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md): Initializes a document with plain text strings that represent the selection and its surrounding context.

# initWithAttributedSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Initializes a document with attributed strings that represent the selection and its surrounding context.

## Declaration

```objectivec
- (instancetype) initWithAttributedSelectedText:(NSAttributedString *) selectedText contextBefore:(NSAttributedString *) contextBefore contextAfter:(NSAttributedString *) contextAfter markedText:(NSAttributedString *) markedText selectedRangeInMarkedText:(NSRange) selectedRangeInMarkedText;
```

<a id="discussion"></a>

## Discussion

The `attributedSelectedText`, `contextBefore`, and `contextAfter` parameters represent the same ranges as their counterparts in [initWithSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:](init%28selectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md), and carry the same requirements, with the addition of text formatting and style attributes.

## See Also

### Creating a text document context

- [initWithSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:](init%28selectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md): Initializes a document with plain text strings that represent the selection and its surrounding context.
