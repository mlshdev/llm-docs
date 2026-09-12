> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncopyexclusiondescriptors(_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncopyexclusiondescriptors(_:))

# CTFontCollectionCopyExclusionDescriptors(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves the array of descriptors to exclude from the match.

## Declaration

```swift
func CTFontCollectionCopyExclusionDescriptors(_ collection: CTFontCollection) -> CFArray?
```

## Parameters

- `collection`: The font collection reference.

<a id="return-value"></a>

## Return Value

A retained reference to the array of descriptors for querying (matching) the system font database.

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyQueryDescriptors(\_:)](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetExclusionDescriptors(\_:\_:)](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
- [CTFontCollectionSetQueryDescriptors(\_:\_:)](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.

# CTFontCollectionCopyExclusionDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Retrieves the array of descriptors to exclude from the match.

## Declaration

```objectivec
extern CFArrayRefCTFontCollectionCopyExclusionDescriptors(CTFontCollectionRef collection);
```

## Parameters

- `collection`: The font collection reference.

<a id="return-value"></a>

## Return Value

A retained reference to the array of descriptors for querying (matching) the system font database.

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyQueryDescriptors](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetExclusionDescriptors](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
- [CTFontCollectionSetQueryDescriptors](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.
