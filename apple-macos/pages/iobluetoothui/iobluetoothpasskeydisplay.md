> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetoothui/iobluetoothpasskeydisplay](https://developer.apple.com/documentation/iobluetoothui/iobluetoothpasskeydisplay)

# IOBluetoothPasskeyDisplay (Swift)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

## Declaration

```swift
class IOBluetoothPasskeyDisplay
```

## Topics

### Instance Properties

- [backgroundImageConstraint](iobluetoothpasskeydisplay/backgroundimageconstraint.md)
- [centeredView](iobluetoothpasskeydisplay/centeredview.md)
- [isIncomingRequest](iobluetoothpasskeydisplay/isincomingrequest-swift.property.md)
- [passkey](iobluetoothpasskeydisplay/passkey-swift.property.md)
- [returnHighlightImage](iobluetoothpasskeydisplay/returnhighlightimage.md)
- [returnImage](iobluetoothpasskeydisplay/returnimage.md)
- [usePasskeyNotificaitons](iobluetoothpasskeydisplay/usepasskeynotificaitons.md)

### Instance Methods

- [advancePasskeyIndicator()](iobluetoothpasskeydisplay/advancepasskeyindicator%28%29.md)
- [resetPasskeyIndicator()](iobluetoothpasskeydisplay/resetpasskeyindicator%28%29.md)
- [retreatPasskeyIndicator()](iobluetoothpasskeydisplay/retreatpasskeyindicator%28%29.md)
- [setPasskey(\_:for:usingSSP:)](iobluetoothpasskeydisplay/setpasskey%28__for_usingssp_%29.md)

### Type Methods

- [sharedDisplayView()](iobluetoothpasskeydisplay/shareddisplayview%28%29.md)

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
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
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)

# IOBluetoothPasskeyDisplay (Objective-C)

**Framework:** IOBluetooth UI  
**Kind:** Class  
**Availability:** macOS 10.2+

## Declaration

```objectivec
@interface IOBluetoothPasskeyDisplay : NSView
```

## Topics

### Instance Properties

- [backgroundImageConstraint](iobluetoothpasskeydisplay/backgroundimageconstraint.md)
- [centeredView](iobluetoothpasskeydisplay/centeredview.md)
- [isIncomingRequest](iobluetoothpasskeydisplay/isincomingrequest-swift.property.md)
- [passkey](iobluetoothpasskeydisplay/passkey-swift.property.md)
- [returnHighlightImage](iobluetoothpasskeydisplay/returnhighlightimage.md)
- [returnImage](iobluetoothpasskeydisplay/returnimage.md)
- [usePasskeyNotificaitons](iobluetoothpasskeydisplay/usepasskeynotificaitons.md)

### Instance Methods

- [advancePasskeyIndicator](iobluetoothpasskeydisplay/advancepasskeyindicator%28%29.md)
- [resetPasskeyIndicator](iobluetoothpasskeydisplay/resetpasskeyindicator%28%29.md)
- [retreatPasskeyIndicator](iobluetoothpasskeydisplay/retreatpasskeyindicator%28%29.md)
- [setPasskey:forDevice:usingSSP:](iobluetoothpasskeydisplay/setpasskey%28__for_usingssp_%29.md)
- [resetAll](iobluetoothpasskeydisplay/resetall.md): Deprecated.
- [setPasskeyIndicatorEnabled:](iobluetoothpasskeydisplay/setpasskeyindicatorenabled_.md): Deprecated.
- [setPasskeyString:](iobluetoothpasskeydisplay/setpasskeystring_.md): Deprecated.
- [setupUIForDevice:](iobluetoothpasskeydisplay/setupuifordevice_.md): Deprecated.
- [setupUIForSSPDevice:](iobluetoothpasskeydisplay/setupuiforsspdevice_.md): Deprecated.

### Type Methods

- [sharedDisplayView](iobluetoothpasskeydisplay/shareddisplayview%28%29.md)

### Instance Variables

- [isIncomingRequest](iobluetoothpasskeydisplay/isincomingrequest-c.ivar.md)
- [mBackgroundImage](iobluetoothpasskeydisplay/mbackgroundimage.md)
- [mPasskeyCharacters](iobluetoothpasskeydisplay/mpasskeycharacters.md)
- [mPasskeyIndex](iobluetoothpasskeydisplay/mpasskeyindex.md)
- [mPasskeyString](iobluetoothpasskeydisplay/mpasskeystring.md)
- [mReturnHighlightImage](iobluetoothpasskeydisplay/mreturnhighlightimage.md)
- [mReturnImage](iobluetoothpasskeydisplay/mreturnimage.md)
- [mReturnImageView](iobluetoothpasskeydisplay/mreturnimageview.md)
- [passkey](iobluetoothpasskeydisplay/passkey-c.ivar.md)
- [showFeedback](iobluetoothpasskeydisplay/showfeedback.md)
- [usePasskeyNotifications](iobluetoothpasskeydisplay/usepasskeynotifications.md)

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [IOBluetoothAccessibilityIgnoredImageCell](iobluetoothaccessibilityignoredimagecell.md)
- [IOBluetoothAccessibilityIgnoredTextFieldCell](iobluetoothaccessibilityignoredtextfieldcell.md)
- [IOBluetoothDeviceSelectorController](iobluetoothdeviceselectorcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothDeviceSelectorControllerRef](iobluetoothdeviceselectorcontrollerref.md)
- [IOBluetoothObjectPushUIController](iobluetoothobjectpushuicontroller.md): An NSWindowController subclass that supports the creation of an IOBluetoothObjectPushUIController object.
- [IOBluetoothPairingController](iobluetoothpairingcontroller.md): A NSWindowController subclass to display a window to initiate pairing to other bluetooth devices.
- [IOBluetoothPairingControllerRef](iobluetoothpairingcontrollerref.md)
- [IOBluetoothServiceBrowserController](iobluetoothservicebrowsercontroller.md): A NSWindowController subclass to display a window to search for and perform SDP queries on bluetooth devices within range.
- [IOBluetoothServiceBrowserControllerRef](iobluetoothservicebrowsercontrollerref.md)
