> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enintervalnumber](https://developer.apple.com/documentation/exposurenotification/enintervalnumber)

# ENIntervalNumber (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A number assigned to each 10-minute window shared between all devices participating in the protocol.

> No longer supported.

## Declaration

```swift
typealias ENIntervalNumber = UInt32
```

<a id="Discussion"></a>

## Discussion

These shared intervals of time derive from timestamps in UNIX Epoch Time.

`ENIntervalNumber(Timestamp) ← Timestamp / (60×10)`

## See Also

### Exposure Criteria

- [transmissionRiskLevel](entemporaryexposurekey/transmissionrisklevel.md): Deprecated. The risk of transmission associated with the person a key came from.
- [rollingPeriod](entemporaryexposurekey/rollingperiod.md): Deprecated. The length of time that this key is valid.
- [keyData](entemporaryexposurekey/keydata.md): Deprecated. The temporary exposure key information.
- [rollingStartNumber](entemporaryexposurekey/rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.

# ENIntervalNumber (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A number assigned to each 10-minute window shared between all devices participating in the protocol.

> No longer supported.

## Declaration

```objectivec
typedef uint32_t ENIntervalNumber;
```

<a id="Discussion"></a>

## Discussion

These shared intervals of time derive from timestamps in UNIX Epoch Time.

`ENIntervalNumber(Timestamp) ← Timestamp / (60×10)`

## See Also

### Exposure Criteria

- [transmissionRiskLevel](entemporaryexposurekey/transmissionrisklevel.md): Deprecated. The risk of transmission associated with the person a key came from.
- [rollingPeriod](entemporaryexposurekey/rollingperiod.md): Deprecated. The length of time that this key is valid.
- [keyData](entemporaryexposurekey/keydata.md): Deprecated. The temporary exposure key information.
- [rollingStartNumber](entemporaryexposurekey/rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
