> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/tag-values](https://developer.apple.com/documentation/coremedia/tag-values)

# Tag Values (Swift)

**Framework:** Core Media  
**Kind:** API Collection

# Tag Values (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

## Topics

### Media Type

Values for use with the tag media type category.

- [kCMTagMediaTypeVideo](kcmtagmediatypevideo.md): A value for associating a tag’s media type with video.
- [kCMTagMediaTypeAudio](kcmtagmediatypeaudio.md): A value for associating a tag’s media type with audio.
- [kCMTagMediaTypeMetadata](kcmtagmediatypemetadata.md): A value for associating a tag’s media type with metadata.

### Media Subtype

Values for use with the tag media subtype category.

- [kCMTagMediaSubTypeMebx](kcmtagmediasubtypemebx.md)

### Frame Arrangements

Values for use with the tag frame-packing information category.

- [kCMTagPackingTypeNone](kcmtagpackingtypenone.md): A frame-packing tag value for video without packed frames.
- [kCMTagPackingTypeSideBySide](kcmtagpackingtypesidebyside.md): A tag stating that associated video has packed frames with a left eye image on the left and right eye image on the right.
- [kCMTagPackingTypeOverUnder](kcmtagpackingtypeoverunder.md): A tag stating that associated video has packed frames with a left eye image on the top and right eye image on the bottom.

### Projection Surfaces

Values for use with the tag projection type category.

- [kCMTagProjectionTypeRectangular](kcmtagprojectiontyperectangular.md): A value for projection tags indicating that display is on a flat rectangular surface.
- [kCMTagProjectionTypeEquirectangular](kcmtagprojectiontypeequirectangular.md): A value for projection tags indicating that display is on a 360 degree equirectangular projection.
- [kCMTagProjectionTypeFisheye](kcmtagprojectiontypefisheye.md): Video content displays as a fisheye projection.

### 3D Video Data

Values for use with the tag categories that provide stereo video metadata.

- [kCMTagStereoInterpretationOrderReversed](kcmtagstereointerpretationorderreversed.md): A value for a stereo interpretation tag indicating the video data for the left and right eyes are reversed.
- [kCMTagStereoLeftAndRightEye](kcmtagstereoleftandrighteye.md): A value for a stereo tag indicating the video track has left and right eye layers.
- [kCMTagStereoLeftEye](kcmtagstereolefteye.md): A value for a stereo tag indicating the video track has a left eye layer.
- [kCMTagStereoRightEye](kcmtagstereorighteye.md): A value for a stereo tag indicating the video track has a right eye layer.
- [kCMTagStereoNone](kcmtagstereonone.md): A value for a stereo tag indicating the video track has no eye layer data.

## See Also

### Constants

- [kCMTagCategoryKey](kcmtagcategorykey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s category.
- [kCMTagDataTypeKey](kcmtagdatatypekey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s data type.
- [kCMTagValueKey](kcmtagvaluekey.md): A constant for use as a key during tag creation from a dictionary, whose value is the tag’s contained value.
- [kCMTagInvalid](kcmtaginvalid.md): A constant representing an invalid tag.
