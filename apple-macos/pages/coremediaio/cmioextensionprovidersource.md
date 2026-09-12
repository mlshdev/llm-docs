> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovidersource](https://developer.apple.com/documentation/coremediaio/cmioextensionprovidersource)

# CMIOExtensionProviderSource (Swift)

**Framework:** Core Media I/O  
**Kind:** Protocol  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A protocol for objects that act as provider sources.

## Declaration

```swift
protocol CMIOExtensionProviderSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Create a class that adopts this protocol to configure provider properties and manage its client connections.

## Topics

### Managing Connections

- [connect(to:)](cmioextensionprovidersource/connect%28to_%29.md): Connects a client to a source’s provider.
- [disconnect(from:)](cmioextensionprovidersource/disconnect%28from_%29.md): Disconnects a client from a source’s provider.

### Configuring Properties

- [availableProperties](cmioextensionprovidersource/availableproperties.md): A set of available properties for a provider.
- [providerProperties(forProperties:)](cmioextensionprovidersource/providerproperties%28forproperties_%29.md): Gets the state of provider properties.
- [setProviderProperties(\_:)](cmioextensionprovidersource/setproviderproperties%28__%29.md): Set the state of provider properties.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Providers

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProvider](cmioextensionprovider.md): An object that manages device connections for a provider.
- [CMIOExtensionProviderProperties](cmioextensionproviderproperties.md): An object that manages the properties of an extension provider.

# CMIOExtensionProviderSource (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Protocol  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A protocol for objects that act as provider sources.

## Declaration

```objectivec
@protocol CMIOExtensionProviderSource <NSObject>
```

<a id="overview"></a>

## Overview

Create a class that adopts this protocol to configure provider properties and manage its client connections.

## Topics

### Managing Connections

- [connectClient:error:](cmioextensionprovidersource/connect%28to_%29.md): Connects a client to a source’s provider.
- [disconnectClient:](cmioextensionprovidersource/disconnect%28from_%29.md): Disconnects a client from a source’s provider.

### Configuring Properties

- [availableProperties](cmioextensionprovidersource/availableproperties.md): A set of available properties for a provider.
- [providerPropertiesForProperties:error:](cmioextensionprovidersource/providerproperties%28forproperties_%29.md): Gets the state of provider properties.
- [setProviderProperties:error:](cmioextensionprovidersource/setproviderproperties%28__%29.md): Set the state of provider properties.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Providers

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProvider](cmioextensionprovider.md): An object that manages device connections for a provider.
- [CMIOExtensionProviderProperties](cmioextensionproviderproperties.md): An object that manages the properties of an extension provider.
