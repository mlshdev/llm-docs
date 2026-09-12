> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/imageunfilteredpasteboardtypes()](https://developer.apple.com/documentation/appkit/nsimagerep/imageunfilteredpasteboardtypes())

# imageUnfilteredPasteboardTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the list of pasteboard types supported directly by the image representation.

> Use [imageUnfilteredTypes](imageunfilteredtypes.md) instead.

## Declaration

```swift
class func imageUnfilteredPasteboardTypes() -> [NSPasteboard.PasteboardType]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects. This array is empty by default. Subclasses must override to return the list of pasteboard formats they support.

<a id="Discussion"></a>

## Discussion

When creating a subclass of `NSImageRep`, override this method to return a list representing the supported pasteboard types. For example, the `NSBitmapImageRep` class implements code similar to the following for this method:

```objc
+ (NSArray *)imageUnfilteredPasteboardTypes {
    static NSArray *types = nil;
 
    if (!types) types = [[NSArray alloc] initWithObjects:NSTIFFPboardType,  nil];
    return types;
}
```

If your subclass supports the types supported by its superclass, you must explicitly get the list of types from the superclass and add them to the array returned by this method.

## See Also

### Related Documentation

- [imageUnfilteredPasteboardTypes()](../nsimage/imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

### Determining Types for Images

- [canInit(with:)](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInit(with:)](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.

# imageUnfilteredPasteboardTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the list of pasteboard types supported directly by the image representation.

> Use [imageUnfilteredTypes](imageunfilteredtypes.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) imageUnfilteredPasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects. This array is empty by default. Subclasses must override to return the list of pasteboard formats they support.

<a id="Discussion"></a>

## Discussion

When creating a subclass of `NSImageRep`, override this method to return a list representing the supported pasteboard types. For example, the `NSBitmapImageRep` class implements code similar to the following for this method:

```objc
+ (NSArray *)imageUnfilteredPasteboardTypes {
    static NSArray *types = nil;
 
    if (!types) types = [[NSArray alloc] initWithObjects:NSTIFFPboardType,  nil];
    return types;
}
```

If your subclass supports the types supported by its superclass, you must explicitly get the list of types from the superclass and add them to the array returned by this method.

## See Also

### Related Documentation

- [imageUnfilteredPasteboardTypes](../nsimage/imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

### Determining Types for Images

- [canInitWithData:](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInitWithPasteboard:](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
