> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/attenuationweight

# attenuationWeight (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The weight assigned to a score for the Bluetooth signal strength.

> No longer supported.

## Declaration

```swift
var attenuationWeight: Double { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This weight parameter is not used.

## See Also

### Weight Configuration

- [daysSinceLastExposureWeight](dayssincelastexposureweight.md): Deprecated. The weight assigned to a score for the days since the user’s exposure.
- [durationWeight](durationweight.md): Deprecated. The weight assigned to a score for the duration of the user’s exposure.
- [transmissionRiskWeight](transmissionriskweight.md): Deprecated. The weight assigned to a score for the affected user’s estimated risk of transmission.

# attenuationWeight (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The weight assigned to a score for the Bluetooth signal strength.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) double attenuationWeight;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This weight parameter is not used.

## See Also

### Weight Configuration

- [daysSinceLastExposureWeight](dayssincelastexposureweight.md): Deprecated. The weight assigned to a score for the days since the user’s exposure.
- [durationWeight](durationweight.md): Deprecated. The weight assigned to a score for the duration of the user’s exposure.
- [transmissionRiskWeight](transmissionriskweight.md): Deprecated. The weight assigned to a score for the affected user’s estimated risk of transmission.
