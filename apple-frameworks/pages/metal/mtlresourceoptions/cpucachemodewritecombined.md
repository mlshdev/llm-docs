> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions/cpucachemodewritecombined](https://developer.apple.com/documentation/metal/mtlresourceoptions/cpucachemodewritecombined)

# cpuCacheModeWriteCombined (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.

## Declaration

```swift
static var cpuCacheModeWriteCombined: MTLResourceOptions { get }
```

# MTLResourceCPUCacheModeWriteCombined (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.

## Declaration

```objectivec
MTLResourceCPUCacheModeWriteCombined
```

## See Also

### Specifying CPU cache modes

- [MTLResourceCPUCacheModeDefaultCache](mtlresourcecpucachemodedefaultcache.md): The default CPU cache mode for the resource, which guarantees that read and write operations are executed in the expected order.
