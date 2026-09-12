> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordescriptor/cpucachemode](https://developer.apple.com/documentation/metal/mtltensordescriptor/cpucachemode)

# cpuCacheMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that configures the cache mode of CPU mapping of tensors you create with this descriptor.

## Declaration

```swift
var cpuCacheMode: MTLCPUCacheMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLCPUCacheMode.defaultCache](../mtlcpucachemode/defaultcache.md).

# cpuCacheMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that configures the cache mode of CPU mapping of tensors you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLCPUCacheMode cpuCacheMode;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLCPUCacheModeDefaultCache](../mtlcpucachemode/defaultcache.md).
