> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/timezone

# timeZone (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The timezone for the waypoint.

## Declaration

```swift
var timeZone: TimeZone? { get }
```

## See Also

### Getting the waypoint location

- [centerPoint](centerpoint.md): centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.
- [entryPoints](entrypoints-obhb.md)
- [locationThreshold](locationthreshold.md): locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.

# timeZone (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The timezone for the waypoint.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSTimeZone * timeZone;
```

## See Also

### Getting the waypoint location

- [centerPoint](centerpoint.md): centerPoint is a CPLocationCoordinate3D representing the primary coordinate location of the waypoint.
- [locationThreshold](locationthreshold.md): locationThreshold is the maximum distance in meters from the centerPoint used to determine if a destination is valid.
