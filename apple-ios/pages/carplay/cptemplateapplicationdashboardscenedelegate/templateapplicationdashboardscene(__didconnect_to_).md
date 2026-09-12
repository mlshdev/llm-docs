> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene(_:didconnect:to:)](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenedelegate/templateapplicationdashboardscene(_:didconnect:to:))

# templateApplicationDashboardScene(\_:didConnect:to:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.

## Declaration

```swift
optional func templateApplicationDashboardScene(_ templateApplicationDashboardScene: CPTemplateApplicationDashboardScene, didConnect dashboardController: CPDashboardController, to window: UIWindow)
```

## Parameters

- `templateApplicationDashboardScene`: The scene connecting to the app.
- `dashboardController`: The controller that manages the scene’s dashboard shortcut buttons.
- `window`: The window where your app draws its map content.

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

CarPlay calls this method when it connects a dashboard scene to your navigation app. Create an instance of your map-drawing view controller and assign it as the window’s root view controller. Use the dashboard controller to provide up to two shortcut buttons to display instead of your map content when there’s no active navigation session.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationDashboardScene(\_:didDisconnect:from:)](templateapplicationdashboardscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes the dashboard scene from your navigation app.

# templateApplicationDashboardScene:didConnectDashboardController:toWindow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

Tells the delegate about the addition of a CarPlay Dashboard scene to your navigation app.

## Declaration

```objectivec
- (void) templateApplicationDashboardScene:(CPTemplateApplicationDashboardScene *) templateApplicationDashboardScene didConnectDashboardController:(CPDashboardController *) dashboardController toWindow:(UIWindow *) window;
```

## Parameters

- `templateApplicationDashboardScene`: The scene connecting to the app.
- `dashboardController`: The controller that manages the scene’s dashboard shortcut buttons.
- `window`: The window where your app draws its map content.

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

CarPlay calls this method when it connects a dashboard scene to your navigation app. Create an instance of your map-drawing view controller and assign it as the window’s root view controller. Use the dashboard controller to provide up to two shortcut buttons to display instead of your map content when there’s no active navigation session.

## See Also

### Responding to the Scene Life Cycle

- [templateApplicationDashboardScene:didDisconnectDashboardController:fromWindow:](templateapplicationdashboardscene%28__diddisconnect_from_%29.md): Tells the delegate when CarPlay removes the dashboard scene from your navigation app.
