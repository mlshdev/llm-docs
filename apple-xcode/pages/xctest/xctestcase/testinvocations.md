> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/testinvocations](https://developer.apple.com/documentation/xctest/xctestcase/testinvocations)

# testInvocations (Swift)

**Framework:** XCTest  
**Kind:** Type Property

An array of invocations that represents each test method in the test case.

## Declaration

```swift
class var testInvocations: [NSInvocation] { get }
```

## See Also

### Creating Tests Programmatically

- [init(invocation:)](init%28invocation_%29.md): Initializes a test case with an invocation.
- [init(selector:)](init%28selector_%29.md): Initializes a test case with a selector.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest()](invoketest%28%29.md): Invokes the test.
- [record(\_:)](record%28__%29.md): Records an issue during test execution.
- [recordFailure(withDescription:inFile:atLine:expected:)](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.

# testInvocations (Objective-C)

**Framework:** XCTest  
**Kind:** Type Property

An array of invocations that represents each test method in the test case.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSInvocation *> * testInvocations;
```

## See Also

### Creating Tests Programmatically

- [initWithInvocation:](init%28invocation_%29.md): Initializes a test case with an invocation.
- [testCaseWithInvocation:](testcasewithinvocation_.md): Creates a test case with an invocation.
- [initWithSelector:](init%28selector_%29.md): Initializes a test case with a selector.
- [testCaseWithSelector:](testcasewithselector_.md): Creates a test case with a selector.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest](invoketest%28%29.md): Invokes the test.
- [recordIssue:](record%28__%29.md): Records an issue during test execution.
- [recordFailureWithDescription:inFile:atLine:expected:](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.
