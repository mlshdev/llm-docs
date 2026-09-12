> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemeasurementtimestamp/init(absolutetime:date:)](https://developer.apple.com/documentation/xctest/xctperformancemeasurementtimestamp/init(absolutetime:date:))

# init(absoluteTime:date:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Intitializes a timestamp that represents the provided time.

## Declaration

```swift
init(absoluteTime: UInt64, date: Date)
```

## Parameters

- `absoluteTime`: The time, as returned by the [mach_absolute_time](https://developer.apple.com/documentation/kernel/1462446-mach_absolute_time) system call.
- `date`: The time, represented as a [Date](https://developer.apple.com/documentation/foundation/date).

## See Also

### Initializers

- [init()](init%28%29.md): Intitializes a timestamp that represents the current time.

# initWithAbsoluteTime:date: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Intitializes a timestamp that represents the provided time.

## Declaration

```objectivec
- (instancetype) initWithAbsoluteTime:(uint64_t) absoluteTime date:(NSDate *) date;
```

## Parameters

- `absoluteTime`: The time, as returned by the [mach_absolute_time](https://developer.apple.com/documentation/kernel/1462446-mach_absolute_time) system call.
- `date`: The time, represented as a [Date](https://developer.apple.com/documentation/foundation/date).

## See Also

### Initializers

- [init](init%28%29.md): Intitializes a timestamp that represents the current time.
