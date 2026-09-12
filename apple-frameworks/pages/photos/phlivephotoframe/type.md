> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoframe/type](https://developer.apple.com/documentation/photos/phlivephotoframe/type)

# type (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The type of image content in this frame.

## Declaration

```swift
var type: PHLivePhotoFrameType { get }
```

<a id="Discussion"></a>

## Discussion

Photos calls your [frameProcessor](../phlivephotoeditingcontext/frameprocessor.md) block repeatedly, both to process each frame of the Live Photo’s video content and to process the Live Photo’s still photo content. Use this property to distinguish photo content from video frames—for example, to add a watermark only to still photo content.

## See Also

### Getting Information About the Frame

- [renderScale](renderscale.md): The scale factor of the frame image relative to the Live Photo’s photo content.
- [time](time.md): The time offset, in seconds, of this frame relative to the start of the Live Photo.
- [PHLivePhotoFrameType](../phlivephotoframetype.md): Identifiers for the type of frame image to be processed. Used with the [type](type.md) property.

# type (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The type of image content in this frame.

## Declaration

```objectivec
@property (nonatomic, readonly) PHLivePhotoFrameType type;
```

<a id="Discussion"></a>

## Discussion

Photos calls your [frameProcessor](../phlivephotoeditingcontext/frameprocessor.md) block repeatedly, both to process each frame of the Live Photo’s video content and to process the Live Photo’s still photo content. Use this property to distinguish photo content from video frames—for example, to add a watermark only to still photo content.

## See Also

### Getting Information About the Frame

- [renderScale](renderscale.md): The scale factor of the frame image relative to the Live Photo’s photo content.
- [time](time.md): The time offset, in seconds, of this frame relative to the start of the Live Photo.
- [PHLivePhotoFrameType](../phlivephotoframetype.md): Identifiers for the type of frame image to be processed. Used with the [type](type.md) property.
