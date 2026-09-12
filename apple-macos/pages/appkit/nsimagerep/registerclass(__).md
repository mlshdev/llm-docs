> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/registerclass(_:)](https://developer.apple.com/documentation/appkit/nsimagerep/registerclass(_:))

# registerClass(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Adds the specified class to the registry of available image representation subclasses.

## Declaration

```swift
class func registerClass(_ imageRepClass: AnyClass)
```

## Parameters

- `imageRepClass`: The `Class` object for an `NSImageRep` subclass.

<a id="Discussion"></a>

## Discussion

This method posts an [registryDidChangeNotification](registrydidchangenotification.md), along with the receiving object, to the default notification center.

A good place to add image representation classes to the registry is in the `load` class method.

## See Also

### Related Documentation

- [load()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/load%28%29): Invoked whenever a class or category is added to the Objective-C runtime; implement this method to perform class-specific behavior upon loading.

### Managing Representation Subclasses of Images

- [class(forType:)](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [class(for:)](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [unregisterClass(\_:)](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [class(forFileType:)](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [class(forPasteboardType:)](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.

# registerImageRepClass: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Adds the specified class to the registry of available image representation subclasses.

## Declaration

```objectivec
+ (void) registerImageRepClass:(Class) imageRepClass;
```

## Parameters

- `imageRepClass`: The `Class` object for an `NSImageRep` subclass.

<a id="Discussion"></a>

## Discussion

This method posts an [NSImageRepRegistryDidChangeNotification](registrydidchangenotification.md), along with the receiving object, to the default notification center.

A good place to add image representation classes to the registry is in the `load` class method.

## See Also

### Related Documentation

- [load](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/load%28%29): Invoked whenever a class or category is added to the Objective-C runtime; implement this method to perform class-specific behavior upon loading.

### Managing Representation Subclasses of Images

- [imageRepClassForType:](class%28fortype_%29.md): Returns the image representation subclass that handles image data for the specified UTI.
- [imageRepClassForData:](class%28for_%29.md): Returns the image representation subclass that handles the specified type of data.
- [registeredImageRepClasses](registeredclasses.md): Returns an array containing the registered image representation classes.
- [unregisterImageRepClass:](unregisterclass%28__%29.md): Removes the specified image representation subclass from the registry of available image representations.
- [imageRepClassForFileType:](class%28forfiletype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified type.
- [imageRepClassForPasteboardType:](class%28forpasteboardtype_%29.md): Deprecated. Returns the image representation subclass that handles data with the specified pasteboard type.
