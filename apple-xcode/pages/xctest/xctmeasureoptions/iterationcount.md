> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmeasureoptions/iterationcount](https://developer.apple.com/documentation/xctest/xctmeasureoptions/iterationcount)

# iterationCount (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The number of times the performance test measures its block.

## Declaration

```swift
var iterationCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A performance test runs its block `iterationCount+1` times, ignoring the first iteration and recording metrics for the remaining iterations. The test ignores the first iteration to reduce measurement variance associated with “warming up” caches and other first-run behavior.

## See Also

### Using Option Details

- [invocationOptions](invocationoptions-swift.property.md): Options that define whether measurement is automatically or manually controlled.
- [XCTMeasureOptions.InvocationOptions](invocationoptions-swift.struct.md): Test measurement options that control how measurement starts and stops.

# iterationCount (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The number of times the performance test measures its block.

## Declaration

```objectivec
@property (nonatomic) NSUInteger iterationCount;
```

<a id="Discussion"></a>

## Discussion

A performance test runs its block `iterationCount+1` times, ignoring the first iteration and recording metrics for the remaining iterations. The test ignores the first iteration to reduce measurement variance associated with “warming up” caches and other first-run behavior.

## See Also

### Using Option Details

- [invocationOptions](invocationoptions-swift.property.md): Options that define whether measurement is automatically or manually controlled.
- [XCTMeasurementInvocationOptions](invocationoptions-swift.struct.md): Test measurement options that control how measurement starts and stops.
