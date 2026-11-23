> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:diddisconnect:from:)

# templateApplicationScene(\_:didDisconnect:from:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate about the removal of a CarPlay scene from your navigation app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnect interfaceController: CPInterfaceController, from window: CPWindow)
```

## Parameters

- `templateApplicationScene`: The scene that CarPlay disconnects from your app.
- `interfaceController`: The controller you use to manage the interface for the scene.
- `window`: The window you use to draw your app’s map content.

<a id="discussion"></a>

## Discussion

When CarPlay disconnects a scene from your navigation app, it calls this method so you can perform any app-specific cleanup.

> **Important**

> CarPlay calls this method exclusively for navigation apps. If you create a different type of app, implement the [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.

# templateApplicationScene:didDisconnectInterfaceController:fromWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate about the removal of a CarPlay scene from your navigation app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didDisconnectInterfaceController:(CPInterfaceController *) interfaceController fromWindow:(CPWindow *) window;
```

## Parameters

- `templateApplicationScene`: The scene that CarPlay disconnects from your app.
- `interfaceController`: The controller you use to manage the interface for the scene.
- `window`: The window you use to draw your app’s map content.

<a id="discussion"></a>

## Discussion

When CarPlay disconnects a scene from your navigation app, it calls this method so you can perform any app-specific cleanup.

> **Important**

> CarPlay calls this method exclusively for navigation apps. If you create a different type of app, implement the [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
