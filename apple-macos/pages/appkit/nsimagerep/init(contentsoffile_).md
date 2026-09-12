> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/init(contentsoffile:)](https://developer.apple.com/documentation/appkit/nsimagerep/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns an image representation object using the contents of the specified file.

## Declaration

```swift
init?(contentsOfFile filename: String)
```

## Parameters

- `filename`: A full or relative pathname specifying the file to open. This string should include the filename extension.

<a id="return-value"></a>

## Return Value

An initialized instance of an `NSImageRep` subclass, or `nil` if the image data could not be read.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns a newly allocated instance of a subclass of `NSImageRep` (chosen through the use of [class(forFileType:)](class%28forfiletype_%29.md)) initialized with the contents of the specified file. If sent to a subclass of `NSImageRep` that recognizes the type of data in the file, it returns an instance of that subclass initialized with the contents of the file.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle the type of data in the specified file.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle the type of data in the specified file.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the specified file.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the contents of the file and passing it to the `imageRepWithData:` method. By default, the files handled include those with the extensions “`tiff`”, “`gif`”, “`jpg`”, “`pict`”, “`pdf`”, and “`eps`”.

## See Also

### Related Documentation

- [imageFileTypes()](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.

### Creating Representations of Images

- [imageReps(withContentsOfFile:)](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageReps(withContentsOf:)](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [init(pasteboard:)](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init()](init%28%29.md): Creates and returns an image representation object.
- [init(coder:)](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.

# imageRepWithContentsOfFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns an image representation object using the contents of the specified file.

## Declaration

```objectivec
+ (NSImageRep *) imageRepWithContentsOfFile:(NSString *) filename;
```

## Parameters

- `filename`: A full or relative pathname specifying the file to open. This string should include the filename extension.

<a id="return-value"></a>

## Return Value

An initialized instance of an `NSImageRep` subclass, or `nil` if the image data could not be read.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns a newly allocated instance of a subclass of `NSImageRep` (chosen through the use of [imageRepClassForFileType:](class%28forfiletype_%29.md)) initialized with the contents of the specified file. If sent to a subclass of `NSImageRep` that recognizes the type of data in the file, it returns an instance of that subclass initialized with the contents of the file.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle the type of data in the specified file.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle the type of data in the specified file.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the specified file.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the contents of the file and passing it to the `imageRepWithData:` method. By default, the files handled include those with the extensions “`tiff`”, “`gif`”, “`jpg`”, “`pict`”, “`pdf`”, and “`eps`”.

## See Also

### Related Documentation

- [imageFileTypes](imagefiletypes%28%29.md): Deprecated. Returns the file types supported by the image representation class or one of its subclasses.

### Creating Representations of Images

- [imageRepsWithContentsOfFile:](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageRepsWithPasteboard:](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageRepsWithContentsOfURL:](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [imageRepWithPasteboard:](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [imageRepWithContentsOfURL:](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init](init%28%29.md): Creates and returns an image representation object.
- [initWithCoder:](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.
