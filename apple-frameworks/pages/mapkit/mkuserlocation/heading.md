> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkuserlocation/heading](https://developer.apple.com/documentation/mapkit/mkuserlocation/heading)

# heading (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+

The heading of the user’s location.

## Declaration

```swift
var heading: CLHeading? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the user’s location tracking mode isn’t [MKUserTrackingMode.followWithHeading](../mkusertrackingmode/followwithheading.md).

## See Also

### Determining the user’s location

- [location](location.md): The location of the device.
- [isUpdating](isupdating.md): A Boolean value that indicates whether the map view is updating the user’s location.

# heading (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+

The heading of the user’s location.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CLHeading * heading;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the user’s location tracking mode isn’t [MKUserTrackingModeFollowWithHeading](../mkusertrackingmode/followwithheading.md).

## See Also

### Determining the user’s location

- [location](location.md): The location of the device.
- [updating](isupdating.md): A Boolean value that indicates whether the map view is updating the user’s location.
