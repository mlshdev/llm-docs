> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phcachingimagemanager/stopcachingimagesforallassets()

# stopCachingImagesForAllAssets() (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels all image preparation that is currently in progress.

## Declaration

```swift
func stopCachingImagesForAllAssets()
```

## See Also

### Preparing Images

- [startCachingImages(for:targetSize:contentMode:options:)](startcachingimages%28for_targetsize_contentmode_options_%29.md): Prepares image representations of the specified assets for later use.
- [stopCachingImages(for:targetSize:contentMode:options:)](stopcachingimages%28for_targetsize_contentmode_options_%29.md): Cancels image preparation for the specified assets and options.

# stopCachingImagesForAllAssets (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels all image preparation that is currently in progress.

## Declaration

```objectivec
- (void) stopCachingImagesForAllAssets;
```

## See Also

### Preparing Images

- [startCachingImagesForAssets:targetSize:contentMode:options:](startcachingimages%28for_targetsize_contentmode_options_%29.md): Prepares image representations of the specified assets for later use.
- [stopCachingImagesForAssets:targetSize:contentMode:options:](stopcachingimages%28for_targetsize_contentmode_options_%29.md): Cancels image preparation for the specified assets and options.
