> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/registeredclasses](https://developer.apple.com/documentation/appkit/nsimagerep/registeredclasses)

# registeredClasses (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns an array containing the registered image representation classes.

## Declaration

```swift
class var registeredClasses: [AnyClass] { get }
```

<a id="return-value"></a>

## Return Value

An array of `Class` objects identifying the registered `NSImageRep` subclasses.

## See Also

### Managing Representation Subclasses of Images

- [class(forType:)](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [class(for:)](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registerClass(\_:)](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterClass(\_:)](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forFileType:)](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [class(forPasteboardType:)](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

# registeredImageRepClasses (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns an array containing the registered image representation classes.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<Class> * registeredImageRepClasses;
```

<a id="return-value"></a>

## Return Value

An array of `Class` objects identifying the registered `NSImageRep` subclasses.

## See Also

### Managing Representation Subclasses of Images

- [imageRepClassForType:](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [imageRepClassForData:](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registerImageRepClass:](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [unregisterImageRepClass:](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForFileType:](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [imageRepClassForPasteboardType:](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.
