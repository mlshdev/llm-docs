> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shcatalog](https://developer.apple.com/documentation/shazamkit/shcatalog)

# SHCatalog (Swift)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An abstract base class for storing reference signatures and their associated metadata.

## Declaration

```swift
class SHCatalog
```

<a id="overview"></a>

## Overview

This is the base class of your custom catalog.

## Topics

### Accessing catalog properties

- [maximumQuerySignatureDuration](shcatalog/maximumquerysignatureduration.md): The maximum duration of a query signature that you use to match reference signatures in the catalog.
- [minimumQuerySignatureDuration](shcatalog/minimumquerysignatureduration.md): The minimum duration of a query signature that you use to match reference signatures in the catalog.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SHCustomCatalog](shcustomcatalog.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Create a custom audio catalog

- [Building a Custom Catalog and Matching Audio](building-a-custom-catalog-and-matching-audio.md): Display lesson content that’s synchronized to a learning video by matching the audio to a custom reference signature and associated metadata.
- [ShazamKit Dance Finder with Managed Session](shazamkit-dance-finder-with-managed-session.md): Find a video of dance moves for a specific song by matching the audio to a custom catalog, and show a history of recognized songs.
- [SHCustomCatalog](shcustomcatalog.md): An object for storing the reference signatures for custom audio recordings and their associated metadata.

# SHCatalog (Objective-C)

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An abstract base class for storing reference signatures and their associated metadata.

## Declaration

```objectivec
@interface SHCatalog : NSObject
```

<a id="overview"></a>

## Overview

This is the base class of your custom catalog.

## Topics

### Accessing catalog properties

- [maximumQuerySignatureDuration](shcatalog/maximumquerysignatureduration.md): The maximum duration of a query signature that you use to match reference signatures in the catalog.
- [minimumQuerySignatureDuration](shcatalog/minimumquerysignatureduration.md): The minimum duration of a query signature that you use to match reference signatures in the catalog.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SHCustomCatalog](shcustomcatalog.md)

## See Also

### Create a custom audio catalog

- [Building a Custom Catalog and Matching Audio](building-a-custom-catalog-and-matching-audio.md): Display lesson content that’s synchronized to a learning video by matching the audio to a custom reference signature and associated metadata.
- [SHCustomCatalog](shcustomcatalog.md): An object for storing the reference signatures for custom audio recordings and their associated metadata.
