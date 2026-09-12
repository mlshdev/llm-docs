> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput/init(videodisplay:)](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/init(videodisplay:))

# init(videoDisplay:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Creates a rendered legible output object.

## Declaration

```swift
init(videoDisplay videoDisplaySize: CGSize)
```

## Parameters

- `videoDisplaySize`: The size of the video display.

<a id="Discussion"></a>

## Discussion

You can also choose to reset the [videoDisplaySize](videodisplaysize.md) value after initialization or during playback.

> **Important**

>  Attempting to set a video display size of [zero](../../corefoundation/cgsize/zero.md) results in the system throwing an exception.

# initWithVideoDisplaySize: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Creates a rendered legible output object.

## Declaration

```objectivec
- (instancetype) initWithVideoDisplaySize:(CGSize) videoDisplaySize;
```

## Parameters

- `videoDisplaySize`: The size of the video display.

<a id="Discussion"></a>

## Discussion

You can also choose to reset the [videoDisplaySize](videodisplaysize.md) value after initialization or during playback.

> **Important**

>  Attempting to set a video display size of [zero](../../corefoundation/cgsize/zero.md) results in the system throwing an exception.
