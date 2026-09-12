> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkappleecgalgorithmversion/version2](https://developer.apple.com/documentation/healthkit/hkappleecgalgorithmversion/version2)

# HKAppleECGAlgorithmVersion.version2 (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

The version 2 algorithm.

## Declaration

```swift
case version2
```

<a id="Discussion"></a>

## Discussion

Version 2 of the ECG algorithm includes the following changes:

- The ECG app can check for atrial fibrillation for heart rates up to 150 BPM.
- The ECG app now distinguishes between poor recordings and inconclusive results.

Apple Watch reports a poor recording when circumstances cause the watch to collect insufficient or inaccurate data, such as when the user wears the watch too loosely on their wrist, or if the user’s arm isn’t resting on a firm surface. The user can make another attempt at measuring their ECG after fixing the issue. An inconclusive reading indicates the system can’t interpret the data, for instance if the user wears a pacemaker, or if they exhibit an arrhythmia the app doesn’t recognize.

## See Also

### Versions

- [HKAppleECGAlgorithmVersion.version1](version1.md): The version 1 algorithm.

# HKAppleECGAlgorithmVersion2 (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.2+

The version 2 algorithm.

## Declaration

```objectivec
HKAppleECGAlgorithmVersion2
```

<a id="Discussion"></a>

## Discussion

Version 2 of the ECG algorithm includes the following changes:

- The ECG app can check for atrial fibrillation for heart rates up to 150 BPM.
- The ECG app now distinguishes between poor recordings and inconclusive results.

Apple Watch reports a poor recording when circumstances cause the watch to collect insufficient or inaccurate data, such as when the user wears the watch too loosely on their wrist, or if the user’s arm isn’t resting on a firm surface. The user can make another attempt at measuring their ECG after fixing the issue. An inconclusive reading indicates the system can’t interpret the data, for instance if the user wears a pacemaker, or if they exhibit an arrhythmia the app doesn’t recognize.

## See Also

### Versions

- [HKAppleECGAlgorithmVersion1](version1.md): The version 1 algorithm.
