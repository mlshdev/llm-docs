> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/init(locale:)](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/init(locale:))

# init(locale:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates a mutable font collection containing fonts suitable for the specified locale.

## Declaration

```swift
init(locale: Locale)
```

## Parameters

- `locale`: The locale associated with the fonts you want.

<a id="return-value"></a>

## Return Value

A mutable collection of fonts matching the specified locale.

## See Also

### Creating a Font Collection

- [init(descriptors:)](init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [init(name:)](init%28name_%29.md): Creates a mutable named font collection object.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.

# fontCollectionWithLocale: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a mutable font collection containing fonts suitable for the specified locale.

## Declaration

```objectivec
+ (NSMutableFontCollection *) fontCollectionWithLocale:(NSLocale *) locale;
```

## Parameters

- `locale`: The locale associated with the fonts you want.

<a id="return-value"></a>

## Return Value

A mutable collection of fonts matching the specified locale.

## See Also

### Creating a Font Collection

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Creates a mutable font collection containing the fonts that match the specified font descriptors.
- [fontCollectionWithName:](init%28name_%29.md): Creates a mutable named font collection object.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a mutable font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The mutable font collection that matches all registered fonts.
