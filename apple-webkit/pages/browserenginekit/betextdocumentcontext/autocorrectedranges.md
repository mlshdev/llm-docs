> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextdocumentcontext/autocorrectedranges](https://developer.apple.com/documentation/browserenginekit/betextdocumentcontext/autocorrectedranges)

# autocorrectedRanges (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An array of ranges that identify text the system autocorrects, relative to the context string.

## Declaration

```swift
var autocorrectedRanges: [NSValue] { get set }
```

<a id="discussion"></a>

## Discussion

The context string is the concatenation of the initializer parameters `contextBefore`, `markedText` (or `selectedText` when marked text is empty), and `contextAfter`. For more information, see [init(attributedSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:)](init%28attributedselectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md).

# autocorrectedRanges (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An array of ranges that identify text the system autocorrects, relative to the context string.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSValue *> * autocorrectedRanges;
```

<a id="discussion"></a>

## Discussion

The context string is the concatenation of the initializer parameters `contextBefore`, `markedText` (or `selectedText` when marked text is empty), and `contextAfter`. For more information, see [initWithAttributedSelectedText:contextBefore:contextAfter:markedText:selectedRangeInMarkedText:](init%28attributedselectedtext_contextbefore_contextafter_markedtext_selectedrangeinmarkedtext_%29.md).
