> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srkeyboardmetrics/sentimentcategory](https://developer.apple.com/documentation/sensorkit/srkeyboardmetrics/sentimentcategory)

# SRKeyboardMetrics.SentimentCategory (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Moods that the framework determines by analyzing the user’s input.

## Declaration

```swift
enum SentimentCategory
```

<a id="overview"></a>

## Overview

This class describes possible values for [wordCount(for:)](wordcount%28for_%29.md) and [emojiCount(for:)](emojicount%28for_%29.md) properties of a keyboard report.

## Topics

### Sentiments

- [SRKeyboardMetrics.SentimentCategory.absolutist](sentimentcategory/absolutist.md): A mood that embodies absolutism.
- [SRKeyboardMetrics.SentimentCategory.anger](sentimentcategory/anger.md): A mood that embodies anger.
- [SRKeyboardMetrics.SentimentCategory.anxiety](sentimentcategory/anxiety.md): A mood that embodies worrying.
- [SRKeyboardMetrics.SentimentCategory.confused](sentimentcategory/confused.md): A mood that embodies confusion.
- [SRKeyboardMetrics.SentimentCategory.death](sentimentcategory/death.md): A mood that expresses death.
- [SRKeyboardMetrics.SentimentCategory.down](sentimentcategory/down.md): A mood that embodies depression.
- [SRKeyboardMetrics.SentimentCategory.health](sentimentcategory/health.md): A general concern for health.
- [SRKeyboardMetrics.SentimentCategory.lowEnergy](sentimentcategory/lowenergy.md): A mood that indicates low energy.
- [SRKeyboardMetrics.SentimentCategory.positive](sentimentcategory/positive.md): A mood that embodies positivity.
- [SRKeyboardMetrics.SentimentCategory.sad](sentimentcategory/sad.md): A mood that embodies sadness.

### Initializers

- [init(rawValue:)](sentimentcategory/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inferring Sentiment

- [wordCount(for:)](wordcount%28for_%29.md): Provides the number of typed words for the specified sentiment in the report.
- [emojiCount(for:)](emojicount%28for_%29.md): Provides the number of typed emojis for the specified sentiment in the report.

# SRKeyboardMetricsSentimentCategory (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Moods that the framework determines by analyzing the user’s input.

## Declaration

```objectivec
enum SRKeyboardMetricsSentimentCategory : NSInteger;
```

<a id="overview"></a>

## Overview

This class describes possible values for [wordCountForSentimentCategory:](wordcount%28for_%29.md) and [emojiCountForSentimentCategory:](emojicount%28for_%29.md) properties of a keyboard report.

## Topics

### Sentiments

- [SRKeyboardMetricsSentimentCategoryAbsolutist](sentimentcategory/absolutist.md): A mood that embodies absolutism.
- [SRKeyboardMetricsSentimentCategoryAnger](sentimentcategory/anger.md): A mood that embodies anger.
- [SRKeyboardMetricsSentimentCategoryAnxiety](sentimentcategory/anxiety.md): A mood that embodies worrying.
- [SRKeyboardMetricsSentimentCategoryConfused](sentimentcategory/confused.md): A mood that embodies confusion.
- [SRKeyboardMetricsSentimentCategoryDeath](sentimentcategory/death.md): A mood that expresses death.
- [SRKeyboardMetricsSentimentCategoryDown](sentimentcategory/down.md): A mood that embodies depression.
- [SRKeyboardMetricsSentimentCategoryHealth](sentimentcategory/health.md): A general concern for health.
- [SRKeyboardMetricsSentimentCategoryLowEnergy](sentimentcategory/lowenergy.md): A mood that indicates low energy.
- [SRKeyboardMetricsSentimentCategoryPositive](sentimentcategory/positive.md): A mood that embodies positivity.
- [SRKeyboardMetricsSentimentCategorySad](sentimentcategory/sad.md): A mood that embodies sadness.

## See Also

### Inferring Sentiment

- [wordCountForSentimentCategory:](wordcount%28for_%29.md): Provides the number of typed words for the specified sentiment in the report.
- [emojiCountForSentimentCategory:](emojicount%28for_%29.md): Provides the number of typed emojis for the specified sentiment in the report.
