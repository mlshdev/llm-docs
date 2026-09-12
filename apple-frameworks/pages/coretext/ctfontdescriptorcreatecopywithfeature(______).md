> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdescriptorcreatecopywithfeature(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontdescriptorcreatecopywithfeature(_:_:_:))

# CTFontDescriptorCreateCopyWithFeature(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a font descriptor with new feature settings.

## Declaration

```swift
func CTFontDescriptorCreateCopyWithFeature(_ original: CTFontDescriptor, _ featureTypeIdentifier: CFNumber, _ featureSelectorIdentifier: CFNumber) -> CTFontDescriptor
```

## Parameters

- `original`: The original font descriptor.
- `featureTypeIdentifier`: The feature type identifier.
- `featureSelectorIdentifier`: The feature selector identifier.

<a id="return-value"></a>

## Return Value

A copy of the original font descriptor modified with the given feature settings.

<a id="Discussion"></a>

## Discussion

This is a convenience method to toggle more easily the state of individual features.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize(\_:\_:)](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes(\_:)](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes(\_:\_:)](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation(\_:\_:\_:)](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFamily(\_:\_:)](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits(\_:\_:\_:)](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor(\_:\_:)](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.

# CTFontDescriptorCreateCopyWithFeature (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a font descriptor with new feature settings.

## Declaration

```objectivec
extern CTFontDescriptorRefCTFontDescriptorCreateCopyWithFeature(CTFontDescriptorRef original, CFNumberRef featureTypeIdentifier, CFNumberRef featureSelectorIdentifier);
```

## Parameters

- `original`: The original font descriptor.
- `featureTypeIdentifier`: The feature type identifier.
- `featureSelectorIdentifier`: The feature selector identifier.

<a id="return-value"></a>

## Return Value

A copy of the original font descriptor modified with the given feature settings.

<a id="Discussion"></a>

## Discussion

This is a convenience method to toggle more easily the state of individual features.

## See Also

### Creating Font Descriptors

- [CTFontDescriptorCreateWithNameAndSize](ctfontdescriptorcreatewithnameandsize%28____%29.md): Creates a new font descriptor with the provided PostScript name and size.
- [CTFontDescriptorCreateWithAttributes](ctfontdescriptorcreatewithattributes%28__%29.md): Creates a new font descriptor reference from a dictionary of attributes.
- [CTFontDescriptorCreateCopyWithAttributes](ctfontdescriptorcreatecopywithattributes%28____%29.md): Creates a copy of the original font descriptor with new attributes.
- [CTFontDescriptorCreateCopyWithVariation](ctfontdescriptorcreatecopywithvariation%28______%29.md): Creates a copy of the original font descriptor with a new variation instance.
- [CTFontDescriptorCreateCopyWithFamily](ctfontdescriptorcreatecopywithfamily%28____%29.md): Creates a copy of the font descriptor in the specified family based on the traits of the original.
- [CTFontDescriptorCreateCopyWithSymbolicTraits](ctfontdescriptorcreatecopywithsymbolictraits%28______%29.md): Creates a copy of the font descriptor with the specified symbolic traits as the original.
- [CTFontDescriptorCreateMatchingFontDescriptors](ctfontdescriptorcreatematchingfontdescriptors%28____%29.md): Returns an array of normalized font descriptors matching the provided descriptor.
- [CTFontDescriptorCreateMatchingFontDescriptor](ctfontdescriptorcreatematchingfontdescriptor%28____%29.md): Returns the single preferred matching font descriptor based on the original descriptor and system precedence.
