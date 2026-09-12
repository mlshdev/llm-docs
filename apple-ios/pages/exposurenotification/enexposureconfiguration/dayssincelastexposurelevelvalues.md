> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureconfiguration/dayssincelastexposurelevelvalues](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/dayssincelastexposurelevelvalues)

# daysSinceLastExposureLevelValues (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The level values for days since last exposure.

> No longer supported.

## Declaration

```swift
var daysSinceLastExposureLevelValues: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This property contains eight levels, one for each range of days since last exposure:

- `daysSinceLastExposureScores[0]` when days \>= 14.
- `daysSinceLastExposureScores[1]` when days \>= 12.
- `daysSinceLastExposureScores[2]` when days \>= 10.
- `daysSinceLastExposureScores[3]` when days \>= 8.
- `daysSinceLastExposureScores[4]` when days \>= 6.
- `daysSinceLastExposureScores[5]` when days \>= 4.
- `daysSinceLastExposureScores[6]` when days \>= 2.
- `daysSinceLastExposureScores[7]` when days \>= 0.

## See Also

### Level Configuration

- [attenuationDurationThresholds](attenuationdurationthresholds.md): Deprecated. The configurable signal-loss thresholds for calculating exposure risk.
- [attenuationLevelValues](attenuationlevelvalues.md): Deprecated. The level values for attenuation.
- [durationLevelValues](durationlevelvalues.md): Deprecated. The level values for duration.
- [transmissionRiskLevelValues](transmissionrisklevelvalues.md): Deprecated. The level values for transmission risk.
- [metadata](metadata.md): Deprecated. The metadata you use to configure the exposure calculations.

# daysSinceLastExposureLevelValues (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The level values for days since last exposure.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * daysSinceLastExposureLevelValues;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This property contains eight levels, one for each range of days since last exposure:

- `daysSinceLastExposureScores[0]` when days \>= 14.
- `daysSinceLastExposureScores[1]` when days \>= 12.
- `daysSinceLastExposureScores[2]` when days \>= 10.
- `daysSinceLastExposureScores[3]` when days \>= 8.
- `daysSinceLastExposureScores[4]` when days \>= 6.
- `daysSinceLastExposureScores[5]` when days \>= 4.
- `daysSinceLastExposureScores[6]` when days \>= 2.
- `daysSinceLastExposureScores[7]` when days \>= 0.

## See Also

### Level Configuration

- [attenuationDurationThresholds](attenuationdurationthresholds.md): Deprecated. The configurable signal-loss thresholds for calculating exposure risk.
- [attenuationLevelValues](attenuationlevelvalues.md): Deprecated. The level values for attenuation.
- [durationLevelValues](durationlevelvalues.md): Deprecated. The level values for duration.
- [transmissionRiskLevelValues](transmissionrisklevelvalues.md): Deprecated. The level values for transmission risk.
- [metadata](metadata.md): Deprecated. The metadata you use to configure the exposure calculations.
