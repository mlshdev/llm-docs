> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didselect:)-7bie0](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didselect:)-7bie0)

# templateApplicationScene(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate when the user selects a navigation alert while the app is in the background.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didSelect navigationAlert: CPNavigationAlert)
```

## Parameters

- `templateApplicationScene`: The active scene.
- `navigationAlert`: The selected navigation alert.

<a id="Discussion"></a>

## Discussion

If your navigation app posts a navigation alert while in the background, CarPlay displays a notification banner to the user. If the user taps the banner, CarPlay brings your navigation app to the foreground and calls this method.

## See Also

### Responding to User Actions

- [templateApplicationScene(\_:didSelect:)](templateapplicationscene%28__didselect_%29-5rf2h.md): Tells the delegate when the user selects a maneuver while the app is in the background.

# templateApplicationScene:didSelectNavigationAlert: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate when the user selects a navigation alert while the app is in the background.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didSelectNavigationAlert:(CPNavigationAlert *) navigationAlert;
```

## Parameters

- `templateApplicationScene`: The active scene.
- `navigationAlert`: The selected navigation alert.

<a id="Discussion"></a>

## Discussion

If your navigation app posts a navigation alert while in the background, CarPlay displays a notification banner to the user. If the user taps the banner, CarPlay brings your navigation app to the foreground and calls this method.

## See Also

### Responding to User Actions

- [templateApplicationScene:didSelectManeuver:](templateapplicationscene%28__didselect_%29-5rf2h.md): Tells the delegate when the user selects a maneuver while the app is in the background.
