> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didconnect:)](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didconnect:))

# templateApplicationScene(\_:didConnect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate about the addition of a CarPlay scene to the app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didConnect interfaceController: CPInterfaceController)
```

## Parameters

- `templateApplicationScene`: The scene connecting to the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

CarPlay calls this method when it launches your app and connects the scene. Use the interface controller to present your user interface templates. You must set the scene’s root template before returning from this method.

> **Important**

>  Navigation apps must implement [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md) instead so they can access the window where they draw their map content.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
- [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.

# templateApplicationScene:didConnectInterfaceController: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate about the addition of a CarPlay scene to the app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didConnectInterfaceController:(CPInterfaceController *) interfaceController;
```

## Parameters

- `templateApplicationScene`: The scene connecting to the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

CarPlay calls this method when it launches your app and connects the scene. Use the interface controller to present your user interface templates. You must set the scene’s root template before returning from this method.

> **Important**

>  Navigation apps must implement [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md) instead so they can access the window where they draw their map content.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.
