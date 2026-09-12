> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/imagepasteboardtypes()](https://developer.apple.com/documentation/appkit/nsimage/imagepasteboardtypes())

# imagePasteboardTypes() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

> Use +imageTypes instead

## Declaration

```swift
class func imagePasteboardTypes() -> [NSPasteboard.PasteboardType]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported pasteboard type. By default, this list contains the  `NSPDFPboardType`, `NSPICTPboardType`, `NSPostScriptPboardType`, and `NSTIFFPboardType` types.

<a id="Discussion"></a>

## Discussion

This list includes all pasteboard types supported by registered subclasses of [NSImageRep](../nsimagerep.md) plus those that can be converted to a supported type by a user-installed filter service.

Do not override this method. Instead, override the [imageUnfilteredPasteboardTypes()](../nsimagerep/imageunfilteredpasteboardtypes%28%29.md) method to notify `NSImage` of the pasteboard types your class supports.

## See Also

### Class Methods

- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imageUnfilteredFileTypes()](imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes()](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

# imagePasteboardTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.

> Use +imageTypes instead

## Declaration

```objectivec
+ (NSArray<NSString *> *) imagePasteboardTypes;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects, each of which identifies a single supported pasteboard type. By default, this list contains the  `NSPDFPboardType`, `NSPICTPboardType`, `NSPostScriptPboardType`, and `NSTIFFPboardType` types.

<a id="Discussion"></a>

## Discussion

This list includes all pasteboard types supported by registered subclasses of [NSImageRep](../nsimagerep.md) plus those that can be converted to a supported type by a user-installed filter service.

Do not override this method. Instead, override the [imageUnfilteredPasteboardTypes](../nsimagerep/imageunfilteredpasteboardtypes%28%29.md) method to notify `NSImage` of the pasteboard types your class supports.

## See Also

### Class Methods

- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns an array of strings identifying the image types supported by the registered image representation objects.
- [imageUnfilteredFileTypes](imageunfilteredfiletypes%28%29.md): Deprecated. Returns an array of strings identifying the file types supported directly by the registered image representation objects.
- [imageUnfilteredPasteboardTypes](imageunfilteredpasteboardtypes%28%29.md): Deprecated. Returns an array of strings identifying the pasteboard types supported directly by the registered image representation objects.
