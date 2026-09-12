> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableimageformat/encodingquality](https://developer.apple.com/documentation/testing/attachableimageformat/encodingquality)

# encodingQuality

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.3+ · Xcode 26.4+

The encoding quality to use for this image format.

## Declaration

```swift
var encodingQuality: Float { get }
```

<a id="discussion"></a>

## Discussion

The meaning of the value is format-specific with `0.0` being the lowest supported encoding quality and `1.0` being the highest supported encoding quality. The value of this property is ignored for image formats that do not support variable encoding quality.
