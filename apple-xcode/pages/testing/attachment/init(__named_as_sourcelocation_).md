> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/init(_:named:as:sourcelocation:)](https://developer.apple.com/documentation/testing/attachment/init(_:named:as:sourcelocation:))

# init(\_:named:as:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Initializer  
**Availability:** Swift 6.3+ · Xcode 26.4+

Initialize an instance of this type that encloses the given image.

## Declaration

```swift
init<T>(_ image: T, named preferredName: String? = nil, as imageFormat: AttachableImageFormat? = nil, sourceLocation: SourceLocation = #_sourceLocation) where AttachableValue : _AttachableImageWrapper<T>, AttachableValue : AttachableWrapper, T : AttachableAsImage
```

## Parameters

- `image`: The value that will be attached to the output of the test run.
- `preferredName`: The preferred name of the attachment when writing it to a test report or to disk. If `nil`, the testing library attempts to derive a reasonable filename for the attached value.
- `imageFormat`: The image format with which to encode `image`.
- `sourceLocation`: The source location of the call to this initializer. This value is used when recording issues associated with the attachment.

<a id="discussion"></a>

## Discussion

The testing library uses the image format specified by `imageFormat`. Pass `nil` to let the testing library decide which image format to use. If you pass `nil`, then the image format that the testing library uses depends on the path extension you specify in `preferredName`, if any. If you do not specify a path extension, or if the path extension you specify doesn’t correspond to an image format the operating system knows how to write, the testing library selects an appropriate image format for you.

## See Also

### Attaching images to tests

- [AttachableAsImage](../attachableasimage.md): A protocol describing images that can be converted to instances of [Attachment](https://developer.apple.com/documentation/testing/attachment).
- [AttachableImageFormat](../attachableimageformat.md): A type describing image formats supported by the system that can be used when attaching an image to a test.
- [record(\_:named:as:sourceLocation:)](record%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Attach an image to the current test.
