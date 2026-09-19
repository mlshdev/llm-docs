> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctestrun/testduration

# testDuration (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The number of seconds that elapse between when the run starts and when it stops.

## Declaration

```swift
var testDuration: TimeInterval { get }
```

## See Also

### Tracking Test Durations

- [startDate](startdate.md): The date and time when the test run started, or no value if the test hasn’t run.
- [stopDate](stopdate.md): The date and time when the test run stopped, or no value if the test hasn’t run.
- [totalDuration](totalduration.md): The number of seconds that elapse between when the run starts and when it stops.

# testDuration (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The number of seconds that elapse between when the run starts and when it stops.

## Declaration

```objectivec
@property (readonly) NSTimeInterval testDuration;
```

## See Also

### Tracking Test Durations

- [startDate](startdate.md): The date and time when the test run started, or no value if the test hasn’t run.
- [stopDate](stopdate.md): The date and time when the test run stopped, or no value if the test hasn’t run.
- [totalDuration](totalduration.md): The number of seconds that elapse between when the run starts and when it stops.
