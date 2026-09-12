> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableimageformat/init(pathextension:encodingquality:)](https://developer.apple.com/documentation/testing/attachableimageformat/init(pathextension:encodingquality:))

# init(pathExtension:encodingQuality:)

**Framework:** Testing  
**Kind:** Initializer  
**Availability:** Swift 6.3+ · Xcode 26.4+

Construct an instance of this type with the given path extension and encoding quality.

## Declaration

```swift
init?(pathExtension: String, encodingQuality: Float = 1.0)
```

## Parameters

- `pathExtension`: A path extension corresponding to the image format to use when encoding images.
- `encodingQuality`: The encoding quality to use when encoding images. For the lowest supported quality, pass `0.0`. For the highest supported quality, pass `1.0`.

<a id="discussion"></a>

## Discussion

If the target image format does not support variable-quality encoding, the value of the `encodingQuality` argument is ignored.

If `pathExtension` does not correspond to a recognized image format, this initializer returns `nil`:

- On Apple platforms, the content type corresponding to `pathExtension` must conform to [UTType.image](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/image).
- On Windows, there must be a corresponding subclass of [IWICBitmapEncoder](https://learn.microsoft.com/en-us/windows/win32/api/wincodec/nn-wincodec-iwicbitmapencoder) registered with Windows Imaging Component.
