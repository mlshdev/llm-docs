> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurementtimestamp/absolutetimenanoseconds](https://developer.apple.com/documentation/xctest/xctperformancemeasurementtimestamp/absolutetimenanoseconds)

# absoluteTimeNanoSeconds (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The nanoseconds component of the absolute time.

## Declaration

```swift
var absoluteTimeNanoSeconds: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the number of nanoseconds since an arbitrary reference time. It doesn’t update while the system is sleeping.

## See Also

### Mach Absolute Time

- [absoluteTime](absolutetime.md): The absolute time of the timestamp, which is the value of the mach absolute time clock.

# absoluteTimeNanoSeconds (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The nanoseconds component of the absolute time.

## Declaration

```objectivec
@property (readonly) uint64_t absoluteTimeNanoSeconds;
```

<a id="Discussion"></a>

## Discussion

This property reflects the number of nanoseconds since an arbitrary reference time. It doesn’t update while the system is sleeping.

## See Also

### Mach Absolute Time

- [absoluteTime](absolutetime.md): The absolute time of the timestamp, which is the value of the mach absolute time clock.
