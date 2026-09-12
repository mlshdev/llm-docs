> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/adjust-crop](https://developer.apple.com/documentation/professional-video-applications/adjust-crop)

# adjust-crop

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Modifies the visible image width and height.

<a id="overview"></a>

## Overview

Modify the visible image width and height by cropping, trimming, or panning.

<a id="Attributes-of-the-adjust-crop-element"></a>

### Attributes of the adjust-crop element

| Attribute | Description |
| --- | --- |
| `mode` | Specifies the active crop mode (`trim`, `crop`, or `pan`). Only one crop mode is active at any given time. Define crop modes through the following child elements, whose attribute values (`left`, `top`, `right`, and `bottom`) are expressed as a percentage of the original frame height: ![](https://developer.apple.com/images/com.apple.professionalvideoapplications/spacer.png) `crop-rect` — Defines the crop values. ![](https://developer.apple.com/images/com.apple.professionalvideoapplications/spacer.png) `trim-rect` — Defines the trim values. ![](https://developer.apple.com/images/com.apple.professionalvideoapplications/spacer.png) `pan-rect` — Defines the pan and zoom animation values. |
| `enabled` | Enables (`1`, default) or disables (`0`) this crop adjustment. |

## See Also

### Video Adjustment Elements

- [adjust-blend](adjust-blend.md): Modifies the compositing blend mode and opacity percentage.
- [adjust-cinematic](adjust-cinematic.md): Describes the focus of Cinematic Video clips.
- [adjust-conform](adjust-conform.md): Modifies the image size of a clip.
- [adjust-corners](adjust-corners.md): Modifies the corners of a visible image.
- [adjust-rollingShutter](adjust-rollingshutter.md): Specifies the rolling shutter reduction to apply to a clip.
- [adjust-stabilization](adjust-stabilization.md): Specifies the stabilization to aplly to a clip.
- [adjust-transform](adjust-transform.md): Modifies the visible image through resizing, moving, or rotating.
