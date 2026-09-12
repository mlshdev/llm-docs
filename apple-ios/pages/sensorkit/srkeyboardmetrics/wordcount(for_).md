> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/wordcount(for:)](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/wordcount(for:))

# wordCount(for:) (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides the number of typed words for the specified sentiment in the report.

## Declaration

```swift
func wordCount(for category: SRKeyboardMetrics.SentimentCategory) -> Int
```

## Parameters

- `category`: An estimation of the user’s demeanor.

<a id="return-value"></a>

## Return Value

The total number of typed words for a sentiment.

## See Also

### Inferring Sentiment

- [emojiCount(for:)](emojicount%28for_%29.md): Provides the number of typed emojis for the specified sentiment in the report.
- [SRKeyboardMetrics.SentimentCategory](sentimentcategory.md): Moods that the framework determines by analyzing the user’s input.

# wordCountForSentimentCategory: (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides the number of typed words for the specified sentiment in the report.

## Declaration

```objectivec
- (NSInteger) wordCountForSentimentCategory:(SRKeyboardMetricsSentimentCategory) category;
```

## Parameters

- `category`: An estimation of the user’s demeanor.

<a id="return-value"></a>

## Return Value

The total number of typed words for a sentiment.

## See Also

### Inferring Sentiment

- [emojiCountForSentimentCategory:](emojicount%28for_%29.md): Provides the number of typed emojis for the specified sentiment in the report.
- [SRKeyboardMetricsSentimentCategory](sentimentcategory.md): Moods that the framework determines by analyzing the user’s input.
