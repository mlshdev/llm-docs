> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio](https://developer.apple.com/documentation/coremediaio)

# Core Media I/O (Swift)

**Framework:** Core Media I/O  
**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Securely support custom camera devices in macOS.

<a id="overview"></a>

## Overview

Use the Core Media I/O framework to enable support for custom camera devices in macOS. Starting in macOS 12.3, the framework builds on [System Extensions](systemextensions.md) to enable you to support custom devices while maintaining system privacy and security protections. The system prevents apps from loading extension code into their process to ensure that they can’t bypass macOS privacy protections or mask their identity.

> **Important**

> Apple recommends replacing legacy Device Abstraction Layer (DAL) plug-ins with Core Media I/O extensions.

## Topics

### Providers

- [Creating a camera extension with Core Media I/O](coremediaio/creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](coremediaio/overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProvider](coremediaio/cmioextensionprovider.md): An object that manages device connections for a provider.
- [CMIOExtensionProviderSource](coremediaio/cmioextensionprovidersource.md): A protocol for objects that act as provider sources.
- [CMIOExtensionProviderProperties](coremediaio/cmioextensionproviderproperties.md): An object that manages the properties of an extension provider.

### Devices

- [CMIOExtensionDevice](coremediaio/cmioextensiondevice.md): An object that represents a physical or virtual device.
- [CMIOExtensionDeviceSource](coremediaio/cmioextensiondevicesource.md): A protocol for objects that act as device sources.
- [CMIOExtensionDeviceProperties](coremediaio/cmioextensiondeviceproperties.md): An object that defines the properties of a device.

### Streams

- [CMIOExtensionStream](coremediaio/cmioextensionstream.md): An object that represents a stream of media data.
- [CMIOExtensionStreamSource](coremediaio/cmioextensionstreamsource.md): A protocol for objects that act as stream sources.
- [CMIOExtensionStreamProperties](coremediaio/cmioextensionstreamproperties.md): An object that describes the properties of an extension stream.
- [CMIOExtensionClient](coremediaio/cmioextensionclient.md): An object that represents a client of the extension.

### Properties

- [CMIOExtensionProperty](coremediaio/cmioextensionproperty.md): A structure that defines the properties that providers, devices, and streams support.
- [CMIOExtensionPropertyState](coremediaio/cmioextensionpropertystate.md): An object that describes the state of a property.
- [CMIOExtensionPropertyAttributes](coremediaio/cmioextensionpropertyattributes.md): An object that describes the attributes of a property.
- [CMIOExtensionInfoDictionaryKey](coremediaio/cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](coremediaio/cmioextensionmachservicenamekey.md): A key that specifies the mach service name.

### DAL Plug-Ins

- [Device Abstraction Layer (DAL) Plug-Ins](coremediaio/device-abstraction-layer-dal-plug-ins.md): API reference for legacy DAL plug-ins.

# Core Media I/O (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Securely support custom camera devices in macOS.

<a id="overview"></a>

## Overview

Use the Core Media I/O framework to enable support for custom camera devices in macOS. Starting in macOS 12.3, the framework builds on [System Extensions](systemextensions.md) to enable you to support custom devices while maintaining system privacy and security protections. The system prevents apps from loading extension code into their process to ensure that they can’t bypass macOS privacy protections or mask their identity.

> **Important**

> Apple recommends replacing legacy Device Abstraction Layer (DAL) plug-ins with Core Media I/O extensions.

## Topics

### Providers

- [Creating a camera extension with Core Media I/O](coremediaio/creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](coremediaio/overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProvider](coremediaio/cmioextensionprovider.md): An object that manages device connections for a provider.
- [CMIOExtensionProviderSource](coremediaio/cmioextensionprovidersource.md): A protocol for objects that act as provider sources.
- [CMIOExtensionProviderProperties](coremediaio/cmioextensionproviderproperties.md): An object that manages the properties of an extension provider.

### Devices

- [CMIOExtensionDevice](coremediaio/cmioextensiondevice.md): An object that represents a physical or virtual device.
- [CMIOExtensionDeviceSource](coremediaio/cmioextensiondevicesource.md): A protocol for objects that act as device sources.
- [CMIOExtensionDeviceProperties](coremediaio/cmioextensiondeviceproperties.md): An object that defines the properties of a device.

### Streams

- [CMIOExtensionStream](coremediaio/cmioextensionstream.md): An object that represents a stream of media data.
- [CMIOExtensionStreamSource](coremediaio/cmioextensionstreamsource.md): A protocol for objects that act as stream sources.
- [CMIOExtensionStreamProperties](coremediaio/cmioextensionstreamproperties.md): An object that describes the properties of an extension stream.
- [CMIOExtensionClient](coremediaio/cmioextensionclient.md): An object that represents a client of the extension.

### Properties

- [CMIOExtensionProperty](coremediaio/cmioextensionproperty.md): A structure that defines the properties that providers, devices, and streams support.
- [CMIOExtensionPropertyState](coremediaio/cmioextensionpropertystate.md): An object that describes the state of a property.
- [CMIOExtensionPropertyAttributes](coremediaio/cmioextensionpropertyattributes.md): An object that describes the attributes of a property.
- [CMIOExtensionInfoDictionaryKey](coremediaio/cmioextensioninfodictionarykey.md): A key that specifies the extension information dictionary.
- [CMIOExtensionMachServiceNameKey](coremediaio/cmioextensionmachservicenamekey.md): A key that specifies the mach service name.

### DAL Plug-Ins

- [Device Abstraction Layer (DAL) Plug-Ins](coremediaio/device-abstraction-layer-dal-plug-ins.md): API reference for legacy DAL plug-ins.

### Enumeration Cases

- [kCMIOSampleBufferDiscontinuityFlag_BufferOverrun](coremediaio/kcmiosamplebufferdiscontinuityflag_bufferoverrun.md)
- [kCMIOSampleBufferDiscontinuityFlag_ClientSyncDiscontinuity](coremediaio/kcmiosamplebufferdiscontinuityflag_clientsyncdiscontinuity.md)
- [kCMIOSampleBufferDiscontinuityFlag_CodecSettingsChanged](coremediaio/kcmiosamplebufferdiscontinuityflag_codecsettingschanged.md)
- [kCMIOSampleBufferDiscontinuityFlag_DataFormatChanged](coremediaio/kcmiosamplebufferdiscontinuityflag_dataformatchanged.md)
- [kCMIOSampleBufferDiscontinuityFlag_DataWasDropped](coremediaio/kcmiosamplebufferdiscontinuityflag_datawasdropped.md)
- [kCMIOSampleBufferDiscontinuityFlag_DataWasFlushed](coremediaio/kcmiosamplebufferdiscontinuityflag_datawasflushed.md)
- [kCMIOSampleBufferDiscontinuityFlag_DiscontinuityInDTS](coremediaio/kcmiosamplebufferdiscontinuityflag_discontinuityindts.md)
- [kCMIOSampleBufferDiscontinuityFlag_DurationWasExtended](coremediaio/kcmiosamplebufferdiscontinuityflag_durationwasextended.md)
- [kCMIOSampleBufferDiscontinuityFlag_MalformedData](coremediaio/kcmiosamplebufferdiscontinuityflag_malformeddata.md)
- [kCMIOSampleBufferDiscontinuityFlag_NoDataMarker](coremediaio/kcmiosamplebufferdiscontinuityflag_nodatamarker.md)
- [kCMIOSampleBufferDiscontinuityFlag_PacketError](coremediaio/kcmiosamplebufferdiscontinuityflag_packeterror.md)
- [kCMIOSampleBufferDiscontinuityFlag_RelatedToDiscontinuity](coremediaio/kcmiosamplebufferdiscontinuityflag_relatedtodiscontinuity.md)
- [kCMIOSampleBufferDiscontinuityFlag_SleepWakeCycle](coremediaio/kcmiosamplebufferdiscontinuityflag_sleepwakecycle.md)
- [kCMIOSampleBufferDiscontinuityFlag_StreamDiscontinuity](coremediaio/kcmiosamplebufferdiscontinuityflag_streamdiscontinuity.md)
- [kCMIOSampleBufferDiscontinuityFlag_TimecodeDiscontinuity](coremediaio/kcmiosamplebufferdiscontinuityflag_timecodediscontinuity.md)
- [kCMIOSampleBufferDiscontinuityFlag_TimingReferenceJumped](coremediaio/kcmiosamplebufferdiscontinuityflag_timingreferencejumped.md)
- [kCMIOSampleBufferDiscontinuityFlag_TrickPlay](coremediaio/kcmiosamplebufferdiscontinuityflag_trickplay.md)
- [kCMIOSampleBufferDiscontinuityFlag_UnknownDiscontinuity](coremediaio/kcmiosamplebufferdiscontinuityflag_unknowndiscontinuity.md)
- [kCMIOSampleBufferNoDataEvent_DeviceDidNotSync](coremediaio/kcmiosamplebuffernodataevent_devicedidnotsync.md)
- [kCMIOSampleBufferNoDataEvent_DeviceInWrongMode](coremediaio/kcmiosamplebuffernodataevent_deviceinwrongmode.md)
- [kCMIOSampleBufferNoDataEvent_NoMedia](coremediaio/kcmiosamplebuffernodataevent_nomedia.md)
- [kCMIOSampleBufferNoDataEvent_ProcessingError](coremediaio/kcmiosamplebuffernodataevent_processingerror.md)
- [kCMIOSampleBufferNoDataEvent_SleepWakeCycle](coremediaio/kcmiosamplebuffernodataevent_sleepwakecycle.md)
- [kCMIOSampleBufferNoDataEvent_Unknown](coremediaio/kcmiosamplebuffernodataevent_unknown.md)
- [kCMIOSampleBufferNoDiscontinuities](coremediaio/kcmiosamplebuffernodiscontinuities.md)
