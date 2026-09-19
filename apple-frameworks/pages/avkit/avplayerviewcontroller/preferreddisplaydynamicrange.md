> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontroller/preferreddisplaydynamicrange

# preferredDisplayDynamicRange (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

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
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

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
