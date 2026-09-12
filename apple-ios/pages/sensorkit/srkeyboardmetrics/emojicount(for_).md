> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/emojicount(for:)](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/emojicount(for:))

# emojiCount(for:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides the number of typed emojis for the specified sentiment in the report.

## Declaration

```swift
func emojiCount(for category: SRKeyboardMetrics.SentimentCategory) -> Int
```

## Parameters

- `category`: An estimation of the user’s demeanor.

<a id="return-value"></a>

## Return Value

The total number of typed emojis for a sentiment.

## See Also

### Inferring Sentiment

- [wordCount(for:)](wordcount%28for_%29.md): Provides the number of typed words for the specified sentiment in the report.
- [SRKeyboardMetrics.SentimentCategory](sentimentcategory.md): Moods that the framework determines by analyzing the user’s input.

# emojiCountForSentimentCategory: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides the number of typed emojis for the specified sentiment in the report.

## Declaration

```objectivec
- (NSInteger) emojiCountForSentimentCategory:(SRKeyboardMetricsSentimentCategory) category;
```

## Parameters

- `category`: An estimation of the user’s demeanor.

<a id="return-value"></a>

## Return Value

The total number of typed emojis for a sentiment.

## See Also

### Inferring Sentiment

- [wordCountForSentimentCategory:](wordcount%28for_%29.md): Provides the number of typed words for the specified sentiment in the report.
- [SRKeyboardMetricsSentimentCategory](sentimentcategory.md): Moods that the framework determines by analyzing the user’s input.
