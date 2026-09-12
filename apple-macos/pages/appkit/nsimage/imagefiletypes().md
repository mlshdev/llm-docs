> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/imagefiletypes()](https://developer.apple.com/documentation/appkit/nsimage/imagefiletypes())

# imageFileTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the image types supported by the registered image representation objects.

> Use [imageTypes](imagetypes.md) instead.

## Declaration

```swift
class func imageFileTypes() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported file type. The array can include encoded HFS file types as well as filename extensions.

<a id="Discussion"></a>

## Discussion

This list includes all file types supported by registered subclasses of [NSImageRep](../nsimagerep.md) plus those that can be converted to a supported type by a user-installed filter service. You can pass the array returned by this method directly to the [runModalForTypes:](../nsopenpanel/runmodalfortypes_.md) method of `NSOpenPanel`.

Do not override this method. If your app supports custom image types, create and register an [NSImageRep](../nsimagerep.md) subclass that handles those types.

## See Also

### Class Methods

- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

# imageFileTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the image types supported by the registered image representation objects.

> Use [imageTypes](imagetypes.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) imageFileTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported file type. The array can include encoded HFS file types as well as filename extensions.

<a id="Discussion"></a>

## Discussion

This list includes all file types supported by registered subclasses of [NSImageRep](../nsimagerep.md) plus those that can be converted to a supported type by a user-installed filter service. You can pass the array returned by this method directly to the [runModalForTypes:](../nsopenpanel/runmodalfortypes_.md) method of `NSOpenPanel`.

Do not override this method. If your app supports custom image types, create and register an [NSImageRep](../nsimagerep.md) subclass that handles those types.

## See Also

### Class Methods

- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
