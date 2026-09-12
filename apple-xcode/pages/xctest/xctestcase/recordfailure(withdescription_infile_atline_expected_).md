> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/recordfailure(withdescription:infile:atline:expected:)](https://developer.apple.com/documentation/xctest/xctestcase/recordfailure(withdescription:infile:atline:expected:))

# recordFailure(withDescription:inFile:atLine:expected:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Records a failure during text execution.

> Use [record(\_:)](record%28__%29.md) instead.

## Declaration

```swift
func recordFailure(withDescription description: String, inFile filePath: String, atLine lineNumber: Int, expected: Bool)
```

## Parameters

- `description`: A description of the failure.
- `filePath`: The file path to the source file where the failure occurred.
- `lineNumber`: The line number in the source file at `filePath` where the failure occurred.
- `expected`: [true](https://developer.apple.com/documentation/swift/true) if the failure was the result of a failed assertion, [false](https://developer.apple.com/documentation/swift/false) if it was the result of an uncaught exception.

<a id="Discussion"></a>

## Discussion

All test assertions use this method to record test failures.

## See Also

### Creating Tests Programmatically

- [init(invocation:)](init%28invocation_%29.md): Initializes a test case with an invocation.
- [init(selector:)](init%28selector_%29.md): Initializes a test case with a selector.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest()](invoketest%28%29.md): Invokes the test.
- [record(\_:)](record%28__%29.md): Records an issue during test execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.

# recordFailureWithDescription:inFile:atLine:expected: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Records a failure during text execution.

> Use [recordIssue:](record%28__%29.md) instead.

## Declaration

```objectivec
- (void) recordFailureWithDescription:(NSString *) description inFile:(NSString *) filePath atLine:(NSUInteger) lineNumber expected:(BOOL) expected;
```

## Parameters

- `description`: A description of the failure.
- `filePath`: The file path to the source file where the failure occurred.
- `lineNumber`: The line number in the source file at `filePath` where the failure occurred.
- `expected`: [true](https://developer.apple.com/documentation/swift/true) if the failure was the result of a failed assertion, [false](https://developer.apple.com/documentation/swift/false) if it was the result of an uncaught exception.

<a id="Discussion"></a>

## Discussion

All test assertions use this method to record test failures.

## See Also

### Creating Tests Programmatically

- [initWithInvocation:](init%28invocation_%29.md): Initializes a test case with an invocation.
- [testCaseWithInvocation:](testcasewithinvocation_.md): Creates a test case with an invocation.
- [initWithSelector:](init%28selector_%29.md): Initializes a test case with a selector.
- [testCaseWithSelector:](testcasewithselector_.md): Creates a test case with a selector.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest](invoketest%28%29.md): Invokes the test.
- [recordIssue:](record%28__%29.md): Records an issue during test execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.
