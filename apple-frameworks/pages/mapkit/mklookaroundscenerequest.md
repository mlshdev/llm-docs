> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundscenerequest](https://developer.apple.com/documentation/mapkit/mklookaroundscenerequest)

# MKLookAroundSceneRequest (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class you use to request a LookAround scene at the location you specify.

## Declaration

```swift
class MKLookAroundSceneRequest
```

## Topics

### Creating a LookAround scene

- [init(coordinate:)](mklookaroundscenerequest/init%28coordinate_%29.md): Creates a LookAround scene at the specified coordinates.
- [init(mapItem:)](mklookaroundscenerequest/init%28mapitem_%29.md): Creates a LookAround scene with the location described by the specified map item.

### Specifying the request’s location

- [coordinate](mklookaroundscenerequest/coordinate.md): A coordinate value that describes the location of the LookAround scene.
- [mapItem](mklookaroundscenerequest/mapitem.md): A map item that describes the location of the LookAround scene.

### Starting and stopping scene requests

- [cancel()](mklookaroundscenerequest/cancel%28%29.md): Cancels the pending scene request.
- [getSceneWithCompletionHandler(\_:)](mklookaroundscenerequest/getscenewithcompletionhandler%28__%29.md): Requests a LookAround scene and calls the specified completion handler.

### Monitoring the progress of scene requests

- [isCancelled](mklookaroundscenerequest/iscancelled.md): A Boolean value that indicates if the cancellation of a scene request was successful.
- [isLoading](mklookaroundscenerequest/isloading.md): A Boolean value that indicates whether a scene request is loading.

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

### Exploring at street level

- [MKLookAroundScene](mklookaroundscene.md): A utility class that encapsulates information the framework requires to retrieve and display a specific Look Around location’s imagery.
- [MKLookAroundViewController](mklookaroundviewcontroller.md): A class that manages the presentation and display of a LookAround view.
- [MKLookAroundSnapshotter](mklookaroundsnapshotter.md): A utility class that you use to create a static image from a LookAround scene.

# MKLookAroundSceneRequest (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class you use to request a LookAround scene at the location you specify.

## Declaration

```objectivec
@interface MKLookAroundSceneRequest : NSObject
```

## Topics

### Creating a LookAround scene

- [initWithCoordinate:](mklookaroundscenerequest/init%28coordinate_%29.md): Creates a LookAround scene at the specified coordinates.
- [initWithMapItem:](mklookaroundscenerequest/init%28mapitem_%29.md): Creates a LookAround scene with the location described by the specified map item.

### Specifying the request’s location

- [coordinate](mklookaroundscenerequest/coordinate.md): A coordinate value that describes the location of the LookAround scene.
- [mapItem](mklookaroundscenerequest/mapitem.md): A map item that describes the location of the LookAround scene.

### Starting and stopping scene requests

- [cancel](mklookaroundscenerequest/cancel%28%29.md): Cancels the pending scene request.
- [getSceneWithCompletionHandler:](mklookaroundscenerequest/getscenewithcompletionhandler%28__%29.md): Requests a LookAround scene and calls the specified completion handler.

### Monitoring the progress of scene requests

- [cancelled](mklookaroundscenerequest/iscancelled.md): A Boolean value that indicates if the cancellation of a scene request was successful.
- [loading](mklookaroundscenerequest/isloading.md): A Boolean value that indicates whether a scene request is loading.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Exploring at street level

- [MKLookAroundScene](mklookaroundscene.md): A utility class that encapsulates information the framework requires to retrieve and display a specific Look Around location’s imagery.
- [MKLookAroundViewController](mklookaroundviewcontroller.md): A class that manages the presentation and display of a LookAround view.
- [MKLookAroundSnapshotter](mklookaroundsnapshotter.md): A utility class that you use to create a static image from a LookAround scene.
