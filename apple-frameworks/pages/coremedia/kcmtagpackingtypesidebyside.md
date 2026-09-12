> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtagpackingtypesidebyside](https://developer.apple.com/documentation/coremedia/kcmtagpackingtypesidebyside)

# kCMTagPackingTypeSideBySide

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A tag stating that associated video has packed frames with a left eye image on the left and right eye image on the right.

## Declaration

```objectivec
extern const CMTag kCMTagPackingTypeSideBySide;
```

<a id="Discussion"></a>

## Discussion

This value is for use in tags with the [kCMTagCategory_PackingType](cmtagcategory/kcmtagcategory_packingtype.md) category. For side-by-side packed frames, the width of a frame in video data is twice as wide as the video displayed.

## See Also

### Frame Arrangements

- [kCMTagPackingTypeNone](kcmtagpackingtypenone.md): A frame-packing tag value for video without packed frames.
- [kCMTagPackingTypeOverUnder](kcmtagpackingtypeoverunder.md): A tag stating that associated video has packed frames with a left eye image on the top and right eye image on the bottom.
