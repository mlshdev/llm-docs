> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/kcmtagpackingtypeoverunder

# kCMTagPackingTypeOverUnder

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A tag stating that associated video has packed frames with a left eye image on the top and right eye image on the bottom.

## Declaration

```objectivec
extern const CMTag kCMTagPackingTypeOverUnder;
```

<a id="Discussion"></a>

## Discussion

This value is for use in tags with the [kCMTagCategory_PackingType](cmtagcategory/kcmtagcategory_packingtype.md) category. For over-under packed frames, the height of a frame in video data is twice as high as the video displayed.

## See Also

### Frame Arrangements

- [kCMTagPackingTypeNone](kcmtagpackingtypenone.md): A frame-packing tag value for video without packed frames.
- [kCMTagPackingTypeSideBySide](kcmtagpackingtypesidebyside.md): A tag stating that associated video has packed frames with a left eye image on the left and right eye image on the right.
