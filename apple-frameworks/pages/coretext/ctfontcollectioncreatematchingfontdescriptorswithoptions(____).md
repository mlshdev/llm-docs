> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatematchingfontdescriptorswithoptions(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatematchingfontdescriptorswithoptions(_:_:))

# CTFontCollectionCreateMatchingFontDescriptorsWithOptions(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an array of font descriptors that match the specified collection.

## Declaration

```swift
func CTFontCollectionCreateMatchingFontDescriptorsWithOptions(_ collection: CTFontCollection, _ options: CFDictionary?) -> CFArray?
```

## Parameters

- `collection`: The font collection reference.
- `options`: The options dictionary. Passing in `NULL` returns the same results as calling [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md), which uses the options specified during the collection’s creation.

<a id="return-value"></a>

## Return Value

An array of [CTFontDescriptor](ctfontdescriptor.md) objects that match the collection definition, or `NULL` if there are none.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

# CTFontCollectionCreateMatchingFontDescriptorsWithOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an array of font descriptors that match the specified collection.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCreateMatchingFontDescriptorsWithOptions(CTFontCollectionRef collection, CFDictionaryRef options);
```

## Parameters

- `collection`: The font collection reference.
- `options`: The options dictionary. Passing in `NULL` returns the same results as calling [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md), which uses the options specified during the collection’s creation.

<a id="return-value"></a>

## Return Value

An array of [CTFontDescriptorRef](ctfontdescriptor.md) objects that match the collection definition, or `NULL` if there are none.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.
