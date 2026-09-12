> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureconfiguration/attenuationlevelvalues](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/attenuationlevelvalues)

# attenuationLevelValues (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The level values for attenuation.

> No longer supported.

## Declaration

```swift
var attenuationLevelValues: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This property contains eight risk-level values in the range 0-8, one for each range of attenuation.

- `attenuationLevelValues[0]` when attenuation \> 73.
- `attenuationLevelValues[1`\] when 73 \>= attenuation \> 63.
- `attenuationLevelValues[2]` when 63 \>= attenuation \> 51.
- `attenuationLevelValues[3]` when 51 \>= attenuation \> 33.
- `attenuationLevelValues[4]` when 33 \>= attenuation \> 27.
- `attenuationLevelValues[5]` when 27 \>= attenuation \> 15.
- `attenuationLevelValues[6]` when 15 \>= attenuation \> 10.
- `attenuationLevelValues[7]` when 10 \>= attenuation.

> **Note**

>  On iOS 13.7 and 14.0, the framework ignores the values of this property. Instead, it uses `[1, 2, 3, 4, 5, 6, 7, 8]` for the attenuation level values.

## See Also

### Level Configuration

- [attenuationDurationThresholds](attenuationdurationthresholds.md): Deprecated. The configurable signal-loss thresholds for calculating exposure risk.
- [daysSinceLastExposureLevelValues](dayssincelastexposurelevelvalues.md): Deprecated. The level values for days since last exposure.
- [durationLevelValues](durationlevelvalues.md): Deprecated. The level values for duration.
- [transmissionRiskLevelValues](transmissionrisklevelvalues.md): Deprecated. The level values for transmission risk.
- [metadata](metadata.md): Deprecated. The metadata you use to configure the exposure calculations.

# attenuationLevelValues (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The level values for attenuation.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * attenuationLevelValues;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This property contains eight risk-level values in the range 0-8, one for each range of attenuation.

- `attenuationLevelValues[0]` when attenuation \> 73.
- `attenuationLevelValues[1`\] when 73 \>= attenuation \> 63.
- `attenuationLevelValues[2]` when 63 \>= attenuation \> 51.
- `attenuationLevelValues[3]` when 51 \>= attenuation \> 33.
- `attenuationLevelValues[4]` when 33 \>= attenuation \> 27.
- `attenuationLevelValues[5]` when 27 \>= attenuation \> 15.
- `attenuationLevelValues[6]` when 15 \>= attenuation \> 10.
- `attenuationLevelValues[7]` when 10 \>= attenuation.

> **Note**

>  On iOS 13.7 and 14.0, the framework ignores the values of this property. Instead, it uses `[1, 2, 3, 4, 5, 6, 7, 8]` for the attenuation level values.

## See Also

### Level Configuration

- [attenuationDurationThresholds](attenuationdurationthresholds.md): Deprecated. The configurable signal-loss thresholds for calculating exposure risk.
- [daysSinceLastExposureLevelValues](dayssincelastexposurelevelvalues.md): Deprecated. The level values for days since last exposure.
- [durationLevelValues](durationlevelvalues.md): Deprecated. The level values for duration.
- [transmissionRiskLevelValues](transmissionrisklevelvalues.md): Deprecated. The level values for transmission risk.
- [metadata](metadata.md): Deprecated. The metadata you use to configure the exposure calculations.
