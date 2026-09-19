> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerview/allowsmagnification

# allowsMagnification (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.

## Declaration

```swift
var allowsMagnification: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`. This property only affects whether the magnify gesture triggers magnification. Your app can still programmatically change magnification even when the value of this is `false`, which matches the behavior of [NSScrollView](https://developer.apple.com/documentation/appkit/nsscrollview).

## See Also

### Magnifying video

- [magnification](magnification.md): The factor by which the video’s view is currently scaled.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Scales the video’s view by a specified factor, and centers the result on a specified point.

# allowsMagnification (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.

## Declaration

```objectivec
@property (nonatomic, setter=setAllowsMagnification:) BOOL allowsMagnification;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`. This property only affects whether the magnify gesture triggers magnification. Your app can still programmatically change magnification even when the value of this is `false`, which matches the behavior of [NSScrollView](https://developer.apple.com/documentation/appkit/nsscrollview).

## See Also

### Magnifying video

- [magnification](magnification.md): The factor by which the video’s view is currently scaled.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Scales the video’s view by a specified factor, and centers the result on a specified point.
