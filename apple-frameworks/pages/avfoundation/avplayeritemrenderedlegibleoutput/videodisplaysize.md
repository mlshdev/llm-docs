> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput/videodisplaysize](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/videodisplaysize)

# videoDisplaySize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Set the video display size to use for rendering of pixel buffers.

## Declaration

```swift
var videoDisplaySize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The output renders the pixel buffers according to the width and height of display area. If you set this property during the presentation time of a vended caption image, the output vends a new image rendered at the new size.

> **Important**

>  Attempting to set a video display size of [zero](../../corefoundation/cgsize/zero.md) results in the system throwing an exception.

## See Also

### Configuring an output

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): Permits advance invocation of the associated delegate, if any.

# videoDisplaySize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Set the video display size to use for rendering of pixel buffers.

## Declaration

```objectivec
@property (nonatomic, assign) CGSize videoDisplaySize;
```

<a id="Discussion"></a>

## Discussion

The output renders the pixel buffers according to the width and height of display area. If you set this property during the presentation time of a vended caption image, the output vends a new image rendered at the new size.

> **Important**

>  Attempting to set a video display size of [zero](../../corefoundation/cgsize/zero.md) results in the system throwing an exception.

## See Also

### Configuring an output

- [advanceIntervalForDelegateInvocation](advanceintervalfordelegateinvocation.md): Permits advance invocation of the associated delegate, if any.
