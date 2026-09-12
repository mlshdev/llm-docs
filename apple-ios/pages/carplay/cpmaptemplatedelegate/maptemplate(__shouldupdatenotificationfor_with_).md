> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:shouldupdatenotificationfor:with:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:shouldupdatenotificationfor:with:))

# mapTemplate(\_:shouldUpdateNotificationFor:with:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Asks the delegate whether the system should display the maneuver with updated travel estimates as a notification when the app is in the background.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, shouldUpdateNotificationFor maneuver: CPManeuver, with travelEstimates: CPTravelEstimates) -> Bool
```

## Parameters

- `mapTemplate`: The current map template.
- `maneuver`: The current maneuver.
- `travelEstimates`: The updated travel estimates.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system should display the maneuver as a notification; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying Notifications

- [mapTemplate(\_:shouldShowNotificationFor:)](maptemplate%28__shouldshownotificationfor_%29-4mnm1.md): Asks the delegate whether the system should display the maneuver as a notification when the app is in the background.
- [mapTemplate(\_:shouldShowNotificationFor:)](maptemplate%28__shouldshownotificationfor_%29-5lu8a.md): Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.

# mapTemplate:shouldUpdateNotificationForManeuver:withTravelEstimates: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Asks the delegate whether the system should display the maneuver with updated travel estimates as a notification when the app is in the background.

## Declaration

```objectivec
- (BOOL) mapTemplate:(CPMapTemplate *) mapTemplate shouldUpdateNotificationForManeuver:(CPManeuver *) maneuver withTravelEstimates:(CPTravelEstimates *) travelEstimates;
```

## Parameters

- `mapTemplate`: The current map template.
- `maneuver`: The current maneuver.
- `travelEstimates`: The updated travel estimates.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system should display the maneuver as a notification; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying Notifications

- [mapTemplate:shouldShowNotificationForManeuver:](maptemplate%28__shouldshownotificationfor_%29-4mnm1.md): Asks the delegate whether the system should display the maneuver as a notification when the app is in the background.
- [mapTemplate:shouldShowNotificationForNavigationAlert:](maptemplate%28__shouldshownotificationfor_%29-5lu8a.md): Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.
