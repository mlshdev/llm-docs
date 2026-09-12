> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestlog/testlog(withformat:arguments:)](https://developer.apple.com/documentation/xctest/xctestlog/testlog(withformat:arguments:))

# testLog(withFormat:arguments:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Logs test results to the test log.

## Declaration

```swift
func testLog(withFormat format: String!, arguments: CVaListPointer)
```

## Parameters

- `format`: A string that describes a test result by replacing format indicators with variable data, such as failure details, source code filenames, and line numbers.
- `arguments`: Variable data to replace in the format string, such as failure details, source code filenames, and line numbers.

## See Also

### Logging Test Results

- [logFileHandle](logfilehandle.md): Deprecated. An object to interact with the test log file.

# testLogWithFormat:arguments: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Logs test results to the test log.

## Declaration

```objectivec
- (void) testLogWithFormat:(NSString *) format arguments:(va_list) arguments;
```

## Parameters

- `format`: A string that describes a test result by replacing format indicators with variable data, such as failure details, source code filenames, and line numbers.
- `arguments`: Variable data to replace in the format string, such as failure details, source code filenames, and line numbers.

## See Also

### Logging Test Results

- [logFileHandle](logfilehandle.md): Deprecated. An object to interact with the test log file.
- [testLogWithFormat:](testlogwithformat_.md): Deprecated. Logs test results to the test log.
