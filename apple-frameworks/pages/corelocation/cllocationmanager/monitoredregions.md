> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/monitoredregions](https://developer.apple.com/documentation/corelocation/cllocationmanager/monitoredregions)

# monitoredRegions (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The set of shared regions monitored by all location-manager objects.

## Declaration

```swift
var monitoredRegions: Set<CLRegion> { get }
```

<a id="Discussion"></a>

## Discussion

You cannot add regions to this property directly. Instead, you must register regions by calling the [startMonitoring(for:)](startmonitoring%28for_%29.md) method. The regions in this property are shared by all instances of the [CLLocationManager](../cllocationmanager.md) class in your app.

The objects in this set may not necessarily be the same objects you specified at registration time. Only the region data itself is maintained by the system. Therefore, the only way to uniquely identify a registered region is using its [identifier](../clregion/identifier.md) property.

The location manager persists region data between launches of your app. If your app is terminated and then relaunched, the contents of this property are repopulated with region objects that contain the previously registered data.

In a compatible iPad or iPhone app running in visionOS, the property contains an empty set.

## See Also

### Running the region-monitoring service

- [maximumRegionMonitoringDistance](maximumregionmonitoringdistance.md): The largest boundary distance that can be assigned to a region.

# monitoredRegions (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The set of shared regions monitored by all location-manager objects.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<__kindof CLRegion *> * monitoredRegions;
```

<a id="Discussion"></a>

## Discussion

You cannot add regions to this property directly. Instead, you must register regions by calling the [startMonitoringForRegion:](startmonitoring%28for_%29.md) method. The regions in this property are shared by all instances of the [CLLocationManager](../cllocationmanager.md) class in your app.

The objects in this set may not necessarily be the same objects you specified at registration time. Only the region data itself is maintained by the system. Therefore, the only way to uniquely identify a registered region is using its [identifier](../clregion/identifier.md) property.

The location manager persists region data between launches of your app. If your app is terminated and then relaunched, the contents of this property are repopulated with region objects that contain the previously registered data.

In a compatible iPad or iPhone app running in visionOS, the property contains an empty set.

## See Also

### Running the region-monitoring service

- [maximumRegionMonitoringDistance](maximumregionmonitoringdistance.md): The largest boundary distance that can be assigned to a region.
