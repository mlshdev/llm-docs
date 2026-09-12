> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/cachemode-swift.enum](https://developer.apple.com/documentation/appkit/nsimage/cachemode-swift.enum)

# NSImage.CacheMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the caching policy on a per-image basis.

## Declaration

```swift
enum CacheMode
```

<a id="overview"></a>

## Overview

Set the caching policy using the [cacheMode](cachemode-swift.property.md) property.

The following table specifies the default caching policy for the various types of image representation.

| Image Rep Class | Default caching policy |
| --- | --- |
| `NSBitmapImageRep` | `NSImageCacheBySize`. Cache if bitmap is 32-bits in 16-bit world or greater than 72 dpi. |
| `NSPICTImageRep` | `NSImageCacheBySize`. Same reasoning as `NSBitmapImageRep` in the event the PICT contains a bitmap. |
| `NSPDFImageRep` | `NSImageCacheAlways` |
| `NSCIImageRep` | `NSImageCacheBySize`. Cache if the bitmap depth does not match the screen depth or the resolution is greater than 72 dpi. |
| `NSEPSImageRep` | `NSImageCacheAlways` |
| `NSCustomImageRep` | `NSImageCacheAlways` |

## Topics

### Cache Options

- [NSImage.CacheMode.default](cachemode-swift.enum/default.md): Caching is unspecified.
- [NSImage.CacheMode.always](cachemode-swift.enum/always.md): Always generate a cache when drawing.
- [NSImage.CacheMode.bySize](cachemode-swift.enum/bysize.md): Cache if the cache size is smaller than the original data.
- [NSImage.CacheMode.never](cachemode-swift.enum/never.md): Never cache; always draw direct.

### Initializers

- [init(rawValue:)](cachemode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Caching Options

- [cacheMode](cachemode-swift.property.md): The image’s caching mode.
- [recache()](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.

# NSImageCacheMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the caching policy on a per-image basis.

## Declaration

```objectivec
enum NSImageCacheMode : NSUInteger;
```

<a id="overview"></a>

## Overview

Set the caching policy using the [cacheMode](cachemode-swift.property.md) property.

The following table specifies the default caching policy for the various types of image representation.

| Image Rep Class | Default caching policy |
| --- | --- |
| `NSBitmapImageRep` | `NSImageCacheBySize`. Cache if bitmap is 32-bits in 16-bit world or greater than 72 dpi. |
| `NSPICTImageRep` | `NSImageCacheBySize`. Same reasoning as `NSBitmapImageRep` in the event the PICT contains a bitmap. |
| `NSPDFImageRep` | `NSImageCacheAlways` |
| `NSCIImageRep` | `NSImageCacheBySize`. Cache if the bitmap depth does not match the screen depth or the resolution is greater than 72 dpi. |
| `NSEPSImageRep` | `NSImageCacheAlways` |
| `NSCustomImageRep` | `NSImageCacheAlways` |

## Topics

### Cache Options

- [NSImageCacheDefault](cachemode-swift.enum/default.md): Caching is unspecified.
- [NSImageCacheAlways](cachemode-swift.enum/always.md): Always generate a cache when drawing.
- [NSImageCacheBySize](cachemode-swift.enum/bysize.md): Cache if the cache size is smaller than the original data.
- [NSImageCacheNever](cachemode-swift.enum/never.md): Never cache; always draw direct.

## See Also

### Managing Caching Options

- [cacheMode](cachemode-swift.property.md): The image’s caching mode.
- [recache](recache%28%29.md): Invalidates and frees offscreen caches of all image representations.
