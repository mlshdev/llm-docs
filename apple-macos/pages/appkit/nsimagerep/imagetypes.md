> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/imagetypes](https://developer.apple.com/documentation/appkit/nsimagerep/imagetypes)

# imageTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.

## Declaration

```swift
class var imageTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="Discussion"></a>

## Discussion

The returned list includes UTIs all file types supported by this image representation object plus those that can be opened by this image representation after being converted by a user-installed filter service. You can use the returned UTI strings with any method that supports UTIs.

## See Also

### Determining Types for Images

- [canInit(with:)](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInit(with:)](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

# imageTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * imageTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="Discussion"></a>

## Discussion

The returned list includes UTIs all file types supported by this image representation object plus those that can be opened by this image representation after being converted by a user-installed filter service. You can use the returned UTI strings with any method that supports UTIs.

## See Also

### Determining Types for Images

- [canInitWithData:](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInitWithPasteboard:](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.
