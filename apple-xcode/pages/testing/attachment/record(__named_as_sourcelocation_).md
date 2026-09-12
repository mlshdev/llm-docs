> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/record(_:named:as:sourcelocation:)](https://developer.apple.com/documentation/testing/attachment/record(_:named:as:sourcelocation:))

# record(\_:named:as:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** Swift 6.3+ · Xcode 26.4+

Attach an image to the current test.

## Declaration

```swift
static func record<T>(_ image: T, named preferredName: String? = nil, as imageFormat: AttachableImageFormat? = nil, sourceLocation: SourceLocation = #_sourceLocation) where AttachableValue : _AttachableImageWrapper<T>, AttachableValue : AttachableWrapper, T : AttachableAsImage
```

## Parameters

- `image`: The value to attach.
- `preferredName`: The preferred name of the attachment when writing it to a test report or to disk. If `nil`, the testing library attempts to derive a reasonable filename for the attached value.
- `imageFormat`: The image format with which to encode `image`.
- `sourceLocation`: The source location of the call to this function.

<a id="discussion"></a>

## Discussion

This function creates a new instance of [Attachment](../attachment.md) wrapping `image` and immediately attaches it to the current test. The testing library uses the image format that `imageFormat` specifies. Pass `nil` to let the testing library select which image format to use. If you pass `nil`, the image format that the testing library uses depends on the path extension you specify in `preferredName`, if any. If you don’t specify a path extension, or if the path extension you specify doesn’t correspond to an image format the operating system knows how to write, the testing library selects an appropriate image format for you.

## See Also

### Attaching images to tests

- [AttachableAsImage](../attachableasimage.md): A protocol describing images that can be converted to instances of [Attachment](https://developer.apple.com/documentation/testing/attachment).
- [AttachableImageFormat](../attachableimageformat.md): A type describing image formats supported by the system that can be used when attaching an image to a test.
- [init(\_:named:as:sourceLocation:)](init%28__named_as_sourcelocation_%29.md): Conforms when `AttachableValue` conforms to `Attachable`. Initialize an instance of this type that encloses the given image.
