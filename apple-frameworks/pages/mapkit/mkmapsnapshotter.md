> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter)

# MKMapSnapshotter (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A utility class for capturing a map and its content into an image.

## Declaration

```swift
class MKMapSnapshotter
```

<a id="overview"></a>

## Overview

Use an [MKMapSnapshotter](mkmapsnapshotter.md) object when you want to capture the system-provided map content, including the map tiles and imagery. The snapshotter object captures the best image possible by loading all of the available map tiles before capturing the image.

Configure a snapshotter object using an [MKMapSnapshotter.Options](mkmapsnapshotter/options.md) object. The snapshot options specify the appearance of the map, including which portion of the map the snapshotter captures.

> **Note**

>  Snapshotter objects don’t capture the visual representations of any overlays or annotations that your app creates. If you want those items to appear in the final snapshot, you must draw them on the resulting snapshot image. For more information about drawing custom content on map snapshots, see [MKMapSnapshotter.Snapshot](mkmapsnapshotter/snapshot.md).

## Topics

### Creating a snapshotter object

- [init(options:)](mkmapsnapshotter/init%28options_%29.md): Creates and returns a snapshotter object based on the specified options.
- [MKMapSnapshotter.Options](mkmapsnapshotter/options.md): The options the snapshotter initializer uses to create a snapshotter to capture map-based imagery.

### Generating a snapshot

- [start(completionHandler:)](mkmapsnapshotter/start%28completionhandler_%29.md): Submits the request to create a snapshot and delivers the results to the specified block.
- [start(with:completionHandler:)](mkmapsnapshotter/start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [MKMapSnapshotter.CompletionHandler](mkmapsnapshotter/completionhandler.md): A block that processes the results of a snapshot request.
- [cancel()](mkmapsnapshotter/cancel%28%29.md): Cancels the request to create a snapshot.
- [isLoading](mkmapsnapshotter/isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.

### Snapshot output

- [MKMapSnapshotter.Snapshot](mkmapsnapshotter/snapshot.md): An image that a snapshotter object generates.

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

## See Also

### Static map snapshots

- [MKMapSnapshotter.Snapshot](mkmapsnapshotter/snapshot.md): An image that a snapshotter object generates.

# MKMapSnapshotter (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A utility class for capturing a map and its content into an image.

## Declaration

```objectivec
@interface MKMapSnapshotter : NSObject
```

<a id="overview"></a>

## Overview

Use an [MKMapSnapshotter](mkmapsnapshotter.md) object when you want to capture the system-provided map content, including the map tiles and imagery. The snapshotter object captures the best image possible by loading all of the available map tiles before capturing the image.

Configure a snapshotter object using an [MKMapSnapshotOptions](mkmapsnapshotter/options.md) object. The snapshot options specify the appearance of the map, including which portion of the map the snapshotter captures.

> **Note**

>  Snapshotter objects don’t capture the visual representations of any overlays or annotations that your app creates. If you want those items to appear in the final snapshot, you must draw them on the resulting snapshot image. For more information about drawing custom content on map snapshots, see [MKMapSnapshot](mkmapsnapshotter/snapshot.md).

## Topics

### Creating a snapshotter object

- [initWithOptions:](mkmapsnapshotter/init%28options_%29.md): Creates and returns a snapshotter object based on the specified options.
- [MKMapSnapshotOptions](mkmapsnapshotter/options.md): The options the snapshotter initializer uses to create a snapshotter to capture map-based imagery.

### Generating a snapshot

- [startWithCompletionHandler:](mkmapsnapshotter/start%28completionhandler_%29.md): Submits the request to create a snapshot and delivers the results to the specified block.
- [startWithQueue:completionHandler:](mkmapsnapshotter/start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [MKMapSnapshotCompletionHandler](mkmapsnapshotter/completionhandler.md): A block that processes the results of a snapshot request.
- [cancel](mkmapsnapshotter/cancel%28%29.md): Cancels the request to create a snapshot.
- [loading](mkmapsnapshotter/isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.

### Snapshot output

- [MKMapSnapshot](mkmapsnapshotter/snapshot.md): An image that a snapshotter object generates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Static map snapshots

- [MKMapSnapshot](mkmapsnapshotter/snapshot.md): An image that a snapshotter object generates.
