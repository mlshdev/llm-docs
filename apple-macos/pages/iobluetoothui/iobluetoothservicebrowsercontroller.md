> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothservicebrowsercontroller](https://developer.apple.com/documentation/iobluetoothui/iobluetoothservicebrowsercontroller)

# IOBluetoothServiceBrowserController (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.

## Declaration

```swift
class IOBluetoothServiceBrowserController
```

<a id="overview"></a>

## Overview

This NSWindowController subclass will bring up a generic Bluetooth search and SDP browsing window allowing the user to find devices within range, perform SDP queries on a particular device, and select a SDP service to connect to. The client application can provide NSArrays of valid service UUIDs to allow, and an NSArray of valid device types to allow. The device type filter is not yet implemented.

## Topics

### Initializers

- [init(\_:)](iobluetoothservicebrowsercontroller/init%28__%29.md): Allocator work Bluetooth Service Browser window controller.

### Instance Methods

- [addAllowedUUID(\_:)](iobluetoothservicebrowsercontroller/addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](iobluetoothservicebrowsercontroller/addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](iobluetoothservicebrowsercontroller/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the service browser panel as a sheet on the target window.
- [clearAllowedUUIDs()](iobluetoothservicebrowsercontroller/clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText()](iobluetoothservicebrowsercontroller/getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions()](iobluetoothservicebrowsercontroller/getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](iobluetoothservicebrowsercontroller/getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getRef()](iobluetoothservicebrowsercontroller/getref%28%29.md): Returns an IOBluetoothServiceBrowserControllerRef representation of the target IOBluetoothServiceBrowserController object.
- [getResults()](iobluetoothservicebrowsercontroller/getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes()](iobluetoothservicebrowsercontroller/getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](iobluetoothservicebrowsercontroller/gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](iobluetoothservicebrowsercontroller/runmodal%28%29.md): Runs the service browser panel in a modal session to allow the user to select a service on a Bluetooth device.
- [setDescriptionText(\_:)](iobluetoothservicebrowsercontroller/setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions(\_:)](iobluetoothservicebrowsercontroller/setoptions%28__%29.md): Modify the options for the window controller.
- [setPrompt(\_:)](iobluetoothservicebrowsercontroller/setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](iobluetoothservicebrowsercontroller/setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle(\_:)](iobluetoothservicebrowsercontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

### Type Methods

- [withServiceBrowserControllerRef(\_:)](iobluetoothservicebrowsercontroller/withservicebrowsercontrollerref%28__%29.md): Method call to convert an IOBluetoothServiceBrowserControllerRef into an IOBluetoothServiceBrowserController \*.

## Relationships

### Inherits From

- [NSWindowController](../appkit/nswindowcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](../appkit/nssegueperforming.md)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [IOBluetoothAccessibilityIgnoredImageCell](iobluetoothaccessibilityignoredimagecell.md)
- [IOBluetoothAccessibilityIgnoredTextFieldCell](iobluetoothaccessibilityignoredtextfieldcell.md)
- [IOBluetoothDeviceSelectorController](iobluetoothdeviceselectorcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothDeviceSelectorControllerRef](iobluetoothdeviceselectorcontrollerref.md)
- [IOBluetoothObjectPushUIController](iobluetoothobjectpushuicontroller.md): An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)

# IOBluetoothServiceBrowserController (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.

## Declaration

```objectivec
@interface IOBluetoothServiceBrowserController : NSWindowController
```

<a id="overview"></a>

## Overview

This NSWindowController subclass will bring up a generic Bluetooth search and SDP browsing window allowing the user to find devices within range, perform SDP queries on a particular device, and select a SDP service to connect to. The client application can provide NSArrays of valid service UUIDs to allow, and an NSArray of valid device types to allow. The device type filter is not yet implemented.

## Topics

### Initializers

- [serviceBrowserController:](iobluetoothservicebrowsercontroller/init%28__%29.md): Allocator work Bluetooth Service Browser window controller.

### Instance Methods

- [addAllowedUUID:](iobluetoothservicebrowsercontroller/addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](iobluetoothservicebrowsercontroller/addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](iobluetoothservicebrowsercontroller/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the service browser panel as a sheet on the target window.
- [clearAllowedUUIDs](iobluetoothservicebrowsercontroller/clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText](iobluetoothservicebrowsercontroller/getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions](iobluetoothservicebrowsercontroller/getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt](iobluetoothservicebrowsercontroller/getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getServiceBrowserControllerRef](iobluetoothservicebrowsercontroller/getref%28%29.md): Returns an IOBluetoothServiceBrowserControllerRef representation of the target IOBluetoothServiceBrowserController object.
- [getResults](iobluetoothservicebrowsercontroller/getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes](iobluetoothservicebrowsercontroller/getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](iobluetoothservicebrowsercontroller/gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](iobluetoothservicebrowsercontroller/runmodal%28%29.md): Runs the service browser panel in a modal session to allow the user to select a service on a Bluetooth device.
- [setDescriptionText:](iobluetoothservicebrowsercontroller/setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions:](iobluetoothservicebrowsercontroller/setoptions%28__%29.md): Modify the options for the window controller.
- [setPrompt:](iobluetoothservicebrowsercontroller/setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes:](iobluetoothservicebrowsercontroller/setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle:](iobluetoothservicebrowsercontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [discover:](iobluetoothservicebrowsercontroller/discover_.md): Deprecated. Invoke an already created window controller to display, and run the modal dialog.
- [discoverAsSheetForWindow:withRecord:](iobluetoothservicebrowsercontroller/discoverassheetforwindow_withrecord_.md): Deprecated. Invoke an already created window controller to display, and run the modal dialog.
- [discoverWithDeviceAttributes:serviceList:serviceRecord:](iobluetoothservicebrowsercontroller/discoverwithdeviceattributes_servicelist_servicerecord_.md): Deprecated. Invoke an already created window controller to display, and run the modal dialog.

### Type Methods

- [withServiceBrowserControllerRef:](iobluetoothservicebrowsercontroller/withservicebrowsercontrollerref%28__%29.md): Method call to convert an IOBluetoothServiceBrowserControllerRef into an IOBluetoothServiceBrowserController \*.
- [browseDevices:options:](iobluetoothservicebrowsercontroller/browsedevices_options_.md): Deprecated.
- [browseDevicesAsSheetForWindow:options:window:](iobluetoothservicebrowsercontroller/browsedevicesassheetforwindow_options_window_.md): Deprecated.

## Relationships

### Inherits From

- [NSWindowController](../appkit/nswindowcontroller.md)

## See Also

### Classes

- [IOBluetoothAccessibilityIgnoredImageCell](iobluetoothaccessibilityignoredimagecell.md)
- [IOBluetoothAccessibilityIgnoredTextFieldCell](iobluetoothaccessibilityignoredtextfieldcell.md)
- [IOBluetoothDeviceSelectorController](iobluetoothdeviceselectorcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothDeviceSelectorControllerRef](iobluetoothdeviceselectorcontrollerref.md)
- [IOBluetoothObjectPushUIController](iobluetoothobjectpushuicontroller.md): An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)
