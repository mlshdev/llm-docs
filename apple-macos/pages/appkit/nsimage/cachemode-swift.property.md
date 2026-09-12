> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/cachemode-swift.property](https://developer.apple.com/documentation/appkit/nsimage/cachemode-swift.property)

# cacheMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image’s caching mode.

## Declaration

```swift
var cacheMode: NSImage.CacheMode { get set }
```

<a id="Discussion"></a>

## Discussion

The caching mode determines when the image representations use offscreen caches. Offscreen caches speed up rendering time but do so by using extra memory. In the default caching mode (`NSImageCacheDefault`), each image representation chooses the caching technique that produces the fastest drawing times. For example, in the default mode, the `NSPDFImageRep` and `NSEPSImageRep` classes use the `NSImageCacheAlways` mode but the `NSBitmapImageRep` class uses the `NSImageCacheBySize` mode.  For a list of possible values, see [NSImage.CacheMode](cachemode-swift.enum.md). This value is set to `NSImageCacheDefault` by default.

## See Also

### Managing Caching Options

- [recache()](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.
- [NSImage.CacheMode](cachemode-swift.enum.md): Constants that specify the caching policy on a per-image basis.

# cacheMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image’s caching mode.

## Declaration

```objectivec
@property NSImageCacheMode cacheMode;
```

<a id="Discussion"></a>

## Discussion

The caching mode determines when the image representations use offscreen caches. Offscreen caches speed up rendering time but do so by using extra memory. In the default caching mode (`NSImageCacheDefault`), each image representation chooses the caching technique that produces the fastest drawing times. For example, in the default mode, the `NSPDFImageRep` and `NSEPSImageRep` classes use the `NSImageCacheAlways` mode but the `NSBitmapImageRep` class uses the `NSImageCacheBySize` mode.  For a list of possible values, see [NSImageCacheMode](cachemode-swift.enum.md). This value is set to `NSImageCacheDefault` by default.

## See Also

### Managing Caching Options

- [recache](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.
- [NSImageCacheMode](cachemode-swift.enum.md): Constants that specify the caching policy on a per-image basis.
