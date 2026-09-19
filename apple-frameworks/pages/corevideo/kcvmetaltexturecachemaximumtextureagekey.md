> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/kcvmetaltexturecachemaximumtextureagekey

# kCVMetalTextureCacheMaximumTextureAgeKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The length of time, in seconds, before the cache is automatically evicted.

## Declaration

```swift
let kCVMetalTextureCacheMaximumTextureAgeKey: CFString
```

<a id="Discussion"></a>

## Discussion

The default value is `1`. To disable the age-out mechanism completely, set a maximum texture age of `0`. The cache can be manually evicted with [CVMetalTextureCacheFlush(\_:\_:)](cvmetaltexturecacheflush%28____%29.md).

## See Also

### Constants

- [kCVMetalTextureUsage](kcvmetaltextureusage.md): The set of options that define how you can use a texture on the GPU.

# kCVMetalTextureCacheMaximumTextureAgeKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The length of time, in seconds, before the cache is automatically evicted.

## Declaration

```objectivec
extern CFStringRef const kCVMetalTextureCacheMaximumTextureAgeKey;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`. To disable the age-out mechanism completely, set a maximum texture age of `0`. The cache can be manually evicted with [CVMetalTextureCacheFlush](cvmetaltexturecacheflush%28____%29.md).

## See Also

### Constants

- [kCVMetalTextureUsage](kcvmetaltextureusage.md): The set of options that define how you can use a texture on the GPU.
