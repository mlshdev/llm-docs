> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/durationweight

# durationWeight (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The weight assigned to a score for the duration of the user’s exposure.

> No longer supported.

## Declaration

```swift
var durationWeight: Double { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This weight parameter is not used.

## See Also

### Weight Configuration

- [attenuationWeight](attenuationweight.md): Deprecated. The weight assigned to a score for the Bluetooth signal strength.
- [daysSinceLastExposureWeight](dayssincelastexposureweight.md): Deprecated. The weight assigned to a score for the days since the user’s exposure.
- [transmissionRiskWeight](transmissionriskweight.md): Deprecated. The weight assigned to a score for the affected user’s estimated risk of transmission.

# durationWeight (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The weight assigned to a score for the duration of the user’s exposure.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) double durationWeight;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

This weight parameter is not used.

## See Also

### Weight Configuration

- [attenuationWeight](attenuationweight.md): Deprecated. The weight assigned to a score for the Bluetooth signal strength.
- [daysSinceLastExposureWeight](dayssincelastexposureweight.md): Deprecated. The weight assigned to a score for the days since the user’s exposure.
- [transmissionRiskWeight](transmissionriskweight.md): Deprecated. The weight assigned to a score for the affected user’s estimated risk of transmission.
