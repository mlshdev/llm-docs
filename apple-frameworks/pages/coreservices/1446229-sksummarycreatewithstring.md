> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446229-sksummarycreatewithstring](https://developer.apple.com/documentation/coreservices/1446229-sksummarycreatewithstring)

# SKSummaryCreateWithString(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a summary object based on a text string.

## Declaration

```swift
func SKSummaryCreateWithString(_ inString: CFString!) -> Unmanaged<SKSummary>!
```

## Parameters

- `inString`: The text string that you want to summarize.

<a id="return_value"></a>

## Return Value

Returns a summarization object, or `NULL` on failure.

<a id="discussion"></a>

## Discussion

The [SKSummaryCreateWithString(\_:)](1446229-sksummarycreatewithstring.md) function creates a summarization object that pre-analyzes a text string to support fast summarization. When your application no longer needs the summarization object, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Working With Summarization

- [SKSummaryGetSentenceSummaryInfo(\_:\_:\_:\_:\_:)](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo(\_:\_:\_:\_:)](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount(\_:)](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount(\_:)](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex(\_:\_:)](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex(\_:\_:)](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString(\_:\_:)](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString(\_:\_:)](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID()](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.

# SKSummaryCreateWithString (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a summary object based on a text string.

## Declaration

```objectivec
SKSummaryRef SKSummaryCreateWithString(CFStringRef inString);
```

## Parameters

- `inString`: The text string that you want to summarize.

<a id="return_value"></a>

## Return Value

Returns a summarization object, or `NULL` on failure.

<a id="discussion"></a>

## Discussion

The [SKSummaryCreateWithString](1446229-sksummarycreatewithstring.md) function creates a summarization object that pre-analyzes a text string to support fast summarization. When your application no longer needs the summarization object, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Working With Summarization

- [SKSummaryGetSentenceSummaryInfo](1444767-sksummarygetsentencesummaryinfo.md): Gets detailed information about a body of text for constructing a custom sentence-based summary string.
- [SKSummaryGetParagraphSummaryInfo](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.
