> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/isspatialvideocaptureenabled](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/isspatialvideocaptureenabled)

# isSpatialVideoCaptureEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether a movie file output captures spatial videos.

## Declaration

```swift
var isSpatialVideoCaptureEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Spatial capture lets you record your favorite moments in 3D for playback on Apple Vision Pro. This feature isn’t supported on all devices, so you can only enable this property when [isSpatialVideoCaptureSupported](isspatialvideocapturesupported.md) is [true](https://developer.apple.com/documentation/swift/true).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Enabling spatial capture

- [isSpatialVideoCaptureSupported](isspatialvideocapturesupported.md): A Boolean value that indicates whether a movie file output supports capturing spatial videos.

# spatialVideoCaptureEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether a movie file output captures spatial videos.

## Declaration

```objectivec
@property (nonatomic, getter=isSpatialVideoCaptureEnabled) BOOL spatialVideoCaptureEnabled;
```

<a id="Discussion"></a>

## Discussion

Spatial capture lets you record your favorite moments in 3D for playback on Apple Vision Pro. This feature isn’t supported on all devices, so you can only enable this property when [spatialVideoCaptureSupported](isspatialvideocapturesupported.md) is [true](https://developer.apple.com/documentation/swift/true).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Enabling spatial capture

- [spatialVideoCaptureSupported](isspatialvideocapturesupported.md): A Boolean value that indicates whether a movie file output supports capturing spatial videos.
