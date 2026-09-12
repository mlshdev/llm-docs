> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/fontdescriptors(incollection:)](https://developer.apple.com/documentation/appkit/nsfontmanager/fontdescriptors(incollection:))

# fontDescriptors(inCollection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns an array of the font descriptors in the specified collection.

> Use [matchingDescriptors](../nsfontcollection/matchingdescriptors.md) instead.

## Declaration

```swift
func fontDescriptors(inCollection collectionNames: String) -> [Any]?
```

## Parameters

- `collectionNames`: The font collection for which to return descriptors.

<a id="return-value"></a>

## Return Value

The font descriptors.

## See Also

### Related Documentation

- [collectionNames](collectionnames.md): Deprecated. The names of the currently loaded font collections.

### Methods

- [availableFontNames(matching:)](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [addCollection(\_:options:)](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection(\_:)](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [addFontDescriptors(\_:toCollection:)](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [removeFontDescriptor(\_:fromCollection:)](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager(\_:willIncludeFont:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.

# fontDescriptorsInCollection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns an array of the font descriptors in the specified collection.

> Use [matchingDescriptors](../nsfontcollection/matchingdescriptors.md) instead.

## Declaration

```objectivec
- (NSArray *) fontDescriptorsInCollection:(NSString *) collectionNames;
```

## Parameters

- `collectionNames`: The font collection for which to return descriptors.

<a id="return-value"></a>

## Return Value

The font descriptors.

## See Also

### Related Documentation

- [collectionNames](collectionnames.md): Deprecated. The names of the currently loaded font collections.

### Methods

- [availableFontNamesMatchingFontDescriptor:](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [addCollection:options:](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection:](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [addFontDescriptors:toCollection:](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [removeFontDescriptor:fromCollection:](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager:willIncludeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
