> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon/rssi](https://developer.apple.com/documentation/corelocation/clbeacon/rssi)

# rssi (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The received signal strength of the beacon, measured in decibels.

## Declaration

```swift
var rssi: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value is the average signal strength of the samples received since Core Location last reported the range of the beacon to your app.

Use this value for calibrating beacon transmission power.

## See Also

### Determining the distance to the beacon

- [proximity](proximity.md): The relative distance to the beacon.
- [CLProximity](../clproximity.md): Constants that reflect the relative distance to a beacon.
- [accuracy](accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.

# rssi (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The received signal strength of the beacon, measured in decibels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger rssi;
```

<a id="Discussion"></a>

## Discussion

This value is the average signal strength of the samples received since Core Location last reported the range of the beacon to your app.

Use this value for calibrating beacon transmission power.

## See Also

### Determining the distance to the beacon

- [proximity](proximity.md): The relative distance to the beacon.
- [CLProximity](../clproximity.md): Constants that reflect the relative distance to a beacon.
- [accuracy](accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
