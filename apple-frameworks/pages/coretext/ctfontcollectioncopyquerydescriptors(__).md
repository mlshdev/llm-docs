> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncopyquerydescriptors(_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncopyquerydescriptors(_:))

# CTFontCollectionCopyQueryDescriptors(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves the array of descriptors for font matching.

## Declaration

```swift
func CTFontCollectionCopyQueryDescriptors(_ collection: CTFontCollection) -> CFArray?
```

## Parameters

- `collection`: The font collection reference.

<a id="return-value"></a>

## Return Value

A retained reference to the array of descriptors for querying (matching) the system font database. The return value is undefined if you create the collection with [CTFontCollectionCreateFromAvailableFonts(\_:)](ctfontcollectioncreatefromavailablefonts%28__%29.md).

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors(\_:)](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionSetExclusionDescriptors(\_:\_:)](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
- [CTFontCollectionSetQueryDescriptors(\_:\_:)](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.

# CTFontCollectionCopyQueryDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves the array of descriptors for font matching.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCopyQueryDescriptors(CTFontCollectionRef collection);
```

## Parameters

- `collection`: The font collection reference.

<a id="return-value"></a>

## Return Value

A retained reference to the array of descriptors for querying (matching) the system font database. The return value is undefined if you create the collection with [CTFontCollectionCreateFromAvailableFonts](ctfontcollectioncreatefromavailablefonts%28__%29.md).

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionSetExclusionDescriptors](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
- [CTFontCollectionSetQueryDescriptors](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.
