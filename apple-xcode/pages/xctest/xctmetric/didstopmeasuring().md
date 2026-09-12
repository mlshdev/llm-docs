> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmetric/didstopmeasuring()](https://developer.apple.com/documentation/xctest/xctmetric/didstopmeasuring())

# didStopMeasuring() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

A method that XCTest calls when it has finished running the measured code.

## Declaration

```swift
optional func didStopMeasuring()
```

<a id="Discussion"></a>

## Discussion

XCTest calls this method when it has finished running the code in the performance test’s `measure()` or `measure(metrics:)` block. It calls the method once for each iteration of a performance test. Use this method to finish gathering measurements.

## See Also

### Recording Metrics

- [willBeginMeasuring()](willbeginmeasuring%28%29.md): A method that XCTest calls when it’s ready to begin running the measured code.

# didStopMeasuring (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

A method that XCTest calls when it has finished running the measured code.

## Declaration

```objectivec
- (void) didStopMeasuring;
```

<a id="Discussion"></a>

## Discussion

XCTest calls this method when it has finished running the code in the performance test’s `measure()` or `measure(metrics:)` block. It calls the method once for each iteration of a performance test. Use this method to finish gathering measurements.

## See Also

### Recording Metrics

- [willBeginMeasuring](willbeginmeasuring%28%29.md): A method that XCTest calls when it’s ready to begin running the measured code.
