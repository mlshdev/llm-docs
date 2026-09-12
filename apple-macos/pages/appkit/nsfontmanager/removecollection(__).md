> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/removecollection(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/removecollection(_:))

# removeCollection(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Removes the specified font collection.

> Use [hide(withName:visibility:)](../nsfontcollection/hide%28withname_visibility_%29.md) instead.

## Declaration

```swift
func removeCollection(_ collectionName: String) -> Bool
```

## Parameters

- `collectionName`: The collection to remove.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the font collection was successfully removed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Methods

- [availableFontNames(matching:)](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [fontDescriptors(inCollection:)](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection(\_:options:)](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [addFontDescriptors(\_:toCollection:)](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [removeFontDescriptor(\_:fromCollection:)](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager(\_:willIncludeFont:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.

# removeCollection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Removes the specified font collection.

> Use [hideFontCollectionWithName:visibility:error:](../nsfontcollection/hide%28withname_visibility_%29.md) instead.

## Declaration

```objectivec
- (BOOL) removeCollection:(NSString *) collectionName;
```

## Parameters

- `collectionName`: The collection to remove.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the font collection was successfully removed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Methods

- [availableFontNamesMatchingFontDescriptor:](availablefontnames%28matching_%29.md): Deprecated. Returns the names of the fonts that match the attributes in the given font descriptor.
- [fontDescriptorsInCollection:](fontdescriptors%28incollection_%29.md): Deprecated. Returns an array of the font descriptors in the specified collection.
- [addCollection:options:](addcollection%28__options_%29.md): Deprecated. Adds a specified font collection to the font manager with a given set of options.
- [addFontDescriptors:toCollection:](addfontdescriptors%28__tocollection_%29.md): Deprecated. Adds an array of font descriptors to the specified font collection.
- [removeFontDescriptor:fromCollection:](removefontdescriptor%28__fromcollection_%29.md): Deprecated. Removes the specified font descriptor from the specified collection.
- [fontManager:willIncludeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/fontmanager%28_:willincludefont:%29): Deprecated. Requests permission from the Font panel delegate to display the given font name in the Font panel.
