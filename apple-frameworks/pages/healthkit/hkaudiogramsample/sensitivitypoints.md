> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkaudiogramsample/sensitivitypoints

# sensitivityPoints (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of sensitivity point objects.

## Declaration

```swift
var sensitivityPoints: [HKAudiogramSensitivityPoint] { get }
```

<a id="Discussion"></a>

## Discussion

Each sensitivity point represents a single result from a hearing test.

# sensitivityPoints (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An array of sensitivity point objects.

## Declaration

```objectivec
@property (copy, readonly) NSArray<HKAudiogramSensitivityPoint *> * sensitivityPoints;
```

<a id="Discussion"></a>

## Discussion

Each sensitivity point represents a single result from a hearing test.
