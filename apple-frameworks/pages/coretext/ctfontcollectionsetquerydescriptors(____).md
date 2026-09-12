> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectionsetquerydescriptors(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectionsetquerydescriptors(_:_:))

# CTFontCollectionSetQueryDescriptors(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Replaces the array of descriptors for font matching.

## Declaration

```swift
func CTFontCollectionSetQueryDescriptors(_ collection: CTMutableFontCollection, _ descriptors: CFArray?)
```

## Parameters

- `collection`: The font collection reference.
- `descriptors`: An array of [CTFontDescriptor](ctfontdescriptor.md) objects. Passing in `NULL` represents an empty collection, which sets the matching descriptors to `NULL`.

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors(\_:)](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionCopyQueryDescriptors(\_:)](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetExclusionDescriptors(\_:\_:)](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.

# CTFontCollectionSetQueryDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Replaces the array of descriptors for font matching.

## Declaration

```objectivec
extern void CTFontCollectionSetQueryDescriptors(CTMutableFontCollectionRef collection, CFArrayRef descriptors);
```

## Parameters

- `collection`: The font collection reference.
- `descriptors`: An array of [CTFontDescriptorRef](ctfontdescriptor.md) objects. Passing in `NULL` represents an empty collection, which sets the matching descriptors to `NULL`.

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionCopyQueryDescriptors](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetExclusionDescriptors](ctfontcollectionsetexclusiondescriptors%28____%29.md): Replaces the array of descriptors to exclude from the match.
