> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoframetype](https://developer.apple.com/documentation/photos/phlivephotoframetype)

# PHLivePhotoFrameType (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Identifiers for the type of frame image to be processed. Used with the [type](phlivephotoframe/type.md) property.

## Declaration

```swift
enum PHLivePhotoFrameType
```

## Topics

### Constants

- [PHLivePhotoFrameType.photo](phlivephotoframetype/photo.md): The image is a still photo.
- [PHLivePhotoFrameType.video](phlivephotoframetype/video.md): The image is a single frame from the Live Photo’s video content.

### Initializers

- [init(rawValue:)](phlivephotoframetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Information About the Frame

- [renderScale](phlivephotoframe/renderscale.md): The scale factor of the frame image relative to the Live Photo’s photo content.
- [time](phlivephotoframe/time.md): The time offset, in seconds, of this frame relative to the start of the Live Photo.
- [type](phlivephotoframe/type.md): The type of image content in this frame.

# PHLivePhotoFrameType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Identifiers for the type of frame image to be processed. Used with the [type](phlivephotoframe/type.md) property.

## Declaration

```objectivec
enum PHLivePhotoFrameType : NSInteger;
```

## Topics

### Constants

- [PHLivePhotoFrameTypePhoto](phlivephotoframetype/photo.md): The image is a still photo.
- [PHLivePhotoFrameTypeVideo](phlivephotoframetype/video.md): The image is a single frame from the Live Photo’s video content.

## See Also

### Getting Information About the Frame

- [renderScale](phlivephotoframe/renderscale.md): The scale factor of the frame image relative to the Live Photo’s photo content.
- [time](phlivephotoframe/time.md): The time offset, in seconds, of this frame relative to the start of the Live Photo.
- [type](phlivephotoframe/type.md): The type of image content in this frame.
