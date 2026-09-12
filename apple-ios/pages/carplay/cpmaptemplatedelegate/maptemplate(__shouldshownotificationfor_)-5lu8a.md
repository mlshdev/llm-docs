> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:shouldshownotificationfor:)-5lu8a](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:shouldshownotificationfor:)-5lu8a)

# mapTemplate(\_:shouldShowNotificationFor:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, shouldShowNotificationFor navigationAlert: CPNavigationAlert) -> Bool
```

## Parameters

- `mapTemplate`: The current map template.
- `navigationAlert`: The navigation alert to display as a notification.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system should display the navigation alert as a notification; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying Notifications

- [mapTemplate(\_:shouldShowNotificationFor:)](maptemplate%28__shouldshownotificationfor_%29-4mnm1.md): Asks the delegate whether the system should display the maneuver as a notification when the app is in the background.
- [mapTemplate(\_:shouldUpdateNotificationFor:with:)](maptemplate%28__shouldupdatenotificationfor_with_%29.md): Asks the delegate whether the system should display the maneuver with updated travel estimates as a notification when the app is in the background.

# mapTemplate:shouldShowNotificationForNavigationAlert: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.

## Declaration

```objectivec
- (BOOL) mapTemplate:(CPMapTemplate *) mapTemplate shouldShowNotificationForNavigationAlert:(CPNavigationAlert *) navigationAlert;
```

## Parameters

- `mapTemplate`: The current map template.
- `navigationAlert`: The navigation alert to display as a notification.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system should display the navigation alert as a notification; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying Notifications

- [mapTemplate:shouldShowNotificationForManeuver:](maptemplate%28__shouldshownotificationfor_%29-4mnm1.md): Asks the delegate whether the system should display the maneuver as a notification when the app is in the background.
- [mapTemplate:shouldUpdateNotificationForManeuver:withTravelEstimates:](maptemplate%28__shouldupdatenotificationfor_with_%29.md): Asks the delegate whether the system should display the maneuver with updated travel estimates as a notification when the app is in the background.
