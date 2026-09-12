> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession/role-swift.struct](https://developer.apple.com/documentation/uikit/uiscenesession/role-swift.struct)

# UISceneSession.Role (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the possible roles for a scene.

## Declaration

```swift
struct Role
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

## Topics

### Determining scene roles

- [windowApplication](role-swift.struct/windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [windowExternalDisplay](role-swift.struct/windowexternaldisplay.md): Deprecated. A scene that displays noninteractive windows on an externally connected display.
- [windowExternalDisplayNonInteractive](role-swift.struct/windowexternaldisplaynoninteractive.md): A scene that displays noninteractive windows on an externally connected display.
- [carTemplateApplication](role-swift.struct/cartemplateapplication.md): A scene that displays interactive content on a CarPlay-enabled vehicle screen.
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](role-swift.struct/cptemplateapplicationdashboardscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Dashboard.
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](role-swift.struct/cptemplateapplicationinstrumentclusterscenesessionroleapplication.md): A scene that displays navigation content on the CarPlay Instruments Cluster.

### Creating scene roles

- [init(rawValue:)](role-swift.struct/init%28rawvalue_%29.md): Creates a scene role with the specified raw value.

### Type Properties

- [immersiveSpaceApplication](role-swift.struct/immersivespaceapplication.md)
- [windowApplicationVolumetric](role-swift.struct/windowapplicationvolumetric.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the configuration attributes

- [name](../uisceneconfiguration/name.md): The app-specific name assigned to the scene configuration.
- [role](../uisceneconfiguration/role.md): The role assigned to the scene configuration.

# UISceneSessionRole (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the possible roles for a scene.

## Declaration

```objectivec
typedef NSString * UISceneSessionRole;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

## Topics

### Determining scene roles

- [UIWindowSceneSessionRoleApplication](role-swift.struct/windowapplication.md): A scene that displays interactive windows on the device’s built-in display or an externally connected display.
- [UIWindowSceneSessionRoleExternalDisplay](role-swift.struct/windowexternaldisplay.md): Deprecated. A scene that displays noninteractive windows on an externally connected display.
- [UIWindowSceneSessionRoleExternalDisplayNonInteractive](role-swift.struct/windowexternaldisplaynoninteractive.md): A scene that displays noninteractive windows on an externally connected display.
- [UIWindowSceneSessionRoleAssistiveAccessApplication](role-swift.struct/windowassistiveaccessapplication.md)
- [CPTemplateApplicationSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationscenesessionroleapplication)
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationdashboardscenesessionroleapplication)
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenesessionroleapplication)

### Type Properties

- [UISceneSessionRoleImmersiveSpaceApplication](role-swift.struct/immersivespaceapplication.md)
- [UIWindowSceneSessionRoleVolumetricApplication](role-swift.struct/windowapplicationvolumetric.md)

## See Also

### Getting the configuration attributes

- [name](../uisceneconfiguration/name.md): The app-specific name assigned to the scene configuration.
- [role](../uisceneconfiguration/role.md): The role assigned to the scene configuration.
