> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(byreferencingfile:)](https://developer.apple.com/documentation/appkit/nsimage/init(byreferencingfile:))

# init(byReferencingFile:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object using the specified file.

## Declaration

```swift
convenience init?(byReferencingFile fileName: String)
```

## Parameters

- `fileName`: A full or relative path name specifying the file with the desired image data. Relative paths must be relative to the current working directory.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the new object cannot be initialized.

<a id="Discussion"></a>

## Discussion

This method initializes the image object lazily. It does not actually open the specified file or create any image representations from its data until an app attempts to draw the image or request information about it.

The `filename` parameter should include the file extension that identifies the type of the image data. The mechanism that actually creates the image representation for `filename` looks for an `NSImageRep` subclass that handles that data type from among those registered with `NSImage`.

Because this method doesn’t actually create image representations for the image data, your app should do error checking before attempting to use the image; one way to do so is by accessing the [isValid](isvalid.md) property to check whether the image can be drawn.

This method invokes [setDataRetained:](setdataretained_.md) with an argument of [true](https://developer.apple.com/documentation/swift/true), thus enabling it to hold onto its filename. When archiving an image created with this method, only the image’s filename is written to the archive.

If the cached version of the image uses less memory than the original image data, AppKit deletes the original data and uses the cached image. (This can occur for images whose resolution is greater than 72 dpi.) If you resize the image by less than 50%, AppKit loads the data in again from the file. If you expect to delete the file or change its contents, use [init(contentsOfFile:)](init%28contentsoffile_%29.md) instead.

## See Also

### Creating Images from Resource Files

- [init(byReferencing:)](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
- [init(contentsOf:)](init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.

# initByReferencingFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object using the specified file.

## Declaration

```objectivec
- (instancetype) initByReferencingFile:(NSString *) fileName;
```

## Parameters

- `fileName`: A full or relative path name specifying the file with the desired image data. Relative paths must be relative to the current working directory.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the new object cannot be initialized.

<a id="Discussion"></a>

## Discussion

This method initializes the image object lazily. It does not actually open the specified file or create any image representations from its data until an app attempts to draw the image or request information about it.

The `filename` parameter should include the file extension that identifies the type of the image data. The mechanism that actually creates the image representation for `filename` looks for an `NSImageRep` subclass that handles that data type from among those registered with `NSImage`.

Because this method doesn’t actually create image representations for the image data, your app should do error checking before attempting to use the image; one way to do so is by accessing the [valid](isvalid.md) property to check whether the image can be drawn.

This method invokes [setDataRetained:](setdataretained_.md) with an argument of [true](https://developer.apple.com/documentation/swift/true), thus enabling it to hold onto its filename. When archiving an image created with this method, only the image’s filename is written to the archive.

If the cached version of the image uses less memory than the original image data, AppKit deletes the original data and uses the cached image. (This can occur for images whose resolution is greater than 72 dpi.) If you resize the image by less than 50%, AppKit loads the data in again from the file. If you expect to delete the file or change its contents, use [initWithContentsOfFile:](init%28contentsoffile_%29.md) instead.

## See Also

### Creating Images from Resource Files

- [initByReferencingURL:](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes and returns an image object with the contents of the specified file.
- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes and returns an image object with the contents of the specified URL.
