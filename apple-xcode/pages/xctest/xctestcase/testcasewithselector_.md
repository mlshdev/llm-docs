> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/testcasewithselector:](https://developer.apple.com/documentation/xctest/xctestcase/testcasewithselector:)

# testCaseWithSelector:

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Type Method

Creates a test case with a selector.

## Declaration

```objectivec
+ (instancetype) testCaseWithSelector:(SEL) selector;
```

## Parameters

- `selector`: A selector to use when running this test.

<a id="return-value"></a>

## Return Value

A test case with a selector.

## See Also

### Creating Tests Programmatically

- [initWithInvocation:](init%28invocation_%29.md): Initializes a test case with an invocation.
- [testCaseWithInvocation:](testcasewithinvocation_.md): Creates a test case with an invocation.
- [initWithSelector:](init%28selector_%29.md): Initializes a test case with a selector.
- [testInvocations](testinvocations.md): An array of invocations that represents each test method in the test case.
- [invocation](invocation.md): The invocation for running the test.
- [invokeTest](invoketest%28%29.md): Invokes the test.
- [recordIssue:](record%28__%29.md): Records an issue during test execution.
- [recordFailureWithDescription:inFile:atLine:expected:](recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during text execution.
- [defaultTestSuite](defaulttestsuite.md): A test suite that contains test cases for all of the tests in the class.
