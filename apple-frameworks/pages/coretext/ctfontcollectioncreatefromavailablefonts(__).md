> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcollectioncreatefromavailablefonts(_:)](https://developer.apple.com/documentation/coretext/ctfontcollectioncreatefromavailablefonts(_:))

# CTFontCollectionCreateFromAvailableFonts(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font collection containing all available fonts.

## Declaration

```swift
func CTFontCollectionCreateFromAvailableFonts(_ options: CFDictionary?) -> CTFontCollection
```

## Parameters

- `options`: The options dictionary. For possible values, see Constants.

<a id="return-value"></a>

## Return Value

A new collection containing all fonts available to the current application.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateWithFontDescriptors(\_:\_:)](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateCopyWithFontDescriptors(\_:\_:\_:)](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
- [CTFontCollectionCreateMutableCopy(\_:)](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.

# CTFontCollectionCreateFromAvailableFonts (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new font collection containing all available fonts.

## Declaration

```objectivec
extern CTFontCollectionRefCTFontCollectionCreateFromAvailableFonts(CFDictionaryRef options);
```

## Parameters

- `options`: The options dictionary. For possible values, see Constants.

<a id="return-value"></a>

## Return Value

A new collection containing all fonts available to the current application.

## See Also

### Creating Font Collections

- [CTFontCollectionCreateWithFontDescriptors](ctfontcollectioncreatewithfontdescriptors%28____%29.md): Returns a new font collection based on the given array of font descriptors.
- [CTFontCollectionCreateCopyWithFontDescriptors](ctfontcollectioncreatecopywithfontdescriptors%28______%29.md): Returns a copy of the original collection augmented with the given new font descriptors.
- [CTFontCollectionCreateMutableCopy](ctfontcollectioncreatemutablecopy%28__%29.md): Creates a mutable copy of the original collection.
