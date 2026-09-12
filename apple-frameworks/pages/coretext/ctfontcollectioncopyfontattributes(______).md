> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncopyfontattributes(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncopyfontattributes(_:_:_:))

# CTFontCollectionCopyFontAttributes(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.7+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves an array of dictionaries containing font descriptor attribute values.

## Declaration

```swift
func CTFontCollectionCopyFontAttributes(_ collection: CTFontCollection, _ attributeNames: CFSet, _ options: CTFontCollectionCopyOptions) -> CFArray
```

## Parameters

- `collection`: The font collection reference.
- `attributeNames`: The attributes to retrieve for each descriptor in the collection.
- `options`: Options to alter the return value. With [kCTFontCollectionCopyDefaultOptions](ctfontcollectioncopyoptions/kctfontcollectioncopydefaultoptions.md), the values appear in the same order as the results from [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md). Setting [unique](ctfontcollectioncopyoptions/unique.md) removes duplicate values. Setting [standardSort](ctfontcollectioncopyoptions/standardsort.md) sorts the values in standard UI order.

<a id="return-value"></a>

## Return Value

An array that contains one [CFDictionary](../corefoundation/cfdictionary.md) value for each descriptor mapping the specified attribute names.

## See Also

### Get Font Descriptor Attributes

- [CTFontCollectionCopyFontAttribute(\_:\_:\_:)](ctfontcollectioncopyfontattribute%28______%29.md): Retrieves an array of font descriptor attribute values.

# CTFontCollectionCopyFontAttributes (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.7+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves an array of dictionaries containing font descriptor attribute values.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCopyFontAttributes(CTFontCollectionRef collection, CFSetRef attributeNames, CTFontCollectionCopyOptions options);
```

## Parameters

- `collection`: The font collection reference.
- `attributeNames`: The attributes to retrieve for each descriptor in the collection.
- `options`: Options to alter the return value. With [kCTFontCollectionCopyDefaultOptions](ctfontcollectioncopyoptions/kctfontcollectioncopydefaultoptions.md), the values appear in the same order as the results from [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md). Setting [kCTFontCollectionCopyUnique](ctfontcollectioncopyoptions/unique.md) removes duplicate values. Setting [kCTFontCollectionCopyStandardSort](ctfontcollectioncopyoptions/standardsort.md) sorts the values in standard UI order.

<a id="return-value"></a>

## Return Value

An array that contains one [CFDictionaryRef](../corefoundation/cfdictionary.md) value for each descriptor mapping the specified attribute names.

## See Also

### Get Font Descriptor Attributes

- [CTFontCollectionCopyFontAttribute](ctfontcollectioncopyfontattribute%28______%29.md): Retrieves an array of font descriptor attribute values.
