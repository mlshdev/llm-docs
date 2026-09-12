> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/croprect](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/croprect)

# cropRect (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Indicates the bounding rectangle of the screen area to be captured, in pixels.

## Declaration

```swift
var cropRect: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

By default, `AVCaptureScreenInput` captures the entire area of the displayID with which it is associated.

Set the value of this property to limit the capture rectangle to a subsection of the screen.

The rectangle should define a smaller section of the screen in the screen’s coordinate system. The origin (0,0) is the bottom-left corner of the screen.

## See Also

### Setting video capture options

- [minFrameDuration](minframeduration.md): The screen input’s minimum frame duration.
- [scaleFactor](scalefactor.md): Indicates the factor by which video buffers captured from the screen are to be scaled.

# cropRect (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Indicates the bounding rectangle of the screen area to be captured, in pixels.

## Declaration

```objectivec
@property (nonatomic) CGRect cropRect;
```

<a id="Discussion"></a>

## Discussion

By default, `AVCaptureScreenInput` captures the entire area of the displayID with which it is associated.

Set the value of this property to limit the capture rectangle to a subsection of the screen.

The rectangle should define a smaller section of the screen in the screen’s coordinate system. The origin (0,0) is the bottom-left corner of the screen.

## See Also

### Setting video capture options

- [minFrameDuration](minframeduration.md): The screen input’s minimum frame duration.
- [scaleFactor](scalefactor.md): Indicates the factor by which video buffers captured from the screen are to be scaled.
