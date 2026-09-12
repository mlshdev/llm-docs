> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/capturesmouseclicks](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/capturesmouseclicks)

# capturesMouseClicks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that specifies whether mouse clicks appear highlighted in the captured output.

## Declaration

```swift
var capturesMouseClicks: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, `AVCaptureScreenInput` does not highlight mouse clicks in its captured output.

If you set this property is set to [true](https://developer.apple.com/documentation/swift/true), mouse clicks are highlighted (a circle is drawn around the mouse for the duration of the click) in the captured output.

## See Also

### Capturing mouse activity

- [capturesCursor](capturescursor.md): A Boolean value that specifies whether the mouse cursor appears in the captured output.

# capturesMouseClicks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that specifies whether mouse clicks appear highlighted in the captured output.

## Declaration

```objectivec
@property (nonatomic) BOOL capturesMouseClicks;
```

<a id="Discussion"></a>

## Discussion

By default, `AVCaptureScreenInput` does not highlight mouse clicks in its captured output.

If you set this property is set to [true](https://developer.apple.com/documentation/swift/true), mouse clicks are highlighted (a circle is drawn around the mouse for the duration of the click) in the captured output.

## See Also

### Capturing mouse activity

- [capturesCursor](capturescursor.md): A Boolean value that specifies whether the mouse cursor appears in the captured output.
