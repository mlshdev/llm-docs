> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit](https://developer.apple.com/documentation/coreaudiokit)

# CoreAudioKit (Swift)

**Framework:** CoreAudioKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · visionOS 1.0+

Add user interfaces to audio units.

<a id="overview"></a>

## Overview

Core Audio Kit provides views and controllers to use when building Audio Unit user interfaces.

## Topics

### Audio Units

- [AUViewController](coreaudiokit/auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUAudioUnitViewConfiguration](coreaudiokit/auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](coreaudiokit/augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](coreaudiokit/aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](coreaudiokit/aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.

### Bluetooth Devices

- [CABTLEMIDIWindowController](coreaudiokit/cabtlemidiwindowcontroller.md): A window controller that displays nearby Bluetooth-based MIDI peripherals.
- [CABTMIDICentralViewController](coreaudiokit/cabtmidicentralviewcontroller.md): A view controller that displays nearby Bluetooth-based MIDI peripherals.
- [CABTMIDILocalPeripheralViewController](coreaudiokit/cabtmidilocalperipheralviewcontroller.md): A view controller that advertises an iOS device as a Bluetooth-based MIDI peripheral.

### Network Devices

- [CANetworkBrowserWindowController](coreaudiokit/canetworkbrowserwindowcontroller.md): A window controller that displays available network audio devices.

### Inter-Device Audio

- [CAInterDeviceAudioViewController](coreaudiokit/cainterdeviceaudioviewcontroller.md): A view controller object that displays iOS devices that support inter-device audio.

### Inter-App Audio

Inter-App Audio is deprecated in iOS 13 and is unavailable when running iPad apps in macOS.

- [CAInterAppAudioSwitcherView](coreaudiokit/cainterappaudioswitcherview.md): Deprecated. A view that provides an audio switcher user interface.
- [CAInterAppAudioTransportView](coreaudiokit/cainterappaudiotransportview.md): Deprecated. A view that provides an audio transport user interface.

### Deprecations

- [AUGenericViewInternal](coreaudiokit/augenericviewinternal.md)
- [AUGenericViewInternalBase](coreaudiokit/augenericviewinternalbase.md)

### Classes

- [AUAppleCustomViewLoader](coreaudiokit/auapplecustomviewloader.md)
- [AUGenericViewController](coreaudiokit/augenericviewcontroller.md)

### Structures

- [AUGenericViewDisplayFlags](coreaudiokit/augenericviewdisplayflags.md): Flags that describe the display of a generic view.

# CoreAudioKit (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · visionOS 1.0+

Add user interfaces to audio units.

<a id="overview"></a>

## Overview

Core Audio Kit provides views and controllers to use when building Audio Unit user interfaces.

## Topics

### Audio Units

- [AUViewController](coreaudiokit/auviewcontroller.md): The base class to extend when creating a custom user interface for an audio unit.
- [AUViewControllerBase](coreaudiokit/auviewcontrollerbase.md): A type definition that indicates the the platform’s Audio Unit view controller base class.
- [AUAudioUnitViewConfiguration](coreaudiokit/auaudiounitviewconfiguration.md): A configuration object that describes how to present the audio unit’s user interface.
- [AUGenericView](coreaudiokit/augenericview.md): A view that provides a generic user interface for a Cocoa audio unit.
- [AUPannerView](coreaudiokit/aupannerview.md): A view that provides a specialized user interface for a Cocoa-based panner audio unit.
- [AUCustomViewPersistentData](coreaudiokit/aucustomviewpersistentdata.md): A protocol that defines the methods an Audio Unit host calls to manage view data.

### Bluetooth Devices

- [CABTLEMIDIWindowController](coreaudiokit/cabtlemidiwindowcontroller.md): A window controller that displays nearby Bluetooth-based MIDI peripherals.
- [CABTMIDICentralViewController](coreaudiokit/cabtmidicentralviewcontroller.md): A view controller that displays nearby Bluetooth-based MIDI peripherals.
- [CABTMIDILocalPeripheralViewController](coreaudiokit/cabtmidilocalperipheralviewcontroller.md): A view controller that advertises an iOS device as a Bluetooth-based MIDI peripheral.

### Network Devices

- [CANetworkBrowserWindowController](coreaudiokit/canetworkbrowserwindowcontroller.md): A window controller that displays available network audio devices.

### Inter-Device Audio

- [CAInterDeviceAudioViewController](coreaudiokit/cainterdeviceaudioviewcontroller.md): A view controller object that displays iOS devices that support inter-device audio.

### Inter-App Audio

Inter-App Audio is deprecated in iOS 13 and is unavailable when running iPad apps in macOS.

- [CAInterAppAudioSwitcherView](coreaudiokit/cainterappaudioswitcherview.md): Deprecated. A view that provides an audio switcher user interface.
- [CAInterAppAudioTransportView](coreaudiokit/cainterappaudiotransportview.md): Deprecated. A view that provides an audio transport user interface.

### Classes

- [AUGenericViewController](coreaudiokit/augenericviewcontroller.md)

### Reference

- [Core Audio Kit Data Types](coreaudiokit/core-audio-kit-data-types.md)

### Enumerations

- [AUGenericViewDisplayFlags](coreaudiokit/augenericviewdisplayflags.md): Flags that describe the display of a generic view.
