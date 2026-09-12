> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcreatematchingfontdescriptors(_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcreatematchingfontdescriptors(_:_:))

# CTFontDescriptorCreateMatchingFontDescriptors(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of normalized font descriptors matching the provided descriptor.

## Declaration

```swift
func CTFontDescriptorCreateMatchingFontDescriptors(_ descriptor: CTFontDescriptor, _ mandatoryAttributes: CFSet?) -> CFArray?
```

## Parameters

- `descriptor`: The font descriptor.
- `mandatoryAttributes`: A set of attribute keys that must be identically matched in any returned font descriptors. May be `NULL`.

<a id="return-value"></a>

## Return Value

A retained array of normalized font descriptors matching the attributes present in `descriptor`.

<a id="Discussion"></a>

## Discussion

If `descriptor` itself is normalized, then the array will contain only one item: the original descriptor. In the context of font descriptors, *normalized* infers that the input values were matched up with actual existing fonts, and the descriptors for those existing fonts are the returned normalized descriptors.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize(\_:\_:)](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes(\_:)](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes(\_:\_:)](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation(\_:\_:\_:)](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature(\_:\_:\_:)](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily(\_:\_:)](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits(\_:\_:\_:)](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptor(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

# CTFontDescriptorCreateMatchingFontDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of normalized font descriptors matching the provided descriptor.

## Declaration

```objectivec
extern CFArrayRefCTFontDescriptorCreateMatchingFontDescriptors(CTFontDescriptorRef descriptor, CFSetRef mandatoryAttributes);
```

## Parameters

- `descriptor`: The font descriptor.
- `mandatoryAttributes`: A set of attribute keys that must be identically matched in any returned font descriptors. May be `NULL`.

<a id="return-value"></a>

## Return Value

A retained array of normalized font descriptors matching the attributes present in `descriptor`.

<a id="Discussion"></a>

## Discussion

If `descriptor` itself is normalized, then the array will contain only one item: the original descriptor. In the context of font descriptors, *normalized* infers that the input values were matched up with actual existing fonts, and the descriptors for those existing fonts are the returned normalized descriptors.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptor](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.
