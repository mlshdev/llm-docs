> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/snapshot](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/snapshot)

# MKMapSnapshotter.Snapshot (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An image that a snapshotter object generates.

## Declaration

```swift
class Snapshot
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you use an [MKMapSnapshotter](../mkmapsnapshotter.md) object to capture the map contents asynchronously. An `MKMapSnapshotter.Snapshot` object contains the image that the snapshotter generates from the map contents.

Snapshot images don’t include any custom overlays or annotations that your app adds to the map view. If you want your annotations and overlays to appear on the final image, you need to draw them yourself. To position those items correctly on the image, use the [point(for:)](snapshot/point%28for_%29.md) method of this class to translate the overlay or annotation coordinate value to an appropriate location inside the image’s coordinate space.

## Topics

### Getting the snapshot image

- [image](snapshot/image.md): The image of the map’s content.
- [appearance](snapshot/appearance.md): The visual style that MapKit uses when rendering the snapshot.

### Getting points on the image

- [point(for:)](snapshot/point%28for_%29.md): Converts the specified map coordinate to a point in the coordinate space of the image.

### Getting appearance traits

- [traitCollection](snapshot/traitcollection.md): Traits to use when creating the snapshot.

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

## See Also

### Static map snapshots

- [MKMapSnapshotter](../mkmapsnapshotter.md): A utility class for capturing a map and its content into an image.

# MKMapSnapshot (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An image that a snapshotter object generates.

## Declaration

```objectivec
@interface MKMapSnapshot : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you use an [MKMapSnapshotter](../mkmapsnapshotter.md) object to capture the map contents asynchronously. An `MKMapSnapshotter.Snapshot` object contains the image that the snapshotter generates from the map contents.

Snapshot images don’t include any custom overlays or annotations that your app adds to the map view. If you want your annotations and overlays to appear on the final image, you need to draw them yourself. To position those items correctly on the image, use the [pointForCoordinate:](snapshot/point%28for_%29.md) method of this class to translate the overlay or annotation coordinate value to an appropriate location inside the image’s coordinate space.

## Topics

### Getting the snapshot image

- [image](snapshot/image.md): The image of the map’s content.
- [appearance](snapshot/appearance.md): The visual style that MapKit uses when rendering the snapshot.

### Getting points on the image

- [pointForCoordinate:](snapshot/point%28for_%29.md): Converts the specified map coordinate to a point in the coordinate space of the image.

### Getting appearance traits

- [traitCollection](snapshot/traitcollection.md): Traits to use when creating the snapshot.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Static map snapshots

- [MKMapSnapshotter](../mkmapsnapshotter.md): A utility class for capturing a map and its content into an image.
