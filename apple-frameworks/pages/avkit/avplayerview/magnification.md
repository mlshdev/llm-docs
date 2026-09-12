> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/magnification](https://developer.apple.com/documentation/avkit/avplayerview/magnification)

# magnification (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The factor by which the video’s view is currently scaled.

## Declaration

```swift
var magnification: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The supported magnification range is `1.0` to `64.0`. The system zooms using nearest neighbor interpolation after it scales the content past a certain factor.

The default value is `1.0`.

## See Also

### Magnifying video

- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.
- [setMagnification(\_:centeredAt:)](setmagnification%28__centeredat_%29.md): Scales the video’s view by a specified factor, and centers the result on a specified point.

# magnification (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The factor by which the video’s view is currently scaled.

## Declaration

```objectivec
@property (nonatomic, setter=setMagnification:) CGFloat magnification;
```

<a id="Discussion"></a>

## Discussion

The supported magnification range is `1.0` to `64.0`. The system zooms using nearest neighbor interpolation after it scales the content past a certain factor.

The default value is `1.0`.

## See Also

### Magnifying video

- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.
- [setMagnification:centeredAtPoint:](setmagnification%28__centeredat_%29.md): Scales the video’s view by a specified factor, and centers the result on a specified point.
