> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/imagetypes](https://developer.apple.com/documentation/appkit/nsimage/imagetypes)

# imageTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.

## Declaration

```swift
class var imageTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="Discussion"></a>

## Discussion

The returned list includes UTIs all file types supported by registered subclasses of `NSImageRep` plus those that can be converted to a supported type by a user-installed filter service. You can use the returned UTI strings with any method that supports UTIs.

Do not override this method directly. If your app supports custom image types, create and register an [NSImageRep](../nsimagerep.md) subclass that handles those types.

## See Also

### Determining Supported Types of Images

- [canInit(with:)](caninit%28with_%29.md): Tests whether the image can create an instance of itself using pasteboard data.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

# imageTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * imageTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="Discussion"></a>

## Discussion

The returned list includes UTIs all file types supported by registered subclasses of `NSImageRep` plus those that can be converted to a supported type by a user-installed filter service. You can use the returned UTI strings with any method that supports UTIs.

Do not override this method directly. If your app supports custom image types, create and register an [NSImageRep](../nsimagerep.md) subclass that handles those types.

## See Also

### Determining Supported Types of Images

- [canInitWithPasteboard:](caninit%28with_%29.md): Tests whether the image can create an instance of itself using pasteboard data.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.
