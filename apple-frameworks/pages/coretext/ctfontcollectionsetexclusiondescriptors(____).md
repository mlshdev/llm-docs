> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectionsetexclusiondescriptors(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectionsetexclusiondescriptors(_:_:))

# CTFontCollectionSetExclusionDescriptors(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Replaces the array of descriptors to exclude from the match.

## Declaration

```swift
func CTFontCollectionSetExclusionDescriptors(_ collection: CTMutableFontCollection, _ descriptors: CFArray?)
```

## Parameters

- `collection`: The font collection reference.
- `descriptors`: An array of [CTFontDescriptor](ctfontdescriptor.md) objects. This parameter can be `NULL`.

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors(\_:)](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionCopyQueryDescriptors(\_:)](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetQueryDescriptors(\_:\_:)](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.

# CTFontCollectionSetExclusionDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Replaces the array of descriptors to exclude from the match.

## Declaration

```objectivec
extern void CTFontCollectionSetExclusionDescriptors(CTMutableFontCollectionRef collection, CFArrayRef descriptors);
```

## Parameters

- `collection`: The font collection reference.
- `descriptors`: An array of [CTFontDescriptorRef](ctfontdescriptor.md) objects. This parameter can be `NULL`.

## See Also

### Excluding and Including Font Descriptors

- [CTFontCollectionCopyExclusionDescriptors](ctfontcollectioncopyexclusiondescriptors%28__%29.md): Retrieves the array of descriptors to exclude from the match.
- [CTFontCollectionCopyQueryDescriptors](ctfontcollectioncopyquerydescriptors%28__%29.md): Retrieves the array of descriptors for font matching.
- [CTFontCollectionSetQueryDescriptors](ctfontcollectionsetquerydescriptors%28____%29.md): Replaces the array of descriptors for font matching.
