> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didselect:)-5rf2h](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didselect:)-5rf2h)

# templateApplicationScene(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate when the user selects a maneuver while the app is in the background.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didSelect maneuver: CPManeuver)
```

## Parameters

- `templateApplicationScene`: The active scene.
- `maneuver`: The selected maneuver.

<a id="Discussion"></a>

## Discussion

If your navigation app posts a maneuver while in the background, CarPlay displays a notification banner to the user. If the user taps the banner, CarPlay brings your navigation app to the foreground and calls this method.

## See Also

### Responding to User Actions

- [templateApplicationScene(\_:didSelect:)](templateapplicationscene%28__didselect_%29-7bie0.md): Tells the delegate when the user selects a navigation alert while the app is in the background.

# templateApplicationScene:didSelectManeuver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate when the user selects a maneuver while the app is in the background.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didSelectManeuver:(CPManeuver *) maneuver;
```

## Parameters

- `templateApplicationScene`: The active scene.
- `maneuver`: The selected maneuver.

<a id="Discussion"></a>

## Discussion

If your navigation app posts a maneuver while in the background, CarPlay displays a notification banner to the user. If the user taps the banner, CarPlay brings your navigation app to the foreground and calls this method.

## See Also

### Responding to User Actions

- [templateApplicationScene:didSelectNavigationAlert:](templateapplicationscene%28__didselect_%29-7bie0.md): Tells the delegate when the user selects a navigation alert while the app is in the background.
