> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/ispriority](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/ispriority)

# isPriority (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value that indicates whether the mail or messages content represents a prioritized item.

## Declaration

```swift
var isPriority: NSNumber? { get }
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

During indexing, Apple Intelligence sets this property to `1` for any SMS content that requires priority classification. Use this property to prioritize the associated item’s content.

## See Also

### Handling Apple Intelligence prioritization and summarization

- [textContentSummary](textcontentsummary.md): A string that presents the Apple Intelligence summarization of the item.
- [transcribedTextContent](transcribedtextcontent.md): A string that represents the text the system transcribed.

# isPriority (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value that indicates whether the mail or messages content represents a prioritized item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * isPriority;
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

During indexing, Apple Intelligence sets this property to `1` for any SMS content that requires priority classification. Use this property to prioritize the associated item’s content.

## See Also

### Handling Apple Intelligence prioritization and summarization

- [textContentSummary](textcontentsummary.md): A string that presents the Apple Intelligence summarization of the item.
- [transcribedTextContent](transcribedtextcontent.md): A string that represents the text the system transcribed.
