> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlresourceoptions/mtlresourcecpucachemodedefaultcache

# MTLResourceCPUCacheModeDefaultCache

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The default CPU cache mode for the resource, which guarantees that read and write operations are executed in the expected order.

## Declaration

```objectivec
MTLResourceCPUCacheModeDefaultCache
```

## See Also

### Specifying CPU cache modes

- [MTLResourceCPUCacheModeWriteCombined](cpucachemodewritecombined.md): A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.
