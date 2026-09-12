> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtypedtag/category-swift.struct](https://developer.apple.com/documentation/coremedia/cmtypedtag/category-swift.struct)

# CMTypedTag.Category

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An identifier for a media tag category.

## Declaration

```swift
struct Category
```

## Topics

### Creating Typed Categories

- [channelID](category-swift.struct/channelid.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging a channel ID.
- [mediaSubType](category-swift.struct/mediasubtype.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging media subtype metadata.
- [mediaType](category-swift.struct/mediatype.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging media type metadata.
- [packingType](category-swift.struct/packingtype.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging frame-packing information.
- [pixelFormat](category-swift.struct/pixelformat.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging pixel format information.
- [projectionType](category-swift.struct/projectiontype.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging projection surface information.
- [stereoView](category-swift.struct/stereoview.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging eye information for 3D video.
- [stereoViewInterpretation](category-swift.struct/stereoviewinterpretation.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging how to interpret stereo view metadata.
- [trackID](category-swift.struct/trackid.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging a track ID.
- [videoLayerID](category-swift.struct/videolayerid.md): Conforms when `TypedValue` conforms to `Sendable`. A category used for tagging a video layer ID.

### Getting Raw Categories

- [rawCategory](category-swift.struct/rawcategory.md): The raw 64-bit representation of the tag’s category.

### Transforming Tag Values

- [tagValue(for:)](category-swift.struct/tagvalue%28for_%29.md): Convert a typed value to a raw tag value for this category.
- [value(for:)](category-swift.struct/value%28for_%29.md): Convert a tag value into a typed value valid for this category, if possible.

### Initializers

- [init(rawCategory:valueForTagValue:tagValueForValue:)](category-swift.struct/init%28rawcategory_valuefortagvalue_tagvalueforvalue_%29.md): Creates a new tag category instance with defined mappings between a raw and typed tag value.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
