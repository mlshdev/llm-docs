> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene(_:diddisconnect:from:)](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene(_:diddisconnect:from:))

# templateApplicationDashboardScene(\_:didDisconnect:from:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

## Declaration

```swift
optional func templateApplicationDashboardScene(_ templateApplicationDashboardScene: CPTemplateApplicationDashboardScene, didDisconnect dashboardController: CPDashboardController, from window: UIWindow)
```

## Parameters

- `templateApplicationDashboardScene`: The scene disconnecting from the app.
- `dashboardController`: The controller that was managing this scene’s dashboard shortcut buttons.
- `window`: The window where your app was drawing its map content.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method after it disconnects your dashboard scene. You can use it to perform any cleanup.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationDashboardScene(\_:didConnect:to:)](templateapplicationdashboardscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.

# templateApplicationDashboardScene:didDisconnectDashboardController:fromWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

## Declaration

```objectivec
- (void) templateApplicationDashboardScene:(CPTemplateApplicationDashboardScene *) templateApplicationDashboardScene didDisconnectDashboardController:(CPDashboardController *) dashboardController fromWindow:(UIWindow *) window;
```

## Parameters

- `templateApplicationDashboardScene`: The scene disconnecting from the app.
- `dashboardController`: The controller that was managing this scene’s dashboard shortcut buttons.
- `window`: The window where your app was drawing its map content.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method after it disconnects your dashboard scene. You can use it to perform any cleanup.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationDashboardScene:didConnectDashboardController:toWindow:](templateapplicationdashboardscene%28__didconnect_to_%29.md): Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.
