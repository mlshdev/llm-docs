> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatematchingfontdescriptorsforfamily(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatematchingfontdescriptorsforfamily(_:_:_:))

# CTFontCollectionCreateMatchingFontDescriptorsForFamily(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.

## Declaration

```swift
func CTFontCollectionCreateMatchingFontDescriptorsForFamily(_ collection: CTFontCollection, _ familyName: CFString, _ options: CFDictionary?) -> CFArray?
```

## Parameters

- `collection`: The font collection reference.
- `familyName`: The font family name.
- `options`: The options dictionary.

<a id="return-value"></a>

## Return Value

An array of [CTFontDescriptor](ctfontdescriptor.md) objects that match the specified family in the collection, or `NULL` if there are none.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions(\_:\_:)](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

# CTFontCollectionCreateMatchingFontDescriptorsForFamily (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCreateMatchingFontDescriptorsForFamily(CTFontCollectionRef collection, CFStringRef familyName, CFDictionaryRef options);
```

## Parameters

- `collection`: The font collection reference.
- `familyName`: The font family name.
- `options`: The options dictionary.

<a id="return-value"></a>

## Return Value

An array of [CTFontDescriptorRef](ctfontdescriptor.md) objects that match the specified family in the collection, or `NULL` if there are none.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.
