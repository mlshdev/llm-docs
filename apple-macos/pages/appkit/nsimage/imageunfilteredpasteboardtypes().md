> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/imageunfilteredpasteboardtypes()](https://developer.apple.com/documentation/appkit/nsimage/imageunfilteredpasteboardtypes())

# imageUnfilteredPasteboardTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

> Use +imageUnfilteredTypes instead

## Declaration

```swift
class func imageUnfilteredPasteboardTypes() -> [NSPasteboard.PasteboardType]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported pasteboard type.

<a id="Discussion"></a>

## Discussion

The returned list does not contain pasteboard types that are supported only through a user-installed filter service.

## See Also

### Class Methods

- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

# imageUnfilteredPasteboardTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

> Use +imageUnfilteredTypes instead

## Declaration

```objectivec
+ (NSArray<NSString *> *) imageUnfilteredPasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported pasteboard type.

<a id="Discussion"></a>

## Discussion

The returned list does not contain pasteboard types that are supported only through a user-installed filter service.

## See Also

### Class Methods

- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
