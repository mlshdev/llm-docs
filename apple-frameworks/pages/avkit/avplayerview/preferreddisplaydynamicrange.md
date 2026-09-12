> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/preferreddisplaydynamicrange](https://developer.apple.com/documentation/avkit/avplayerview/preferreddisplaydynamicrange)

# preferredDisplayDynamicRange (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Describes how High Dynamic Range (HDR) video content renders.

## Declaration

```swift
var preferredDisplayDynamicRange: AVDisplayDynamicRange { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `AVDisplayDynamicRangeAutomatic`.

> **Note**

> This property will only have effect if the video content supports HDR.

## See Also

### High dynamic range

- [AVDisplayDynamicRange](../avdisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.

# preferredDisplayDynamicRange (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Describes how High Dynamic Range (HDR) video content renders.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) AVDisplayDynamicRange preferredDisplayDynamicRange;
```

<a id="discussion"></a>

## Discussion

Defaults to `AVDisplayDynamicRangeAutomatic`.

> **Note**

> This property will only have effect if the video content supports HDR.

## See Also

### High dynamic range

- [AVDisplayDynamicRange](../avdisplaydynamicrange.md): Describes how High Dynamic Range (HDR) video content renders.
