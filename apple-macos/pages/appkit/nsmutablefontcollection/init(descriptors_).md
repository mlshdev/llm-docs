> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/init(descriptors:)](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/init(descriptors:))

# init(descriptors:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates a mutable font collection containing the fonts that match the specified font descriptors.

## Declaration

```swift
init(descriptors queryDescriptors: [NSFontDescriptor])
```

## Parameters

- `queryDescriptors`: One or more query descriptors describing the fonts to include in the collection.

<a id="return-value"></a>

## Return Value

A mutable font collection object.

## See Also

### Creating a Font Collection

- [init(locale:)](init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [init(name:)](init%28name_%29.md): Creates a mutable named font collection object.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.

# fontCollectionWithDescriptors: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a mutable font collection containing the fonts that match the specified font descriptors.

## Declaration

```objectivec
+ (NSMutableFontCollection *) fontCollectionWithDescriptors:(NSArray<NSFontDescriptor *> *) queryDescriptors;
```

## Parameters

- `queryDescriptors`: One or more query descriptors describing the fonts to include in the collection.

<a id="return-value"></a>

## Return Value

A mutable font collection object.

## See Also

### Creating a Font Collection

- [fontCollectionWithLocale:](init%28locale_%29.md): Creates a mutable font collection containing fonts suitable for the specified locale.
- [fontCollectionWithName:](init%28name_%29.md): Creates a mutable named font collection object.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.
