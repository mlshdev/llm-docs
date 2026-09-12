> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothpairingcontroller](https://developer.apple.com/documentation/iobluetoothui/iobluetoothpairingcontroller)

# IOBluetoothPairingController (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.

## Declaration

```swift
class IOBluetoothPairingController
```

<a id="overview"></a>

## Overview

Implementation of a window controller to handle pairing with a bluetooth device. This class will handle connecting to the Bluetooth Daemon for the purposes of searches, and displaying the results. When necessary this class will display a sheet asking the user for a PIN code. This window will not return anything to the caller if it is canceled or if pairing occurs.

## Topics

### Instance Methods

- [addAllowedUUID(\_:)](iobluetoothpairingcontroller/addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray(\_:)](iobluetoothpairingcontroller/addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs()](iobluetoothpairingcontroller/clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText()](iobluetoothpairingcontroller/getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions()](iobluetoothpairingcontroller/getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt()](iobluetoothpairingcontroller/getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults()](iobluetoothpairingcontroller/getresults%28%29.md): Returns an NSArray of the devices that were paired.
- [getSearchAttributes()](iobluetoothpairingcontroller/getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle()](iobluetoothpairingcontroller/gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal()](iobluetoothpairingcontroller/runmodal%28%29.md): Runs the pairing panel in a modal session to allow the user to select a Bluetooth device.
- [setDescriptionText(\_:)](iobluetoothpairingcontroller/setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions(\_:)](iobluetoothpairingcontroller/setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt(\_:)](iobluetoothpairingcontroller/setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes(\_:)](iobluetoothpairingcontroller/setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle(\_:)](iobluetoothpairingcontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

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
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)

# IOBluetoothPairingController (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.

## Declaration

```objectivec
@interface IOBluetoothPairingController : NSWindowController
```

<a id="overview"></a>

## Overview

Implementation of a window controller to handle pairing with a bluetooth device. This class will handle connecting to the Bluetooth Daemon for the purposes of searches, and displaying the results. When necessary this class will display a sheet asking the user for a PIN code. This window will not return anything to the caller if it is canceled or if pairing occurs.

## Topics

### Instance Methods

- [addAllowedUUID:](iobluetoothpairingcontroller/addalloweduuid%28__%29.md): Adds a UUID to the list of UUIDs that are used to validate the user’s selection.
- [addAllowedUUIDArray:](iobluetoothpairingcontroller/addalloweduuidarray%28__%29.md): Adds an array of UUIDs to the list of UUIDs that are used to validate the user’s selection.
- [clearAllowedUUIDs](iobluetoothpairingcontroller/clearalloweduuids%28%29.md): Resets the controller back to the default state where it will accept any device the user selects.
- [getDescriptionText](iobluetoothpairingcontroller/getdescriptiontext%28%29.md): Returns the description text that appears in the device selector panel.
- [getOptions](iobluetoothpairingcontroller/getoptions%28%29.md): Returns the option bits that control the panel’s behavior.
- [getPrompt](iobluetoothpairingcontroller/getprompt%28%29.md): Returns the title of the default/select button in the device selector panel.
- [getResults](iobluetoothpairingcontroller/getresults%28%29.md): Returns an NSArray of the devices that were paired.
- [getSearchAttributes](iobluetoothpairingcontroller/getsearchattributes%28%29.md): Returns the search attributes that control the panel’s search/inquiry behavior.
- [getTitle](iobluetoothpairingcontroller/gettitle%28%29.md): Returns the title of the device selector panel.
- [runModal](iobluetoothpairingcontroller/runmodal%28%29.md): Runs the pairing panel in a modal session to allow the user to select a Bluetooth device.
- [setDescriptionText:](iobluetoothpairingcontroller/setdescriptiontext%28__%29.md): Sets the description text that appears in the device selector panel.
- [setOptions:](iobluetoothpairingcontroller/setoptions%28__%29.md): Sets the option bits that control the panel’s behavior.
- [setPrompt:](iobluetoothpairingcontroller/setprompt%28__%29.md): Sets the title of the default/select button in the device selector panel.
- [setSearchAttributes:](iobluetoothpairingcontroller/setsearchattributes%28__%29.md): Sets the search attributes that control the panel’s search/inquiry behavior.
- [setTitle:](iobluetoothpairingcontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.

### Type Methods

- [pairingController](iobluetoothpairingcontroller/pairingcontroller.md)

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
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)
