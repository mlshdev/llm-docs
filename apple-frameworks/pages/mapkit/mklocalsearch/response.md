> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/response](https://developer.apple.com/documentation/mapkit/mklocalsearch/response)

# MKLocalSearch.Response (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The results from a map-based search.

## Declaration

```swift
class Response
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. After initiating a map search using an [MKLocalSearch](../mklocalsearch.md) object, MapKit passes an instance of this class to your completion handler.

## Topics

### Getting the search results

- [mapItems](response/mapitems.md): An array of map items representing the search results.
- [boundingRegion](response/boundingregion.md): The map region that encloses the returned search results.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

# MKLocalSearchResponse (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The results from a map-based search.

## Declaration

```objectivec
@interface MKLocalSearchResponse : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. After initiating a map search using an [MKLocalSearch](../mklocalsearch.md) object, MapKit passes an instance of this class to your completion handler.

## Topics

### Getting the search results

- [mapItems](response/mapitems.md): An array of map items representing the search results.
- [boundingRegion](response/boundingregion.md): The map region that encloses the returned search results.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)
