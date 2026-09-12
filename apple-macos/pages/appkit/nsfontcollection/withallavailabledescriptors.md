> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/withallavailabledescriptors](https://developer.apple.com/documentation/appkit/nsfontcollection/withallavailabledescriptors)

# withAllAvailableDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The font collection that matches all registered fonts.

## Declaration

```swift
@NSCopying class var withAllAvailableDescriptors: NSFontCollection { get }
```

<a id="return-value"></a>

## Return Value

The collection of all fonts available to the current application.

## See Also

### Creating Font Collections

- [init(descriptors:)](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [init(locale:)](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [init(name:)](init%28name_%29.md): Creates a named font collection object.
- [init(name:visibility:)](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.

# fontCollectionWithAllAvailableDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The font collection that matches all registered fonts.

## Declaration

```objectivec
@property (class, copy, readonly) NSFontCollection * fontCollectionWithAllAvailableDescriptors;
```

<a id="return-value"></a>

## Return Value

The collection of all fonts available to the current application.

## See Also

### Creating Font Collections

- [fontCollectionWithDescriptors:](init%28descriptors_%29.md): Returns a font collection matching the given descriptors.
- [fontCollectionWithLocale:](init%28locale_%29.md): Returns a collection of fonts matching the given locale.
- [fontCollectionWithName:](init%28name_%29.md): Creates a named font collection object.
- [fontCollectionWithName:visibility:](init%28name_visibility_%29.md): Creates a font collection with the specified name and font visibility.
