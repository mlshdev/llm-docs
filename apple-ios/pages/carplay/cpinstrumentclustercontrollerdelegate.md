> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontrollerdelegate

# CPInstrumentClusterControllerDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The methods for responding to changes to instrument cluster settings.

## Declaration

```swift
protocol CPInstrumentClusterControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When the instrument cluster settings change, a [CPInstrumentClusterController](cpinstrumentclustercontroller.md) object notifies its associated delegate object. The `CPInstrumentClusterControllerDelegate` protocol defines the methods you implement in that delegate object to receive and handle the changes. The system notifies your delegate object when the window you use to display your interface changes, when speed limit and compass settings change, or when there’s a request to change the zoom level of the map content you’re displaying.

Adopt this protocol in a custom type you define. When CarPlay creates your app’s instrument cluster scene, instantiate your custom type and assign it to the [delegate](cpinstrumentclustercontroller/delegate.md) property of the controller object you use to configure your UI.

## Topics

### Responding to life-cycle events

- [instrumentClusterControllerDidConnect(\_:)](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidconnect%28__%29.md): Tells the delegate that there’s a new window for displaying your content.
- [instrumentClusterControllerDidDisconnectWindow(\_:)](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdiddisconnectwindow%28__%29.md): Tells the delegate that the system removed the window you use to draw your content.

### Responding to setting changes

- [instrumentClusterController(\_:didChangeSpeedLimitSetting:)](cpinstrumentclustercontrollerdelegate/instrumentclustercontroller%28__didchangespeedlimitsetting_%29.md): Tells the delegate to adjust how your app displays speed limit information.
- [instrumentClusterController(\_:didChangeCompassSetting:)](cpinstrumentclustercontrollerdelegate/instrumentclustercontroller%28__didchangecompasssetting_%29.md): Tells the delegate to adjust how your app displays compass information.

### Handling zoom events

- [instrumentClusterControllerDidZoom(in:)](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidzoom%28in_%29.md): Tells the delegate to increase map magnification by one level.
- [instrumentClusterControllerDidZoomOut(\_:)](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidzoomout%28__%29.md): Tells the delegate to decrease map magnification by one level.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

# CPInstrumentClusterControllerDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The methods for responding to changes to instrument cluster settings.

## Declaration

```objectivec
@protocol CPInstrumentClusterControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

When the instrument cluster settings change, a [CPInstrumentClusterController](cpinstrumentclustercontroller.md) object notifies its associated delegate object. The `CPInstrumentClusterControllerDelegate` protocol defines the methods you implement in that delegate object to receive and handle the changes. The system notifies your delegate object when the window you use to display your interface changes, when speed limit and compass settings change, or when there’s a request to change the zoom level of the map content you’re displaying.

Adopt this protocol in a custom type you define. When CarPlay creates your app’s instrument cluster scene, instantiate your custom type and assign it to the [delegate](cpinstrumentclustercontroller/delegate.md) property of the controller object you use to configure your UI.

## Topics

### Responding to life-cycle events

- [instrumentClusterControllerDidConnectWindow:](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidconnect%28__%29.md): Tells the delegate that there’s a new window for displaying your content.
- [instrumentClusterControllerDidDisconnectWindow:](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdiddisconnectwindow%28__%29.md): Tells the delegate that the system removed the window you use to draw your content.

### Responding to setting changes

- [instrumentClusterController:didChangeSpeedLimitSetting:](cpinstrumentclustercontrollerdelegate/instrumentclustercontroller%28__didchangespeedlimitsetting_%29.md): Tells the delegate to adjust how your app displays speed limit information.
- [instrumentClusterController:didChangeCompassSetting:](cpinstrumentclustercontrollerdelegate/instrumentclustercontroller%28__didchangecompasssetting_%29.md): Tells the delegate to adjust how your app displays compass information.

### Handling zoom events

- [instrumentClusterControllerDidZoomIn:](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidzoom%28in_%29.md): Tells the delegate to increase map magnification by one level.
- [instrumentClusterControllerDidZoomOut:](cpinstrumentclustercontrollerdelegate/instrumentclustercontrollerdidzoomout%28__%29.md): Tells the delegate to decrease map magnification by one level.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Instrument cluster display

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.
