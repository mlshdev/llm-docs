> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionproviderproperties](https://developer.apple.com/documentation/coremediaio/cmioextensionproviderproperties)

# CMIOExtensionProviderProperties (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that manages the properties of an extension provider.

## Declaration

```swift
class CMIOExtensionProviderProperties
```

<a id="overview"></a>

## Overview

Create an instance of this object to manage the provider’s property state.

## Topics

### Creating Provider Properties

- [init(dictionary:)](cmioextensionproviderproperties/init%28dictionary_%29.md): Creates a provider properties object with the specified properties.

### Managing Properties

- [name](cmioextensionproviderproperties/name.md): The provider name.
- [manufacturer](cmioextensionproviderproperties/manufacturer.md): The provider manufacturer.
- [setPropertyState(\_:forProperty:)](cmioextensionproviderproperties/setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
- [propertiesDictionary](cmioextensionproviderproperties/propertiesdictionary.md): A dictionary of properties for a provider.

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
- [CMIOExtensionProvider](cmioextensionprovider.md): An object that manages device connections for a provider.
- [CMIOExtensionProviderSource](cmioextensionprovidersource.md): A protocol for objects that act as provider sources.

# CMIOExtensionProviderProperties (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that manages the properties of an extension provider.

## Declaration

```objectivec
@interface CMIOExtensionProviderProperties : NSObject
```

<a id="overview"></a>

## Overview

Create an instance of this object to manage the provider’s property state.

## Topics

### Creating Provider Properties

- [providerPropertiesWithDictionary:](cmioextensionproviderproperties/providerpropertieswithdictionary_.md): Returns a new provider properties object with the specified properties.
- [initWithDictionary:](cmioextensionproviderproperties/init%28dictionary_%29.md): Creates a provider properties object with the specified properties.

### Managing Properties

- [name](cmioextensionproviderproperties/name.md): The provider name.
- [manufacturer](cmioextensionproviderproperties/manufacturer.md): The provider manufacturer.
- [setPropertyState:forProperty:](cmioextensionproviderproperties/setpropertystate%28__forproperty_%29.md): Sets a state value for the specified property.
- [propertiesDictionary](cmioextensionproviderproperties/propertiesdictionary.md): A dictionary of properties for a provider.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Providers

- [Creating a camera extension with Core Media I/O](creating-a-camera-extension-with-core-media-i-o.md): Build high-performance camera drivers that are secure and simple to deploy.
- [Overriding the default USB video class extension](overriding-the-default-usb-video-class-extension.md): Create a simple DriverKit extension to override the default driver-matching behavior for USB devices.
- [CMIOExtensionProvider](cmioextensionprovider.md): An object that manages device connections for a provider.
- [CMIOExtensionProviderSource](cmioextensionprovidersource.md): A protocol for objects that act as provider sources.
