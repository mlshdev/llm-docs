> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clregionstate](https://developer.apple.com/documentation/corelocation/clregionstate)

# CLRegionState (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Constants that reflect the relationship of the current location to the region boundaries.

## Declaration

```swift
@frozen enum CLRegionState
```

## Topics

### Region States

- [CLRegionState.unknown](clregionstate/unknown.md): It is unknown whether the location is inside or outside of the region.
- [CLRegionState.inside](clregionstate/inside.md): The location is inside of the given region.
- [CLRegionState.outside](clregionstate/outside.md): The location is outside of the given region.

### Initializers

- [init(rawValue:)](clregionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving region-related updates

- [locationManager(\_:didEnterRegion:)](cllocationmanagerdelegate/locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager(\_:didExitRegion:)](cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager(\_:didDetermineState:for:)](cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager(\_:monitoringDidFailFor:withError:)](cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager(\_:didStartMonitoringFor:)](cllocationmanagerdelegate/locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.

# CLRegionState (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Constants that reflect the relationship of the current location to the region boundaries.

## Declaration

```objectivec
enum CLRegionState : NSInteger;
```

## Topics

### Region States

- [CLRegionStateUnknown](clregionstate/unknown.md): It is unknown whether the location is inside or outside of the region.
- [CLRegionStateInside](clregionstate/inside.md): The location is inside of the given region.
- [CLRegionStateOutside](clregionstate/outside.md): The location is outside of the given region.

## See Also

### Receiving region-related updates

- [locationManager:didEnterRegion:](cllocationmanagerdelegate/locationmanager%28__didenterregion_%29.md): Tells the delegate that the user entered the specified region.
- [locationManager:didExitRegion:](cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md): Tells the delegate that the user left the specified region.
- [locationManager:didDetermineState:forRegion:](cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md): Tells the delegate about the state of the specified region.
- [locationManager:monitoringDidFailForRegion:withError:](cllocationmanagerdelegate/locationmanager%28__monitoringdidfailfor_witherror_%29.md): Tells the delegate that a region monitoring error occurred.
- [locationManager:didStartMonitoringForRegion:](cllocationmanagerdelegate/locationmanager%28__didstartmonitoringfor_%29.md): Tells the delegate that a new region is being monitored.
