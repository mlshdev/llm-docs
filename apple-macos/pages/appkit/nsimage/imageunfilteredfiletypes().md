> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/imageunfilteredfiletypes()](https://developer.apple.com/documentation/appkit/nsimage/imageunfilteredfiletypes())

# imageUnfilteredFileTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the file types supported directly by the registered image representation objects.

> Use [imageUnfilteredTypes](imageunfilteredtypes.md) instead.

## Declaration

```swift
class func imageUnfilteredFileTypes() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported file type. File types are identified by file extension and HFS file types.

<a id="Discussion"></a>

## Discussion

The returned list does not contain pasteboard types that are available only through a user-installed filter service.

## See Also

### Class Methods

- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

# imageUnfilteredFileTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the file types supported directly by the registered image representation objects.

> Use [imageUnfilteredTypes](imageunfilteredtypes.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) imageUnfilteredFileTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported file type. File types are identified by file extension and HFS file types.

<a id="Discussion"></a>

## Discussion

The returned list does not contain pasteboard types that are available only through a user-installed filter service.

## See Also

### Class Methods

- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
