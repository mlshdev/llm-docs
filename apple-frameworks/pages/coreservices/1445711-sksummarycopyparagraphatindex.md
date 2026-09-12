> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445711-sksummarycopyparagraphatindex](https://developer.apple.com/documentation/coreservices/1445711-sksummarycopyparagraphatindex)

# SKSummaryCopyParagraphAtIndex(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets a specified paragraph from the text in a summarization object.

## Declaration

```swift
func SKSummaryCopyParagraphAtIndex(_ summary: SKSummary!, _ i: CFIndex) -> Unmanaged<CFString>!
```

## Parameters

- `summary`: The summarization object containing the text from which you want a paragraph.
- `i`: The ordinal number of the paragraph in the original text, with the first paragraph designated by zero (this function uses zero-based indexing).

<a id="return_value"></a>

## Return Value

A [CFString](../corefoundation/cfstring.md) object containing the specified paragraph, or `NULL` on failure.

## See Also

### Working With Summarization

- [SKSummaryCreateWithString(\_:)](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetSentenceSummaryInfo(\_:\_:\_:\_:\_:)](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo(\_:\_:\_:\_:)](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount(\_:)](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount(\_:)](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex(\_:\_:)](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString(\_:\_:)](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString(\_:\_:)](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID()](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.

# SKSummaryCopyParagraphAtIndex (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets a specified paragraph from the text in a summarization object.

## Declaration

```objectivec
CFStringRef SKSummaryCopyParagraphAtIndex(SKSummaryRef summary, CFIndex i);
```

## Parameters

- `summary`: The summarization object containing the text from which you want a paragraph.
- `i`: The ordinal number of the paragraph in the original text, with the first paragraph designated by zero (this function uses zero-based indexing).

<a id="return_value"></a>

## Return Value

A [CFString](../corefoundation/cfstring.md) object containing the specified paragraph, or `NULL` on failure.

## See Also

### Working With Summarization

- [SKSummaryCreateWithString](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetSentenceSummaryInfo](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.
