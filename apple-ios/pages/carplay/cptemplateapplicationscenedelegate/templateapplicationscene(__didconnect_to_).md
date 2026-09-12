> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didconnect:to:)](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didconnect:to:))

# templateApplicationScene(\_:didConnect:to:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate about the addition of a CarPlay scene to your navigation app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didConnect interfaceController: CPInterfaceController, to window: CPWindow)
```

## Parameters

- `templateApplicationScene`: The scene connecting to the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.
- `window`: The window where the app draws the map content.

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

CarPlay calls this method when it launches your navigation app and connects the scene. Create an instance of your map-drawing view controller and assign it to the window’s root view controller. Use the interface controller to present your user interface templates. You must set both the window’s root view controller and the scene’s root template before returning from this method.

> **Important**

>  CarPlay calls this method exclusively for navigation apps. All other categories of apps must implement [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md) instead.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
- [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.

# templateApplicationScene:didConnectInterfaceController:toWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate about the addition of a CarPlay scene to your navigation app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didConnectInterfaceController:(CPInterfaceController *) interfaceController toWindow:(CPWindow *) window;
```

## Parameters

- `templateApplicationScene`: The scene connecting to the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.
- `window`: The window where the app draws the map content.

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

CarPlay calls this method when it launches your navigation app and connects the scene. Create an instance of your map-drawing view controller and assign it to the window’s root view controller. Use the interface controller to present your user interface templates. You must set both the window’s root view controller and the scene’s root template before returning from this method.

> **Important**

>  CarPlay calls this method exclusively for navigation apps. All other categories of apps must implement [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md) instead.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.
