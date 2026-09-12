> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatewithfontdescriptors(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatewithfontdescriptors(_:_:))

# CTFontCollectionCreateWithFontDescriptors(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font collection based on the given array of font descriptors.

## Declaration

```swift
func CTFontCollectionCreateWithFontDescriptors(_ queryDescriptors: CFArray?, _ options: CFDictionary?) -> CTFontCollection
```

## Parameters

- `queryDescriptors`: An array of font descriptors.
- `options`: The options dictionary. For possible values, see Constants.

<a id="return-value"></a>

## Return Value

A new font collection based on the provided font descriptors.

<a id="Discussion"></a>

## Discussion

The contents of the returned collection are defined by matching the provided descriptors against all available font descriptors.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts(\_:)](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateCopyWithFontDescriptors(\_:\_:\_:)](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
- [CTFontCollectionCreateMutableCopy(\_:)](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.

# CTFontCollectionCreateWithFontDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font collection based on the given array of font descriptors.

## Declaration

```objectivec
extern CTFontCollectionRefCTFontCollectionCreateWithFontDescriptors(CFArrayRef queryDescriptors, CFDictionaryRef options);
```

## Parameters

- `queryDescriptors`: An array of font descriptors.
- `options`: The options dictionary. For possible values, see Constants.

<a id="return-value"></a>

## Return Value

A new font collection based on the provided font descriptors.

<a id="Discussion"></a>

## Discussion

The contents of the returned collection are defined by matching the provided descriptors against all available font descriptors.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateCopyWithFontDescriptors](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
- [CTFontCollectionCreateMutableCopy](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.
