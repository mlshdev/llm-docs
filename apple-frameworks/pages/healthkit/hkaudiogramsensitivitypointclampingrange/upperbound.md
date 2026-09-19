> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypointclampingrange/upperbound

# upperBound (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
@NSCopying var upperBound: HKQuantity? { get }
```

<a id="discussion"></a>

## Discussion

The upper bound of the clamping range, if any, in dBHL.

# upperBound (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * upperBound;
```

<a id="discussion"></a>

## Discussion

The upper bound of the clamping range, if any, in dBHL.
