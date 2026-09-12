> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/appleittbottom](https://developer.apple.com/documentation/avfoundation/avcaptionregion/appleittbottom)

# appleITTBottom (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The bottom region for iTT format captions.

## Declaration

```swift
class var appleITTBottom: AVCaptionRegion { get }
```

<a id="Discussion"></a>

## Discussion

This region occupies the bottom 15% of the display area, and it uses a LRTB layout where a line progresses from left to right and the block extends from top to bottom. Lines are bottom justified.

## See Also

### Accessing defined regions

- [appleITTTop](appleitttop.md): The top region for iTT format captions.
- [appleITTLeft](appleittleft.md): The left region for iTT format captions.
- [appleITTRight](appleittright.md): The right region for iTT format captions.
- [subRipTextBottom](subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.

# appleITTBottomRegion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The bottom region for iTT format captions.

## Declaration

```objectivec
@property (class, readonly) AVCaptionRegion * appleITTBottomRegion;
```

<a id="Discussion"></a>

## Discussion

This region occupies the bottom 15% of the display area, and it uses a LRTB layout where a line progresses from left to right and the block extends from top to bottom. Lines are bottom justified.

## See Also

### Accessing defined regions

- [appleITTTopRegion](appleitttop.md): The top region for iTT format captions.
- [appleITTLeftRegion](appleittleft.md): The left region for iTT format captions.
- [appleITTRightRegion](appleittright.md): The right region for iTT format captions.
- [subRipTextBottomRegion](subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.
