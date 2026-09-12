> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundsnapshotter](https://developer.apple.com/documentation/mapkit/mklookaroundsnapshotter)

# MKLookAroundSnapshotter (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A utility class that you use to create a static image from a LookAround scene.

## Declaration

```swift
class MKLookAroundSnapshotter
```

## Topics

### Creating a snapshotter object

- [init(scene:options:)](mklookaroundsnapshotter/init%28scene_options_%29.md): Create a new snapshotter object with the scene and options you specify.

### Starting and stopping a snapshot

- [cancel()](mklookaroundsnapshotter/cancel%28%29.md): Cancels an in-progress snapshot request.
- [getSnapshotWithCompletionHandler(\_:)](mklookaroundsnapshotter/getsnapshotwithcompletionhandler%28__%29.md): Requests a new snapshot and calls the completion handler you provide.

### Monitoring the progress of a snaphot

- [isLoading](mklookaroundsnapshotter/isloading.md): A Boolean value that indicates whether the snapshot request is loading.

### Customizing the snapshot

- [MKLookAroundSnapshotter.Options](mklookaroundsnapshotter/options.md): Values you use to customize LookAround snapshots.

### Accessing snapshot imagery

- [MKLookAroundSnapshotter.Snapshot](mklookaroundsnapshotter/snapshot.md): An object that contains a snapshot image.

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
- [MKLookAroundSceneRequest](mklookaroundscenerequest.md): A class you use to request a LookAround scene at the location you specify.
- [MKLookAroundViewController](mklookaroundviewcontroller.md): A class that manages the presentation and display of a LookAround view.

# MKLookAroundSnapshotter (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A utility class that you use to create a static image from a LookAround scene.

## Declaration

```objectivec
@interface MKLookAroundSnapshotter : NSObject
```

## Topics

### Creating a snapshotter object

- [initWithScene:options:](mklookaroundsnapshotter/init%28scene_options_%29.md): Create a new snapshotter object with the scene and options you specify.

### Starting and stopping a snapshot

- [cancel](mklookaroundsnapshotter/cancel%28%29.md): Cancels an in-progress snapshot request.
- [getSnapshotWithCompletionHandler:](mklookaroundsnapshotter/getsnapshotwithcompletionhandler%28__%29.md): Requests a new snapshot and calls the completion handler you provide.

### Monitoring the progress of a snaphot

- [loading](mklookaroundsnapshotter/isloading.md): A Boolean value that indicates whether the snapshot request is loading.

### Customizing the snapshot

- [MKLookAroundSnapshotOptions](mklookaroundsnapshotter/options.md): Values you use to customize LookAround snapshots.

### Accessing snapshot imagery

- [MKLookAroundSnapshot](mklookaroundsnapshotter/snapshot.md): An object that contains a snapshot image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Exploring at street level

- [MKLookAroundScene](mklookaroundscene.md): A utility class that encapsulates information the framework requires to retrieve and display a specific Look Around location’s imagery.
- [MKLookAroundSceneRequest](mklookaroundscenerequest.md): A class you use to request a LookAround scene at the location you specify.
- [MKLookAroundViewController](mklookaroundviewcontroller.md): A class that manages the presentation and display of a LookAround view.
