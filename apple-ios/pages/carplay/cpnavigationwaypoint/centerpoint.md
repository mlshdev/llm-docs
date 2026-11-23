> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/centerpoint

# centerPoint (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.

## Declaration

```swift
var centerPoint: CPLocationCoordinate3D { get }
```

## See Also

### Getting the waypoint location

- [entryPoints](entrypoints-obhb.md)
- [locationThreshold](locationthreshold.md): locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.
- [timeZone](timezone.md): The timezone for the waypoint.

# centerPoint (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.

## Declaration

```objectivec
@property (nonatomic, readonly) CPLocationCoordinate3D centerPoint;
```

## See Also

### Getting the waypoint location

- [locationThreshold](locationthreshold.md): locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.
- [timeZone](timezone.md): The timezone for the waypoint.
