> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingcontext/audiovolume](https://developer.apple.com/documentation/photos/phlivephotoeditingcontext/audiovolume)

# audioVolume (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The audio gain to apply to the processed Live Photo.

## Declaration

```swift
var audioVolume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Values must be between `0.0` and `1.0`, inclusive. A value of `1.0` (the default) leaves the audio content of the Live Photo unchanged. A value of `0.0` mutes all audio in the output Live Photo.

Setting this property does not process the Live Photo content; instead, it sets the audio gain to be applied when you later process the Live Photo using one of the methods listed in Processing an Editing Context’s Live Photo.

## See Also

### Preparing an Editing Context for Processing

- [frameProcessor](frameprocessor.md): A block to be called by Photos for processing each frame of the Live Photo’s visual content.
- [PHLivePhotoFrameProcessingBlock](../phlivephotoframeprocessingblock.md): The signature for a block Photos calls to process Live Photo frames.

# audioVolume (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The audio gain to apply to the processed Live Photo.

## Declaration

```objectivec
@property float audioVolume;
```

<a id="Discussion"></a>

## Discussion

Values must be between `0.0` and `1.0`, inclusive. A value of `1.0` (the default) leaves the audio content of the Live Photo unchanged. A value of `0.0` mutes all audio in the output Live Photo.

Setting this property does not process the Live Photo content; instead, it sets the audio gain to be applied when you later process the Live Photo using one of the methods listed in Processing an Editing Context’s Live Photo.

## See Also

### Preparing an Editing Context for Processing

- [frameProcessor](frameprocessor.md): A block to be called by Photos for processing each frame of the Live Photo’s visual content.
- [PHLivePhotoFrameProcessingBlock](../phlivephotoframeprocessingblock.md): The signature for a block Photos calls to process Live Photo frames.
