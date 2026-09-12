> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitytest/clampingrange](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitytest/clampingrange)

# clampingRange (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
@NSCopying var clampingRange: HKAudiogramSensitivityPointClampingRange? { get }
```

<a id="discussion"></a>

## Discussion

If present, indicates that the range within which the sensitivity point should be clamped.

# clampingRange (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKAudiogramSensitivityPointClampingRange * clampingRange;
```

<a id="discussion"></a>

## Discussion

If present, indicates that the range within which the sensitivity point should be clamped.
