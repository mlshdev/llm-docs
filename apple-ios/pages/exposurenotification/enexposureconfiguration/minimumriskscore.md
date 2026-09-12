> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureconfiguration/minimumriskscore](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/minimumriskscore)

# minimumRiskScore (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The value that is the user’s minimum risk score.

> No longer supported.

## Declaration

```swift
var minimumRiskScore: ENRiskScore { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

The framework excludes exposure incidents with scores lower than the value of this property. There is no default minimum value for this property.

The framework doesn’t use this property when calculating [matchedKeyCount](../enexposuredetectionsummary/matchedkeycount.md) or [daysSinceLastExposure](../enexposuredetectionsummary/dayssincelastexposure.md).

## See Also

### Minimum Threshold Configuration

- [minimumRiskScoreFullRange](minimumriskscorefullrange.md): Deprecated. The value that is the user’s full-range minimum risk score.

# minimumRiskScore (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The value that is the user’s minimum risk score.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) ENRiskScore minimumRiskScore;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

The framework excludes exposure incidents with scores lower than the value of this property. There is no default minimum value for this property.

The framework doesn’t use this property when calculating [matchedKeyCount](../enexposuredetectionsummary/matchedkeycount.md) or [daysSinceLastExposure](../enexposuredetectionsummary/dayssincelastexposure.md).

## See Also

### Minimum Threshold Configuration

- [minimumRiskScoreFullRange](minimumriskscorefullrange.md): Deprecated. The value that is the user’s full-range minimum risk score.
