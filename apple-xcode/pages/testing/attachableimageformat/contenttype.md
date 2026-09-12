> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableimageformat/contenttype](https://developer.apple.com/documentation/testing/attachableimageformat/contenttype)

# contentType

**Framework:** Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.3+ · Xcode 26.4+

The content type corresponding to this image format.

## Declaration

```swift
var contentType: UTType { get }
```

<a id="discussion"></a>

## Discussion

For example, if this image format equals [png](png.md), the value of this property equals [UTType.png](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/png).

The value of this property always conforms to [UTType.image](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/image).
