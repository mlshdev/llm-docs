> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatematchingfontdescriptors(_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatematchingfontdescriptors(_:))

# CTFontCollectionCreateMatchingFontDescriptors(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font descriptors matching the collection.

## Declaration

```swift
func CTFontCollectionCreateMatchingFontDescriptors(_ collection: CTFontCollection) -> CFArray?
```

## Parameters

- `collection`: The font collection reference.

<a id="return-value"></a>

## Return Value

A retained reference to an array of normalized font descriptors matching the collection definition.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions(\_:\_:)](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

# CTFontCollectionCreateMatchingFontDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of font descriptors matching the collection.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCreateMatchingFontDescriptors(CTFontCollectionRef collection);
```

## Parameters

- `collection`: The font collection reference.

<a id="return-value"></a>

## Return Value

A retained reference to an array of normalized font descriptors matching the collection definition.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.
