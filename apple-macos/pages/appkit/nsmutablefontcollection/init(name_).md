> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/init(name:)](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/init(name:))

# init(name:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates a mutable named font collection object.

## Declaration

```swift
init?(name: NSFontCollection.Name)
```

## Parameters

- `name`: The name to apply to the font collection.

<a id="return-value"></a>

## Return Value

A mutable font collection object.

## See Also

### Creating a Font Collection

- [init(descriptors:)](init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [init(locale:)](init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.

# fontCollectionWithName: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a mutable named font collection object.

## Declaration

```objectivec
+ (NSMutableFontCollection *) fontCollectionWithName:(NSFontCollectionName) name;
```

## Parameters

- `name`: The name to apply to the font collection.

<a id="return-value"></a>

## Return Value

A mutable font collection object.

## See Also

### Creating a Font Collection

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [fontCollectionWithLocale:](init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.
