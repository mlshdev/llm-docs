> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/appleittleft](https://developer.apple.com/documentation/avfoundation/avcaptionregion/appleittleft)

# appleITTLeft (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The left region for iTT format captions.

## Declaration

```swift
class var appleITTLeft: AVCaptionRegion { get }
```

<a id="Discussion"></a>

## Discussion

This region occupies the left 15% of the display area, and it uses a TBRL layout where a line progresses from top to bottom and the block extends from right to left. Lines are left justified.

## See Also

### Accessing defined regions

- [appleITTTop](appleitttop.md): The top region for iTT format captions.
- [appleITTBottom](appleittbottom.md): The bottom region for iTT format captions.
- [appleITTRight](appleittright.md): The right region for iTT format captions.
- [subRipTextBottom](subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.

# appleITTLeftRegion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The left region for iTT format captions.

## Declaration

```objectivec
@property (class, readonly) AVCaptionRegion * appleITTLeftRegion;
```

<a id="Discussion"></a>

## Discussion

This region occupies the left 15% of the display area, and it uses a TBRL layout where a line progresses from top to bottom and the block extends from right to left. Lines are left justified.

## See Also

### Accessing defined regions

- [appleITTTopRegion](appleitttop.md): The top region for iTT format captions.
- [appleITTBottomRegion](appleittbottom.md): The bottom region for iTT format captions.
- [appleITTRightRegion](appleittright.md): The right region for iTT format captions.
- [subRipTextBottomRegion](subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.
