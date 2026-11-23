> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenedelegate/templateapplicationinstrumentclusterscene(_:diddisconnectinstrumentclustercontroller:)

# templateApplicationInstrumentClusterScene(\_:didDisconnectInstrumentClusterController:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate about the removal of an instrument cluster scene from your app.

## Declaration

```swift
optional func templateApplicationInstrumentClusterScene(_ templateApplicationInstrumentClusterScene: CPTemplateApplicationInstrumentClusterScene, didDisconnectInstrumentClusterController instrumentClusterController: CPInstrumentClusterController)
```

## Parameters

- `templateApplicationInstrumentClusterScene`: The scene that CarPlay disconnected from your app.

<a id="discussion"></a>

## Discussion

When CarPlay disconnects an instrument cluster scene from your app, it calls this method so you can perform any app-specific cleanup.

## See Also

### Responding to the scene life-cycle changes

- [templateApplicationInstrumentClusterScene(\_:didConnect:)](templateapplicationinstrumentclusterscene%28__didconnect_%29.md): Tells the delegate that CarPlay added an instrument cluster scene to your app.

# templateApplicationInstrumentClusterScene:didDisconnectInstrumentClusterController: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate about the removal of an instrument cluster scene from your app.

## Declaration

```objectivec
- (void) templateApplicationInstrumentClusterScene:(CPTemplateApplicationInstrumentClusterScene *) templateApplicationInstrumentClusterScene didDisconnectInstrumentClusterController:(CPInstrumentClusterController *) instrumentClusterController;
```

## Parameters

- `templateApplicationInstrumentClusterScene`: The scene that CarPlay disconnected from your app.

<a id="discussion"></a>

## Discussion

When CarPlay disconnects an instrument cluster scene from your app, it calls this method so you can perform any app-specific cleanup.

## See Also

### Responding to the scene life-cycle changes

- [templateApplicationInstrumentClusterScene:didConnectInstrumentClusterController:](templateapplicationinstrumentclusterscene%28__didconnect_%29.md): Tells the delegate that CarPlay added an instrument cluster scene to your app.
