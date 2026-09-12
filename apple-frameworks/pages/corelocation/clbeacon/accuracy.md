> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon/accuracy](https://developer.apple.com/documentation/corelocation/clbeacon/accuracy)

# accuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The accuracy of the proximity value, measured in meters from the beacon.

## Declaration

```swift
var accuracy: CLLocationAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

A beacon with a smaller value for accuracy is typically nearer than a beacon with a larger accuracy value.

Use this property to differentiate between beacons with the same proximity value. Do not use it to identify a precise location for the beacon. Accuracy values may fluctuate due to RF interference.

A negative value in this property signifies that the actual accuracy could not be determined.

## See Also

### Determining the distance to the beacon

- [proximity](proximity.md): The relative distance to the beacon.
- [CLProximity](../clproximity.md): Constants that reflect the relative distance to a beacon.
- [rssi](rssi.md): The received signal strength of the beacon, measured in decibels.

# accuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The accuracy of the proximity value, measured in meters from the beacon.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationAccuracy accuracy;
```

<a id="Discussion"></a>

## Discussion

A beacon with a smaller value for accuracy is typically nearer than a beacon with a larger accuracy value.

Use this property to differentiate between beacons with the same proximity value. Do not use it to identify a precise location for the beacon. Accuracy values may fluctuate due to RF interference.

A negative value in this property signifies that the actual accuracy could not be determined.

## See Also

### Determining the distance to the beacon

- [proximity](proximity.md): The relative distance to the beacon.
- [CLProximity](../clproximity.md): Constants that reflect the relative distance to a beacon.
- [rssi](rssi.md): The received signal strength of the beacon, measured in decibels.
