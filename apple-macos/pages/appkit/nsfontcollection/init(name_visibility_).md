> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/init(name:visibility:)](https://developer.apple.com/documentation/appkit/nsfontcollection/init(name:visibility:))

# init(name:visibility:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates a font collection with the specified name and font visibility.

## Declaration

```swift
init?(name: NSFontCollection.Name, visibility: NSFontCollection.Visibility)
```

## Parameters

- `name`: The name of the collection.
- `visibility`: The visibility of the collection.

<a id="return-value"></a>

## Return Value

The font collection with the specified name and visibility.

## See Also

### Creating Font Collections

- [init(descriptors:)](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [init(locale:)](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [init(name:)](init%28name_%29.md): Creates a named font collection object.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.

# fontCollectionWithName:visibility: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a font collection with the specified name and font visibility.

## Declaration

```objectivec
+ (NSFontCollection *) fontCollectionWithName:(NSFontCollectionName) name visibility:(NSFontCollectionVisibility) visibility;
```

## Parameters

- `name`: The name of the collection.
- `visibility`: The visibility of the collection.

<a id="return-value"></a>

## Return Value

The font collection with the specified name and visibility.

## See Also

### Creating Font Collections

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [fontCollectionWithLocale:](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [fontCollectionWithName:](init%28name_%29.md): Creates a named font collection object.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.
