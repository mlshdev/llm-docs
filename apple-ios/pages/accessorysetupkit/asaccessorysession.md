> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysession](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession)

# ASAccessorySession (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A class to coordinate accessory discovery.

## Declaration

```swift
class ASAccessorySession
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Use an instance of `ASAccessorySession` to interact with the AccessorySetupKit framework.

Start the session by calling [activate(on:eventHandler:)](asaccessorysession/activate%28on_eventhandler_%29.md), and pass in a dispatch queue and an event-handling closure. AccessorySetupKit calls back to your event handler as the discovery session processes events.

With your event-handler prepared, create an array of [ASPickerDisplayItem](aspickerdisplayitem.md) instances to describe accessories your app can set up. Pass this array to the session’s [showPicker(for:completionHandler:)](asaccessorysession/showpicker%28for_completionhandler_%29.md) method to allow someone using your app to choose a discovered accessory to set up. Your event handler receives events as the picker appears and dismisses, as well as when the person using the app adds an accessory.

> **Important**

> Starting in iOS 18.4, apps can use AccessorySetupKit for discovery and setup of Bluetooth LE devices that conform to the Human Interface Device (HID) service, such as keyboard and mouse accessories. The HID accessory needs to advertise a custom service besides the HID service. Add the [bluetoothHID](asaccessory/supportoptions/bluetoothhid.md) option to the [supportedOptions](asdiscoverydescriptor/supportedoptions.md) and configure the [ASDiscoveryDescriptor](asdiscoverydescriptor.md) to discover the custom service instead of the HID service.

## Topics

### Managing the session life cycle

- [activate(on:eventHandler:)](asaccessorysession/activate%28on_eventhandler_%29.md): Activate the session and start delivering events to an event handler.
- [invalidate()](asaccessorysession/invalidate%28%29.md): Invalidate the session by stopping any operations.

### Displaying an accessory picker

- [showPicker(completionHandler:)](asaccessorysession/showpicker%28completionhandler_%29.md): Present a picker that shows accessories managed by a Device Discovery Extension in your app.
- [showPicker(for:completionHandler:)](asaccessorysession/showpicker%28for_completionhandler_%29.md): Present a picker that shows discovered accessories matching an array of display items.

### Customizing picker behavior

- [pickerDisplaySettings](asaccessorysession/pickerdisplaysettings.md): Settings that affect the display of the accessory picker.
- [ASPickerDisplaySettings](aspickerdisplaysettings.md): A type that contains settings to customize the display of the accessory picker

### Updating the picker

- [updatePicker(showing:completionHandler:)](asaccessorysession/updatepicker%28showing_completionhandler_%29.md): Updates the picker with app-filtered accessories.

### Ending filtered discovery

- [finishPickerDiscovery(completionHandler:)](asaccessorysession/finishpickerdiscovery%28completionhandler_%29.md): Finish the discovery session in the picker and show a timeout error.

### Accessing discovered accessories

- [accessories](asaccessorysession/accessories.md): An array of previously-selected accessories for this application.

### Managing accessories

- [renameAccessory(\_:options:completionHandler:)](asaccessorysession/renameaccessory%28__options_completionhandler_%29.md): Displays a view to rename an accessory.
- [ASAccessory.RenameOptions](asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
- [removeAccessory(\_:completionHandler:)](asaccessorysession/removeaccessory%28__completionhandler_%29.md): Removes an accessory.

### Managing authorization

- [finishAuthorization(for:settings:completionHandler:)](asaccessorysession/finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [ASAccessorySettings](asaccessorysettings.md): Properties of an accessory.
- [failAuthorization(for:completionHandler:)](asaccessorysession/failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
- [updateAuthorization(for:descriptor:completionHandler:)](asaccessorysession/updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Setting up and authorizing a Bluetooth accessory](setting-up-and-authorizing-a-bluetooth-accessory.md): Discover, select, and set up a specific Bluetooth accessory without requesting permission to use Bluetooth.
- [Discovering and configuring accessories](discovering-and-configuring-accessories.md): Detect nearby accessories and facilitate their setup.

# ASAccessorySession (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A class to coordinate accessory discovery.

## Declaration

```objectivec
@interface ASAccessorySession : NSObject
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Use an instance of `ASAccessorySession` to interact with the AccessorySetupKit framework.

