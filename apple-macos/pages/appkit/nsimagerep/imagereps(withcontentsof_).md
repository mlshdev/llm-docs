> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/imagereps(withcontentsof:)](https://developer.apple.com/documentation/appkit/nsimagerep/imagereps(withcontentsof:))

# imageReps(withContentsOf:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns an array of image representation objects initialized using the contents of the specified URL.

## Declaration

```swift
class func imageReps(withContentsOf url: URL) -> [NSImageRep]?
```

## Parameters

- `url`: The URL pointing to the image data.

<a id="return-value"></a>

## Return Value

An array of image representation objects. The array contains one object for each image in the data at the specified URL.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns an array of objects (all newly allocated instances of a subclass of `NSImageRep`) that have been initialized with the contents of the specified URL. If sent to a subclass of `NSImageRep` that recognizes the data at the specified URL, it returns an array of objects (all instances of that subclass) that have been initialized with the contents of that URL.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle data in the specified URL.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle data in the specified URL.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the specified URL.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the contents of the specified URL and passing it to the `imageRepsWithData:` method.

## See Also

### Creating Representations of Images

- [imageReps(withContentsOfFile:)](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [init(pasteboard:)](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init()](init%28%29.md): Creates and returns an image representation object.
- [init(coder:)](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.

# imageRepsWithContentsOfURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns an array of image representation objects initialized using the contents of the specified URL.

## Declaration

```objectivec
+ (NSArray<NSImageRep *> *) imageRepsWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The URL pointing to the image data.

<a id="return-value"></a>

## Return Value

An array of image representation objects. The array contains one object for each image in the data at the specified URL.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns an array of objects (all newly allocated instances of a subclass of `NSImageRep`) that have been initialized with the contents of the specified URL. If sent to a subclass of `NSImageRep` that recognizes the data at the specified URL, it returns an array of objects (all instances of that subclass) that have been initialized with the contents of that URL.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle data in the specified URL.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle data in the specified URL.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the specified URL.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the contents of the specified URL and passing it to the `imageRepsWithData:` method.

## See Also

### Creating Representations of Images

- [imageRepsWithContentsOfFile:](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageRepsWithPasteboard:](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageRepWithContentsOfFile:](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [imageRepWithPasteboard:](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [imageRepWithContentsOfURL:](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init](init%28%29.md): Creates and returns an image representation object.
- [initWithCoder:](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.
