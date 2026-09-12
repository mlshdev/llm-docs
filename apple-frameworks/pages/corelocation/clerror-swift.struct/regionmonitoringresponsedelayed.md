> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/regionmonitoringresponsedelayed](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/regionmonitoringresponsedelayed)

# regionMonitoringResponseDelayed

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates Core Location will deliver events but they may be delayed.

## Declaration

```swift
static var regionMonitoringResponseDelayed: CLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The user information dictionary might contain an alternate region that you can monitor instead. Use the [alternateRegion](alternateregion.md) property to retrieve the [CLRegion](../clregion.md) object.

## See Also

### Getting region monitoring errors

- [regionMonitoringDenied](regionmonitoringdenied.md): A constant that indicates the user denied access to the region monitoring service.
- [regionMonitoringFailure](regionmonitoringfailure.md): A constant that indicates the location manager failed to monitor a registered region.
- [regionMonitoringSetupDelayed](regionmonitoringsetupdelayed.md): A constant that indicates Core Location couldn’t initialize the region monitoring feature immediately.
