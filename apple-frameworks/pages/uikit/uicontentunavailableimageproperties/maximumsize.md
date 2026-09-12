> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableimageproperties/maximumsize](https://developer.apple.com/documentation/uikit/uicontentunavailableimageproperties/maximumsize)

# maximumSize

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A maximum size for the image.

## Declaration

```objectivec
@property (nonatomic) CGSize maximumSize;
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md). Setting a [width](../../corefoundation/cgsize/width.md) or [height](../../corefoundation/cgsize/height.md) of zero makes the size unconstrained on that dimension. If the image exceeds [maximumSize](../uicontentunavailableconfiguration-swift.struct/imageproperties-swift.struct/maximumsize.md) size on either dimension, the view reduces its size proportionately, maintaining aspect ratio.
