> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/subriptextbottom](https://developer.apple.com/documentation/avfoundation/avcaptionregion/subriptextbottom)

# subRipTextBottom (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The bottom caption region for SubRip Text (SRT) format captions.

## Declaration

```swift
class var subRipTextBottom: AVCaptionRegion { get }
```

<a id="Discussion"></a>

## Discussion

This region is suitable for SRT format, and it occupies the entire video display area. The region uses a [AVCaptionRegion.WritingMode.leftToRightAndTopToBottom](writingmode-swift.enum/lefttorightandtoptobottom.md) writing mode, where a line progresses left to right and the block extends from top to bottom. The system stacks each line of text with bottom justification.

## See Also

### Accessing defined regions

- [appleITTTop](appleitttop.md): The top region for iTT format captions.
- [appleITTBottom](appleittbottom.md): The bottom region for iTT format captions.
- [appleITTLeft](appleittleft.md): The left region for iTT format captions.
- [appleITTRight](appleittright.md): The right region for iTT format captions.

# subRipTextBottomRegion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The bottom caption region for SubRip Text (SRT) format captions.

## Declaration

```objectivec
@property (class, readonly) AVCaptionRegion * subRipTextBottomRegion;
```

<a id="Discussion"></a>

## Discussion

This region is suitable for SRT format, and it occupies the entire video display area. The region uses a [AVCaptionRegionWritingModeLeftToRightAndTopToBottom](writingmode-swift.enum/lefttorightandtoptobottom.md) writing mode, where a line progresses left to right and the block extends from top to bottom. The system stacks each line of text with bottom justification.

## See Also

### Accessing defined regions

- [appleITTTopRegion](appleitttop.md): The top region for iTT format captions.
- [appleITTBottomRegion](appleittbottom.md): The bottom region for iTT format captions.
- [appleITTLeftRegion](appleittleft.md): The left region for iTT format captions.
- [appleITTRightRegion](appleittright.md): The right region for iTT format captions.
