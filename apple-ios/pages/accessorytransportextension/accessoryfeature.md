> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeature

# AccessoryFeature

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that identifies a kind of work that the framework carries between your accessory and your app.

## Declaration

```swift
protocol AccessoryFeature : Sendable, AppExtensionPoint.Capability
```

<a id="overview"></a>

## Overview

The framework defines a set of features using this protocol; don’t add conformances yourself.

Declare the features that your app supports in your app’s [AccessoryDataProvider](accessorydataprovider.md) extension. The system routes each feature’s session data to the handler that you provide.

To send data in a format that your app defines, use [AccessoryWorker](accessoryworker.md) or [AccessoryGPUWorker](accessorygpuworker.md). For more information, see [Accessory features](accessory-features.md).

## Topics

### Identifying the feature

- [featureID](accessoryfeature/featureid.md): A string for the feature type.

## Relationships

### Inherits From

- [AppExtensionPoint.Capability](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capability)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AccessoryGPUWorker](accessorygpuworker.md)
- [AccessoryWorker](accessoryworker.md)

## See Also

### Declaring features

- [AccessoryDataProvider](accessorydataprovider.md): A protocol for an extension that provides your accessory’s data for one or more of the framework’s features.
