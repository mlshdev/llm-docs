> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun/recordfailure(withdescription:infile:atline:expected:)](https://developer.apple.com/documentation/xctest/xctestrun/recordfailure(withdescription:infile:atline:expected:))

# recordFailure(withDescription:inFile:atLine:expected:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Records a failure during test execution for the test run.

> Use [record(\_:)](record%28__%29.md) instead.

## Declaration

```swift
func recordFailure(withDescription description: String, inFile filePath: String?, atLine lineNumber: Int, expected: Bool)
```

## Parameters

- `description`: The description of the failure.
- `filePath`: The file path to the source file where the failure occurred or `nil` if unknown.
- `lineNumber`: The line number in the source file at `filePath` where the failure occurred.
- `expected`: [true](https://developer.apple.com/documentation/swift/true) if the failure was the result of a failed assertion, [false](https://developer.apple.com/documentation/swift/false) if it was the result of an uncaught exception.

<a id="Discussion"></a>

## Discussion

Don’t call this method before the test run starts or after it stops.

# recordFailureWithDescription:inFile:atLine:expected: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Records a failure during test execution for the test run.

> Use [recordIssue:](record%28__%29.md) instead.

## Declaration

```objectivec
- (void) recordFailureWithDescription:(NSString *) description inFile:(NSString *) filePath atLine:(NSUInteger) lineNumber expected:(BOOL) expected;
```

## Parameters

- `description`: The description of the failure.
- `filePath`: The file path to the source file where the failure occurred or `nil` if unknown.
- `lineNumber`: The line number in the source file at `filePath` where the failure occurred.
- `expected`: [true](https://developer.apple.com/documentation/swift/true) if the failure was the result of a failed assertion, [false](https://developer.apple.com/documentation/swift/false) if it was the result of an uncaught exception.

<a id="Discussion"></a>

## Discussion

Don’t call this method before the test run starts or after it stops.
