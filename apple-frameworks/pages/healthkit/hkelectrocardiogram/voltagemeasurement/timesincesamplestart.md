> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/voltagemeasurement/timesincesamplestart

# timeSinceSampleStart (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The time of the measurement relative to the sample’s start time.

## Declaration

```swift
var timeSinceSampleStart: TimeInterval { get }
```

## See Also

### Accessing Data

- [quantity(for:)](quantity%28for_%29.md): Returns the voltage for the specified lead.

# timeSinceSampleStart (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The time of the measurement relative to the sample’s start time.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval timeSinceSampleStart;
```

## See Also

### Accessing Data

- [quantityForLead:](quantity%28for_%29.md): Returns the voltage for the specified lead.
