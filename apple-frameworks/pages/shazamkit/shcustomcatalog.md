> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shcustomcatalog](https://developer.apple.com/documentation/shazamkit/shcustomcatalog)

# SHCustomCatalog (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object for storing the reference signatures for custom audio recordings and their associated metadata.

## Declaration

```swift
class SHCustomCatalog
```

<a id="overview"></a>

## Overview

Create a custom catalog by adding reference signatures that you generate from audio that you provide. You also add the associated metadata for each signature. Save your custom catalog and share it with others. You can also load a saved catalog.

## Topics

### Creating a custom catalog object

- [init()](shcustomcatalog/init%28%29.md): Creates a new custom catalog object for storing reference audio signatures and their associated metadata.

### Adding a signature to the catalog

- [addReferenceSignature(\_:representing:)](shcustomcatalog/addreferencesignature%28__representing_%29.md): Adds a reference signature and its associated metadata to a catalog.

### Loading and saving a custom catalog

- [add(from:)](shcustomcatalog/add%28from_%29.md): Loads a saved custom catalog from a file.
- [write(to:)](shcustomcatalog/write%28to_%29.md): Deprecated. Saves the custom catalog to a local file.

### Getting the content type

- [shazamCustomCatalog](../uniformtypeidentifiers/uttype-swift.struct/shazamcustomcatalog.md): A type that represents a custom catalog.

### Initializers

- [init(dataRepresentation:)](shcustomcatalog/init%28datarepresentation_%29.md): Load a @c SHCustomCatalog from data

### Instance Properties

- [dataRepresentation](shcustomcatalog/datarepresentation.md): The data representation of this file, it can be written to disk

## Relationships

### Inherits From

- [SHCatalog](shcatalog.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Create a custom audio catalog

- [Building a Custom Catalog and Matching Audio](building-a-custom-catalog-and-matching-audio.md): Display lesson content that’s synchronized to a learning video by matching the audio to a custom reference signature and associated metadata.
- [ShazamKit Dance Finder with Managed Session](shazamkit-dance-finder-with-managed-session.md): Find a video of dance moves for a specific song by matching the audio to a custom catalog, and show a history of recognized songs.
- [SHCatalog](shcatalog.md): An abstract base class for storing reference signatures and their associated metadata.

# SHCustomCatalog (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object for storing the reference signatures for custom audio recordings and their associated metadata.

## Declaration

```objectivec
@interface SHCustomCatalog : SHCatalog
```

<a id="overview"></a>

## Overview

Create a custom catalog by adding reference signatures that you generate from audio that you provide. You also add the associated metadata for each signature. Save your custom catalog and share it with others. You can also load a saved catalog.

## Topics

### Creating a custom catalog object

- [init](shcustomcatalog/init%28%29.md): Creates a new custom catalog object for storing reference audio signatures and their associated metadata.
- [new](shcustomcatalog/new.md): Creates a new custom catalog object for storing reference audio signatures and their associated metadata.

### Adding a signature to the catalog

- [addReferenceSignature:representingMediaItems:error:](shcustomcatalog/addreferencesignature%28__representing_%29.md): Adds a reference signature and its associated metadata to a catalog.

### Loading and saving a custom catalog

- [addCustomCatalogFromURL:error:](shcustomcatalog/add%28from_%29.md): Loads a saved custom catalog from a file.
- [writeToURL:error:](shcustomcatalog/write%28to_%29.md): Deprecated. Saves the custom catalog to a local file.

### Getting the content type

- [SHCustomCatalogContentType](../uniformtypeidentifiers/uttype-c.class/shcustomcatalogcontenttype.md): A type representing the @c SHCustomCatalog file format with the .shazamcatalog extension

### Instance Properties

- [dataRepresentation](shcustomcatalog/datarepresentation.md): The data representation of this file, it can be written to disk

### Instance Methods

- [initWithDataRepresentation:error:](shcustomcatalog/init%28datarepresentation_%29.md): Load a @c SHCustomCatalog from data

## Relationships

### Inherits From

- [SHCatalog](shcatalog.md)

## See Also

### Create a custom audio catalog

- [Building a Custom Catalog and Matching Audio](building-a-custom-catalog-and-matching-audio.md): Display lesson content that’s synchronized to a learning video by matching the audio to a custom reference signature and associated metadata.
- [SHCatalog](shcatalog.md): An abstract base class for storing reference signatures and their associated metadata.
