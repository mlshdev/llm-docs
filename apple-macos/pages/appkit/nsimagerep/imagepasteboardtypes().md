> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/imagepasteboardtypes()](https://developer.apple.com/documentation/appkit/nsimagerep/imagepasteboardtypes())

# imagePasteboardTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the pasteboard types supported by the image representation class or one of its subclasses.

> Use [imageTypes](imagetypes.md) instead.

## Declaration

```swift
class func imagePasteboardTypes() -> [NSPasteboard.PasteboardType]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a supported pasteboard format.

<a id="Discussion"></a>

## Discussion

The list includes both those types returned by the [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md) class method plus those that can be converted to a supported type by a user-installed filter service. Don’t override this method when subclassing `NSImageRep`—it always returns a valid list for any subclass of `NSImageRep` that correctly overrides the [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md) method.

## See Also

### Determining Types for Images

- [canInit(with:)](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInit(with:)](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.

# imagePasteboardTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns the pasteboard types supported by the image representation class or one of its subclasses.

> Use [imageTypes](imagetypes.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) imagePasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which contains a supported pasteboard format.

<a id="Discussion"></a>

## Discussion

The list includes both those types returned by the [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md) class method plus those that can be converted to a supported type by a user-installed filter service. Don’t override this method when subclassing `NSImageRep`—it always returns a valid list for any subclass of `NSImageRep` that correctly overrides the [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md) method.

## See Also

### Determining Types for Images

- [canInitWithData:](caninit%28with_%29-6zv56.md): Returns a Boolean value that indicates whether the image representation can initialize itself from the specified data.
- [canInitWithPasteboard:](caninit%28with_%29-56pum.md): Returns a Boolean value that indicates whether the receiver can initialize itself from the data on the specified pasteboard.
- [imageTypes](imagetypes.md): Returns an array of UTI strings identifying the image types supported by the image representation, either directly or through a user-installed filter service.
- [imageUnfilteredTypes](imageunfilteredtypes.md): Returns an array of UTI strings identifying the image types supported directly by the ime representation.
- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns the list of file types supported directly by the image representation.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns the list of pasteboard types supported directly by the image representation.
