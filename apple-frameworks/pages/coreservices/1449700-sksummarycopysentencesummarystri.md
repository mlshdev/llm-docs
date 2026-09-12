> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449700-sksummarycopysentencesummarystri](https://developer.apple.com/documentation/coreservices/1449700-sksummarycopysentencesummarystri)

# SKSummaryCopySentenceSummaryString(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets a text string consisting of a summary with, at most, the requested number of sentences.

## Declaration

```swift
func SKSummaryCopySentenceSummaryString(_ summary: SKSummary!, _ numSentences: CFIndex) -> Unmanaged<CFString>!
```

## Parameters

- `summary`: The summarization object containing the text from which you want a summarization.
- `numSentences`: The maximum number of sentences you want in the summary.

<a id="return_value"></a>

## Return Value

A [CFString](../corefoundation/cfstring.md) object containing the requested summary.

## See Also

### Working With Summarization

- [SKSummaryCreateWithString(\_:)](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetSentenceSummaryInfo(\_:\_:\_:\_:\_:)](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo(\_:\_:\_:\_:)](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount(\_:)](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount(\_:)](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex(\_:\_:)](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex(\_:\_:)](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopyParagraphSummaryString(\_:\_:)](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID()](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.

# SKSummaryCopySentenceSummaryString (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets a text string consisting of a summary with, at most, the requested number of sentences.

## Declaration

```objectivec
CFStringRef SKSummaryCopySentenceSummaryString(SKSummaryRef summary, CFIndex numSentences);
```

## Parameters

- `summary`: The summarization object containing the text from which you want a summarization.
- `numSentences`: The maximum number of sentences you want in the summary.

<a id="return_value"></a>

## Return Value

A [CFString](../corefoundation/cfstring.md) object containing the requested summary.

## See Also

### Working With Summarization

- [SKSummaryCreateWithString](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetSentenceSummaryInfo](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopyParagraphSummaryString](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.
