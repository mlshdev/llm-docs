> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession/role-swift.struct/windowexternaldisplay](https://developer.apple.com/documentation/uikit/uiscenesession/role-swift.struct/windowexternaldisplay)

# windowExternalDisplay (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A scene that displays noninteractive windows on an externally connected display.

> Use [windowExternalDisplayNonInteractive](windowexternaldisplaynoninteractive.md) for a scene that displays noninteractive windows on an externally connected screen. A scene that displays interactive windows uses [windowApplication](windowapplication.md), even if the windows display on an externally connected screen.

## Declaration

```swift
static let windowExternalDisplay: UISceneSession.Role
```

## See Also

### Determining scene roles

- [windowApplication](windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [windowExternalDisplayNonInteractive](windowexternaldisplaynoninteractive.md): A scene that displays noninteractive windows on an externally connected display.
- [carTemplateApplication](cartemplateapplication.md): A scene that displays interactive content on a CarPlay-enabled vehicle screen.
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](cptemplateapplicationdashboardscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Dashboard.
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](cptemplateapplicationinstrumentclusterscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Instruments Cluster.

# UIWindowSceneSessionRoleExternalDisplay (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS 13.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A scene that displays noninteractive windows on an externally connected display.

> Use [UIWindowSceneSessionRoleExternalDisplayNonInteractive](windowexternaldisplaynoninteractive.md) for a scene that displays noninteractive windows on an externally connected screen. A scene that displays interactive windows uses [UIWindowSceneSessionRoleApplication](windowapplication.md), even if the windows display on an externally connected screen.

## Declaration

```objectivec
extern UISceneSessionRole const UIWindowSceneSessionRoleExternalDisplay;
```

## See Also

### Determining scene roles

- [UIWindowSceneSessionRoleApplication](windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [UIWindowSceneSessionRoleExternalDisplayNonInteractive](windowexternaldisplaynoninteractive.md): A scene that displays noninteractive windows on an externally connected display.
- [UIWindowSceneSessionRoleAssistiveAccessApplication](windowassistiveaccessapplication.md)
- [CPTemplateApplicationSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenesessionroleapplication)
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenesessionroleapplication)
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenesessionroleapplication)
