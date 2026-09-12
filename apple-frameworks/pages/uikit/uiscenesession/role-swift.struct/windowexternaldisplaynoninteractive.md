> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession/role-swift.struct/windowexternaldisplaynoninteractive](https://developer.apple.com/documentation/uikit/uiscenesession/role-swift.struct/windowexternaldisplaynoninteractive)

# windowExternalDisplayNonInteractive (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A scene that displays noninteractive windows on an externally connected display.

## Declaration

```swift
static let windowExternalDisplayNonInteractive: UISceneSession.Role
```

## Mentioned In

- [Presenting content on a connected display](../../presenting-content-on-a-connected-display.md)
- [Building a desktop-class iPad app](../../building-a-desktop-class-ipad-app.md)
- [Transitioning to the UIKit scene-based life cycle](../../transitioning-to-the-uikit-scene-based-life-cycle.md)

## See Also

### Determining scene roles

- [windowApplication](windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [windowExternalDisplay](windowexternaldisplay.md): Deprecated. A scene that displays noninteractive windows on an externally connected display.
- [carTemplateApplication](cartemplateapplication.md): A scene that displays interactive content on a CarPlay-enabled vehicle screen.
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](cptemplateapplicationdashboardscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Dashboard.
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](cptemplateapplicationinstrumentclusterscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Instruments Cluster.

# UIWindowSceneSessionRoleExternalDisplayNonInteractive (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A scene that displays noninteractive windows on an externally connected display.

## Declaration

```objectivec
extern UISceneSessionRole const UIWindowSceneSessionRoleExternalDisplayNonInteractive;
```

## Mentioned In

- [Presenting content on a connected display](../../presenting-content-on-a-connected-display.md)
- [Building a desktop-class iPad app](../../building-a-desktop-class-ipad-app.md)
- [Transitioning to the UIKit scene-based life cycle](../../transitioning-to-the-uikit-scene-based-life-cycle.md)

## See Also

### Determining scene roles

- [UIWindowSceneSessionRoleApplication](windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [UIWindowSceneSessionRoleExternalDisplay](windowexternaldisplay.md): Deprecated. A scene that displays noninteractive windows on an externally connected display.
- [UIWindowSceneSessionRoleAssistiveAccessApplication](windowassistiveaccessapplication.md)
- [CPTemplateApplicationSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenesessionroleapplication)
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenesessionroleapplication)
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenesessionroleapplication)
