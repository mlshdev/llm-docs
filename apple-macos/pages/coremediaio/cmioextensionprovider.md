> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider)

# CMIOExtensionProvider (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that manages device connections for a provider.

## Declaration

```swift
class CMIOExtensionProvider
```

## Mentioned In

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md)

<a id="overview"></a>

## Overview

An extension provider manages device connections and provides the [startService(provider:)](cmioextensionprovider/startservice%28provider_%29.md) class method that you call to bootstrap the service.

## Topics

### Creating a Provider

- [init(source:clientQueue:)](cmioextensionprovider/init%28source_clientqueue_%29.md): Creates an extension provider with the specified source and dispatch queue.

### Inspecting a Provider

- [clientQueue](cmioextensionprovider/clientqueue.md): The dispatch queue on which the system performs client operations.
- [source](cmioextensionprovider/source.md): The source for the provider.

### Starting a Provider

- [startService(provider:)](cmioextensionprovider/startservice%28provider_%29.md): Starts the system extension.

### Managing Devices

- [devices](cmioextensionprovider/devices.md): An array of connected devices.
- [addDevice(\_:)](cmioextensionprovider/adddevice%28__%29.md): Adds a device to a provider.
- [removeDevice(\_:)](cmioextensionprovider/removedevice%28__%29.md): Removes a device from a provider.

### Managing Clients

- [connectedClients](cmioextensionprovider/connectedclients.md): An array of connected clients.
- [notifyPropertiesChanged(\_:)](cmioextensionprovider/notifypropertieschanged%28__%29.md): Notifies connected clients of device property changes.

### Type Methods

- [ignoreSIGTERM()](cmioextensionprovider/ignoresigterm%28%29.md)
- [stopService(provider:)](cmioextensionprovider/stopservice%28provider_%29.md)

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

### Providers

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProviderSource](cmioextensionprovidersource.md): A protocol for objects that act as provider sources.
- [CMIOExtensionProviderProperties](cmioextensionproviderproperties.md): An object that manages the properties of an extension provider.

# CMIOExtensionProvider (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that manages device connections for a provider.

## Declaration

```objectivec
@interface CMIOExtensionProvider : NSObject
```

## Mentioned In

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md)

<a id="overview"></a>

## Overview

An extension provider manages device connections and provides the [startServiceWithProvider:](cmioextensionprovider/startservice%28provider_%29.md) class method that you call to bootstrap the service.

## Topics

### Creating a Provider

- [providerWithSource:clientQueue:](cmioextensionprovider/providerwithsource_clientqueue_.md): Returns a new extension provider with the specified source and dispatch queue.
- [initWithSource:clientQueue:](cmioextensionprovider/init%28source_clientqueue_%29.md): Creates an extension provider with the specified source and dispatch queue.

### Inspecting a Provider

- [clientQueue](cmioextensionprovider/clientqueue.md): The dispatch queue on which the system performs client operations.
- [source](cmioextensionprovider/source.md): The source for the provider.

### Starting a Provider

- [startServiceWithProvider:](cmioextensionprovider/startservice%28provider_%29.md): Starts the system extension.

### Managing Devices

- [devices](cmioextensionprovider/devices.md): An array of connected devices.
- [addDevice:error:](cmioextensionprovider/adddevice%28__%29.md): Adds a device to a provider.
- [removeDevice:error:](cmioextensionprovider/removedevice%28__%29.md): Removes a device from a provider.

### Managing Clients

- [connectedClients](cmioextensionprovider/connectedclients.md): An array of connected clients.
- [notifyPropertiesChanged:](cmioextensionprovider/notifypropertieschanged%28__%29.md): Notifies connected clients of device property changes.

### Type Methods

- [ignoreSIGTERM](cmioextensionprovider/ignoresigterm%28%29.md)
- [stopServiceWithProvider:](cmioextensionprovider/stopservice%28provider_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Providers

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProviderSource](cmioextensionprovidersource.md): A protocol for objects that act as provider sources.
- [CMIOExtensionProviderProperties](cmioextensionproviderproperties.md): An object that manages the properties of an extension provider.
