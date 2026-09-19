> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmlkit/tvimageelement/srcset

# srcset (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A dictionary specifying versions of the same image for different resolutions.

> Please use SwiftUI or UIKit

## Declaration

```swift
var srcset: [String : URL]? { get }
```

<a id="Discussion"></a>

## Discussion

Each dictionary entry contains a string and a URL for a specific image.

## See Also

### Identifying an Image

- [url](url.md): Deprecated. A URL that points to the location of the image.
- [imageType](imagetype.md): Deprecated. The type of image.
- [TVImageType](../tvimagetype.md): Deprecated. The type of image.

# srcset (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A dictionary specifying versions of the same image for different resolutions.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSURL *> * srcset;
```

<a id="Discussion"></a>

## Discussion

Each dictionary entry contains a string and a URL for a specific image.

## See Also

### Identifying an Image

- [URL](url.md): Deprecated. A URL that points to the location of the image.
- [imageType](imagetype.md): Deprecated. The type of image.
- [TVImageType](../tvimagetype.md): Deprecated. The type of image.
