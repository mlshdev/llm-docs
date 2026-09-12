> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/init(name:)](https://developer.apple.com/documentation/appkit/nsfontcollection/init(name:))

# init(name:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates a named font collection object.

## Declaration

```swift
init?(name: NSFontCollection.Name)
```

## Parameters

- `name`: The name of the collection.

<a id="return-value"></a>

## Return Value

The named font collection.

## See Also

### Creating Font Collections

- [init(descriptors:)](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [init(locale:)](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.

# fontCollectionWithName: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a named font collection object.

## Declaration

```objectivec
+ (NSFontCollection *) fontCollectionWithName:(NSFontCollectionName) name;
```

## Parameters

- `name`: The name of the collection.

<a id="return-value"></a>

## Return Value

The named font collection.

## See Also

### Creating Font Collections

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [fontCollectionWithLocale:](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.
