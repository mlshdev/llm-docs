> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/cabtmidicentralviewcontroller](https://developer.apple.com/documentation/coreaudiokit/cabtmidicentralviewcontroller)

# CABTMIDICentralViewController (Swift)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays nearby Bluetooth-based MIDI peripherals.

## Declaration

```swift
class CABTMIDICentralViewController
```

<a id="overview"></a>

## Overview

To let the user search for nearby MIDI peripherals, create a new [CABTMIDICentralViewController](cabtmidicentralviewcontroller.md) object and then either present it modally or push it onto a [UINavigationController](../uikit/uinavigationcontroller.md) view controller. No other configuration of the object is necessary. Once the user interface is visible, the iOS device finds nearby peripherals and displays them to the user. If the user selects a peripheral, it’s automatically paired with this iOS device. The [CABTMIDICentralViewController](cabtmidicentralviewcontroller.md) object manages its own user interface and is dismissed automatically.

Once connected, the peripheral appears as a MIDI device, just like any other connected MIDI device. MIDI commands sent to the peripheral are automatically played. For more information, see [Core MIDI](../coremidi.md).

## Relationships

### Inherits From

- [UITableViewController](../uikit/uitableviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIScrollViewDelegate](../uikit/uiscrollviewdelegate.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITableViewDataSource](../uikit/uitableviewdatasource.md)
- [UITableViewDelegate](../uikit/uitableviewdelegate.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Bluetooth Devices

- [CABTLEMIDIWindowController](cabtlemidiwindowcontroller.md): A window controller that displays nearby Bluetooth-based MIDI peripherals.
- [CABTMIDILocalPeripheralViewController](cabtmidilocalperipheralviewcontroller.md): A view controller that advertises an iOS device as a Bluetooth-based MIDI peripheral.

# CABTMIDICentralViewController (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays nearby Bluetooth-based MIDI peripherals.

## Declaration

```objectivec
@interface CABTMIDICentralViewController : UITableViewController
```

<a id="overview"></a>

## Overview

To let the user search for nearby MIDI peripherals, create a new [CABTMIDICentralViewController](cabtmidicentralviewcontroller.md) object and then either present it modally or push it onto a [UINavigationController](../uikit/uinavigationcontroller.md) view controller. No other configuration of the object is necessary. Once the user interface is visible, the iOS device finds nearby peripherals and displays them to the user. If the user selects a peripheral, it’s automatically paired with this iOS device. The [CABTMIDICentralViewController](cabtmidicentralviewcontroller.md) object manages its own user interface and is dismissed automatically.

Once connected, the peripheral appears as a MIDI device, just like any other connected MIDI device. MIDI commands sent to the peripheral are automatically played. For more information, see [Core MIDI](../coremidi.md).

## Relationships

### Inherits From

- [UITableViewController](../uikit/uitableviewcontroller.md)

## See Also

### Bluetooth Devices

- [CABTLEMIDIWindowController](cabtlemidiwindowcontroller.md): A window controller that displays nearby Bluetooth-based MIDI peripherals.
- [CABTMIDILocalPeripheralViewController](cabtmidilocalperipheralviewcontroller.md): A view controller that advertises an iOS device as a Bluetooth-based MIDI peripheral.
