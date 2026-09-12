> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:diddisconnect:from:)](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:diddisconnect:from:))

# templateApplicationScene(\_:didDisconnect:from:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate when CarPlay removes a scene from your navigation app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnect interfaceController: CPInterfaceController, from window: CPWindow)
```

## Parameters

- `templateApplicationScene`: The scene disconnecting from the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.
- `window`: The window where the app draws the map content.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method after it disconnects the scene. You can use it to perform any cleanup.

> **Important**

>  CarPlay calls this method exclusively for navigation apps. All other categories of apps must implement [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md) instead.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.

# templateApplicationScene:didDisconnectInterfaceController:fromWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate when CarPlay removes a scene from your navigation app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didDisconnectInterfaceController:(CPInterfaceController *) interfaceController fromWindow:(CPWindow *) window;
```

## Parameters

- `templateApplicationScene`: The scene disconnecting from the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.
- `window`: The window where the app draws the map content.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method after it disconnects the scene. You can use it to perform any cleanup.

> **Important**

>  CarPlay calls this method exclusively for navigation apps. All other categories of apps must implement [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md) instead.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate when CarPlay removes a scene from the app.
