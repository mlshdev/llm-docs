> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/code/regionmonitoringresponsedelayed](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/code/regionmonitoringresponsedelayed)

# CLError.Code.regionMonitoringResponseDelayed (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates Core Location will deliver events but they may be delayed.

## Declaration

```swift
case regionMonitoringResponseDelayed
```

<a id="Discussion"></a>

## Discussion

The user information dictionary might contain an alternate region that you can monitor instead. Use [kCLErrorUserInfoAlternateRegionKey](../../kclerroruserinfoalternateregionkey.md) to retrieve the [CLRegion](../../clregion.md) object.

## See Also

### Getting region monitoring errors

- [CLError.Code.regionMonitoringDenied](regionmonitoringdenied.md): A constant that indicates the user denied access to the region monitoring service.
- [CLError.Code.regionMonitoringFailure](regionmonitoringfailure.md): A constant that indicates the location manager failed to monitor a registered region.
- [CLError.Code.regionMonitoringSetupDelayed](regionmonitoringsetupdelayed.md): A constant that indicates Core Location failed to initialize the region monitoring feature.

# kCLErrorRegionMonitoringResponseDelayed (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates Core Location will deliver events but they may be delayed.

## Declaration

```objectivec
kCLErrorRegionMonitoringResponseDelayed
```

<a id="Discussion"></a>

## Discussion

The user information dictionary might contain an alternate region that you can monitor instead. Use [kCLErrorUserInfoAlternateRegionKey](../../kclerroruserinfoalternateregionkey.md) to retrieve the [CLRegion](../../clregion.md) object.

## See Also

### Getting region monitoring errors

- [kCLErrorRegionMonitoringDenied](regionmonitoringdenied.md): A constant that indicates the user denied access to the region monitoring service.
- [kCLErrorRegionMonitoringFailure](regionmonitoringfailure.md): A constant that indicates the location manager failed to monitor a registered region.
- [kCLErrorRegionMonitoringSetupDelayed](regionmonitoringsetupdelayed.md): A constant that indicates Core Location failed to initialize the region monitoring feature.
