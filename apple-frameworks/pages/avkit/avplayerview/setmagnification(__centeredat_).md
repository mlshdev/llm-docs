> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/setmagnification(_:centeredat:)](https://developer.apple.com/documentation/avkit/avplayerview/setmagnification(_:centeredat:))

# setMagnification(\_:centeredAt:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Scales the video’s view by a specified factor, and centers the result on a specified point.

## Declaration

```swift
func setMagnification(_ magnification: CGFloat, centeredAt point: CGPoint)
```

## Parameters

- `magnification`: A factor by which to scale the video’s view.
- `point`: A point in view space on which to center magnification.

<a id="Discussion"></a>

## Discussion

The supported magnification range is `1.0` to `64.0`. The system zooms using nearest neighbor interpolation after it scales the content past a certain factor.

## See Also

### Magnifying video

- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.
- [magnification](magnification.md): The factor by which the video’s view is currently scaled.

# setMagnification:centeredAtPoint: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Scales the video’s view by a specified factor, and centers the result on a specified point.

## Declaration

```objectivec
- (void) setMagnification:(CGFloat) magnification centeredAtPoint:(CGPoint) point;
```

## Parameters

- `magnification`: A factor by which to scale the video’s view.
- `point`: A point in view space on which to center magnification.

<a id="Discussion"></a>

## Discussion

The supported magnification range is `1.0` to `64.0`. The system zooms using nearest neighbor interpolation after it scales the content past a certain factor.

## See Also

### Magnifying video

- [allowsMagnification](allowsmagnification.md): A Boolean value that indicates whether the magnify gesture changes the video’s view magnification.
- [magnification](magnification.md): The factor by which the video’s view is currently scaled.
