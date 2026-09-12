> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didshow:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didshow:))

# mapTemplate(\_:didShow:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system showed the navigation alert.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didShow navigationAlert: CPNavigationAlert)
```

## Parameters

- `mapTemplate`: The current map template.
- `navigationAlert`: The navigation alert presented by the system.

## See Also

### Handling Navigation Alerts

- [mapTemplate(\_:willShow:)](maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate(\_:willDismiss:dismissalContext:)](maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [mapTemplate(\_:didDismiss:dismissalContext:)](maptemplate%28__diddismiss_dismissalcontext_%29.md): Tells the delegate that the system dismissed the navigation alert.
- [CPNavigationAlert.DismissalContext](../cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.

# mapTemplate:didShowNavigationAlert: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system showed the navigation alert.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didShowNavigationAlert:(CPNavigationAlert *) navigationAlert;
```

## Parameters

- `mapTemplate`: The current map template.
- `navigationAlert`: The navigation alert presented by the system.

## See Also

### Handling Navigation Alerts

- [mapTemplate:willShowNavigationAlert:](maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate:willDismissNavigationAlert:dismissalContext:](maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [mapTemplate:didDismissNavigationAlert:dismissalContext:](maptemplate%28__diddismiss_dismissalcontext_%29.md): Tells the delegate that the system dismissed the navigation alert.
- [CPNavigationAlertDismissalContext](../cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.
