> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimpactfeedbackgenerator/impactoccurred()](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/impactoccurred())

# impactOccurred() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Triggers impact feedback.

## Declaration

```swift
func impactOccurred()
```

<a id="Discussion"></a>

## Discussion

This method tells the generator that an impact has occurred. In response, the generator may play the appropriate haptics based on the [UIImpactFeedbackGenerator.FeedbackStyle](feedbackstyle.md) value passed to the generator’s [init(style:)](init%28style_%29.md) initializer.

For information on setting up a feedback generator, see the [UIFeedbackGenerator](../uifeedbackgenerator.md) class.

## See Also

### Related Documentation

- [prepare()](../uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Reporting impacts

- [impactOccurred(intensity:)](impactoccurred%28intensity_%29.md): Triggers impact feedback with a specific intensity.
- [impactOccurred(at:)](impactoccurred%28at_%29.md): Triggers impact feedback at the specified location.
- [impactOccurred(intensity:at:)](impactoccurred%28intensity_at_%29.md): Triggers impact feedback with a specific intensity at the specified location.

# impactOccurred (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Triggers impact feedback.

## Declaration

```objectivec
- (void) impactOccurred;
```

<a id="Discussion"></a>

## Discussion

This method tells the generator that an impact has occurred. In response, the generator may play the appropriate haptics based on the [UIImpactFeedbackStyle](feedbackstyle.md) value passed to the generator’s [initWithStyle:](init%28style_%29.md) initializer.

For information on setting up a feedback generator, see the [UIFeedbackGenerator](../uifeedbackgenerator.md) class.

## See Also

### Related Documentation

- [prepare](../uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Reporting impacts

- [impactOccurredWithIntensity:](impactoccurred%28intensity_%29.md): Triggers impact feedback with a specific intensity.
- [impactOccurredAtLocation:](impactoccurred%28at_%29.md): Triggers impact feedback at the specified location.
- [impactOccurredWithIntensity:atLocation:](impactoccurred%28intensity_at_%29.md): Triggers impact feedback with a specific intensity at the specified location.
