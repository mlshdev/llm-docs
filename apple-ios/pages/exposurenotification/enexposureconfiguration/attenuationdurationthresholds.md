> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureconfiguration/attenuationdurationthresholds](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/attenuationdurationthresholds)

# attenuationDurationThresholds (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The configurable signal-loss thresholds for calculating exposure risk.

> No longer supported.

## Declaration

```swift
var attenuationDurationThresholds: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.6 and later.

Signal attenuation and duration are measurable aspects of exposure risk. Set threshold values to configure the degree to which the signal loss between two devices for a specific duration signifies a potential exposure. Four categories are described in [ENExposureConfiguration](../enexposureconfiguration.md): *immediate*, *near*, *medium*, and *other*.

![Illustration showing the immediate attenuation threshold atop the immediate and near categories, the near attenuation threshold atop the near and medium categories, and the medium attenuation threshold atop the medium and other categories.](https://developer.apple.com/images/com.apple.exposurenotification/media-3699755@2x.png)

The following entries in the `attenuationDurationThresholds` array correspond to three thresholds for the four categories:

- **`attenuationDurationThresholds[0]`**: The immediate duration threshold. The framework sums the duration of exposures for which the attenuation is less than or equal to `attenuationDurationThresholds[0]`. The default value is `50`.
- **`attenuationDurationThresholds[1]`**: The near attenuation threshold. The framework sums the duration of exposures for which the attenuation is greater than `attenuationDurationThresholds[0]` and less than or equal to `attenuationDurationThresholds[1]`. The default value is `70`.
- **`attenuationDurationThresholds[2]`**: The medium attenuation threshold. The framework sums the duration of exposures for which the attenuation is greater than `attenuationDurationThresholds[1]` and less than or equal to `attenuationDurationThresholds[2]`. The default value is `90`.

Attenuation values greater than `attenuationDurationThresholds[2]` accumulate into the “other” category.

## See Also

### Configuring Duration

- [immediateDurationWeight](immediatedurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at immediate distance.
- [mediumDurationWeight](mediumdurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at medium distance.
- [nearDurationWeight](neardurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at close distance.
- [otherDurationWeight](otherdurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at a large distance.
- [daysSinceLastExposureThreshold](dayssincelastexposurethreshold.md): Deprecated. The number of days to consider when calculating the risk level.

# attenuationDurationThresholds (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The configurable signal-loss thresholds for calculating exposure risk.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<NSNumber *> * attenuationDurationThresholds;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.6 and later.

Signal attenuation and duration are measurable aspects of exposure risk. Set threshold values to configure the degree to which the signal loss between two devices for a specific duration signifies a potential exposure. Four categories are described in [ENExposureConfiguration](../enexposureconfiguration.md): *immediate*, *near*, *medium*, and *other*.

![Illustration showing the immediate attenuation threshold atop the immediate and near categories, the near attenuation threshold atop the near and medium categories, and the medium attenuation threshold atop the medium and other categories.](https://developer.apple.com/images/com.apple.exposurenotification/media-3699755@2x.png)

The following entries in the `attenuationDurationThresholds` array correspond to three thresholds for the four categories:

- **`attenuationDurationThresholds[0]`**: The immediate duration threshold. The framework sums the duration of exposures for which the attenuation is less than or equal to `attenuationDurationThresholds[0]`. The default value is `50`.
- **`attenuationDurationThresholds[1]`**: The near attenuation threshold. The framework sums the duration of exposures for which the attenuation is greater than `attenuationDurationThresholds[0]` and less than or equal to `attenuationDurationThresholds[1]`. The default value is `70`.
- **`attenuationDurationThresholds[2]`**: The medium attenuation threshold. The framework sums the duration of exposures for which the attenuation is greater than `attenuationDurationThresholds[1]` and less than or equal to `attenuationDurationThresholds[2]`. The default value is `90`.

Attenuation values greater than `attenuationDurationThresholds[2]` accumulate into the “other” category.

## See Also

### Configuring Duration

- [immediateDurationWeight](immediatedurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at immediate distance.
- [mediumDurationWeight](mediumdurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at medium distance.
- [nearDurationWeight](neardurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at close distance.
- [otherDurationWeight](otherdurationweight.md): Deprecated. The weight assigned to a risk level indicating the duration of the user’s exposure at a large distance.
- [daysSinceLastExposureThreshold](dayssincelastexposurethreshold.md): Deprecated. The number of days to consider when calculating the risk level.
