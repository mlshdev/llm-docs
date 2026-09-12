> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/isvalid](https://developer.apple.com/documentation/appkit/nsimage/isvalid)

# isValid (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether it is possible to draw an image representation.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If you created the image with an existing image file, but the corresponding image data is not yet loaded into memory, this method loads the data and expands it as needed. If the receiver contains no image representations and no associated image file, this method creates a valid cached image representation and initializes it to the default bit depth. If the file or URL from which the image was initialized is nonexistent, or the data in an existing file is invalid, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [init(byReferencingFile:)](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [init(byReferencing:)](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.

### Managing Drawing Options

- [backgroundColor](backgroundcolor.md): The background color for the image.
- [capInsets](capinsets.md): The cap insets for the image.
- [resizingMode](resizingmode-swift.property.md): The resizing mode for the image.
- [NSImage.ResizingMode](resizingmode-swift.enum.md): Constants that describe the resizing mode for the image.

# valid (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether it is possible to draw an image representation.

## Declaration

```objectivec
@property (readonly, getter=isValid) BOOL valid;
```

<a id="Discussion"></a>

## Discussion

If you created the image with an existing image file, but the corresponding image data is not yet loaded into memory, this method loads the data and expands it as needed. If the receiver contains no image representations and no associated image file, this method creates a valid cached image representation and initializes it to the default bit depth. If the file or URL from which the image was initialized is nonexistent, or the data in an existing file is invalid, this method returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [initByReferencingFile:](init%28byreferencingfile_%29.md): Initializes and returns an image object using the specified file.
- [initByReferencingURL:](init%28byreferencing_%29.md): Initializes and returns an image object using the specified URL.

### Managing Drawing Options

- [backgroundColor](backgroundcolor.md): The background color for the image.
- [capInsets](capinsets.md): The cap insets for the image.
- [resizingMode](resizingmode-swift.property.md): The resizing mode for the image.
- [NSImageResizingMode](resizingmode-swift.enum.md): Constants that describe the resizing mode for the image.
