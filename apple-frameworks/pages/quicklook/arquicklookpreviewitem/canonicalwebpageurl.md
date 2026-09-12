> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/arquicklookpreviewitem/canonicalwebpageurl](https://developer.apple.com/documentation/quicklook/arquicklookpreviewitem/canonicalwebpageurl)

# canonicalWebPageURL (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An optional canonical web page URL for the 3D content that will be shared.

## Declaration

```swift
var canonicalWebPageURL: URL? { get set }
```

<a id="discussion"></a>

## Discussion

If this is supplied, the URL to the canonical web page is shared instead of the 3D content file. For example, providing https://developer.apple.com/arkit/gallery/ as the canonical web page URL string will be shared via the Share button. If the web page URL string is malformed or not provided, then AR Quick Look will default to sharing the 3D content.

# canonicalWebPageURL (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An optional canonical web page URL for the 3D content that will be shared.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSURL * canonicalWebPageURL;
```

<a id="discussion"></a>

## Discussion

If this is supplied, the URL to the canonical web page is shared instead of the 3D content file. For example, providing https://developer.apple.com/arkit/gallery/ as the canonical web page URL string will be shared via the Share button. If the web page URL string is malformed or not provided, then AR Quick Look will default to sharing the 3D content.
