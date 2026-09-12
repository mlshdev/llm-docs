> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestlog/testlogwithformat:](https://developer.apple.com/documentation/xctest/xctestlog/testlogwithformat:)

# testLogWithFormat:

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Instance Method

Logs test results to the test log.

## Declaration

```objectivec
- (void) testLogWithFormat:(NSString *) format;
```

## Parameters

- `format`: A string that describes a test result by replacing format indicators with variable data, such as failure details, source code file names, and line numbers.

## See Also

### Logging Test Results

- [logFileHandle](logfilehandle.md): Deprecated. An object to interact with the test log file.
- [testLogWithFormat:arguments:](testlog%28withformat_arguments_%29.md): Deprecated. Logs test results to the test log.
