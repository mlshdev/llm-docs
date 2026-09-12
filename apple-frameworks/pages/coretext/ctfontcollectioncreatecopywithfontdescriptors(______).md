> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatecopywithfontdescriptors(_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatecopywithfontdescriptors(_:_:_:))

# CTFontCollectionCreateCopyWithFontDescriptors(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the original collection augmented with the given new font descriptors.

## Declaration

```swift
func CTFontCollectionCreateCopyWithFontDescriptors(_ original: CTFontCollection, _ queryDescriptors: CFArray?, _ options: CFDictionary?) -> CTFontCollection
```

## Parameters

- `original`: The original font collection reference.
- `queryDescriptors`: An array of font descriptors to augment those of the original collection.
- `options`: The options dictionary. For possible values, see Constants.

<a id="return-value"></a>

## Return Value

A copy of the original font collection augmented by the new font descriptors and options.

<a id="Discussion"></a>

## Discussion

The new font descriptors are merged with the existing descriptors to create a single set.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts(\_:)](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateWithFontDescriptors(\_:\_:)](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateMutableCopy(\_:)](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.

# CTFontCollectionCreateCopyWithFontDescriptors (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the original collection augmented with the given new font descriptors.

## Declaration

```objectivec
extern CTFontCollectionRefCTFontCollectionCreateCopyWithFontDescriptors(CTFontCollectionRef original, CFArrayRef queryDescriptors, CFDictionaryRef options);
```

## Parameters

- `original`: The original font collection reference.
- `queryDescriptors`: An array of font descriptors to augment those of the original collection.
- `options`: The options dictionary. For possible values, see Constants.

<a id="return-value"></a>

## Return Value

A copy of the original font collection augmented by the new font descriptors and options.

<a id="Discussion"></a>

## Discussion

The new font descriptors are merged with the existing descriptors to create a single set.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateFromAvailableFonts](ctfontcollectioncreatefromavailablefonts%28__%29.md): Returns a new font collection containing all available fonts.
- [CTFontCollectionCreateWithFontDescriptors](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateMutableCopy](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.
