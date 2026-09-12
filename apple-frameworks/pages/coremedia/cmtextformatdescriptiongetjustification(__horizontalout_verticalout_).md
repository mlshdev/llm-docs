> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtextformatdescriptiongetjustification(_:horizontalout:verticalout:)](https://developer.apple.com/documentation/coremedia/cmtextformatdescriptiongetjustification(_:horizontalout:verticalout:))

# CMTextFormatDescriptionGetJustification(\_:horizontalOut:verticalOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the horizontal and vertical justification.

## Declaration

```swift
func CMTextFormatDescriptionGetJustification(_ desc: CMFormatDescription, horizontalOut horizontaJustificationlOut: UnsafeMutablePointer<CMTextJustificationValue>?, verticalOut verticalJustificationOut: UnsafeMutablePointer<CMTextJustificationValue>?) -> OSStatus
```

## Parameters

- `desc`: `CMFormatDescription` being interrogated.
- `horizontaJustificationlOut`: Horizontal justification mode. May be `NULL`.
- `verticalJustificationOut`: Vertical justification mode. May be `NULL`.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

For possible values see [CMTextJustificationValue](cmtextjustificationvalue.md).

## See Also

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle(\_:localFontIDOut:boldOut:italicOut:underlineOut:fontSizeOut:colorComponentsOut:)](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDefaultTextBox(\_:originIsAtTopLeft:heightOfTextTrack:defaultTextBoxOut:)](cmtextformatdescriptiongetdefaulttextbox%28__originisattopleft_heightoftexttrack_defaulttextboxout_%29.md): Returns the default text box.
- [CMTextFormatDescriptionGetDisplayFlags(\_:displayFlagsOut:)](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName(\_:localFontID:fontNameOut:)](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer(allocator:textFormatDescription:flavor:blockBufferOut:)](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer(allocator:bigEndianTextDescriptionBlockBuffer:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData(allocator:bigEndianTextDescriptionData:size:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost(\_:\_:)](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTextDescriptionToBig(\_:\_:)](cmswaphostendiantextdescriptiontobig%28____%29.md): Converts a text description structure from host-endian to big-endian, in place.

# CMTextFormatDescriptionGetJustification (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the horizontal and vertical justification.

## Declaration

```objectivec
extern OSStatus CMTextFormatDescriptionGetJustification(CMFormatDescriptionRef desc, CMTextJustificationValue *horizontaJustificationlOut, CMTextJustificationValue *verticalJustificationOut);
```

## Parameters

- `desc`: `CMFormatDescription` being interrogated.
- `horizontaJustificationlOut`: Horizontal justification mode. May be `NULL`.
- `verticalJustificationOut`: Vertical justification mode. May be `NULL`.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

For possible values see [CMTextJustificationValue](cmtextjustificationvalue.md).

## See Also

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDefaultTextBox](cmtextformatdescriptiongetdefaulttextbox%28__originisattopleft_heightoftexttrack_defaulttextboxout_%29.md): Returns the default text box.
- [CMTextFormatDescriptionGetDisplayFlags](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTextDescriptionToBig](cmswaphostendiantextdescriptiontobig%28____%29.md): Converts a text description structure from host-endian to big-endian, in place.
