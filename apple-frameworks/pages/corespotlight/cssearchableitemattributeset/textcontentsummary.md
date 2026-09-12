> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/textcontentsummary](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/textcontentsummary)

# textContentSummary (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A string that presents the Apple Intelligence summarization of the item.

## Declaration

```swift
var textContentSummary: String? { get }
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

For some types of content, Apple Intelligence generates a summary of the text content you provide and places it in this property. For information about how to generate summaries, see [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md).

## See Also

### Handling Apple Intelligence prioritization and summarization

- [isPriority](ispriority.md): A Boolean value that indicates whether the mail or messages content represents a prioritized item.
- [transcribedTextContent](transcribedtextcontent.md): A string that represents the text the system transcribed.

# textContentSummary (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A string that presents the Apple Intelligence summarization of the item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * textContentSummary;
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

For some types of content, Apple Intelligence generates a summary of the text content you provide and places it in this property. For information about how to generate summaries, see [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md).

## See Also

### Handling Apple Intelligence prioritization and summarization

- [isPriority](ispriority.md): A Boolean value that indicates whether the mail or messages content represents a prioritized item.
- [transcribedTextContent](transcribedtextcontent.md): A string that represents the text the system transcribed.
