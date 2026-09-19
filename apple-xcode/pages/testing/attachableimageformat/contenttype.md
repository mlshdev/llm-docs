> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/attachableimageformat/contenttype

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
