> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/class(for:)](https://developer.apple.com/documentation/appkit/nsimagerep/class(for:))

# class(for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the image representation subclass that handles the specified type of data.

## Declaration

```swift
class func `class`(for data: Data) -> AnyClass?
```

## Parameters

- `data`: The image data.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the data, or `nil` if no image representation could handle the data.

## See Also

### Managing Representation Subclasses of Images

- [class(forType:)](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [registeredClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerClass(\_:)](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterClass(\_:)](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forFileType:)](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [class(forPasteboardType:)](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

# imageRepClassForData: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the image representation subclass that handles the specified type of data.

## Declaration

```objectivec
+ (Class) imageRepClassForData:(NSData *) data;
```

## Parameters

- `data`: The image data.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the data, or `nil` if no image representation could handle the data.

## See Also

### Managing Representation Subclasses of Images

- [imageRepClassForType:](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [registeredImageRepClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerImageRepClass:](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterImageRepClass:](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForFileType:](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [imageRepClassForPasteboardType:](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.
