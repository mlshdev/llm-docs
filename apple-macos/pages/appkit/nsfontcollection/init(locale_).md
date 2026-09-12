> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/init(locale:)](https://developer.apple.com/documentation/appkit/nsfontcollection/init(locale:))

# init(locale:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Returns a collection of fonts matching the given locale.

## Declaration

```swift
init?(locale: Locale)
```

## Parameters

- `locale`: The locale to match.

<a id="return-value"></a>

## Return Value

A collection of fonts matching the given locale.

## See Also

### Creating Font Collections

- [init(descriptors:)](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [init(name:)](init%28name_%29.md): Creates a named font collection object.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [withAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.

# fontCollectionWithLocale: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns a collection of fonts matching the given locale.

## Declaration

```objectivec
+ (NSFontCollection *) fontCollectionWithLocale:(NSLocale *) locale;
```

## Parameters

- `locale`: The locale to match.

<a id="return-value"></a>

## Return Value

A collection of fonts matching the given locale.

## See Also

### Creating Font Collections

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [fontCollectionWithName:](init%28name_%29.md): Creates a named font collection object.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
- [fontCollectionWithAllAvailableDescriptors](withallavailabledescriptors.md): The font collection that matches all registered fonts.
