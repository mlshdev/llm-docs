> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didselect:)-5rf2h

# templateApplicationScene(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells your navigation app when someone selects a maneuver while your app is in the background.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didSelect maneuver: CPManeuver)
```

## Parameters

- `templateApplicationScene`: The active scene.
- `maneuver`: The selected maneuver.

<a id="discussion"></a>

## Discussion

If your navigation app posts a maneuver while in the background, CarPlay displays a notification banner on the vehicle display. If the person taps the banner, CarPlay brings your app to the foreground and calls this method.

## See Also

### Responding to interactions

- [templateApplicationScene(\_:didSelect:)](templateapplicationscene%28__didselect_%29-7bie0.md): Tells your navigation app that someone selected a navigation alert while your app was in the background.

# templateApplicationScene:didSelectManeuver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells your navigation app when someone selects a maneuver while your app is in the background.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didSelectManeuver:(CPManeuver *) maneuver;
```

## Parameters

- `templateApplicationScene`: The active scene.
- `maneuver`: The selected maneuver.

<a id="discussion"></a>

## Discussion

If your navigation app posts a maneuver while in the background, CarPlay displays a notification banner on the vehicle display. If the person taps the banner, CarPlay brings your app to the foreground and calls this method.

## See Also

### Responding to interactions

- [templateApplicationScene:didSelectNavigationAlert:](templateapplicationscene%28__didselect_%29-7bie0.md): Tells your navigation app that someone selected a navigation alert while your app was in the background.
