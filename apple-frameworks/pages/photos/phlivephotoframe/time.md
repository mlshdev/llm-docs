> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoframe/time](https://developer.apple.com/documentation/photos/phlivephotoframe/time)

# time (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The time offset, in seconds, of this frame relative to the start of the Live Photo.

## Declaration

```swift
var time: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

You can use this value to vary your image processing over time, creating animated effects. For example, the following code sets up an animated filter that fades from sepia tone to original to sepia tone again over the duration of the Live Photo:

**Swift**

```swift
 
// Save properties of the context to avoid capturing it in the closure.
let duration = CMTimeGetSeconds(context.duration)
let photoTime = CMTimeGetSeconds(context.photoTime)
// Frame processor closure uses duration/photoTime/frameTime to animate.
context.frameProcessor = { frame, _ in
    let frameTime = CMTimeGetSeconds(frame.time)
    let intensity: Double
    if frameTime < photoTime {
        // Vary intensity from -1.0 to 0.0 before the photo.
        intensity = -frameTime / photoTime
    } else {
        // Vary intensity from 0.0 to 1.0 after the photo.
        intensity = (frameTime - photoTime) / (duration - photoTime)
    }
    return frame.image.applyingFilter("CISepiaTone",
        withInputParameters: [ kCIInputIntensityKey: intensity ])
}
```

**Objective-C**

```objc
// Save properties of the context to avoid capturing it in the block.
NSTimeInterval duration = CMTimeGetSeconds(context.duration);
NSTimeInterval photoTime = CMTimeGetSeconds(context.photoTime);
// Frame processor block uses duration/photoTime/frameTime to animate.
context.frameProcessor = ^CIImage *(id <PHLivePhotoFrame> frame, NSError **error) {
    NSTimeInterval frameTime = CMTimeGetSeconds(frame.time);
    NSTimeInterval intensity;
    if (frameTime < photoTime) {
        // Vary intensity from -1.0 to 0.0 before the photo.
        intensity = -frameTime / photoTime;
    } else {
        // Vary intensity from 0.0 to 1.0 after the photo.
        intensity = (frameTime - photoTime) / (duration - photoTime);
    }
    return [frame.image imageByApplyingFilter:@"CISepiaTone"
                          withInputParameters:@{ kCIInputIntensityKey: @(intensity) }];
};
```

## See Also

### Getting Information About the Frame

- [renderScale](renderscale.md): The scale factor of the frame image relative to the Live Photo’s photo content.
- [type](type.md): The type of image content in this frame.
- [PHLivePhotoFrameType](../phlivephotoframetype.md): Identifiers for the type of frame image to be processed. Used with the [type](type.md) property.

# time (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The time offset, in seconds, of this frame relative to the start of the Live Photo.

## Declaration

```objectivec
@property (readonly) CMTime time;
```

<a id="Discussion"></a>

## Discussion

You can use this value to vary your image processing over time, creating animated effects. For example, the following code sets up an animated filter that fades from sepia tone to original to sepia tone again over the duration of the Live Photo:

**Swift**

```swift
 
// Save properties of the context to avoid capturing it in the closure.
let duration = CMTimeGetSeconds(context.duration)
let photoTime = CMTimeGetSeconds(context.photoTime)
// Frame processor closure uses duration/photoTime/frameTime to animate.
context.frameProcessor = { frame, _ in
    let frameTime = CMTimeGetSeconds(frame.time)
    let intensity: Double
    if frameTime < photoTime {
        // Vary intensity from -1.0 to 0.0 before the photo.
        intensity = -frameTime / photoTime
    } else {
        // Vary intensity from 0.0 to 1.0 after the photo.
        intensity = (frameTime - photoTime) / (duration - photoTime)
    }
    return frame.image.applyingFilter("CISepiaTone",
        withInputParameters: [ kCIInputIntensityKey: intensity ])
}
```

**Objective-C**

```objc
// Save properties of the context to avoid capturing it in the block.
NSTimeInterval duration = CMTimeGetSeconds(context.duration);
NSTimeInterval photoTime = CMTimeGetSeconds(context.photoTime);
// Frame processor block uses duration/photoTime/frameTime to animate.
context.frameProcessor = ^CIImage *(id <PHLivePhotoFrame> frame, NSError **error) {
    NSTimeInterval frameTime = CMTimeGetSeconds(frame.time);
    NSTimeInterval intensity;
    if (frameTime < photoTime) {
        // Vary intensity from -1.0 to 0.0 before the photo.
        intensity = -frameTime / photoTime;
    } else {
        // Vary intensity from 0.0 to 1.0 after the photo.
        intensity = (frameTime - photoTime) / (duration - photoTime);
    }
    return [frame.image imageByApplyingFilter:@"CISepiaTone"
                          withInputParameters:@{ kCIInputIntensityKey: @(intensity) }];
};
```

## See Also

### Getting Information About the Frame

- [renderScale](renderscale.md): The scale factor of the frame image relative to the Live Photo’s photo content.
- [type](type.md): The type of image content in this frame.
- [PHLivePhotoFrameType](../phlivephotoframetype.md): Identifiers for the type of frame image to be processed. Used with the [type](type.md) property.
