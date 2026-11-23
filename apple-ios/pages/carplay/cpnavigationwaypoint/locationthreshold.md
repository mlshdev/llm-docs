> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/locationthreshold

# locationThreshold (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.

## Declaration

```swift
var locationThreshold: Measurement<UnitLength>? { get }
```

## See Also

### Getting the waypoint location

- [centerPoint](centerpoint.md): centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.
- [entryPoints](entrypoints-obhb.md)
- [timeZone](timezone.md): The timezone for the waypoint.

# locationThreshold (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSMeasurement<NSUnitLength *> * locationThreshold;
```

## See Also

### Getting the waypoint location

- [centerPoint](centerpoint.md): centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.
- [timeZone](timezone.md): The timezone for the waypoint.
