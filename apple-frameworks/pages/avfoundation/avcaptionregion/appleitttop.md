> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/appleitttop](https://developer.apple.com/documentation/avfoundation/avcaptionregion/appleitttop)

# appleITTTop (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The top region for iTT format captions.

## Declaration

```swift
class var appleITTTop: AVCaptionRegion { get }
```

<a id="Discussion"></a>

## Discussion

This region is available when working with iTT captions. It occupies the top 15% of the display area, and it uses a LRTB layout where a line progresses from left to right and the block extends from top to bottom. Lines are top justified.

## See Also

### Accessing defined regions

- [appleITTBottom](appleittbottom.md): The bottom region for iTT format captions.
- [appleITTLeft](appleittleft.md): The left region for iTT format captions.
- [appleITTRight](appleittright.md): The right region for iTT format captions.
- [subRipTextBottom](subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.

# appleITTTopRegion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The top region for iTT format captions.

## Declaration

```objectivec
@property (class, readonly) AVCaptionRegion * appleITTTopRegion;
```

<a id="Discussion"></a>

## Discussion

This region is available when working with iTT captions. It occupies the top 15% of the display area, and it uses a LRTB layout where a line progresses from left to right and the block extends from top to bottom. Lines are top justified.

## See Also

### Accessing defined regions

- [appleITTBottomRegion](appleittbottom.md): The bottom region for iTT format captions.
- [appleITTLeftRegion](appleittleft.md): The left region for iTT format captions.
- [appleITTRightRegion](appleittright.md): The right region for iTT format captions.
- [subRipTextBottomRegion](subriptextbottom.md): The bottom caption region for SubRip Text (SRT) format captions.
