> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput/capturescursor](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/capturescursor)

# capturesCursor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that specifies whether the mouse cursor appears in the captured output.

## Declaration

```swift
var capturesCursor: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is true (the default), captured video frames include the mouse pointer. If you change this property to false, the captured output contains only the windows on the screen (that is, the mouse pointer is invisible in captured video).

> **Note**

>  Even if you hide the mouse pointer in captured output, [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) objects vended by the capture include metadata for the cursor position and mouse button state. See [kCMIOSampleBufferAttachmentKey_MouseAndKeyboardModifiers](https://developer.apple.com/documentation/coremediaio/kcmiosamplebufferattachmentkey_mouseandkeyboardmodifiers).

## See Also

### Capturing mouse activity

- [capturesMouseClicks](capturesmouseclicks.md): A Boolean value that specifies whether mouse clicks appear highlighted in the captured output.

# capturesCursor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that specifies whether the mouse cursor appears in the captured output.

## Declaration

```objectivec
@property (nonatomic) BOOL capturesCursor;
```

<a id="Discussion"></a>

## Discussion

When this property is true (the default), captured video frames include the mouse pointer. If you change this property to false, the captured output contains only the windows on the screen (that is, the mouse pointer is invisible in captured video).

> **Note**

>  Even if you hide the mouse pointer in captured output, [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) objects vended by the capture include metadata for the cursor position and mouse button state. See [kCMIOSampleBufferAttachmentKey_MouseAndKeyboardModifiers](https://developer.apple.com/documentation/coremediaio/kcmiosamplebufferattachmentkey_mouseandkeyboardmodifiers).

## See Also

### Capturing mouse activity

- [capturesMouseClicks](capturesmouseclicks.md): A Boolean value that specifies whether mouse clicks appear highlighted in the captured output.
