> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenedelegate

# CPTemplateApplicationInstrumentClusterSceneDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The methods for responding to the life cycle events in your app’s instrument cluster scene.

## Declaration

```swift
@MainActor protocol CPTemplateApplicationInstrumentClusterSceneDelegate : UISceneDelegate
```

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when it connects or disconnects an instrument cluster scene, as well as a method for updating the style of your interface. Adopt this protocol in one of your app’s custom types and use its methods to implement the expected behaviors. Your delegate object is responsible for setting up the instrument cluster content and handling any cleanup when the scene closes.

After you adopt this protocol in a custom type, you don’t instantiate that type directly. Instead, you specify the name of that type in your app’s scene manifest along with rest of your app’s scene information. In a vehicle that supports instrument cluster content, CarPlay instantiates the scene and your delegate type at appropriate times using the information in the scene manifest. The following example shows the keys and values for an instrument cluster scene. The `MyInstrumentClusterSceneDelegate ` string is the name of an app-specific type that implements this protocol.

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

When CarPlay connects a new scene to your app, use the information in the [CPInstrumentClusterController](cpinstrumentclustercontroller.md) to configure your instrument cluster interface. The controller object contains the window you use to display your content and additional properties to consider when building your content.

For information about how to specify your app’s scene manifest, see [Specifying the scenes your app supports](https://developer.apple.com/documentation/uikit/specifying-the-scenes-your-app-supports).

## Topics

### Responding to the scene life-cycle changes

- [templateApplicationInstrumentClusterScene(\_:didConnect:)](cptemplateapplicationinstrumentclusterscenedelegate/templateapplicationinstrumentclusterscene%28__didconnect_%29.md): Tells the delegate that CarPlay added an instrument cluster scene to your app.
- [templateApplicationInstrumentClusterScene(\_:didDisconnectInstrumentClusterController:)](cptemplateapplicationinstrumentclusterscenedelegate/templateapplicationinstrumentclusterscene%28__diddisconnectinstrumentclustercontroller_%29.md): Tells the delegate about the removal of an instrument cluster scene from your app.

### Responding to appearance changes

- [contentStyleDidChange(\_:)](cptemplateapplicationinstrumentclusterscenedelegate/contentstyledidchange%28__%29.md): Tells your app that the suggested content style for this scene changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

# CPTemplateApplicationInstrumentClusterSceneDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The methods for responding to the life cycle events in your app’s instrument cluster scene.

## Declaration

```objectivec
@protocol CPTemplateApplicationInstrumentClusterSceneDelegate <UISceneDelegate>
```

<a id="overview"></a>

## Overview

This protocol defines methods that CarPlay calls when it connects or disconnects an instrument cluster scene, as well as a method for updating the style of your interface. Adopt this protocol in one of your app’s custom types and use its methods to implement the expected behaviors. Your delegate object is responsible for setting up the instrument cluster content and handling any cleanup when the scene closes.

After you adopt this protocol in a custom type, you don’t instantiate that type directly. Instead, you specify the name of that type in your app’s scene manifest along with rest of your app’s scene information. In a vehicle that supports instrument cluster content, CarPlay instantiates the scene and your delegate type at appropriate times using the information in the scene manifest. The following example shows the keys and values for an instrument cluster scene. The `MyInstrumentClusterSceneDelegate ` string is the name of an app-specific type that implements this protocol.

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

When CarPlay connects a new scene to your app, use the information in the [CPInstrumentClusterController](cpinstrumentclustercontroller.md) to configure your instrument cluster interface. The controller object contains the window you use to display your content and additional properties to consider when building your content.

For information about how to specify your app’s scene manifest, see [Specifying the scenes your app supports](https://developer.apple.com/documentation/uikit/specifying-the-scenes-your-app-supports).

## Topics

### Responding to the scene life-cycle changes

- [templateApplicationInstrumentClusterScene:didConnectInstrumentClusterController:](cptemplateapplicationinstrumentclusterscenedelegate/templateapplicationinstrumentclusterscene%28__didconnect_%29.md): Tells the delegate that CarPlay added an instrument cluster scene to your app.
- [templateApplicationInstrumentClusterScene:didDisconnectInstrumentClusterController:](cptemplateapplicationinstrumentclusterscenedelegate/templateapplicationinstrumentclusterscene%28__diddisconnectinstrumentclustercontroller_%29.md): Tells the delegate about the removal of an instrument cluster scene from your app.

### Responding to appearance changes

- [contentStyleDidChange:](cptemplateapplicationinstrumentclusterscenedelegate/contentstyledidchange%28__%29.md): Tells your app that the suggested content style for this scene changed.

## Relationships

### Inherits From

- [UISceneDelegate](https://developer.apple.com/documentation/uikit/uiscenedelegate)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.
