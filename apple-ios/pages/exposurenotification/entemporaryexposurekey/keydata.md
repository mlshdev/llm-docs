> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/entemporaryexposurekey/keydata](https://developer.apple.com/documentation/exposurenotification/entemporaryexposurekey/keydata)

# keyData (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The temporary exposure key information.

> No longer supported.

## Declaration

```swift
var keyData: Data { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

## See Also

### Exposure Criteria

- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The risk of transmission associated with the person a key came from.
- [rollingPeriod](rollingperiod.md): Deprecated. The length of time that this key is valid.
- [rollingStartNumber](rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
- [ENIntervalNumber](../enintervalnumber.md): Deprecated. A number assigned to each 10-minute window shared between all devices participating in the protocol.

# keyData (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The temporary exposure key information.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSData * keyData;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

## See Also

### Exposure Criteria

- [transmissionRiskLevel](transmissionrisklevel.md): Deprecated. The risk of transmission associated with the person a key came from.
- [rollingPeriod](rollingperiod.md): Deprecated. The length of time that this key is valid.
- [rollingStartNumber](rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
- [ENIntervalNumber](../enintervalnumber.md): Deprecated. A number assigned to each 10-minute window shared between all devices participating in the protocol.
