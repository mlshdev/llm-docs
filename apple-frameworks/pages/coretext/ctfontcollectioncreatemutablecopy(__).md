> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatemutablecopy(_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatemutablecopy(_:))

# CTFontCollectionCreateMutableCopy(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Creates a mutable copy of the original collection.

## Declaration

```swift
func CTFontCollectionCreateMutableCopy(_ original: CTFontCollection) -> CTMutableFontCollection
```

## Parameters

- `original`: The original font collection reference.

<a id="return-value"></a>

## Return Value

A mutable copy of the original font collection.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts(\_:)](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateWithFontDescriptors(\_:\_:)](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateCopyWithFontDescriptors(\_:\_:\_:)](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.

# CTFontCollectionCreateMutableCopy (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.7+

Creates a mutable copy of the original collection.

## Declaration

```objectivec
extern CTMutableFontCollectionRefCTFontCollectionCreateMutableCopy(CTFontCollectionRef original);
```

## Parameters

- `original`: The original font collection reference.

<a id="return-value"></a>

## Return Value

A mutable copy of the original font collection.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateWithFontDescriptors](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateCopyWithFontDescriptors](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
