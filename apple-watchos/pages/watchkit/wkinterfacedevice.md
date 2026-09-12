> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice](https://developer.apple.com/documentation/watchkit/wkinterfacedevice)

# WKInterfaceDevice (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that provides information about the user’s Apple Watch.

## Declaration

```swift
class WKInterfaceDevice
```

<a id="overview"></a>

## Overview

You can use the information from [WKInterfaceDevice](wkinterfacedevice.md)  to make decisions about the content you display in your app. You can also use this object to play haptic feedback when your app is active.

Do not subclass or create instances of this class yourself. Always call the [current()](wkinterfacedevice/current%28%29.md) class method to get the shared device object.

## Topics

### Accessing the Shared Device Object

- [current()](wkinterfacedevice/current%28%29.md): Returns the shared device object.

### Reading the Screen Information

- [screenBounds](wkinterfacedevice/screenbounds.md): The bounding rectangle of the screen.
- [screenScale](wkinterfacedevice/screenscale.md): The number of pixels per point for the current screen.

### Reading the Device Settings

- [name](wkinterfacedevice/name.md): The name of the device.
- [model](wkinterfacedevice/model.md): The model information for the device.
- [localizedModel](wkinterfacedevice/localizedmodel.md): The localized version of the model information.
- [wristLocation](wkinterfacedevice/wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](wkinterfacedevice/crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](wkinterfacedevice/preferredcontentsizecategory.md): The preferred font-sizing option.

### Reading System Information

- [systemName](wkinterfacedevice/systemname.md): The name of the operating system.
- [systemVersion](wkinterfacedevice/systemversion.md): The version of the operating system.

### Accessing the Layout Direction

- [layoutDirection](wkinterfacedevice/layoutdirection.md): The layout direction of the user interface.
- [interfaceLayoutDirection(for:)](wkinterfacedevice/interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceSemanticContentAttribute](wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceLayoutDirection](wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

### Reading Information About the Battery

- [isBatteryMonitoringEnabled](wkinterfacedevice/isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryLevel](wkinterfacedevice/batterylevel.md): The battery’s current percent charge.
- [batteryState](wkinterfacedevice/batterystate.md): The device’s battery state.
- [WKInterfaceDeviceBatteryState](wkinterfacedevicebatterystate.md): The battery’s charging state.

### Accessing Water Resistance and Lock

- [waterResistanceRating](wkinterfacedevice/waterresistancerating.md): The Apple Watch water-resistance rating.
- [WKWaterResistanceRating](wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [isWaterLockEnabled](wkinterfacedevice/iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
- [enableWaterLock()](wkinterfacedevice/enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.

### Playing Haptic Feedback

- [play(\_:)](wkinterfacedevice/play%28__%29.md): Gives haptic feedback to the user.
- [WKHapticType](wkhaptictype.md): Constant indicating the style of feedback to deliver using haptics.

### Streaming Audio

- [supportsAudioStreaming](wkinterfacedevice/supportsaudiostreaming.md): A Boolean value that indicates whether the device supports audio streaming.

### Validating In-App Purchases

- [identifierForVendor](wkinterfacedevice/identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App structure

- [Setting up a watchOS project](../watchos-apps/setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain(\_:\_:\_:)](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.

# WKInterfaceDevice (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An object that provides information about the user’s Apple Watch.

## Declaration

```objectivec
@interface WKInterfaceDevice : NSObject
```

<a id="overview"></a>

## Overview

You can use the information from [WKInterfaceDevice](wkinterfacedevice.md)  to make decisions about the content you display in your app. You can also use this object to play haptic feedback when your app is active.

Do not subclass or create instances of this class yourself. Always call the [currentDevice](wkinterfacedevice/current%28%29.md) class method to get the shared device object.

## Topics

### Accessing the Shared Device Object

- [currentDevice](wkinterfacedevice/current%28%29.md): Returns the shared device object.

### Reading the Screen Information

- [screenBounds](wkinterfacedevice/screenbounds.md): The bounding rectangle of the screen.
- [screenScale](wkinterfacedevice/screenscale.md): The number of pixels per point for the current screen.

### Reading the Device Settings

- [name](wkinterfacedevice/name.md): The name of the device.
- [model](wkinterfacedevice/model.md): The model information for the device.
- [localizedModel](wkinterfacedevice/localizedmodel.md): The localized version of the model information.
- [wristLocation](wkinterfacedevice/wristlocation.md): The wrist on which the user wears the Apple Watch.
- [WKInterfaceDeviceWristLocation](wkinterfacedevicewristlocation.md): Constants indicating the wrist on which the user wears the Apple Watch.
- [crownOrientation](wkinterfacedevice/crownorientation.md): The side on which the crown is positioned.
- [WKInterfaceDeviceCrownOrientation](wkinterfacedevicecrownorientation.md): Constants indicating the crown orientation from the user’s perspective.
- [preferredContentSizeCategory](wkinterfacedevice/preferredcontentsizecategory.md): The preferred font-sizing option.

### Reading System Information

- [systemName](wkinterfacedevice/systemname.md): The name of the operating system.
- [systemVersion](wkinterfacedevice/systemversion.md): The version of the operating system.

### Accessing the Layout Direction

- [layoutDirection](wkinterfacedevice/layoutdirection.md): The layout direction of the user interface.
- [interfaceLayoutDirectionForSemanticContentAttribute:](wkinterfacedevice/interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceSemanticContentAttribute](wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceLayoutDirection](wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

### Reading Information About the Battery

- [batteryMonitoringEnabled](wkinterfacedevice/isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryLevel](wkinterfacedevice/batterylevel.md): The battery’s current percent charge.
- [batteryState](wkinterfacedevice/batterystate.md): The device’s battery state.
- [WKInterfaceDeviceBatteryState](wkinterfacedevicebatterystate.md): The battery’s charging state.

### Accessing Water Resistance and Lock

- [waterResistanceRating](wkinterfacedevice/waterresistancerating.md): The Apple Watch water-resistance rating.
- [WKWaterResistanceRating](wkwaterresistancerating.md): Values indicating the water-resistance rating.
- [waterLockEnabled](wkinterfacedevice/iswaterlockenabled.md): A Boolean value that indicates whether the water lock is enabled.
- [enableWaterLock](wkinterfacedevice/enablewaterlock%28%29.md): Disables the Apple Watch touch screen to prevent accidental taps while submerged.

### Playing Haptic Feedback

- [playHaptic:](wkinterfacedevice/play%28__%29.md): Gives haptic feedback to the user.
- [WKHapticType](wkhaptictype.md): Constant indicating the style of feedback to deliver using haptics.

### Streaming Audio

- [supportsAudioStreaming](wkinterfacedevice/supportsaudiostreaming.md): A Boolean value that indicates whether the device supports audio streaming.

### Validating In-App Purchases

- [identifierForVendor](wkinterfacedevice/identifierforvendor.md): An alphanumeric string that uniquely identifies a device to the app’s vendor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App structure

- [WKApplication](wkapplication.md): The centralized point of control and coordination for apps with a single watchOS app target.
- [WKApplicationDelegate](wkapplicationdelegate.md): A collection of methods that manages the app-level behavior for a single-target watchOS app.
- [WKExtension](wkextension.md): Deprecated. The centralized point of control and coordination for extension-based apps running in watchOS.
- [WKExtensionDelegate](wkextensiondelegate.md): Deprecated. A collection of methods that manages the app-level behavior of a WatchKit extension.
- [WKApplicationMain](wkapplicationmain%28______%29.md): Creates the application object and the application delegate, and sets up the app’s event cycle.
- [WKPrefersNetworkUponForeground](https://developer.apple.com/documentation/bundleresources/information-property-list/wkprefersnetworkuponforeground): A Boolean value that indicates whether an app requires network access on launch.
