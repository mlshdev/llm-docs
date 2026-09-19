> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/kcmtagpackingtypenone

# kCMTagPackingTypeNone

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A frame-packing tag value for video without packed frames.

## Declaration

```objectivec
extern const CMTag kCMTagPackingTypeNone;
```

<a id="Discussion"></a>

## Discussion

This value is for use in tags with the [kCMTagCategory_PackingType](cmtagcategory/kcmtagcategory_packingtype.md) category.

## See Also

### Frame Arrangements

- [kCMTagPackingTypeSideBySide](kcmtagpackingtypesidebyside.md): A tag stating that associated video has packed frames with a left eye image on the left and right eye image on the right.
- [kCMTagPackingTypeOverUnder](kcmtagpackingtypeoverunder.md): A tag stating that associated video has packed frames with a left eye image on the top and right eye image on the bottom.
