> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/removefontdescriptor(_:fromcollection:)](https://developer.apple.com/documentation/appkit/nsfontmanager/removefontdescriptor(_:fromcollection:))

# removeFontDescriptor(\_:fromCollection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Removes the specified font descriptor from the specified collection.

> Use [removeQuery(for:)](../nsmutablefontcollection/removequery%28for_%29.md) instead.

## Declaration

```swift
func removeFontDescriptor(_ descriptor: NSFontDescriptor, fromCollection collection: String)
```

## Parameters

- `descriptor`: The font descriptor to remove.
- `collection`: The font collection from which to remove the descriptor.

## See Also

### Methods

- [availableFontNames(matching:)](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [fontDescriptors(inCollection:)](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection(\_:options:)](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection(\_:)](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [addFontDescriptors(\_:toCollection:)](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [fontManager(\_:willIncludeFont:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.

# removeFontDescriptor:fromCollection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Removes the specified font descriptor from the specified collection.

> Use [removeQueryForDescriptors:](../nsmutablefontcollection/removequery%28for_%29.md) instead.

## Declaration

```objectivec
- (void) removeFontDescriptor:(NSFontDescriptor *) descriptor fromCollection:(NSString *) collection;
```

## Parameters

- `descriptor`: The font descriptor to remove.
- `collection`: The font collection from which to remove the descriptor.

## See Also

### Methods

- [availableFontNamesMatchingFontDescriptor:](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [fontDescriptorsInCollection:](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection:options:](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection:](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [addFontDescriptors:toCollection:](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [fontManager:willIncludeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
