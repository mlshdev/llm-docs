> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:diddismiss:dismissalcontext:)

# mapTemplate(\_:didDismiss:dismissalContext:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system dismissed the navigation alert.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didDismiss navigationAlert: CPNavigationAlert, dismissalContext: CPNavigationAlert.DismissalContext)
```

## Parameters

- `mapTemplate`: The current map template.
- `navigationAlert`: The dismissed navigation alert.
- `dismissalContext`: The reason for dismissing the navigation alert.

## See Also

### Handling navigation alerts

- [mapTemplate(\_:shouldShowNotificationFor:)](maptemplate%28__shouldshownotificationfor_%29-5lu8a.md): Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.
- [mapTemplate(\_:willShow:)](maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate(\_:didShow:)](maptemplate%28__didshow_%29.md): Tells the delegate that the system showed the navigation alert.
- [mapTemplate(\_:willDismiss:dismissalContext:)](maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [CPNavigationAlert.DismissalContext](../cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.

# mapTemplate:didDismissNavigationAlert:dismissalContext: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system dismissed the navigation alert.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didDismissNavigationAlert:(CPNavigationAlert *) navigationAlert dismissalContext:(CPNavigationAlertDismissalContext) dismissalContext;
```

## Parameters

- `mapTemplate`: The current map template.
- `navigationAlert`: The dismissed navigation alert.
- `dismissalContext`: The reason for dismissing the navigation alert.

## See Also

### Handling navigation alerts

- [mapTemplate:shouldShowNotificationForNavigationAlert:](maptemplate%28__shouldshownotificationfor_%29-5lu8a.md): Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.
- [mapTemplate:willShowNavigationAlert:](maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate:didShowNavigationAlert:](maptemplate%28__didshow_%29.md): Tells the delegate that the system showed the navigation alert.
- [mapTemplate:willDismissNavigationAlert:dismissalContext:](maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [CPNavigationAlertDismissalContext](../cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.
