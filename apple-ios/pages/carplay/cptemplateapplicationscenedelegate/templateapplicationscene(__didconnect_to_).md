> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didconnect:to:)

# templateApplicationScene(\_:didConnect:to:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that CarPlay added a main scene to your navigation app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didConnect interfaceController: CPInterfaceController, to window: CPWindow)
```

## Parameters

- `templateApplicationScene`: The new scene that CarPlay creates.
- `interfaceController`: The object you use to manage the interface for the scene.
- `window`: The window you use to draw your app’s map content.

## Mentioned In

- [Building your app’s initial CarPlay interface](../building-your-apps-initial-carplay-interface.md)

<a id="discussion"></a>

## Discussion

CarPlay calls this method when it launches your navigation app and connects a scene. This method is the entry point for your app, and you use it to prepare your app and configure its interface. In your implementation, set the root view controller of the provided `window` object to the view controller object you use to display your custom map content. In addition, set the root template of the provided `interfaceController` object to an instance of the [CPMapTemplate](../cpmaptemplate.md) type. CarPlay requires you to install the root template and set the window’s view controller before this method returns.

> **Important**

> CarPlay calls this method exclusively for navigation apps. If you create a different type of app, implement the [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene(\_:didConnect:)](templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
- [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.

# templateApplicationScene:didConnectInterfaceController:toWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that CarPlay added a main scene to your navigation app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didConnectInterfaceController:(CPInterfaceController *) interfaceController toWindow:(CPWindow *) window;
```

## Parameters

- `templateApplicationScene`: The new scene that CarPlay creates.
- `interfaceController`: The object you use to manage the interface for the scene.
- `window`: The window you use to draw your app’s map content.

## Mentioned In

- [Building your app’s initial CarPlay interface](../building-your-apps-initial-carplay-interface.md)

<a id="discussion"></a>

## Discussion

CarPlay calls this method when it launches your navigation app and connects a scene. This method is the entry point for your app, and you use it to prepare your app and configure its interface. In your implementation, set the root view controller of the provided `window` object to the view controller object you use to display your custom map content. In addition, set the root template of the provided `interfaceController` object to an instance of the [CPMapTemplate](../cpmaptemplate.md) type. CarPlay requires you to install the root template and set the window’s view controller before this method returns.

> **Important**

> CarPlay calls this method exclusively for navigation apps. If you create a different type of app, implement the [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene:didConnectInterfaceController:](templateapplicationscene%28__didconnect_%29.md): Tells the delegate that CarPlay added a main scene to your app.
- [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.
