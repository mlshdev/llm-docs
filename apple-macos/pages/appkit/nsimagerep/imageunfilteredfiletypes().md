> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/imageunfilteredfiletypes()](https://developer.apple.com/documentation/appkit/nsimagerep/imageunfilteredfiletypes())

# imageUnfilteredFileTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the list of file types supported directly by the image representation.

> Use [imageUnfilteredTypes](imageunfilteredtypes.md) instead.

## Declaration

```swift
class func imageUnfilteredFileTypes() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects. This array is empty by default. Subclasses must override to return the list of file formats they support.

<a id="Discussion"></a>

## Discussion

The returned file types can include encoded HFS file types as well as filename extensions. When creating a subclass of `NSImageRep`, override this method to return a list of strings representing the supported file types. For example, the `NSBitmapImageRep` class implements code similar to the following for this method:

```objc
+ (NSArray *)imageUnfilteredFileTypes {
    static NSArray *types = nil;
 
    if (!types) types = [[NSArray alloc]
        initWithObjects:@"tiff", @"gif", @"jpg",  @"bmp", nil];
    return types;
}
```

If your subclass supports the types supported by its superclass, you must explicitly get the array of types from the superclass and put them in the array returned by this method.

## See Also

### Related Documentation

- [imageUnfilteredFileTypes()](../nsimage/imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.

### Determining Types for Images

- [canInit(with:)](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInit(with:)](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

# imageUnfilteredFileTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the list of file types supported directly by the image representation.

> Use [imageUnfilteredTypes](imageunfilteredtypes.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) imageUnfilteredFileTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects. This array is empty by default. Subclasses must override to return the list of file formats they support.

<a id="Discussion"></a>

## Discussion

The returned file types can include encoded HFS file types as well as filename extensions. When creating a subclass of `NSImageRep`, override this method to return a list of strings representing the supported file types. For example, the `NSBitmapImageRep` class implements code similar to the following for this method:

```objc
+ (NSArray *)imageUnfilteredFileTypes {
    static NSArray *types = nil;
 
    if (!types) types = [[NSArray alloc]
        initWithObjects:@"tiff", @"gif", @"jpg",  @"bmp", nil];
    return types;
}
```

If your subclass supports the types supported by its superclass, you must explicitly get the array of types from the superclass and put them in the array returned by this method.

## See Also

### Related Documentation

- [imageUnfilteredFileTypes](../nsimage/imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.

### Determining Types for Images

- [canInitWithData:](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInitWithPasteboard:](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.
