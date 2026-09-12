> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltimestamp](https://developer.apple.com/documentation/metal/mtltimestamp)

# MTLTimestamp (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of nanoseconds for a point in absolute time or Mach absolute time.

## Declaration

```swift
typealias MTLTimestamp = UInt64
```

<a id="discussion"></a>

## Discussion

The type of absolute time a Metal timestamp uses can vary with a system’s configuration, but it’s consistent for a configuration.

## See Also

### Timestamp data

- [Converting GPU timestamps into CPU time](converting-gpu-timestamps-into-cpu-time.md): Correlate GPU events with CPU timelines by calculating the CPU time equivalents for GPU timestamps.

# MTLTimestamp (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of nanoseconds for a point in absolute time or Mach absolute time.

## Declaration

```objectivec
typedef uint64_t MTLTimestamp;
```

<a id="discussion"></a>

## Discussion

The type of absolute time a Metal timestamp uses can vary with a system’s configuration, but it’s consistent for a configuration.

## See Also

### Timestamp data

- [Converting GPU timestamps into CPU time](converting-gpu-timestamps-into-cpu-time.md): Correlate GPU events with CPU timelines by calculating the CPU time equivalents for GPU timestamps.