Start the session by calling [activateWithQueue:eventHandler:](asaccessorysession/activate%28on_eventhandler_%29.md), and pass in a dispatch queue and an event-handling closure. AccessorySetupKit calls back to your event handler as the discovery session processes events.

With your event-handler prepared, create an array of [ASPickerDisplayItem](aspickerdisplayitem.md) instances to describe accessories your app can set up. Pass this array to the session’s [showPickerForDisplayItems:completionHandler:](asaccessorysession/showpicker%28for_completionhandler_%29.md) method to allow someone using your app to choose a discovered accessory to set up. Your event handler receives events as the picker appears and dismisses, as well as when the person using the app adds an accessory.

> **Important**

> Starting in iOS 18.4, apps can use AccessorySetupKit for discovery and setup of Bluetooth LE devices that conform to the Human Interface Device (HID) service, such as keyboard and mouse accessories. The HID accessory needs to advertise a custom service besides the HID service. Add the [ASAccessorySupportBluetoothHID](asaccessory/supportoptions/bluetoothhid.md) option to the [supportedOptions](asdiscoverydescriptor/supportedoptions.md) and configure the [ASDiscoveryDescriptor](asdiscoverydescriptor.md) to discover the custom service instead of the HID service.

## Topics

### Managing the session life cycle

- [activateWithQueue:eventHandler:](asaccessorysession/activate%28on_eventhandler_%29.md): Activate the session and start delivering events to an event handler.
- [invalidate](asaccessorysession/invalidate%28%29.md): Invalidate the session by stopping any operations.

### Displaying an accessory picker

- [showPickerWithCompletionHandler:](asaccessorysession/showpicker%28completionhandler_%29.md): Present a picker that shows accessories managed by a Device Discovery Extension in your app.
- [showPickerForDisplayItems:completionHandler:](asaccessorysession/showpicker%28for_completionhandler_%29.md): Present a picker that shows discovered accessories matching an array of display items.

### Customizing picker behavior

- [pickerDisplaySettings](asaccessorysession/pickerdisplaysettings.md): Settings that affect the display of the accessory picker.
- [ASPickerDisplaySettings](aspickerdisplaysettings.md): A type that contains settings to customize the display of the accessory picker

### Updating the picker

- [updatePickerShowingDiscoveredDisplayItems:completionHandler:](asaccessorysession/updatepicker%28showing_completionhandler_%29.md): Updates the picker with app-filtered accessories.

### Ending filtered discovery

- [finishPickerDiscovery:](asaccessorysession/finishpickerdiscovery%28completionhandler_%29.md): Finish the discovery session in the picker and show a timeout error.

### Accessing discovered accessories

- [accessories](asaccessorysession/accessories.md): An array of previously-selected accessories for this application.

### Managing accessories

- [renameAccessory:options:completionHandler:](asaccessorysession/renameaccessory%28__options_completionhandler_%29.md): Displays a view to rename an accessory.
- [ASAccessoryRenameOptions](asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
- [removeAccessory:completionHandler:](asaccessorysession/removeaccessory%28__completionhandler_%29.md): Removes an accessory.

### Managing authorization

- [finishAuthorization:settings:completionHandler:](asaccessorysession/finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [ASAccessorySettings](asaccessorysettings.md): Properties of an accessory.
- [failAuthorization:completionHandler:](asaccessorysession/failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
- [updateAuthorization:descriptor:completionHandler:](asaccessorysession/updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Essentials

- [Setting up and authorizing a Bluetooth accessory](setting-up-and-authorizing-a-bluetooth-accessory.md): Discover, select, and set up a specific Bluetooth accessory without requesting permission to use Bluetooth.
- [Discovering and configuring accessories](discovering-and-configuring-accessories.md): Detect nearby accessories and facilitate their setup.
