> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/init(contentsof:)](https://developer.apple.com/documentation/appkit/nsimagerep/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns an image representation object using the data at the specified URL.

## Declaration

```swift
init?(contentsOf url: URL)
```

## Parameters

- `url`: The URL pointing to the image data.

<a id="return-value"></a>

## Return Value

An initialized instance of an `NSImageRep` subclass, or `nil` if the image data could not be read.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns a newly allocated instance of a subclass of `NSImageRep` initialized with the contents of the specified URL. If sent to a subclass of `NSImageRep` that recognizes the data contained in the URL, it returns an instance of that subclass initialized with the data in the URL.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle the data contained in the specified URL.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle the data contained in the specified URL.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the specified URL.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the contents of the file, then passing it to the `imageRepWithData:` method.

## See Also

### Creating Representations of Images

- [imageReps(withContentsOfFile:)](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageReps(withContentsOf:)](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [init(pasteboard:)](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [init()](init%28%29.md): Creates and returns an image representation object.
- [init(coder:)](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.

# imageRepWithContentsOfURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns an image representation object using the data at the specified URL.

## Declaration

```objectivec
+ (NSImageRep *) imageRepWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The URL pointing to the image data.

<a id="return-value"></a>

## Return Value

An initialized instance of an `NSImageRep` subclass, or `nil` if the image data could not be read.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns a newly allocated instance of a subclass of `NSImageRep` initialized with the contents of the specified URL. If sent to a subclass of `NSImageRep` that recognizes the data contained in the URL, it returns an instance of that subclass initialized with the data in the URL.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle the data contained in the specified URL.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle the data contained in the specified URL.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the specified URL.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the contents of the file, then passing it to the `imageRepWithData:` method.

## See Also

### Creating Representations of Images

- [imageRepsWithContentsOfFile:](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageRepsWithPasteboard:](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageRepsWithContentsOfURL:](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [imageRepWithContentsOfFile:](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [imageRepWithPasteboard:](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [init](init%28%29.md): Creates and returns an image representation object.
- [initWithCoder:](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.
