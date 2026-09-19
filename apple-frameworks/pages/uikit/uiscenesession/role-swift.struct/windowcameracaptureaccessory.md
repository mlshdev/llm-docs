> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiscenesession/role-swift.struct/windowcameracaptureaccessory

# windowCameraCaptureAccessory (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A session role for scenes that present content during camera capture.

## Declaration

```swift
static let windowCameraCaptureAccessory: UISceneSession.Role
```

<a id="discussion"></a>

## Discussion

The system assigns this role automatically to scenes created from a camera capture scene accessory registration. Clients do not set it directly; it is provided so a scene’s purpose can be identified at runtime.

## See Also

### Determining scene roles

- [windowApplication](windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [windowAssistiveAccessApplication](windowassistiveaccessapplication.md)
- [windowExternalDisplay](windowexternaldisplay.md): Deprecated. A scene that displays noninteractive windows on an externally connected display.
- [windowExternalDisplayNonInteractive](windowexternaldisplaynoninteractive.md): A scene that displays noninteractive windows on an externally connected display.
- [carTemplateApplication](cartemplateapplication.md): A scene that displays interactive content on a CarPlay-enabled vehicle screen.
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](cptemplateapplicationdashboardscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Dashboard.
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](cptemplateapplicationinstrumentclusterscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Instruments Cluster.

# UIWindowSceneSessionRoleCameraCaptureAccessory (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A session role for scenes that present content during camera capture.

## Declaration

```objectivec
extern UISceneSessionRole const UIWindowSceneSessionRoleCameraCaptureAccessory;
```

<a id="discussion"></a>

## Discussion

The system assigns this role automatically to scenes created from a camera capture scene accessory registration. Clients do not set it directly; it is provided so a scene’s purpose can be identified at runtime.

## See Also

### Determining scene roles

- [UIWindowSceneSessionRoleApplication](windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [UIWindowSceneSessionRoleAssistiveAccessApplication](windowassistiveaccessapplication.md)
- [UIWindowSceneSessionRoleExternalDisplay](windowexternaldisplay.md): Deprecated. A scene that displays noninteractive windows on an externally connected display.
- [UIWindowSceneSessionRoleExternalDisplayNonInteractive](windowexternaldisplaynoninteractive.md): A scene that displays noninteractive windows on an externally connected display.
- [CPTemplateApplicationSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenesessionroleapplication)
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenesessionroleapplication)
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenesessionroleapplication)
