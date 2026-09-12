> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444767-sksummarygetsentencesummaryinfo](https://developer.apple.com/documentation/coreservices/1444767-sksummarygetsentencesummaryinfo)

# SKSummaryGetSentenceSummaryInfo(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets detailed information about a body of text for constructing a custom sentence-based summary string.

## Declaration

```swift
func SKSummaryGetSentenceSummaryInfo(_ summary: SKSummary!, _ numSentencesInSummary: CFIndex, _ outRankOrderOfSentences: UnsafeMutablePointer<CFIndex>!, _ outSentenceIndexOfSentences: UnsafeMutablePointer<CFIndex>!, _ outParagraphIndexOfSentences: UnsafeMutablePointer<CFIndex>!) -> CFIndex
```

## Parameters

- `summary`: The summarization object containing the text from which you want to build a summary.
- `numSentencesInSummary`: The maximum number of sentences you want in the summary.
- `outRankOrderOfSentences`: On input, a pointer to an array of CFIndex objects. On output, points to the previously allocated array, which now lists the summarization relevance rank of each sentence in the original text. The most important sentence gets a rank of 1. The array size must equal `numSentencesInSummary`, or else be `NULL` if you don’t want to get the rank orders.
- `outSentenceIndexOfSentences`: On input, a pointer to an array of CFIndex objects. On output, points to the previously allocated array, which now contains the ordinal number for each sentence in the original text. Use the [SKSummaryCopySentenceAtIndex(\_:\_:)](1450287-sksummarycopysentenceatindex.md) function with one of these numbers to get the corresponding sentence. The array size must equal `numSentencesInSummary`, or else be `NULL` if you don’t want to get the ordinal numbers of the sentences.
- `outParagraphIndexOfSentences`: On input, a pointer to an array of CFIndex objects. On output, points to the previously allocated array, which now contains the ordinal number for the paragraph that each corresponding sentence, referenced in `outSentenceIndexOfSentences`, appears in. The array size must equal `numSentencesInSummary`, or else be `NULL` if you don’t want to get the ordinal numbers of the sentences.

<a id="return_value"></a>

## Return Value

The number of sentences in the summary.

## See Also

### Working With Summarization

- [SKSummaryCreateWithString(\_:)](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetParagraphSummaryInfo(\_:\_:\_:\_:)](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount(\_:)](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount(\_:)](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex(\_:\_:)](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex(\_:\_:)](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString(\_:\_:)](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString(\_:\_:)](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID()](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.

# SKSummaryGetSentenceSummaryInfo (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets detailed information about a body of text for constructing a custom sentence-based summary string.

## Declaration

```objectivec
CFIndex SKSummaryGetSentenceSummaryInfo(SKSummaryRef summary, CFIndex numSentencesInSummary, CFIndex *outRankOrderOfSentences, CFIndex *outSentenceIndexOfSentences, CFIndex *outParagraphIndexOfSentences);
```

## Parameters

- `summary`: The summarization object containing the text from which you want to build a summary.
- `numSentencesInSummary`: The maximum number of sentences you want in the summary.
- `outRankOrderOfSentences`: On input, a pointer to an array of CFIndex objects. On output, points to the previously allocated array, which now lists the summarization relevance rank of each sentence in the original text. The most important sentence gets a rank of 1. The array size must equal `numSentencesInSummary`, or else be `NULL` if you don’t want to get the rank orders.
- `outSentenceIndexOfSentences`: On input, a pointer to an array of CFIndex objects. On output, points to the previously allocated array, which now contains the ordinal number for each sentence in the original text. Use the [SKSummaryCopySentenceAtIndex](1450287-sksummarycopysentenceatindex.md) function with one of these numbers to get the corresponding sentence. The array size must equal `numSentencesInSummary`, or else be `NULL` if you don’t want to get the ordinal numbers of the sentences.
- `outParagraphIndexOfSentences`: On input, a pointer to an array of CFIndex objects. On output, points to the previously allocated array, which now contains the ordinal number for the paragraph that each corresponding sentence, referenced in `outSentenceIndexOfSentences`, appears in. The array size must equal `numSentencesInSummary`, or else be `NULL` if you don’t want to get the ordinal numbers of the sentences.

<a id="return_value"></a>

## Return Value

The number of sentences in the summary.

## See Also

### Working With Summarization

- [SKSummaryCreateWithString](1446229-sksummarycreatewithstring.md): Creates a summary object based on a text string.
- [SKSummaryGetParagraphSummaryInfo](1447517-sksummarygetparagraphsummaryinfo.md): Gets detailed information about a body of text for constructing a custom paragraph-based summary string.
- [SKSummaryGetSentenceCount](1450009-sksummarygetsentencecount.md): Gets the number of sentences in a summarization object.
- [SKSummaryGetParagraphCount](1449304-sksummarygetparagraphcount.md): Gets the number of paragraphs in a summarization object.
- [SKSummaryCopySentenceAtIndex](1450287-sksummarycopysentenceatindex.md): Gets a specified sentence from the text in a summarization object.
- [SKSummaryCopyParagraphAtIndex](1445711-sksummarycopyparagraphatindex.md): Gets a specified paragraph from the text in a summarization object.
- [SKSummaryCopySentenceSummaryString](1449700-sksummarycopysentencesummarystri.md): Gets a text string consisting of a summary with, at most, the requested number of sentences.
- [SKSummaryCopyParagraphSummaryString](1449746-sksummarycopyparagraphsummarystr.md): Gets a text string consisting of a summary with, at most, the requested number of paragraphs.
- [SKSummaryGetTypeID](1444796-sksummarygettypeid.md): Gets the type identifier for Search Kit summarization objects.
