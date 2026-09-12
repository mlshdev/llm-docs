> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/imageunfilteredtypes](https://developer.apple.com/documentation/appkit/nsimage/imageunfilteredtypes)

# imageUnfilteredTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

## Declaration

```swift
class var imageUnfilteredTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="Discussion"></a>

## Discussion

The returned list includes UTI strings only for those file types that are supported directly by registered subclasses of [NSImageRep](../nsimagerep.md). It does not include types that are supported through user-installed filter services. You can use the returned UTI strings with any method that supports UTIs.

Do not override this method directly. If your app supports custom image types, create and register an [NSImageRep](../nsimagerep.md) subclass that handles those types.

## See Also

### Determining Supported Types of Images

- [canInit(with:)](caninit%28with_%29.md): Tests whether the image can create an instance of itself using pasteboard data.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.

# imageUnfilteredTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Returns an array of UTI strings identifying the image types supported directly by the registered image representation objects.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * imageUnfilteredTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a UTI identifying a supported image type. Some sample image-related UTI strings include “`public.image`”, “`public.jpeg`”, and “`public.tiff`”. For a list of supported types, see `UTCoreTypes.h`.

<a id="Discussion"></a>

## Discussion

The returned list includes UTI strings only for those file types that are supported directly by registered subclasses of [NSImageRep](../nsimagerep.md). It does not include types that are supported through user-installed filter services. You can use the returned UTI strings with any method that supports UTIs.

Do not override this method directly. If your app supports custom image types, create and register an [NSImageRep](../nsimagerep.md) subclass that handles those types.

## See Also

### Determining Supported Types of Images

- [canInitWithPasteboard:](caninit%28with_%29.md): Tests whether the image can create an instance of itself using pasteboard data.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the registered image representation objects, either directly or through a user-installed filter service.
