> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctcpumetric/init(limitingtocurrentthread:)](https://developer.apple.com/documentation/xctest/xctcpumetric/init(limitingtocurrentthread:))

# init(limitingToCurrentThread:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a CPU metric that optionally records data only for the current thread.

## Declaration

```swift
init(limitingToCurrentThread limitToCurrentThread: Bool)
```

## Parameters

- `limitToCurrentThread`: A Boolean value that specifies whether to limit the recording of data for this metric to the current thread only.

<a id="Discussion"></a>

## Discussion

If `limitToCurrentThread` is `true`, the returned metric only records data related to CPU use on the current thread. In a single-threaded context, a thread-limited metric provides lower variance and greater precision than a whole-process metric.

## See Also

### Initializers

- [init()](init%28%29.md): Creates a CPU metric that records data for the current process.
- [init(application:)](init%28application_%29.md): Creates a CPU metric that records data for the requested app.

# initLimitingToCurrentThread: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a CPU metric that optionally records data only for the current thread.

## Declaration

```objectivec
- (instancetype) initLimitingToCurrentThread:(BOOL) limitToCurrentThread;
```

## Parameters

- `limitToCurrentThread`: A Boolean value that specifies whether to limit the recording of data for this metric to the current thread only.

<a id="Discussion"></a>

## Discussion

If `limitToCurrentThread` is `true`, the returned metric only records data related to CPU use on the current thread. In a single-threaded context, a thread-limited metric provides lower variance and greater precision than a whole-process metric.

## See Also

### Initializers

- [init](init%28%29.md): Creates a CPU metric that records data for the current process.
- [initWithApplication:](init%28application_%29.md): Creates a CPU metric that records data for the requested app.
