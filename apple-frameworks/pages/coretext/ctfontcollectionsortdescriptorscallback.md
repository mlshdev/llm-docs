> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectionsortdescriptorscallback](https://developer.apple.com/documentation/coretext/ctfontcollectionsortdescriptorscallback)

# CTFontCollectionSortDescriptorsCallback (Swift)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The collection sorting callback type.

## Declaration

```swift
typealias CTFontCollectionSortDescriptorsCallback = (CTFontDescriptor, CTFontDescriptor, UnsafeMutableRawPointer) -> CFComparisonResult
```

## Parameters

- `first`: The first descriptor.
- `second`: The second descriptor.
- `refCon`: A pointer to contextual data from the client.

<a id="return-value"></a>

## Return Value

The matching font descriptors of a collection in sorted order.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors(\_:)](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions(\_:\_:)](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily(\_:\_:\_:)](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.

# CTFontCollectionSortDescriptorsCallback (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The collection sorting callback type.

## Declaration

```objectivec
typedef enum CFComparisonResult (*)(const struct __CTFontDescriptor *, const struct __CTFontDescriptor *, void *) CTFontCollectionSortDescriptorsCallback;
```

## Parameters

- `first`: The first descriptor.
- `second`: The second descriptor.
- `refCon`: A pointer to contextual data from the client.

<a id="return-value"></a>

## Return Value

The matching font descriptors of a collection in sorted order.

## See Also

### Getting Font Descriptors

- [CTFontCollectionCreateMatchingFontDescriptors](ctfontcollectioncreatematchingfontdescriptors%28__%29.md): Returns an array of font descriptors matching the collection.
- [CTFontCollectionCreateMatchingFontDescriptorsWithOptions](ctfontcollectioncreatematchingfontdescriptorswithoptions%28____%29.md): Creates an array of font descriptors that match the specified collection.
- [CTFontCollectionCreateMatchingFontDescriptorsSortedWithCallback](ctfontcollectioncreatematchingfontdescriptorssortedwithcallback%28______%29.md): Returns the array of matching font descriptors sorted with the callback function.
- [CTFontCollectionCreateMatchingFontDescriptorsForFamily](ctfontcollectioncreatematchingfontdescriptorsforfamily%28______%29.md): Retrieves an array of font descriptors that match the specified family, one descriptor for each style in the collection.
