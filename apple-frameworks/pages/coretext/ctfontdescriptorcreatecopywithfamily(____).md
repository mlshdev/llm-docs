> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcreatecopywithfamily(_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcreatecopywithfamily(_:_:))

# CTFontDescriptorCreateCopyWithFamily(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the font descriptor in the specified family based on the traits of the original.

## Declaration

```swift
func CTFontDescriptorCreateCopyWithFamily(_ original: CTFontDescriptor, _ family: CFString) -> CTFontDescriptor?
```

## Parameters

- `original`: The original font descriptor.
- `family`: The name of the desired family.

<a id="return-value"></a>

## Return Value

A new font descriptor with the original traits in the given family, or `NULL` if no matching font descriptor is found in the system.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize(\_:\_:)](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes(\_:)](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes(\_:\_:)](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation(\_:\_:\_:)](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature(\_:\_:\_:)](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithSymbolicTraits(\_:\_:\_:)](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

# CTFontDescriptorCreateCopyWithFamily (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a copy of the font descriptor in the specified family based on the traits of the original.

## Declaration

```objectivec
extern CTFontDescriptorRefCTFontDescriptorCreateCopyWithFamily(CTFontDescriptorRef original, CFStringRef family);
```

## Parameters

- `original`: The original font descriptor.
- `family`: The name of the desired family.

<a id="return-value"></a>

## Return Value

A new font descriptor with the original traits in the given family, or `NULL` if no matching font descriptor is found in the system.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFeature](ctfontdescriptorcreatecopywithfeature%28______%29.md): Copies a font descriptor with new feature settings.
- [CTFontDescriptorCreateCopyWithSymbolicTraits](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.
