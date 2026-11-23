> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscene

# CPTemplateApplicationInstrumentClusterScene (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.

## Declaration

```swift
class CPTemplateApplicationInstrumentClusterScene
```

<a id="overview"></a>

## Overview

A `CPTemplateApplicationInstrumentClusterScene` object manages the content that appears in a vehicle’s instrument cluster display. When you implement a navigation app, add support for this scene type to your app and use it to display navigation-related details. For example, you might use it to display upcoming maneuvers, arrival times, or other information. The scene provides the interface controller you use to display your content and reports scene-related events to its associated delegate object.

You don’t create a `CPTemplateApplicationInstrumentClusterScene ` object directly. Instead, you specify the type name in your app’s scene manifest along with other information about the scene such as the type of its associated delegate object. In a vehicle with an instrument cluster display, CarPlay instantiates the scene and delegate types at appropriate times using the information in the scene manifest. The following example shows the keys and values for an instrument cluster scene. The [UISceneClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname) key contains the name of this scene class. The [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene) key tells CarPlay that your app supports this type of scene.

```plist
<key>CPSupportsInstrumentClusterNavigationScene</key>
<bool>YES</bool>
<key>CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication</key>
<array>
    <dict>
        <!-- Specify the name of the scene class. -->
        <key>UISceneClassName</key>
        <string> CPTemplateApplicationInstrumentClusterScene </string>
        <key>UISceneConfigurationName</key>
        <string>MyInstrumentClusterSceneConfiguration</string>
        <key>UISceneDelegateClassName</key>
        <string>MyInstrumentClusterSceneDelegate</string>
    </dict>
</array>
```

At the start of a session, the system delivers a [CPInstrumentClusterController](cpinstrumentclustercontroller.md) object to the delegate’s `CPTemplateApplicationSceneDelegate/instrumentClusterControllerDidConnect(_:)` method. You can also retrieve this object from the scene’s `CPTemplateApplicationScene/instrumentClusterController ` property at any time. Use this controller object to present the instrument cluster content.

## Topics

### Managing the scene’s interface

- [instrumentClusterController](cptemplateapplicationinstrumentclusterscene/instrumentclustercontroller.md): The controller object you use to present your map content in the instrument cluster.
- [contentStyle](cptemplateapplicationinstrumentclusterscene/contentstyle.md): The current interface style for the instrument-cluster content.

### Responding to scene life-cycle events

- [delegate](cptemplateapplicationinstrumentclusterscene/delegate.md): The custom object you provide to handle scene’s life-cycle events.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

# CPTemplateApplicationInstrumentClusterScene (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.

## Declaration

```objectivec
@interface CPTemplateApplicationInstrumentClusterScene : UIScene
```

<a id="overview"></a>

## Overview

A `CPTemplateApplicationInstrumentClusterScene` object manages the content that appears in a vehicle’s instrument cluster display. When you implement a navigation app, add support for this scene type to your app and use it to display navigation-related details. For example, you might use it to display upcoming maneuvers, arrival times, or other information. The scene provides the interface controller you use to display your content and reports scene-related events to its associated delegate object.

You don’t create a `CPTemplateApplicationInstrumentClusterScene ` object directly. Instead, you specify the type name in your app’s scene manifest along with other information about the scene such as the type of its associated delegate object. In a vehicle with an instrument cluster display, CarPlay instantiates the scene and delegate types at appropriate times using the information in the scene manifest. The following example shows the keys and values for an instrument cluster scene. The [UISceneClassName](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication/uisceneclassname) key contains the name of this scene class. The [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene) key tells CarPlay that your app supports this type of scene.

```plist
<key>CPSupportsInstrumentClusterNavigationScene</key>
<bool>YES</bool>
<key>CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication</key>
<array>
    <dict>
        <!-- Specify the name of the scene class. -->
        <key>UISceneClassName</key>
        <string> CPTemplateApplicationInstrumentClusterScene </string>
        <key>UISceneConfigurationName</key>
        <string>MyInstrumentClusterSceneConfiguration</string>
        <key>UISceneDelegateClassName</key>
        <string>MyInstrumentClusterSceneDelegate</string>
    </dict>
</array>
```

At the start of a session, the system delivers a [CPInstrumentClusterController](cpinstrumentclustercontroller.md) object to the delegate’s `CPTemplateApplicationSceneDelegate/instrumentClusterControllerDidConnect(_:)` method. You can also retrieve this object from the scene’s `CPTemplateApplicationScene/instrumentClusterController ` property at any time. Use this controller object to present the instrument cluster content.

## Topics

### Managing the scene’s interface

- [instrumentClusterController](cptemplateapplicationinstrumentclusterscene/instrumentclustercontroller.md): The controller object you use to present your map content in the instrument cluster.
- [contentStyle](cptemplateapplicationinstrumentclusterscene/contentstyle.md): The current interface style for the instrument-cluster content.

### Responding to scene life-cycle events

- [delegate](cptemplateapplicationinstrumentclusterscene/delegate.md): The custom object you provide to handle scene’s life-cycle events.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.

## Relationships

### Inherits From

- [UIScene](https://developer.apple.com/documentation/uikit/uiscene)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.
