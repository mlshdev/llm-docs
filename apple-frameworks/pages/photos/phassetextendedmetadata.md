> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetextendedmetadata

# PHAssetExtendedMetadata (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Represents other asset attributes that are not included when fetching `PHAsset` directly.

## Declaration

```swift
class PHAssetExtendedMetadata
```

<a id="overview"></a>

## Overview

When [extendedMetadata](phasset/extendedmetadata.md) is called, these properties are fetched. They can be prefetched by toggling [prefetchAssetExtendedMetadata](phfetchoptions/prefetchassetextendedmetadata.md) when fetching [PHAsset](phasset.md).

## Topics

### Reading metadata

- [caption](phassetextendedmetadata/caption.md): The compact description for this asset.
- [keywords](phassetextendedmetadata/keywords.md): The keywords associated with this asset

### Instance Properties

- [originalFilename](phassetextendedmetadata/originalfilename.md): The original file name of this asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PHAssetExtendedMetadata (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Represents other asset attributes that are not included when fetching `PHAsset` directly.

## Declaration

```objectivec
@interface PHAssetExtendedMetadata : NSObject
```

<a id="overview"></a>

## Overview

When [extendedMetadata](phasset/extendedmetadata.md) is called, these properties are fetched. They can be prefetched by toggling [prefetchAssetExtendedMetadata](phfetchoptions/prefetchassetextendedmetadata.md) when fetching [PHAsset](phasset.md).

## Topics

### Reading metadata

- [caption](phassetextendedmetadata/caption.md): The compact description for this asset.
- [keywords](phassetextendedmetadata/keywords.md): The keywords associated with this asset

### Instance Properties

- [originalFilename](phassetextendedmetadata/originalfilename.md): The original file name of this asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
