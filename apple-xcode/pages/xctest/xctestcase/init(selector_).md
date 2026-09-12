> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/init(selector:)](https://developer.apple.com/documentation/xctest/xctestcase/init(selector:))

# init(selector:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a test case with a selector.

## Declaration

```swift
init(selector: Selector)
```

## Parameters

- `selector`: A selector to use when running this test.

## See Also

### Creating Tests Programmatically

- [init(invocation:)](init%28invocation_%29.md): Initializes a test case with an invocation.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest()](invoketest%28%29.md): Invokes the test.
- [record(\_:)](record%28__%29.md): Records an issue during test execution.
- [recordFailure(withDescription:inFile:atLine:expected:)](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.

# initWithSelector: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a test case with a selector.

## Declaration

```objectivec
- (instancetype) initWithSelector:(SEL) selector;
```

## Parameters

- `selector`: A selector to use when running this test.

## See Also

### Creating Tests Programmatically

- [initWithInvocation:](init%28invocation_%29.md): Initializes a test case with an invocation.
- [testCaseWithInvocation:](testcasewithinvocation_.md): Creates a test case with an invocation.
- [testCaseWithSelector:](testcasewithselector_.md): Creates a test case with a selector.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest](invoketest%28%29.md): Invokes the test.
- [recordIssue:](record%28__%29.md): Records an issue during test execution.
- [recordFailureWithDescription:inFile:atLine:expected:](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.
