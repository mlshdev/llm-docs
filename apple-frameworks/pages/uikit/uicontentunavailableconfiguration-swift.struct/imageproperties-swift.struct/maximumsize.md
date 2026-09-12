> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableconfiguration-swift.struct/imageproperties-swift.struct/maximumsize](https://developer.apple.com/documentation/uikit/uicontentunavailableconfiguration-swift.struct/imageproperties-swift.struct/maximumsize)

# maximumSize

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

A maximum size for the image.

## Declaration

```swift
var maximumSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../../coregraphics/cgsizezero.md). Setting a [width](../../../corefoundation/cgsize/width.md) or [height](../../../corefoundation/cgsize/height.md) of zero makes the size unconstrained on that dimension. If the image exceeds [maximumSize](maximumsize.md) size on either dimension, the view reduces its size proportionately, maintaining aspect ratio.
