> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatematchingfontdescriptorssortedwithcallback(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatematchingfontdescriptorssortedwithcallback(_:_:_:))

# CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the array of matching font descriptors sorted with the callback function.

## Declaration

```swift
func CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(_ collection: CTFontCollection, _ sortCallback: CTFontCollectionSortDescriptorsCallback?, _ refCon: UnsafeMutableRawPointer?) -> CFArray?
```

## Parameters

- `collection`: The collection reference.
- `sortCallback`: The sorting callback function that defines the sort order.
- `refCon`: Pointer to client data define context for the callback.

<a id="return-value"></a>

## Return Value

An array of font descriptors matching the criteria of the collection sorted by the results of the sorting callback function.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions(\_:\_:)](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.

# CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the array of matching font descriptors sorted with the callback function.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(CTFontCollectionRef collection, CTFontCollectionSortDescriptorsCallback sortCallback, void *refCon);
```

## Parameters

- `collection`: The collection reference.
- `sortCallback`: The sorting callback function that defines the sort order.
- `refCon`: Pointer to client data define context for the callback.

<a id="return-value"></a>

## Return Value

An array of font descriptors matching the criteria of the collection sorted by the results of the sorting callback function.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
- [CTFontCollectionSortDescriptorsCallback](ctfontcollectionsortdescriptorscallback.md): The collection sorting callback type.
