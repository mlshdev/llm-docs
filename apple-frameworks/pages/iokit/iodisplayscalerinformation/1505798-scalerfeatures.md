> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodisplayscalerinformation/1505798-scalerfeatures](https://developer.apple.com/documentation/iokit/iodisplayscalerinformation/1505798-scalerfeatures)

# scalerFeatures

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Mask of scaling features.

## Declaration

```objectivec
IOOptionBits scalerFeatures;
```

<a id="discussion"></a>

## Discussion

The following are defined:

|  |  |
| --- | --- |
| `kIOScaleStretchOnly` | If set, the framebuffer can only provide stretched scaling with non-square pixels, without borders. |
| `kIOScaleCanUpSamplePixels` | If set, framebuffer can scale up from a smaller number of source pixels to a larger native timing (eg. 640x480 pixels on a 1600x1200 timing). |
| `kIOScaleCanDownSamplePixels` | If set, framebuffer can scale down from a larger number of source pixels to a smaller native timing (eg. 1600x1200 pixels on a 640x480 timing). |
| `kIOScaleCanScaleInterlaced` | If set, framebuffer can scale an interlaced detailed timing. |
| `kIOScaleCanSupportInset` | If set, framebuffer can support scaled modes with non-zero `horizontalScaledInset, verticalScaledInset` fields. |
| `kIOScaleCanRotate` | If set, framebuffer can support some of the flags in the kIOScaleRotateFlags mask. |
| `kIOScaleCanBorderInsetOnly` | If set, framebuffer can support scaled modes with non-zero `horizontalScaledInset, verticalScaledInset `fields, but requires the active pixels to be equal in size to the inset area, ie. can do insets with a border versus scaling an image. |

## See Also

### Fields

- [\__reservedA](../iographicstypes_h_user-space/iodisplayscalerinformation/2587787-_reserveda.md): Set to zero.
- [version](1505407-version.md): Set to zero.
- [\__reservedB](../iographicstypes_h_user-space/iodisplayscalerinformation/2587788-_reservedb.md): Set to zero.
- [maxHorizontalPixels](1505378-maxhorizontalpixels.md): Maximum number of horizontal source pixels (horizontalScaled).
- [maxVerticalPixels](1505468-maxverticalpixels.md): Maximum number of vertical source pixels (verticalScaled).
- [\__reservedC](../iographicstypes_h_user-space/iodisplayscalerinformation/2587789-_reservedc.md): Set to zero.
