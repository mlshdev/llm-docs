> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/init(descriptors:)](https://developer.apple.com/documentation/appkit/nsfontcollection/init(descriptors:))

# init(descriptors:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Returns a font collection matching the given descriptors.

## Declaration

```swift
init(descriptors queryDescriptors: [NSFontDescriptor])
```

## Parameters

- `queryDescriptors`: The descriptors used to match the returned collection.

<a id="return-value"></a>

## Return Value

The font collection matching the given descriptors.

## See Also

### Creating Font Collections

- [init(locale:)](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [init(name:)](init%28name_%29.md): Creates a named font collection object.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.

# fontCollectionWithDescriptors: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns a font collection matching the given descriptors.

## Declaration

```objectivec
+ (NSFontCollection *) fontCollectionWithDescriptors:(NSArray<NSFontDescriptor *> *) queryDescriptors;
```

## Parameters

- `queryDescriptors`: The descriptors used to match the returned collection.

<a id="return-value"></a>

## Return Value

The font collection matching the given descriptors.

## See Also

### Creating Font Collections

- [fontCollectionWithLocale:](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [fontCollectionWithName:](init%28name_%29.md): Creates a named font collection object.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.
