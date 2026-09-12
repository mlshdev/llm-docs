> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/class(fortype:)](https://developer.apple.com/documentation/appkit/nsimagerep/class(fortype:))

# class(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the image representation subclass that handles image data for the specified UTI.

## Declaration

```swift
class func `class`(forType type: String) -> AnyClass?
```

## Parameters

- `type`: The UTI string identifying the desired image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the UTI, or `nil` if no image representation could handle the data.

## See Also

### Managing Representation Subclasses of Images

- [class(for:)](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerClass(\_:)](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterClass(\_:)](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forFileType:)](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [class(forPasteboardType:)](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

# imageRepClassForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the image representation subclass that handles image data for the specified UTI.

## Declaration

```objectivec
+ (Class) imageRepClassForType:(NSString *) type;
```

## Parameters

- `type`: The UTI string identifying the desired image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the UTI, or `nil` if no image representation could handle the data.

## See Also

### Managing Representation Subclasses of Images

- [imageRepClassForData:](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredImageRepClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerImageRepClass:](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterImageRepClass:](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForFileType:](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [imageRepClassForPasteboardType:](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.
