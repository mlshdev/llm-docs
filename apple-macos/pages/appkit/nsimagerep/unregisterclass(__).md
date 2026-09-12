> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/unregisterclass(_:)](https://developer.apple.com/documentation/appkit/nsimagerep/unregisterclass(_:))

# unregisterClass(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Removes the specified image representation subclass from the registry of available image representations.

## Declaration

```swift
class func unregisterClass(_ imageRepClass: AnyClass)
```

## Parameters

- `imageRepClass`: The `Class` object for an `NSImageRep` subclass.

<a id="Discussion"></a>

## Discussion

This method posts the [registryDidChangeNotification](registrydidchangenotification.md), along with the receiving object, to the default notification center.

## See Also

### Managing Representation Subclasses of Images

- [class(forType:)](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [class(for:)](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerClass(\_:)](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [class(forFileType:)](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [class(forPasteboardType:)](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

# unregisterImageRepClass: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Removes the specified image representation subclass from the registry of available image representations.

## Declaration

```objectivec
+ (void) unregisterImageRepClass:(Class) imageRepClass;
```

## Parameters

- `imageRepClass`: The `Class` object for an `NSImageRep` subclass.

<a id="Discussion"></a>

## Discussion

This method posts the [NSImageRepRegistryDidChangeNotification](registrydidchangenotification.md), along with the receiving object, to the default notification center.

## See Also

### Managing Representation Subclasses of Images

- [imageRepClassForType:](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [imageRepClassForData:](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredImageRepClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [registerImageRepClass:](registerclass%28__%29.md): Adds the specified class to the registry of available image representation subclasses.
- [imageRepClassForFileType:](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [imageRepClassForPasteboardType:](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.
