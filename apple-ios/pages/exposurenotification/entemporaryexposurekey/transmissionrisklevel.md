> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/entemporaryexposurekey/transmissionrisklevel](https://developer.apple.com/documentation/exposurenotification/entemporaryexposurekey/transmissionrisklevel)

# transmissionRiskLevel (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The risk of transmission associated with the person a key came from.

> No longer supported.

## Declaration

```swift
var transmissionRiskLevel: ENRiskLevel { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

Each app defines its own meaning for each of the risk levels (0-7).

Consistent Transmission Risk Levels across regions facilitate roaming, therefore it’s recommended that the Transmission Risk Levels describe the type of report. The supported report types are determined by the public health authority for each region. Your app must verify the report type with a public health authority before submitting it.

Recommended report types for the different risk levels are:

- `0` = Unused/Custom
- `1` = Confirmed test: Low transmission risk level
- `2` = Confirmed test: Standard transmission risk level
- `3` = Confirmed test: High transmission risk level
- `4` = Confirmed clinical diagnosis
- `5` = Self report
- `6` = Negative case
- `7` = Recursive case

## See Also

### Exposure Criteria

- [rollingPeriod](rollingperiod.md): Deprecated. The length of time that this key is valid.
- [keyData](keydata.md): Deprecated. The temporary exposure key information.
- [rollingStartNumber](rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
- [ENIntervalNumber](../enintervalnumber.md): Deprecated. A number assigned to each 10-minute window shared between all devices participating in the protocol.

# transmissionRiskLevel (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The risk of transmission associated with the person a key came from.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) ENRiskLevel transmissionRiskLevel;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

Each app defines its own meaning for each of the risk levels (0-7).

Consistent Transmission Risk Levels across regions facilitate roaming, therefore it’s recommended that the Transmission Risk Levels describe the type of report. The supported report types are determined by the public health authority for each region. Your app must verify the report type with a public health authority before submitting it.

Recommended report types for the different risk levels are:

- `0` = Unused/Custom
- `1` = Confirmed test: Low transmission risk level
- `2` = Confirmed test: Standard transmission risk level
- `3` = Confirmed test: High transmission risk level
- `4` = Confirmed clinical diagnosis
- `5` = Self report
- `6` = Negative case
- `7` = Recursive case

## See Also

### Exposure Criteria

- [rollingPeriod](rollingperiod.md): Deprecated. The length of time that this key is valid.
- [keyData](keydata.md): Deprecated. The temporary exposure key information.
- [rollingStartNumber](rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
- [ENIntervalNumber](../enintervalnumber.md): Deprecated. A number assigned to each 10-minute window shared between all devices participating in the protocol.
