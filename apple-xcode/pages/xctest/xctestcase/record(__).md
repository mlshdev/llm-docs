> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/record(_:)](https://developer.apple.com/documentation/xctest/xctestcase/record(_:))

# record(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Records an issue during test execution.

## Declaration

```swift
func record(_ issue: XCTIssue)
```

```swift
func record(_ issue: XCTIssueReference)
```

## Parameters

- `issue`: The test issue to record.

## See Also

### Creating Tests Programmatically

- [init(invocation:)](init%28invocation_%29.md): Initializes a test case with an invocation.
- [init(selector:)](init%28selector_%29.md): Initializes a test case with a selector.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest()](invoketest%28%29.md): Invokes the test.
- [recordFailure(withDescription:inFile:atLine:expected:)](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.

# recordIssue: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Records an issue during test execution.

## Declaration

```objectivec
- (void) recordIssue:(XCTIssue *) issue;
```

## Parameters

- `issue`: The test issue to record.

## See Also

### Creating Tests Programmatically

- [initWithInvocation:](init%28invocation_%29.md): Initializes a test case with an invocation.
- [testCaseWithInvocation:](testcasewithinvocation_.md): Creates a test case with an invocation.
- [initWithSelector:](init%28selector_%29.md): Initializes a test case with a selector.
- [testCaseWithSelector:](testcasewithselector_.md): Creates a test case with a selector.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest](invoketest%28%29.md): Invokes the test.
- [recordFailureWithDescription:inFile:atLine:expected:](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.
