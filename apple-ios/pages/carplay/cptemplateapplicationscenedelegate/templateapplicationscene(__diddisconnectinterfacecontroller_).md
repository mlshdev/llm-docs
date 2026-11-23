> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:diddisconnectinterfacecontroller:)

# templateApplicationScene(\_:didDisconnectInterfaceController:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate about the removal of a CarPlay scene from your app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectInterfaceController interfaceController: CPInterfaceController)
```

## Parameters

- `templateApplicationScene`: The scene that CarPlay disconnects from your app.
- `interfaceController`: The controller you use to manage the interface for the scene.

<a id="discussion"></a>

## Discussion

When CarPlay disconnects a scene from your app, it calls this method so you can perform any app-specific cleanup.

> **Important**

> CarPlay calls this method for all app types except navigation apps. If you create a navigation app, implement the [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.

# templateApplicationScene:didDisconnectInterfaceController: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate about the removal of a CarPlay scene from your app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didDisconnectInterfaceController:(CPInterfaceController *) interfaceController;
```

## Parameters

- `templateApplicationScene`: The scene that CarPlay disconnects from your app.
- `interfaceController`: The controller you use to manage the interface for the scene.

<a id="discussion"></a>

## Discussion

When CarPlay disconnects a scene from your app, it calls this method so you can perform any app-specific cleanup.

> **Important**

> CarPlay calls this method for all app types except navigation apps. If you create a navigation app, implement the [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.
