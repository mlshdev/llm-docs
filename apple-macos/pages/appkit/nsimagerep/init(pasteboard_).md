> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/init(pasteboard:)](https://developer.apple.com/documentation/appkit/nsimagerep/init(pasteboard:))

# init(pasteboard:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns an image representation object using the contents of the specified pasteboard.

## Declaration

```swift
init?(pasteboard: NSPasteboard)
```

## Parameters

- `pasteboard`: The pasteboard containing the image data.

<a id="return-value"></a>

## Return Value

An initialized instance of an `NSImageRep` subclass, or `nil` if the image data could not be read.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns a newly allocated instance of a subclass of `NSImageRep` initialized with the data in the specified pasteboard. If sent to a subclass of `NSImageRep` that recognizes the data on the pasteboard, it returns an instance of that subclass initialized with that data.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle data of the type contained in the specified pasteboard.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle data of the type contained in the specified pasteboard.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the pasteboard.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the data the specified pasteboard and passing it to the `imageRepWithData:` method.

## See Also

### Related Documentation

- [imagePasteboardTypes()](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.

### Creating Representations of Images

- [imageReps(withContentsOfFile:)](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageReps(withContentsOf:)](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init()](init%28%29.md): Creates and returns an image representation object.
- [init(coder:)](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.

# imageRepWithPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns an image representation object using the contents of the specified pasteboard.

## Declaration

```objectivec
+ (NSImageRep *) imageRepWithPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `pasteboard`: The pasteboard containing the image data.

<a id="return-value"></a>

## Return Value

An initialized instance of an `NSImageRep` subclass, or `nil` if the image data could not be read.

<a id="Discussion"></a>

## Discussion

If sent to the `NSImageRep` class object, this method returns a newly allocated instance of a subclass of `NSImageRep` initialized with the data in the specified pasteboard. If sent to a subclass of `NSImageRep` that recognizes the data on the pasteboard, it returns an instance of that subclass initialized with that data.

This method returns `nil` in any of the following cases:

- The message is sent to the `NSImageRep` class object and there are no subclasses in the `NSImageRep` class registry that handle data of the type contained in the specified pasteboard.
- The message is sent to a subclass of `NSImageRep` and that subclass cannot handle data of the type contained in the specified pasteboard.
- The `NSImageRep` subclass is unable to initialize itself with the contents of the pasteboard.

The `NSImageRep` subclass is initialized by creating an `NSData` object based on the data the specified pasteboard and passing it to the `imageRepWithData:` method.

## See Also

### Related Documentation

- [imagePasteboardTypes](imagepasteboardtypes%28%29.md): Deprecated. Returns the pasteboard types supported by the image representation class or one of its subclasses.

### Creating Representations of Images

- [imageRepsWithContentsOfFile:](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageRepsWithPasteboard:](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageRepsWithContentsOfURL:](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [imageRepWithContentsOfFile:](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [imageRepWithContentsOfURL:](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init](init%28%29.md): Creates and returns an image representation object.
- [initWithCoder:](init%28coder_%29.md): Creates and returns an image representation object from data in an unarchiver.
