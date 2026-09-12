> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartratemotioncontext/notset](https://developer.apple.com/documentation/healthkit/hkheartratemotioncontext/notset)

# HKHeartRateMotionContext.notSet (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A value indicating that the user’s activity level could not be determined.

## Declaration

```swift
case notSet
```

<a id="Discussion"></a>

## Discussion

This value is identical to the sample’s metadata not containing a [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) key.

## See Also

### Motion Contextes

- [HKHeartRateMotionContext.active](active.md): A value indicating that the user was in motion during the heart rate sample.
- [HKHeartRateMotionContext.sedentary](sedentary.md): A value indicating that the user has been still for at least 5 minutes prior to the heart rate sample.

# HKHeartRateMotionContextNotSet (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A value indicating that the user’s activity level could not be determined.

## Declaration

```objectivec
HKHeartRateMotionContextNotSet
```

<a id="Discussion"></a>

## Discussion

This value is identical to the sample’s metadata not containing a [HKMetadataKeyHeartRateMotionContext](../hkmetadatakeyheartratemotioncontext.md) key.

## See Also

### Motion Contextes

- [HKHeartRateMotionContextActive](active.md): A value indicating that the user was in motion during the heart rate sample.
- [HKHeartRateMotionContextSedentary](sedentary.md): A value indicating that the user has been still for at least 5 minutes prior to the heart rate sample.
