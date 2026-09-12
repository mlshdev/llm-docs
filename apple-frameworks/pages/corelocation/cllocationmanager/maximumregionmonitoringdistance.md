> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/maximumregionmonitoringdistance](https://developer.apple.com/documentation/corelocation/cllocationmanager/maximumregionmonitoringdistance)

# maximumRegionMonitoringDistance (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The largest boundary distance that can be assigned to a region.

## Declaration

```swift
var maximumRegionMonitoringDistance: CLLocationDistance { get }
```

<a id="Discussion"></a>

## Discussion

This property defines the largest boundary distance allowed from a region’s center point. Attempting to monitor a region with a distance larger than this value causes the location manager to send a [CLError.Code.regionMonitoringFailure](../clerror-swift.struct/code/regionmonitoringfailure.md) error to the delegate.

If region monitoring is unavailable or not supported, the value in this property is `-1`.

## See Also

### Running the region-monitoring service

- [monitoredRegions](monitoredregions.md): The set of shared regions monitored by all location-manager objects.

# maximumRegionMonitoringDistance (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The largest boundary distance that can be assigned to a region.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDistance maximumRegionMonitoringDistance;
```

<a id="Discussion"></a>

## Discussion

This property defines the largest boundary distance allowed from a region’s center point. Attempting to monitor a region with a distance larger than this value causes the location manager to send a [kCLErrorRegionMonitoringFailure](../clerror-swift.struct/code/regionmonitoringfailure.md) error to the delegate.

If region monitoring is unavailable or not supported, the value in this property is `-1`.

## See Also

### Running the region-monitoring service

- [monitoredRegions](monitoredregions.md): The set of shared regions monitored by all location-manager objects.
