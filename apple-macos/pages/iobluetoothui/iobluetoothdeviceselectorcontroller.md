> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothdeviceselectorcontroller](https://developer.apple.com/documentation/iobluetoothui/iobluetoothdeviceselectorcontroller)

# IOBluetoothDeviceSelectorController (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.

## Declaration

```swift
class IOBluetoothDeviceSelectorController
```

<a id="overview"></a>

## Overview

Implementation of a window controller to return a NSArray of selected bluetooth devices. This class will handle connecting to the Bluetooth Daemon for the purposes of searches, and displaying the results. This controller will return a NSArray of IOBluetoothDevice objects to the user.

## Topics

### Instance Methods

- [addAllowedUUID(\_:)](iobluetoothdeviceselectorcontroller/addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](iobluetoothdeviceselectorcontroller/addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](iobluetoothdeviceselectorcontroller/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the device selector panel as a sheet on the target window.
- [clearAllowedUUIDs()](iobluetoothdeviceselectorcontroller/clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getCancel()](iobluetoothdeviceselectorcontroller/getcancel%28%29.md): Returns the title of the default/cancel button in the device selector panel.
- [getDescriptionText()](iobluetoothdeviceselectorcontroller/getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getHeader()](iobluetoothdeviceselectorcontroller/getheader%28%29.md): Returns the header text that appears in the device selector panel.
- [getOptions()](iobluetoothdeviceselectorcontroller/getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](iobluetoothdeviceselectorcontroller/getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults()](iobluetoothdeviceselectorcontroller/getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes()](iobluetoothdeviceselectorcontroller/getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](iobluetoothdeviceselectorcontroller/gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](iobluetoothdeviceselectorcontroller/runmodal%28%29.md): Runs the device selector panel in a modal session to allow the user to select a Bluetooth device.
- [setCancel(\_:)](iobluetoothdeviceselectorcontroller/setcancel%28__%29.md): Sets the title of the default/cancel button in the device selector panel.
- [setDescriptionText(\_:)](iobluetoothdeviceselectorcontroller/setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setHeader(\_:)](iobluetoothdeviceselectorcontroller/setheader%28__%29.md): Sets the header text that appears in the device selector panel.
- [setOptions(\_:)](iobluetoothdeviceselectorcontroller/setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt(\_:)](iobluetoothdeviceselectorcontroller/setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](iobluetoothdeviceselectorcontroller/setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle(\_:)](iobluetoothdeviceselectorcontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

### Type Methods

- [deviceSelector()](iobluetoothdeviceselectorcontroller/deviceselector%28%29.md)

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
- [IOBluetoothDeviceSelectorControllerRef](iobluetoothdeviceselectorcontrollerref.md)
- [IOBluetoothObjectPushUIController](iobluetoothobjectpushuicontroller.md): An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)

# IOBluetoothDeviceSelectorController (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.

## Declaration

```objectivec
@interface IOBluetoothDeviceSelectorController : NSWindowController
```

<a id="overview"></a>

## Overview

Implementation of a window controller to return a NSArray of selected bluetooth devices. This class will handle connecting to the Bluetooth Daemon for the purposes of searches, and displaying the results. This controller will return a NSArray of IOBluetoothDevice objects to the user.

## Topics

### Instance Methods

- [addAllowedUUID:](iobluetoothdeviceselectorcontroller/addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](iobluetoothdeviceselectorcontroller/addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](iobluetoothdeviceselectorcontroller/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the device selector panel as a sheet on the target window.
- [clearAllowedUUIDs](iobluetoothdeviceselectorcontroller/clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getCancel](iobluetoothdeviceselectorcontroller/getcancel%28%29.md): Returns the title of the default/cancel button in the device selector panel.
- [getDescriptionText](iobluetoothdeviceselectorcontroller/getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getHeader](iobluetoothdeviceselectorcontroller/getheader%28%29.md): Returns the header text that appears in the device selector panel.
- [getOptions](iobluetoothdeviceselectorcontroller/getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt](iobluetoothdeviceselectorcontroller/getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults](iobluetoothdeviceselectorcontroller/getresults%28%29.md): Returns the result of the user’s selection.
- [getSearchAttributes](iobluetoothdeviceselectorcontroller/getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](iobluetoothdeviceselectorcontroller/gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](iobluetoothdeviceselectorcontroller/runmodal%28%29.md): Runs the device selector panel in a modal session to allow the user to select a Bluetooth device.
- [setCancel:](iobluetoothdeviceselectorcontroller/setcancel%28__%29.md): Sets the title of the default/cancel button in the device selector panel.
- [setDescriptionText:](iobluetoothdeviceselectorcontroller/setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setHeader:](iobluetoothdeviceselectorcontroller/setheader%28__%29.md): Sets the header text that appears in the device selector panel.
- [setOptions:](iobluetoothdeviceselectorcontroller/setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt:](iobluetoothdeviceselectorcontroller/setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes:](iobluetoothdeviceselectorcontroller/setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle:](iobluetoothdeviceselectorcontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

### Type Methods

- [deviceSelector](iobluetoothdeviceselectorcontroller/deviceselector%28%29.md)

## Relationships

### Inherits From

- [NSWindowController](../appkit/nswindowcontroller.md)

## See Also

### Classes

- [IOBluetoothAccessibilityIgnoredImageCell](iobluetoothaccessibilityignoredimagecell.md)
- [IOBluetoothAccessibilityIgnoredTextFieldCell](iobluetoothaccessibilityignoredtextfieldcell.md)
- [IOBluetoothDeviceSelectorControllerRef](iobluetoothdeviceselectorcontrollerref.md)
- [IOBluetoothObjectPushUIController](iobluetoothobjectpushuicontroller.md): An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)
