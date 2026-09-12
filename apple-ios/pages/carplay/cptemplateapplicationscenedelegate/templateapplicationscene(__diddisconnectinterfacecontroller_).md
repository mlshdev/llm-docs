> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:diddisconnectinterfacecontroller:)](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:diddisconnectinterfacecontroller:))

# templateApplicationScene(\_:didDisconnectInterfaceController:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate when CarPlay removes a scene from the app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectInterfaceController interfaceController: CPInterfaceController)
```

## Parameters

- `templateApplicationScene`: The scene disconnecting from the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method after it disconnects the scene. You can use it to perform any cleanup.

> **Important**

>  CarPlay doesn’t call this method for navigation apps. You must implement [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md) instead.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.

# templateApplicationScene:didDisconnectInterfaceController: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate when CarPlay removes a scene from the app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didDisconnectInterfaceController:(CPInterfaceController *) interfaceController;
```

## Parameters

- `templateApplicationScene`: The scene disconnecting from the app.
- `interfaceController`: The interface controller for managing the user interface of this scene.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method after it disconnects the scene. You can use it to perform any cleanup.

> **Important**

>  CarPlay doesn’t call this method for navigation apps. You must implement [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md) instead.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md): Tells the delegate about the addition of a CarPlay scene to the app.
- [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes a scene from your navigation app.
