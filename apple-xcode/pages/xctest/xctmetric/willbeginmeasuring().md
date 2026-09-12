> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmetric/willbeginmeasuring()](https://developer.apple.com/documentation/xctest/xctmetric/willbeginmeasuring())

# willBeginMeasuring() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

A method that XCTest calls when it’s ready to begin running the measured code.

## Declaration

```swift
optional func willBeginMeasuring()
```

<a id="Discussion"></a>

## Discussion

XCTest calls this method before it runs a test’s `measure()` or `measure(metrics:)` block. It calls the method once for each iteration of a performance test. Use this method to start gathering measurements.

## See Also

### Recording Metrics

- [didStopMeasuring()](didstopmeasuring%28%29.md): A method that XCTest calls when it has finished running the measured code.

# willBeginMeasuring (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

A method that XCTest calls when it’s ready to begin running the measured code.

## Declaration

```objectivec
- (void) willBeginMeasuring;
```

<a id="Discussion"></a>

## Discussion

XCTest calls this method before it runs a test’s `measure()` or `measure(metrics:)` block. It calls the method once for each iteration of a performance test. Use this method to start gathering measurements.

## See Also

### Recording Metrics

- [didStopMeasuring](didstopmeasuring%28%29.md): A method that XCTest calls when it has finished running the measured code.
