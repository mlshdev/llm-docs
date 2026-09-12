> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluemenopausalstate/none](https://developer.apple.com/documentation/healthkit/hkcategoryvaluemenopausalstate/none)

# HKCategoryValueMenopausalState.none (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value that indicates no menopausal state applies at the sample date.

## Declaration

```swift
case none
```

## Mentioned In

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md)

<a id="discussion"></a>

## Discussion

This value represents a confirmed entry that the person is neither in menopause nor perimenopause at the recorded date. It doesn’t represent unknown, unset, or missing data. Apps can use this value to record that someone explicitly confirmed the absence of a menopausal state at a particular point in time.

## See Also

### Specifying a menopausal state value

- [HKCategoryValueMenopausalState.menopause](menopause.md): A value that indicates the person is in menopause at the sample date.
- [HKCategoryValueMenopausalState.perimenopause](perimenopause.md): A value that indicates the person is in perimenopause at the sample date.

# HKCategoryValueMenopausalStateNone (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value that indicates no menopausal state applies at the sample date.

## Declaration

```objectivec
HKCategoryValueMenopausalStateNone
```

## Mentioned In

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md)

<a id="discussion"></a>

## Discussion

This value represents a confirmed entry that the person is neither in menopause nor perimenopause at the recorded date. It doesn’t represent unknown, unset, or missing data. Apps can use this value to record that someone explicitly confirmed the absence of a menopausal state at a particular point in time.

## See Also

### Specifying a menopausal state value

- [HKCategoryValueMenopausalStateMenopause](menopause.md): A value that indicates the person is in menopause at the sample date.
- [HKCategoryValueMenopausalStatePerimenopause](perimenopause.md): A value that indicates the person is in perimenopause at the sample date.
