> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter/streamtype](https://developer.apple.com/documentation/screencapturekit/sccontentfilter/streamtype)

# streamType (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ (deprecated in 18.2) · macOS 14.0+ (deprecated in 14.2)

The type of the streaming content.

> Use style instead

## Declaration

```swift
var streamType: SCStreamType { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

>  Use the [style](style.md) property instead, which provides additional information about the content.

## See Also

### Filter properties

- [contentRect](contentrect.md): The size and location of the content to filter, in screen points.
- [pointPixelScale](pointpixelscale.md): The scaling factor used to translate screen points into pixels.
- [SCStreamType](../scstreamtype.md): Deprecated. The display type of the presented stream.
- [style](style.md): The display style of the sharable content.

# streamType (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ (deprecated in 18.2) · macOS 14.0+ (deprecated in 14.2)

The type of the streaming content.

> Use style instead

## Declaration

```objectivec
@property (nonatomic, readonly) SCStreamType streamType;
```

<a id="discussion"></a>

## Discussion

> **Note**

>  Use the [style](style.md) property instead, which provides additional information about the content.

## See Also

### Filter properties

- [contentRect](contentrect.md): The size and location of the content to filter, in screen points.
- [pointPixelScale](pointpixelscale.md): The scaling factor used to translate screen points into pixels.
- [SCStreamType](../scstreamtype.md): Deprecated. The display type of the presented stream.
- [style](style.md): The display style of the sharable content.
