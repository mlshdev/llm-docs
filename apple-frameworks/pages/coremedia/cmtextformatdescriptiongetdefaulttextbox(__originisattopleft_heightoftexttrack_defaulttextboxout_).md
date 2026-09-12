> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtextformatdescriptiongetdefaulttextbox(_:originisattopleft:heightoftexttrack:defaulttextboxout:)](https://developer.apple.com/documentation/coremedia/cmtextformatdescriptiongetdefaulttextbox(_:originisattopleft:heightoftexttrack:defaulttextboxout:))

# CMTextFormatDescriptionGetDefaultTextBox(\_:originIsAtTopLeft:heightOfTextTrack:defaultTextBoxOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the default text box.

## Declaration

```swift
func CMTextFormatDescriptionGetDefaultTextBox(_ desc: CMFormatDescription, originIsAtTopLeft: Bool, heightOfTextTrack: CGFloat, defaultTextBoxOut: UnsafeMutablePointer<CGRect>) -> OSStatus
```

## Parameters

- `desc`: FormatDescription being interrogated.
- `originIsAtTopLeft`: Pass true if the `CGRect` will be used in an environment where (0,0) is at the top-left corner of an enclosing rectangle and y coordinates increase as you go down.

  Pass false if the `CGRect` will be used in an environment where (0,0) is at the bottom-left corner of an enclosing rectangle and y coordinates increase as you go up.
- `heightOfTextTrack`: If `originIsAtTopLeft` is false, pass the height of the enclosing text track or destination.                                    This value will be used to properly compute the default text box for the given origin. Ignored if `originIsAtTopLeft` is true.
- `defaultTextBoxOut`: On output, receives the default text box.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

Within a text track, text is rendered within a text box.  There is a default text box set, which can be over-ridden by a sample.

## See Also

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle(\_:localFontIDOut:boldOut:italicOut:underlineOut:fontSizeOut:colorComponentsOut:)](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDisplayFlags(\_:displayFlagsOut:)](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName(\_:localFontID:fontNameOut:)](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionGetJustification(\_:horizontalOut:verticalOut:)](cmtextformatdescriptiongetjustification%28__horizontalout_verticalout_%29.md): Returns the horizontal and vertical justification.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer(allocator:textFormatDescription:flavor:blockBufferOut:)](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer(allocator:bigEndianTextDescriptionBlockBuffer:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData(allocator:bigEndianTextDescriptionData:size:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost(\_:\_:)](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTextDescriptionToBig(\_:\_:)](cmswaphostendiantextdescriptiontobig%28____%29.md): Converts a text description structure from host-endian to big-endian, in place.

# CMTextFormatDescriptionGetDefaultTextBox (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the default text box.

## Declaration

```objectivec
extern OSStatus CMTextFormatDescriptionGetDefaultTextBox(CMFormatDescriptionRef desc, Boolean originIsAtTopLeft, CGFloat heightOfTextTrack, CGRect *defaultTextBoxOut);
```

## Parameters

- `desc`: FormatDescription being interrogated.
- `originIsAtTopLeft`: Pass true if the `CGRect` will be used in an environment where (0,0) is at the top-left corner of an enclosing rectangle and y coordinates increase as you go down.

  Pass false if the `CGRect` will be used in an environment where (0,0) is at the bottom-left corner of an enclosing rectangle and y coordinates increase as you go up.
- `heightOfTextTrack`: If `originIsAtTopLeft` is false, pass the height of the enclosing text track or destination.                                    This value will be used to properly compute the default text box for the given origin. Ignored if `originIsAtTopLeft` is true.
- `defaultTextBoxOut`: On output, receives the default text box.

<a id="return-value"></a>

## Return Value

A result code. Returns `noErr` if successful.

<a id="Discussion"></a>

## Discussion

Within a text track, text is rendered within a text box.  There is a default text box set, which can be over-ridden by a sample.

## See Also

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDisplayFlags](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionGetJustification](cmtextformatdescriptiongetjustification%28__horizontalout_verticalout_%29.md): Returns the horizontal and vertical justification.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTextDescriptionToBig](cmswaphostendiantextdescriptiontobig%28____%29.md): Converts a text description structure from host-endian to big-endian, in place.
