> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypointclampingrange/lowerbound

# lowerBound (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
@NSCopying var lowerBound: HKQuantity? { get }
```

<a id="discussion"></a>

## Discussion

The lower bound of the clamping range, if any, in dBHL.

# lowerBound (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * lowerBound;
```

<a id="discussion"></a>

## Discussion

The lower bound of the clamping range, if any, in dBHL.
