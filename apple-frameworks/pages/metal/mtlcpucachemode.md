> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcpucachemode](https://developer.apple.com/documentation/metal/mtlcpucachemode)

# MTLCPUCacheMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Options for the CPU cache mode that define the CPU mapping of the resource.

## Declaration

```swift
enum MTLCPUCacheMode
```

## Topics

### Specifying the cache mode

- [MTLCPUCacheMode.defaultCache](mtlcpucachemode/defaultcache.md): The default CPU cache mode for the resource, which guarantees that read and write operations are executed in the expected order.
- [MTLCPUCacheMode.writeCombined](mtlcpucachemode/writecombined.md): A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.

### Initializers

- [init(rawValue:)](mtlcpucachemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading memory and storage properties

- [cpuCacheMode](mtlresource/cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](mtlresource/storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](mtlresource/hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](mtlresource/resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLStorageMode](mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.

# MTLCPUCacheMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Options for the CPU cache mode that define the CPU mapping of the resource.

## Declaration

```objectivec
enum MTLCPUCacheMode : NSUInteger;
```

## Topics

### Specifying the cache mode

- [MTLCPUCacheModeDefaultCache](mtlcpucachemode/defaultcache.md): The default CPU cache mode for the resource, which guarantees that read and write operations are executed in the expected order.
- [MTLCPUCacheModeWriteCombined](mtlcpucachemode/writecombined.md): A write-combined CPU cache mode that is optimized for resources that the CPU writes into, but never reads.

## See Also

### Reading memory and storage properties

- [cpuCacheMode](mtlresource/cpucachemode.md): The CPU cache mode that defines the CPU mapping of the resource.
- [storageMode](mtlresource/storagemode.md): The location and access permissions of the resource.
- [hazardTrackingMode](mtlresource/hazardtrackingmode.md): A mode that determines whether Metal tracks and synchronizes resource access.
- [resourceOptions](mtlresource/resourceoptions.md): The storage mode, CPU cache mode, and hazard tracking mode of the resource.
- [MTLStorageMode](mtlstoragemode.md): Options for the memory location and access permissions for a resource.
- [MTLHazardTrackingMode](mtlhazardtrackingmode.md): Options that control whether Metal automatically tracks and prevents memory hazards for resources.
