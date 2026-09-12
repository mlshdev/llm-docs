> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/regionmonitoringfailure](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/regionmonitoringfailure)

# regionMonitoringFailure

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the location manager failed to monitor a registered region.

## Declaration

```swift
static var regionMonitoringFailure: CLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Monitoring can fail if the app exceeds the maximum number of regions that it can monitor simultaneously. Monitoring can also fail if the region’s radius distance is too large.

## See Also

### Getting region monitoring errors

- [regionMonitoringDenied](regionmonitoringdenied.md): A constant that indicates the user denied access to the region monitoring service.
- [regionMonitoringSetupDelayed](regionmonitoringsetupdelayed.md): A constant that indicates Core Location couldn’t initialize the region monitoring feature immediately.
- [regionMonitoringResponseDelayed](regionmonitoringresponsedelayed.md): A constant that indicates Core Location will deliver events but they may be delayed.
