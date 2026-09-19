> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avurlasset/assetcache

# assetCache (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The asset’s associated asset cache, if it exists.

## Declaration

```swift
var assetCache: AVAssetCache? { get }
```

<a id="Discussion"></a>

## Discussion

This property provides access to an instance of [AVAssetCache](../avassetcache.md) to use for inspection of locally cached media data. The value of this property is `nil` if you haven’t configured the asset to store or access media data from disk.

# assetCache (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The asset’s associated asset cache, if it exists.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAssetCache * assetCache;
```

<a id="Discussion"></a>

## Discussion

This property provides access to an instance of [AVAssetCache](../avassetcache.md) to use for inspection of locally cached media data. The value of this property is `nil` if you haven’t configured the asset to store or access media data from disk.
