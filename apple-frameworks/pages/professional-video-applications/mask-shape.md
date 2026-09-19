> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional-video-applications/mask-shape

# mask-shape

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Describes a shape that serves as a mask.

<a id="overview"></a>

## Overview

Define a shape mask in terms of a few parameters and describe these parameters using a `param` element. You can add animation to the shape by applying key frame animation to the parameters.

The attribute below controls the characteristics of the mask.

| Attribute | Description |
| --- | --- |
| `blendMode` | Specifies how to combine the shape mask with other masks for a masked filter.  ![](https://developer.apple.com/images/com.apple.professionalvideoapplications/spacer.png) The valid values are: `add`, `subtract`, or `multiply`. Default is `add`. |
| `tracking` | References a tracking shape associated with this shape mask. |

## See Also

### Mask Elements

- [mask-isolation](mask-isolation.md): Describes a color isolation mask.
