> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun/startdate](https://developer.apple.com/documentation/xctest/xctestrun/startdate)

# startDate (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The date and time when the test run started, or no value if the test hasn’t run.

## Declaration

```swift
var startDate: Date? { get }
```

## See Also

### Tracking Test Durations

- [stopDate](stopdate.md): The date and time when the test run stopped, or no value if the test hasn’t run.
- [testDuration](testduration.md): The number of seconds that elapse between when the run starts and when it stops.
- [totalDuration](totalduration.md): The number of seconds that elapse between when the run starts and when it stops.

# startDate (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The date and time when the test run started, or no value if the test hasn’t run.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * startDate;
```

## See Also

### Tracking Test Durations

- [stopDate](stopdate.md): The date and time when the test run stopped, or no value if the test hasn’t run.
- [testDuration](testduration.md): The number of seconds that elapse between when the run starts and when it stops.
- [totalDuration](totalduration.md): The number of seconds that elapse between when the run starts and when it stops.
