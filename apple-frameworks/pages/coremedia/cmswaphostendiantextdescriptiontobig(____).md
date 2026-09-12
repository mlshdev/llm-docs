> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmswaphostendiantextdescriptiontobig(_:_:)](https://developer.apple.com/documentation/coremedia/cmswaphostendiantextdescriptiontobig(_:_:))

# CMSwapHostEndianTextDescriptionToBig(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a text description structure from host-endian to big-endian, in place.

## Declaration

```swift
func CMSwapHostEndianTextDescriptionToBig(_ textDescriptionData: UnsafeMutablePointer<UInt8>, _ textDescriptionSize: Int) -> OSStatus
```

## Parameters

- `textDescriptionData`: TextDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `textDescriptionSize`: Size of TextDescription data structure.

## See Also

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle(\_:localFontIDOut:boldOut:italicOut:underlineOut:fontSizeOut:colorComponentsOut:)](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDefaultTextBox(\_:originIsAtTopLeft:heightOfTextTrack:defaultTextBoxOut:)](cmtextformatdescriptiongetdefaulttextbox%28__originisattopleft_heightoftexttrack_defaulttextboxout_%29.md): Returns the default text box.
- [CMTextFormatDescriptionGetDisplayFlags(\_:displayFlagsOut:)](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName(\_:localFontID:fontNameOut:)](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionGetJustification(\_:horizontalOut:verticalOut:)](cmtextformatdescriptiongetjustification%28__horizontalout_verticalout_%29.md): Returns the horizontal and vertical justification.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer(allocator:textFormatDescription:flavor:blockBufferOut:)](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer(allocator:bigEndianTextDescriptionBlockBuffer:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData(allocator:bigEndianTextDescriptionData:size:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost(\_:\_:)](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.

# CMSwapHostEndianTextDescriptionToBig (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts a text description structure from host-endian to big-endian, in place.

## Declaration

```objectivec
extern OSStatus CMSwapHostEndianTextDescriptionToBig(uint8_t *textDescriptionData, size_t textDescriptionSize);
```

## Parameters

- `textDescriptionData`: TextDescription data structure in host-endian byte ordering to be converted to big-endian byte ordering.
- `textDescriptionSize`: Size of TextDescription data structure.

## See Also

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDefaultTextBox](cmtextformatdescriptiongetdefaulttextbox%28__originisattopleft_heightoftexttrack_defaulttextboxout_%29.md): Returns the default text box.
- [CMTextFormatDescriptionGetDisplayFlags](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionGetJustification](cmtextformatdescriptiongetjustification%28__horizontalout_verticalout_%29.md): Returns the horizontal and vertical justification.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
