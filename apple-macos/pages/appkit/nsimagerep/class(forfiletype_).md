> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/class(forfiletype:)](https://developer.apple.com/documentation/appkit/nsimagerep/class(forfiletype:))

# class(forFileType:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the image representation subclass that handles data with the specified type.

> Use [class(forType:)](class%28fortype_%29.md) instead.

## Declaration

```swift
class func `class`(forFileType type: String) -> AnyClass?
```

## Parameters

- `type`: A string containing the filename extension or an encoded HFS type.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the type of data, or `nil` if no image representation could handle the type.

## See Also

### Managing Representation Subclasses of Images

- [class(forType:)](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [class(for:)](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerClass(\_:)](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterClass(\_:)](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forPasteboardType:)](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

# imageRepClassForFileType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the image representation subclass that handles data with the specified type.

> Use [imageRepClassForType:](class%28fortype_%29.md) instead.

## Declaration

```objectivec
+ (Class) imageRepClassForFileType:(NSString *) type;
```

## Parameters

- `type`: A string containing the filename extension or an encoded HFS type.

<a id="return-value"></a>

## Return Value

A `Class` object for the image representation that can handle the type of data, or `nil` if no image representation could handle the type.

## See Also

### Managing Representation Subclasses of Images

- [imageRepClassForType:](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [imageRepClassForData:](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredImageRepClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerImageRepClass:](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterImageRepClass:](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForPasteboardType:](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.
