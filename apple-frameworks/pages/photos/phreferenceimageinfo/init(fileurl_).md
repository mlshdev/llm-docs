> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phreferenceimageinfo/init(fileurl:)](https://developer.apple.com/documentation/photos/phreferenceimageinfo/init(fileurl:))

# init(fileURL:)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates an info object from a file URL representing a HEIC, JPEG, or DNG containing an image with Apple Reference Image data.

## Declaration

```swift
init(fileURL: URL)
```

<a id="discussion"></a>

## Discussion

If the file URL references a file that is not an image file, or an image file that does not contain Apple Reference Image data, `PHReferenceImageInfo/imageContainsReferenceImageData` will return false.
