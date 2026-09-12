> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/addfontdescriptors(_:tocollection:)](https://developer.apple.com/documentation/appkit/nsfontmanager/addfontdescriptors(_:tocollection:))

# addFontDescriptors(\_:toCollection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Adds an array of font descriptors to the specified font collection.

> Use [addQuery(for:)](../nsmutablefontcollection/addquery%28for_%29.md) instead.

## Declaration

```swift
func addFontDescriptors(_ descriptors: [Any], toCollection collectionName: String)
```

## Parameters

- `descriptors`: The font descriptors to add.
- `collectionName`: The font collection to which descriptors are added.

## See Also

### Methods

- [availableFontNames(matching:)](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [fontDescriptors(inCollection:)](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection(\_:options:)](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection(\_:)](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [removeFontDescriptor(\_:fromCollection:)](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager(\_:willIncludeFont:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.

# addFontDescriptors:toCollection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Adds an array of font descriptors to the specified font collection.

> Use [addQueryForDescriptors:](../nsmutablefontcollection/addquery%28for_%29.md) instead.

## Declaration

```objectivec
- (void) addFontDescriptors:(NSArray *) descriptors toCollection:(NSString *) collectionName;
```

## Parameters

- `descriptors`: The font descriptors to add.
- `collectionName`: The font collection to which descriptors are added.

## See Also

### Methods

- [availableFontNamesMatchingFontDescriptor:](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [fontDescriptorsInCollection:](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection:options:](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection:](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [removeFontDescriptor:fromCollection:](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager:willIncludeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
