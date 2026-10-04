> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctperformancemeasurementtimestamp/absolutetime

# absoluteTime (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The absolute time of the timestamp, which is the value of the mach absolute time clock.

## Declaration

```swift
var absoluteTime: UInt64 { get }
```

## See Also

### Mach Absolute Time

- [absoluteTimeNanoSeconds](absolutetimenanoseconds.md): The nanoseconds component of the absolute time.

# absoluteTime (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The absolute time of the timestamp, which is the value of the mach absolute time clock.

## Declaration

```objectivec
@property (readonly) uint64_t absoluteTime;
```

## See Also

### Mach Absolute Time

- [absoluteTimeNanoSeconds](absolutetimenanoseconds.md): The nanoseconds component of the absolute time.
