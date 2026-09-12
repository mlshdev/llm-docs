> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothobjectpushuicontroller](https://developer.apple.com/documentation/iobluetoothui/iobluetoothobjectpushuicontroller)

# IOBluetoothObjectPushUIController (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.

## Declaration

```swift
class IOBluetoothObjectPushUIController
```

## Topics

### Initializers

- [init(objectPushWith:withFiles:delegate:)](iobluetoothobjectpushuicontroller/init%28objectpushwith_withfiles_delegate_%29.md): Creates and returns a new IOBluetoothObjectPush object
- [init(objectPushWithBluetoothDevice:withFiles:delegate:)](iobluetoothobjectpushuicontroller/init%28objectpushwithbluetoothdevice_withfiles_delegate_%29.md)

### Instance Methods

- [beginSheetModal(for:modalDelegate:didEnd:contextInfo:)](iobluetoothobjectpushuicontroller/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice()](iobluetoothobjectpushuicontroller/getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle()](iobluetoothobjectpushuicontroller/gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress()](iobluetoothobjectpushuicontroller/istransferinprogress%28%29.md): Gets state of the transfer
- [runModal()](iobluetoothobjectpushuicontroller/runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [runPanel()](iobluetoothobjectpushuicontroller/runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setIconImage(\_:)](iobluetoothobjectpushuicontroller/seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [setTitle(\_:)](iobluetoothobjectpushuicontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop()](iobluetoothobjectpushuicontroller/stop%28%29.md): Stops the transfer UI

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
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)

# IOBluetoothObjectPushUIController (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.

## Declaration

```objectivec
@interface IOBluetoothObjectPushUIController : NSWindowController
```

## Topics

### Initializers

- [initObjectPushWithBluetoothDevice:withFiles:delegate:](iobluetoothobjectpushuicontroller/init%28objectpushwith_withfiles_delegate_%29.md): Creates and returns a new IOBluetoothObjectPush object

### Instance Methods

- [beginSheetModalForWindow:modalDelegate:didEndSelector:contextInfo:](iobluetoothobjectpushuicontroller/beginsheetmodal%28for_modaldelegate_didend_contextinfo_%29.md): Runs the transfer UI as a sheet on the target window.
- [getDevice](iobluetoothobjectpushuicontroller/getdevice%28%29.md): Gets the object representing the remote target device in the transfer.
- [getTitle](iobluetoothobjectpushuicontroller/gettitle%28%29.md): Returns the title of the transfer panel.
- [isTransferInProgress](iobluetoothobjectpushuicontroller/istransferinprogress%28%29.md): Gets state of the transfer
- [runModal](iobluetoothobjectpushuicontroller/runmodal%28%29.md): Runs the transfer UI panel in a modal session
- [runPanel](iobluetoothobjectpushuicontroller/runpanel%28%29.md): Runs the transfer UI as a panel with no modal session
- [setIconImage:](iobluetoothobjectpushuicontroller/seticonimage%28__%29.md): Manually sets the icon used in the panel.
- [setTitle:](iobluetoothobjectpushuicontroller/settitle%28__%29.md): Sets the title of the panel when not run as a sheet.
- [stop](iobluetoothobjectpushuicontroller/stop%28%29.md): Stops the transfer UI

## Relationships

### Inherits From

- [NSWindowController](../appkit/nswindowcontroller.md)

## See Also

### Classes

- [IOBluetoothAccessibilityIgnoredImageCell](iobluetoothaccessibilityignoredimagecell.md)
- [IOBluetoothAccessibilityIgnoredTextFieldCell](iobluetoothaccessibilityignoredtextfieldcell.md)
- [IOBluetoothDeviceSelectorController](iobluetoothdeviceselectorcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothDeviceSelectorControllerRef](iobluetoothdeviceselectorcontrollerref.md)
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothPasskeyDisplay](iobluetoothpasskeydisplay.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)
