> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/recache()](https://developer.apple.com/documentation/appkit/nsimage/recache())

# recache() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates and frees offscreen caches of all image representations.

## Declaration

```swift
func recache()
```

<a id="Discussion"></a>

## Discussion

If you modify an image representation, you must send a  [recache()](recache%28%29.md) message to the corresponding image object to force the changes to be recached. The next time any image representation is drawn, it is asked to recreate its cached image. If you do not send this message, the image representation may use the old cache data. This method simply clears the cached image data; it does not delete the `NSCachedImageRep` objects associated with any image representations.

If you do not plan to use an image again right away, you can free its caches to reduce the amount of memory consumed by your program.

## See Also

### Managing Caching Options

- [cacheMode](cachemode-swift.property.md): The image’s caching mode.
- [NSImage.CacheMode](cachemode-swift.enum.md): Constants that specify the caching policy on a per-image basis.

# recache (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates and frees offscreen caches of all image representations.

## Declaration

```objectivec
- (void) recache;
```

<a id="Discussion"></a>

## Discussion

If you modify an image representation, you must send a  [recache](recache%28%29.md) message to the corresponding image object to force the changes to be recached. The next time any image representation is drawn, it is asked to recreate its cached image. If you do not send this message, the image representation may use the old cache data. This method simply clears the cached image data; it does not delete the `NSCachedImageRep` objects associated with any image representations.

If you do not plan to use an image again right away, you can free its caches to reduce the amount of memory consumed by your program.

## See Also

### Managing Caching Options

- [cacheMode](cachemode-swift.property.md): The image’s caching mode.
- [NSImageCacheMode](cachemode-swift.enum.md): Constants that specify the caching policy on a per-image basis.
