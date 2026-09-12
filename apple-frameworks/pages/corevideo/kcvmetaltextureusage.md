> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvmetaltextureusage](https://developer.apple.com/documentation/corevideo/kcvmetaltextureusage)

# kCVMetalTextureUsage (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The set of options that define how you can use a texture on the GPU.

## Declaration

```swift
let kCVMetalTextureUsage: CFString
```

<a id="Discussion"></a>

## Discussion

The default value is [unknown](../metal/mtltextureusage/unknown.md). Use only values which are valid for [MTLTextureUsage](../metal/mtltextureusage.md).

## See Also

### Constants

- [kCVMetalTextureCacheMaximumTextureAgeKey](kcvmetaltexturecachemaximumtextureagekey.md): The length of time, in seconds, before the cache is automatically evicted.

# kCVMetalTextureUsage (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The set of options that define how you can use a texture on the GPU.

## Declaration

```objectivec
extern CFStringRef const kCVMetalTextureUsage;
```

<a id="Discussion"></a>

## Discussion

The default value is [MTLTextureUsageUnknown](../metal/mtltextureusage/unknown.md). Use only values which are valid for [MTLTextureUsage](../metal/mtltextureusage.md).

## See Also

### Constants

- [kCVMetalTextureCacheMaximumTextureAgeKey](kcvmetaltexturecachemaximumtextureagekey.md): The length of time, in seconds, before the cache is automatically evicted.
