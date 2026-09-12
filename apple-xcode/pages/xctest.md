> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest](https://developer.apple.com/documentation/xctest)

# XCTest (Swift)

**Framework:** XCTest  
**Kind:** Framework  
**Availability:** xcode 5.0+

Create and run unit tests, performance tests, and UI tests for your Xcode project.

<a id="overview"></a>

## Overview

Use the XCTest framework to write unit tests for your Xcode projects that integrate seamlessly with Xcode’s testing workflow.

Tests assert that certain conditions are satisfied during code execution, and record test failures (with optional messages) if those conditions aren’t satisfied. Tests can also measure the performance of blocks of code to check for performance regressions. Use XCTest in combination with [XCUIAutomation](xcuiautomation.md) to interact with an application’s UI and validate user interaction flows. For more information, see [Recording UI automation for testing](xcuiautomation/recording-ui-automation-for-testing.md).

> **Tip**

>  Xcode 16 and later includes Swift Testing, a framework for writing unit tests that takes advantage of the powerful capabilities of the Swift programming language. Consider using Swift Testing for new unit test development and migrating existing tests as described in [Migrating a test from XCTest](testing/migratingfromxctest.md). A test target can contain tests using both Swift Testing and XCTest, however don’t mix API from the two frameworks in the same test. Continue to use XCTest for user interface tests and [Performance Tests](xctest/performance-tests.md).

## Topics

### Test cases and test methods

- [Defining Test Cases and Test Methods](xctest/defining-test-cases-and-test-methods.md): Add test cases and test methods to a test target to confirm that your code performs as expected.
- [XCTestCase](xctest/xctestcase.md): The primary class for defining test cases, test methods, and performance tests.
- [XCTest](xctest/xctest.md): An abstract base class for creating, managing, and executing tests.

### Test assertions

- [Boolean Assertions](xctest/boolean-assertions.md): Test a condition that generates a true or false result.
- [Nil and Non-Nil Assertions](xctest/nil-and-non-nil-assertions.md): Check whether a test condition has, or doesn’t have, a value.
- [Equality and Inequality Assertions](xctest/equality-and-inequality-assertions.md): Check whether two values are equal or unequal.
- [Comparable Value Assertions](xctest/comparable-value-assertions.md): Compare two values to determine whether one is larger or smaller than the other.
- [Error Assertions](xctest/error-assertions.md): Check whether a function call throws, or doesn’t throw, an error.
- [NSException Assertions](xctest/nsexception-assertions.md): Check whether a function call throws, or doesn’t throw, an exception.
- [Unconditional Test Failures](xctest/unconditional-test-failures.md): Generate a failure immediately and unconditionally.
- [Expected Failures](xctest/expected-failures.md): Anticipate known test failures to prevent failing tests from affecting your workflows.
- [Methods for Skipping Tests](xctest/methods-for-skipping-tests.md): Skip tests when meeting specified conditions.

### Asynchronous tests

- [Asynchronous Tests and Expectations](xctest/asynchronous-tests-and-expectations.md): Verify that asynchronous code behaves as expected.

### UI tests

- [XCUIAutomation](xcuiautomation.md): Replicate sequences of interactions and make sure that your app’s user interface behaves as intended.

### Performance tests

- [Performance Tests](xctest/performance-tests.md): Gather metrics while running your code, and report a failure if the metrics become significantly worse than a baseline value.

### Activities and attachments

- [Activities and Attachments](xctest/activities-and-attachments.md): Split long tests into substeps with activities, and attach output data like files and screenshots.

### Test execution

- [Test Execution and Observation](xctest/test-execution-and-observation.md): Observe, introspect, and customize the test execution flow.

### Deprecated

- [Deprecated Symbols](xctest/deprecated-symbols.md): These symbols are deprecated and are no longer recommended.

### Variables

- [XCT_UI_TESTING_AVAILABLE](xctest/xct_ui_testing_available.md)

### Functions

- [XCTAssertNoThrow(\_:\_:file:line:)](xctest/xctassertnothrow%28____file_line_%29.md): Asserts that an expression doesn’t throw an error.

# XCTest (Objective-C)

**Framework:** XCTest  
**Kind:** Framework  
**Availability:** xcode 5.0+

Create and run unit tests, performance tests, and UI tests for your Xcode project.

<a id="overview"></a>

## Overview

Use the XCTest framework to write unit tests for your Xcode projects that integrate seamlessly with Xcode’s testing workflow.

Tests assert that certain conditions are satisfied during code execution, and record test failures (with optional messages) if those conditions aren’t satisfied. Tests can also measure the performance of blocks of code to check for performance regressions. Use XCTest in combination with [XCUIAutomation](xcuiautomation.md) to interact with an application’s UI and validate user interaction flows. For more information, see [Recording UI automation for testing](xcuiautomation/recording-ui-automation-for-testing.md).

> **Tip**

>  Xcode 16 and later includes Swift Testing, a framework for writing unit tests that takes advantage of the powerful capabilities of the Swift programming language. Consider using Swift Testing for new unit test development and migrating existing tests as described in [Migrating a test from XCTest](testing/migratingfromxctest.md). A test target can contain tests using both Swift Testing and XCTest, however don’t mix API from the two frameworks in the same test. Continue to use XCTest for user interface tests and [Performance Tests](xctest/performance-tests.md).

## Topics

### Test cases and test methods

- [Defining Test Cases and Test Methods](xctest/defining-test-cases-and-test-methods.md): Add test cases and test methods to a test target to confirm that your code performs as expected.
- [XCTestCase](xctest/xctestcase.md): The primary class for defining test cases, test methods, and performance tests.
- [XCTest](xctest/xctest.md): An abstract base class for creating, managing, and executing tests.

### Test assertions

- [Boolean Assertions](xctest/boolean-assertions.md): Test a condition that generates a true or false result.
- [Nil and Non-Nil Assertions](xctest/nil-and-non-nil-assertions.md): Check whether a test condition has, or doesn’t have, a value.
- [Equality and Inequality Assertions](xctest/equality-and-inequality-assertions.md): Check whether two values are equal or unequal.
- [Comparable Value Assertions](xctest/comparable-value-assertions.md): Compare two values to determine whether one is larger or smaller than the other.
- [Error Assertions](xctest/error-assertions.md): Check whether a function call throws, or doesn’t throw, an error.
- [NSException Assertions](xctest/nsexception-assertions.md): Check whether a function call throws, or doesn’t throw, an exception.
- [Unconditional Test Failures](xctest/unconditional-test-failures.md): Generate a failure immediately and unconditionally.
- [Expected Failures](xctest/expected-failures.md): Anticipate known test failures to prevent failing tests from affecting your workflows.
- [Methods for Skipping Tests](xctest/methods-for-skipping-tests.md): Skip tests when meeting specified conditions.

### Asynchronous tests

- [Asynchronous Tests and Expectations](xctest/asynchronous-tests-and-expectations.md): Verify that asynchronous code behaves as expected.

### UI tests

- [XCUIAutomation](xcuiautomation.md): Replicate sequences of interactions and make sure that your app’s user interface behaves as intended.

### Performance tests

- [Performance Tests](xctest/performance-tests.md): Gather metrics while running your code, and report a failure if the metrics become significantly worse than a baseline value.

### Activities and attachments

- [Activities and Attachments](xctest/activities-and-attachments.md): Split long tests into substeps with activities, and attach output data like files and screenshots.

### Test execution

- [Test Execution and Observation](xctest/test-execution-and-observation.md): Observe, introspect, and customize the test execution flow.

### Deprecated

- [Deprecated Symbols](xctest/deprecated-symbols.md): These symbols are deprecated and are no longer recommended.

### Macros

- [XCTEST_SIMULATOR_UNAVAILABLE](xctest/xctest_simulator_unavailable.md)
- [XCT_DEPRECATED_WITH_DIRECT_REPLACEMENT](xctest/xct_deprecated_with_direct_replacement.md)
- [XCT_DEPRECATED_WITH_REPLACEMENT](xctest/xct_deprecated_with_replacement.md)
- [XCT_DEPRECATED_WITH_SWIFT_REPLACEMENT](xctest/xct_deprecated_with_swift_replacement.md)
- [XCT_EXPORT](xctest/xct_export.md)
- [XCT_HEADER_AUDIT_BEGIN](xctest/xct_header_audit_begin.md)
- [XCT_HEADER_AUDIT_END](xctest/xct_header_audit_end.md)
- [XCT_METRIC_API_AVAILABLE](xctest/xct_metric_api_available.md)
- [XCT_NOESCAPE](xctest/xct_noescape.md)
- [XCT_SWIFT_MAIN_ACTOR](xctest/xct_swift_main_actor.md)
- [XCT_SWIFT_SENDABLE](xctest/xct_swift_sendable.md)
- [XCT_SWIFT_UNAVAILABLE_FROM_ASYNC](xctest/xct_swift_unavailable_from_async.md)
- [XCT_TO_BE_DEPRECATED_WITH_SWIFT_REPLACEMENT](xctest/xct_to_be_deprecated_with_swift_replacement.md)
- [XCT_UI_TESTING_AVAILABLE](xctest/xct_ui_testing_available.md)
- [XCT_UNAVAILABLE](xctest/xct_unavailable.md)
- [XCT_WARN_UNUSED](xctest/xct_warn_unused.md)
- [XCT_WEAK_EXPORT](xctest/xct_weak_export.md)

### Enumerations

- [XCTIssueSeverity](xctest/xctissuereference/severity-swift.enum.md): An enum representing the severity of a test issue.
