> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(pasteboard:)](https://developer.apple.com/documentation/appkit/nsimage/init(pasteboard:))

# init(pasteboard:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object with data from the specified pasteboard.

## Declaration

```swift
convenience init?(pasteboard: NSPasteboard)
```

## Parameters

- `pasteboard`: The pasteboard containing the image data. The data on the pasteboard can be in any format that macOS supports, including PDF, PICT, EPS, or any number of bitmap data formats.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image from the contents of the pasteboard.

<a id="Discussion"></a>

## Discussion

The specified pasteboard should contain a type supported by one of the registered `NSImageRep` subclasses. The table below lists the default pasteboard types and file extensions for several `NSImageRep` subclasses.

| Image representation class | Default pasteboard type | Default file extensions |
| --- | --- | --- |
| `NSBitmapImageRep` | `NSTIFFPboardType` | `tiff`, `gif`, `jpg`, and others |
| `NSPDFImageRep` | `NSPDFPboardType` | `pdf` |
| `NSEPSImageRep` | `NSPostscriptPboardType` | `eps` |
| `NSPICTImageRep` | `NSPICTPboardType` | `pict` |

If the specified pasteboard contains the value `NSFilenamesPboardType`, each filename on the pasteboard should have an extension supported by one of the registered `NSImageRep` subclasses. You can use the [imageUnfilteredFileTypes()](../nsimagerep/imageunfilteredfiletypes%28%29.md) method of a given subclass to obtain the list of supported types for that class.

## See Also

### Creating Images from Existing Data

- [init(data:)](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [init(dataIgnoringOrientation:)](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [init(cgImage:size:)](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [init(coder:)](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.

# initWithPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object with data from the specified pasteboard.

## Declaration

```objectivec
- (instancetype) initWithPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: The pasteboard containing the image data. The data on the pasteboard can be in any format that macOS supports, including PDF, PICT, EPS, or any number of bitmap data formats.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image from the contents of the pasteboard.

<a id="Discussion"></a>

## Discussion

The specified pasteboard should contain a type supported by one of the registered `NSImageRep` subclasses. The table below lists the default pasteboard types and file extensions for several `NSImageRep` subclasses.

| Image representation class | Default pasteboard type | Default file extensions |
| --- | --- | --- |
| `NSBitmapImageRep` | `NSTIFFPboardType` | `tiff`, `gif`, `jpg`, and others |
| `NSPDFImageRep` | `NSPDFPboardType` | `pdf` |
| `NSEPSImageRep` | `NSPostscriptPboardType` | `eps` |
| `NSPICTImageRep` | `NSPICTPboardType` | `pict` |

If the specified pasteboard contains the value `NSFilenamesPboardType`, each filename on the pasteboard should have an extension supported by one of the registered `NSImageRep` subclasses. You can use the [imageUnfilteredFileTypes](../nsimagerep/imageunfilteredfiletypes%28%29.md) method of a given subclass to obtain the list of supported types for that class.

## See Also

### Creating Images from Existing Data

- [initWithData:](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [initWithDataIgnoringOrientation:](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [initWithCGImage:size:](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [initWithCoder:](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.
