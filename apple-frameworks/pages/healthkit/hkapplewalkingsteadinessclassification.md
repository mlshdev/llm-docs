> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkapplewalkingsteadinessclassification](https://developer.apple.com/documentation/healthkit/hkapplewalkingsteadinessclassification)

# HKAppleWalkingSteadinessClassification (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A classification of a score based on the steadiness of the user’s gait.

## Declaration

```swift
enum HKAppleWalkingSteadinessClassification
```

<a id="overview"></a>

## Overview

Walking Steadiness classifications measures the ability of the user to move with a steady, even gait. You can use the [HKAppleWalkingSteadinessClassificationForQuantity](hkapplewalkingsteadinessclassificationforquantity.md), [HKAppleWalkingSteadinessMaximumQuantityForClassification](hkapplewalkingsteadinessmaximumquantityforclassification.md), and [HKAppleWalkingSteadinessMinimumQuantityForClassification](hkapplewalkingsteadinessminimumquantityforclassification.md) methods to convert between Walking Steadiness scores and the [HKAppleWalkingSteadinessClassification.low](hkapplewalkingsteadinessclassification/low.md), [HKAppleWalkingSteadinessClassification.veryLow](hkapplewalkingsteadinessclassification/verylow.md), or [HKAppleWalkingSteadinessClassification.ok](hkapplewalkingsteadinessclassification/ok.md) classifications.

## Topics

### Accessing classifications

- [HKAppleWalkingSteadinessClassification.ok](hkapplewalkingsteadinessclassification/ok.md): A classification indicating that the stability of the user’s gait is within the normal range.
- [HKAppleWalkingSteadinessClassification.low](hkapplewalkingsteadinessclassification/low.md): A classification indicating that the stability of the user’s gate is below normal.
- [HKAppleWalkingSteadinessClassification.veryLow](hkapplewalkingsteadinessclassification/verylow.md): A classification indicating that the stability of the user’s gate is considerably below normal.

### Accessing extremes

- [minimum](hkapplewalkingsteadinessclassification/minimum.md): The maximum walking steadiness percentage for the classification.
- [maximum](hkapplewalkingsteadinessclassification/maximum.md): The minimum walking steadiness percentage for the classification.

### Initializers

- [init(for:)](hkapplewalkingsteadinessclassification/init%28for_%29.md): Creates a new classification for the provided percentage.
- [init(rawValue:)](hkapplewalkingsteadinessclassification/init%28rawvalue_%29.md)

### Default Implementations

- [CaseIterable Implementations](hkapplewalkingsteadinessclassification/caseiterable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKAppleWalkingSteadinessClassification (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A classification of a score based on the steadiness of the user’s gait.

## Declaration

```objectivec
enum HKAppleWalkingSteadinessClassification : NSInteger;
```

<a id="overview"></a>

## Overview

Walking Steadiness classifications measures the ability of the user to move with a steady, even gait. You can use the [HKAppleWalkingSteadinessClassificationForQuantity](hkapplewalkingsteadinessclassificationforquantity.md), [HKAppleWalkingSteadinessMaximumQuantityForClassification](hkapplewalkingsteadinessmaximumquantityforclassification.md), and [HKAppleWalkingSteadinessMinimumQuantityForClassification](hkapplewalkingsteadinessminimumquantityforclassification.md) methods to convert between Walking Steadiness scores and the [HKAppleWalkingSteadinessClassificationLow](hkapplewalkingsteadinessclassification/low.md), [HKAppleWalkingSteadinessClassificationVeryLow](hkapplewalkingsteadinessclassification/verylow.md), or [HKAppleWalkingSteadinessClassificationOK](hkapplewalkingsteadinessclassification/ok.md) classifications.

## Topics

### Accessing classifications

- [HKAppleWalkingSteadinessClassificationOK](hkapplewalkingsteadinessclassification/ok.md): A classification indicating that the stability of the user’s gait is within the normal range.
- [HKAppleWalkingSteadinessClassificationLow](hkapplewalkingsteadinessclassification/low.md): A classification indicating that the stability of the user’s gate is below normal.
- [HKAppleWalkingSteadinessClassificationVeryLow](hkapplewalkingsteadinessclassification/verylow.md): A classification indicating that the stability of the user’s gate is considerably below normal.

## See Also

### Walking steadiness classifications

- [HKAppleWalkingSteadinessClassificationForQuantity](hkapplewalkingsteadinessclassificationforquantity.md): Provides a classification for a score that measures the steadiness of the user’s gait.
- [HKAppleWalkingSteadinessMaximumQuantityForClassification](hkapplewalkingsteadinessmaximumquantityforclassification.md): Returns the maximum score for the steadiness of the user’s gait based on the provided classification.
- [HKAppleWalkingSteadinessMinimumQuantityForClassification](hkapplewalkingsteadinessminimumquantityforclassification.md): Returns the minimum score for the steadiness of the user’s gait based on the provided classification.
