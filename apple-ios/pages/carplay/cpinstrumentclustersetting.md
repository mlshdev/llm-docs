> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustersetting

# CPInstrumentClusterSetting (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Constants that indicate when to include or exclude vehicle-related data in your custom content.

## Declaration

```swift
enum CPInstrumentClusterSetting
```

<a id="overview"></a>

## Overview

In an instrument cluster interface, the vehicle’s system can ask your app to display specific types of information with navigation or other app-specific content. For example, the vehicle can ask you to display the current compass heading or speed limits for the current road. Use these settings to determine when to include or exclude information from your interface.

## Topics

### Getting the instrument cluster settings

- [CPInstrumentClusterSetting.disabled](cpinstrumentclustersetting/disabled.md): An option to disable the specified setting.
- [CPInstrumentClusterSetting.enabled](cpinstrumentclustersetting/enabled.md): An option to enable the specified setting.
- [CPInstrumentClusterSetting.unspecified](cpinstrumentclustersetting/unspecified.md): An option that represents no configured value.
- [CPInstrumentClusterSetting.userPreference](cpinstrumentclustersetting/userpreference.md): An option to enable the setting according to personal preferences your app manages.

### Initializers

- [init(rawValue:)](cpinstrumentclustersetting/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

# CPInstrumentClusterSetting (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Constants that indicate when to include or exclude vehicle-related data in your custom content.

## Declaration

```objectivec
enum CPInstrumentClusterSetting : NSUInteger;
```

<a id="overview"></a>

## Overview

In an instrument cluster interface, the vehicle’s system can ask your app to display specific types of information with navigation or other app-specific content. For example, the vehicle can ask you to display the current compass heading or speed limits for the current road. Use these settings to determine when to include or exclude information from your interface.

## Topics

### Getting the instrument cluster settings

- [CPInstrumentClusterSettingDisabled](cpinstrumentclustersetting/disabled.md): An option to disable the specified setting.
- [CPInstrumentClusterSettingEnabled](cpinstrumentclustersetting/enabled.md): An option to enable the specified setting.
- [CPInstrumentClusterSettingUnspecified](cpinstrumentclustersetting/unspecified.md): An option that represents no configured value.
- [CPInstrumentClusterSettingUserPreference](cpinstrumentclustersetting/userpreference.md): An option to enable the setting according to personal preferences your app manages.

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.
