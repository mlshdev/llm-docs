> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon/proximity](https://developer.apple.com/documentation/corelocation/clbeacon/proximity)

# proximity (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The relative distance to the beacon.

## Declaration

```swift
var proximity: CLProximity { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away.

## See Also

### Determining the distance to the beacon

- [CLProximity](../clproximity.md): Constants that reflect the relative distance to a beacon.
- [accuracy](accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
- [rssi](rssi.md): The received signal strength of the beacon, measured in decibels.

# proximity (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The relative distance to the beacon.

## Declaration

```objectivec
@property (nonatomic, readonly) CLProximity proximity;
```

<a id="Discussion"></a>

## Discussion

The value in this property gives a general sense of the relative distance to the beacon. Use it to quickly identify beacons that are nearer to the user rather than farther away.

## See Also

### Determining the distance to the beacon

- [CLProximity](../clproximity.md): Constants that reflect the relative distance to a beacon.
- [accuracy](accuracy.md): The accuracy of the proximity value, measured in meters from the beacon.
- [rssi](rssi.md): The received signal strength of the beacon, measured in decibels.
