> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/class(forpasteboardtype:)](https://developer.apple.com/documentation/appkit/nsimagerep/class(forpasteboardtype:))

# class(forPasteboardType:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the image representation subclass that handles data with the specified pasteboard type.

> Use [class(forType:)](class%28fortype_%29.md) instead.

## Declaration

```swift
class func `class`(forPasteboardType type: NSPasteboard.PasteboardType) -> AnyClass?
```

## Parameters

- `type`: The pasteboard type.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the specified pasteboard type, or `nil` if no image representation could handle the type.

## See Also

### Managing Representation Subclasses of Images

- [class(forType:)](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [class(for:)](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerClass(\_:)](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterClass(\_:)](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forFileType:)](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.

# imageRepClassForPasteboardType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the image representation subclass that handles data with the specified pasteboard type.

> Use [imageRepClassForType:](class%28fortype_%29.md) instead.

## Declaration

```objectivec
+ (Class) imageRepClassForPasteboardType:(NSPasteboardType) type;
```

## Parameters

- `type`: The pasteboard type.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the specified pasteboard type, or `nil` if no image representation could handle the type.

## See Also

### Managing Representation Subclasses of Images

- [imageRepClassForType:](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [imageRepClassForData:](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredImageRepClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerImageRepClass:](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterImageRepClass:](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForFileType:](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
