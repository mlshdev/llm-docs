> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureconfiguration/durationlevelvalues](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/durationlevelvalues)

# durationLevelValues (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The level values for duration.

> No longer supported.

## Declaration

```swift
var durationLevelValues: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This property contains eight levels, each defining a range of exposure duration:

- `durationScores[0]` when duration equals 0.
- `durationScores[1]` when duration \<= 5.
- `durationScores[2]` when duration \<= 10.
- `durationScores[3]` when duration \<= 15.
- `durationScores[4]` when duration \<= 20.
- `durationScores[5]` when duration \<= 25.
- `durationScores[6]` when duration \<= 30.
- `durationScores[7]` when duration  \> 30.

## See Also

### Level Configuration

- [attenuationDurationThresholds](attenuationdurationthresholds.md): Deprecated. The configurable signal-loss thresholds for calculating exposure risk.
- [attenuationLevelValues](attenuationlevelvalues.md): Deprecated. The level values for attenuation.
- [daysSinceLastExposureLevelValues](dayssincelastexposurelevelvalues.md): Deprecated. The level values for days since last exposure.
- [transmissionRiskLevelValues](transmissionrisklevelvalues.md): Deprecated. The level values for transmission risk.
- [metadata](metadata.md): Deprecated. The metadata you use to configure the exposure calculations.

# durationLevelValues (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The level values for duration.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * durationLevelValues;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This property contains eight levels, each defining a range of exposure duration:

- `durationScores[0]` when duration equals 0.
- `durationScores[1]` when duration \<= 5.
- `durationScores[2]` when duration \<= 10.
- `durationScores[3]` when duration \<= 15.
- `durationScores[4]` when duration \<= 20.
- `durationScores[5]` when duration \<= 25.
- `durationScores[6]` when duration \<= 30.
- `durationScores[7]` when duration  \> 30.

## See Also

### Level Configuration

- [attenuationDurationThresholds](attenuationdurationthresholds.md): Deprecated. The configurable signal-loss thresholds for calculating exposure risk.
- [attenuationLevelValues](attenuationlevelvalues.md): Deprecated. The level values for attenuation.
- [daysSinceLastExposureLevelValues](dayssincelastexposurelevelvalues.md): Deprecated. The level values for days since last exposure.
- [transmissionRiskLevelValues](transmissionrisklevelvalues.md): Deprecated. The level values for transmission risk.
- [metadata](metadata.md): Deprecated. The metadata you use to configure the exposure calculations.
