> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscenedelegate/templateapplicationscene(_:didconnect:)

# templateApplicationScene(\_:didConnect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate that CarPlay added a main scene to your app.

## Declaration

```swift
optional func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didConnect interfaceController: CPInterfaceController)
```

## Parameters

- `templateApplicationScene`: The new scene that CarPlay creates.
- `interfaceController`: The object you use to manage the interface for the scene.

## Mentioned In

- [Building your app’s initial CarPlay interface](../building-your-apps-initial-carplay-interface.md)

<a id="discussion"></a>

## Discussion

CarPlay calls this method when it connects a new scene to a non-navigation app. This method is an entry point for your app, and you use it to prepare your app’s interface and any other content you need. In your implementation of this method, prepare the root template for your interface and install it using the object in the `interfaceController` parameter. CarPlay requires you to install a root template before this method returns.

> **Important**

> CarPlay calls this method for all app types except navigation apps. If you create a navigation app, implement the [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene(\_:didConnect:to:)](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene(\_:didDisconnectInterfaceController:)](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
- [templateApplicationScene(\_:didDisconnect:from:)](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.

# templateApplicationScene:didConnectInterfaceController: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate that CarPlay added a main scene to your app.

## Declaration

```objectivec
- (void) templateApplicationScene:(CPTemplateApplicationScene *) templateApplicationScene didConnectInterfaceController:(CPInterfaceController *) interfaceController;
```

## Parameters

- `templateApplicationScene`: The new scene that CarPlay creates.
- `interfaceController`: The object you use to manage the interface for the scene.

## Mentioned In

- [Building your app’s initial CarPlay interface](../building-your-apps-initial-carplay-interface.md)

<a id="discussion"></a>

## Discussion

CarPlay calls this method when it connects a new scene to a non-navigation app. This method is an entry point for your app, and you use it to prepare your app’s interface and any other content you need. In your implementation of this method, prepare the root template for your interface and install it using the object in the `interfaceController` parameter. CarPlay requires you to install a root template before this method returns.

> **Important**

> CarPlay calls this method for all app types except navigation apps. If you create a navigation app, implement the [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md) method instead of this one.

## See Also

### Responding to scene life-cycle events

- [templateApplicationScene:didConnectInterfaceController:toWindow:](templateapplicationscene%28__didconnect_to_%29.md): Tells the delegate that CarPlay added a main scene to your navigation app.
- [templateApplicationScene:didDisconnectInterfaceController:](templateapplicationscene%28__diddisconnectinterfacecontroller_%29.md): Tells the delegate about the removal of a CarPlay scene from your app.
- [templateApplicationScene:didDisconnectInterfaceController:fromWindow:](templateapplicationscene%28__diddisconnect_from_%29.md): Tells the delegate about the removal of a CarPlay scene from your navigation app.
