> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/test-execution-and-observation](https://developer.apple.com/documentation/xctest/test-execution-and-observation)

# Test Execution and Observation (Swift)

**Framework:** XCTest  
**Kind:** API Collection

Observe, introspect, and customize the test execution flow.

## Topics

### Test Failures

Capture test failures with `XCTIssue` and related classes that associate source code locations and call stacks with failures.

- [XCTIssue](xctissue-swift.struct.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTIssueReference](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

### Test Runs

- [XCTestCaseRun](xctestcaserun.md): An object that collects information about a specific execution of a test case.
- [XCTestSuiteRun](xctestsuiterun.md): An object that collects information about a specific execution of a test suite.
- [XCTestRun](xctestrun.md): A base class for collecting information about a specific execution of a test.

### Test Observation

- [XCTestObservation](xctestobservation.md): A protocol that defines methods the test runner calls in response to significant events during test runs.
- [XCTestObservationCenter](xctestobservationcenter.md): Provides information about the progress of test runs to registered observers.

### Test Suites

- [XCTestSuite](xctestsuite.md): A collection of test cases to manage as a test suite.

# Test Execution and Observation (Objective-C)

**Framework:** XCTest  
**Kind:** API Collection

Observe, introspect, and customize the test execution flow.

## Topics

### Test Failures

Capture test failures with `XCTIssue` and related classes that associate source code locations and call stacks with failures.

- [XCTIssue](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

### Test Runs

- [XCTestCaseRun](xctestcaserun.md): An object that collects information about a specific execution of a test case.
- [XCTestSuiteRun](xctestsuiterun.md): An object that collects information about a specific execution of a test suite.
- [XCTestRun](xctestrun.md): A base class for collecting information about a specific execution of a test.

### Test Observation

- [XCTestObservation](xctestobservation.md): A protocol that defines methods the test runner calls in response to significant events during test runs.
- [XCTestObservationCenter](xctestobservationcenter.md): Provides information about the progress of test runs to registered observers.

### Test Suites

- [XCTestSuite](xctestsuite.md): A collection of test cases to manage as a test suite.
