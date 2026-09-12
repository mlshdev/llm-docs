> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/availablefontnames(matching:)](https://developer.apple.com/documentation/appkit/nsfontmanager/availablefontnames(matching:))

# availableFontNames(matching:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns the names of the fonts that match the attributes in the given font descriptor.

> Use `NSFontDescriptor` method [matchingFontDescriptors(withMandatoryKeys:)](../nsfontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md) instead.

## Declaration

```swift
func availableFontNames(matching descriptor: NSFontDescriptor) -> [Any]?
```

## Parameters

- `descriptor`: The font descriptor whose attributes are matched.

<a id="return-value"></a>

## Return Value

The names of the matching fonts.

## See Also

### Methods

- [fontDescriptors(inCollection:)](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection(\_:options:)](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection(\_:)](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [addFontDescriptors(\_:toCollection:)](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [removeFontDescriptor(\_:fromCollection:)](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager(\_:willIncludeFont:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.

# availableFontNamesMatchingFontDescriptor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Returns the names of the fonts that match the attributes in the given font descriptor.

> Use `NSFontDescriptor` method [matchingFontDescriptorsWithMandatoryKeys:](../nsfontdescriptor/matchingfontdescriptors%28withmandatorykeys_%29.md) instead.

## Declaration

```objectivec
- (NSArray *) availableFontNamesMatchingFontDescriptor:(NSFontDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The font descriptor whose attributes are matched.

<a id="return-value"></a>

## Return Value

The names of the matching fonts.

## See Also

### Methods

- [fontDescriptorsInCollection:](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection:options:](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [removeCollection:](removecollection%28__%29.md): Deprecated. Removes the specified font collection.
- [addFontDescriptors:toCollection:](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [removeFontDescriptor:fromCollection:](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager:willIncludeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
