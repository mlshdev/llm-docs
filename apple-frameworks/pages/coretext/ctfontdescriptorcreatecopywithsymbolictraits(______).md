> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcreatecopywithsymbolictraits(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcreatecopywithsymbolictraits(_:_:_:))

# CTFontDescriptorCreateCopyWithSymbolicTraits(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the font descriptor with the specified symbolic traits as the original.

## Declaration

```swift
func CTFontDescriptorCreateCopyWithSymbolicTraits(_ original: CTFontDescriptor, _ symTraitValue: CTFontSymbolicTraits, _ symTraitMask: CTFontSymbolicTraits) -> CTFontDescriptor?
```

## Parameters

- `original`: The original font descriptor.
- `symTraitValue`: The value of the symbolic traits.
- `symTraitMask`: The mask bits of the symbolic traits. This parameter represents a bitfield that indicates which traits should be changed and which should be taken from the original font descriptor.

<a id="return-value"></a>

## Return Value

Returns a new font descriptor reference in the same family with the given symbolic traits, or `NULL` if no matching font descriptor is found in the system.

<a id="Discussion"></a>

## Discussion

This bitfield of `symTraitValue` parameter indicates the desired value for the traits specified by the `symTraitMask` parameter. Used in conjunction, they can allow for trait removal as well as addition.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize(\_:\_:)](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes(\_:)](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes(\_:\_:)](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation(\_:\_:\_:)](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature(\_:\_:\_:)](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily(\_:\_:)](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateMatchingFontDescriptors(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

# CTFontDescriptorCreateCopyWithSymbolicTraits (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the font descriptor with the specified symbolic traits as the original.

## Declaration

```objectivec
extern CTFontDescriptorRefCTFontDescriptorCreateCopyWithSymbolicTraits(CTFontDescriptorRef original, CTFontSymbolicTraits symTraitValue, CTFontSymbolicTraits symTraitMask);
```

## Parameters

- `original`: The original font descriptor.
- `symTraitValue`: The value of the symbolic traits.
- `symTraitMask`: The mask bits of the symbolic traits. This parameter represents a bitfield that indicates which traits should be changed and which should be taken from the original font descriptor.

<a id="return-value"></a>

## Return Value

Returns a new font descriptor reference in the same family with the given symbolic traits, or `NULL` if no matching font descriptor is found in the system.

<a id="Discussion"></a>

## Discussion

This bitfield of `symTraitValue` parameter indicates the desired value for the traits specified by the `symTraitMask` parameter. Used in conjunction, they can allow for trait removal as well as addition.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithFamily](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateMatchingFontDescriptors](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.
