> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/init(coder:)](https://developer.apple.com/documentation/appkit/nsimagerep/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns an image representation object from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating Representations of Images

- [imageReps(withContentsOfFile:)](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageReps(withContentsOf:)](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [init(pasteboard:)](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [init(contentsOf:)](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init()](init%28%29.md): Creates and returns an image representation object.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns an image representation object from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating Representations of Images

- [imageRepsWithContentsOfFile:](imagereps%28withcontentsoffile_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified file.
- [imageRepsWithPasteboard:](imagereps%28with_%29.md): Creates and returns an array of image representation objects initialized using the contents of the pasteboard.
- [imageRepsWithContentsOfURL:](imagereps%28withcontentsof_%29.md): Creates and returns an array of image representation objects initialized using the contents of the specified URL.
- [imageRepWithContentsOfFile:](init%28contentsoffile_%29.md): Creates and returns an image representation object using the contents of the specified file.
- [imageRepWithPasteboard:](init%28pasteboard_%29.md): Creates and returns an image representation object using the contents of the specified pasteboard.
- [imageRepWithContentsOfURL:](init%28contentsof_%29.md): Creates and returns an image representation object using the data at the specified URL.
- [init](init%28%29.md): Creates and returns an image representation object.
