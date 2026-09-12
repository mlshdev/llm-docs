> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest](https://developer.apple.com/documentation/xctest/xctest)

# XCTest (Swift)

**Framework:** XCTest  
**Kind:** Class

An abstract base class for creating, managing, and executing tests.

## Declaration

```swift
class XCTest
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](set-up-and-tear-down-state-in-your-tests.md)

<a id="overview"></a>

## Overview

The [XCTest](xctest.md) class provides shared functionality that [XCTestCase](xctestcase.md) and [XCTestSuite](xctestsuite.md) use for creating, managing, and executing tests. In most cases, you subclass [XCTestCase](xctestcase.md) directly when defining tests in your project.

## Topics

### Examining Test Properties

- [name](xctest/name.md): The name of the test.
- [testCaseCount](xctest/testcasecount.md): The number of test cases in the test.
- [testRun](xctest/testrun.md): The test run object that executes the test.
- [testRunClass](xctest/testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.

### Setting Up and Tearing Down

- [setUp(completion:)](xctest/setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError()](xctest/setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp()](xctest/setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDown(completion:)](xctest/teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError()](xctest/teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown()](xctest/teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

### Running Tests

- [perform(\_:)](xctest/perform%28__%29.md): Executes a specific test.
- [run()](xctest/run%28%29.md): Creates a test run instance and starts the test.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTestCase](xctestcase.md)
- [XCTestSuite](xctestsuite.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Test cases and test methods

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md): Add test cases and test methods to a test target to confirm that your code performs as expected.
- [XCTestCase](xctestcase.md): The primary class for defining test cases, test methods, and performance tests.

# XCTest (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An abstract base class for creating, managing, and executing tests.

## Declaration

```objectivec
@interface XCTest : NSObject
```

## Mentioned In

- [Set Up and Tear Down State in Your Tests](set-up-and-tear-down-state-in-your-tests.md)

<a id="overview"></a>

## Overview

The [XCTest](xctest.md) class provides shared functionality that [XCTestCase](xctestcase.md) and [XCTestSuite](xctestsuite.md) use for creating, managing, and executing tests. In most cases, you subclass [XCTestCase](xctestcase.md) directly when defining tests in your project.

## Topics

### Examining Test Properties

- [name](xctest/name.md): The name of the test.
- [testCaseCount](xctest/testcasecount.md): The number of test cases in the test.
- [testRun](xctest/testrun.md): The test run object that executes the test.
- [testRunClass](xctest/testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.

### Setting Up and Tearing Down

- [setUpWithCompletionHandler:](xctest/setup%28completion_%29.md): Provides an opportunity to reset state asynchronously and handle errors before calling each test method in a test case.
- [setUpWithError:](xctest/setupwitherror%28%29.md): Provides an opportunity to reset state and to throw errors before calling each test method in a test case.
- [setUp](xctest/setup%28%29.md): Provides an opportunity to reset state before calling each test method in a test case.
- [tearDownWithCompletionHandler:](xctest/teardown%28completion_%29.md): Provides an opportunity to perform cleanup asynchronously and handle errors after each test method in a test case ends.
- [tearDownWithError:](xctest/teardownwitherror%28%29.md): Provides an opportunity to perform cleanup and to throw errors after each test method in a test case ends.
- [tearDown](xctest/teardown%28%29.md): Provides an opportunity to perform cleanup after each test method in a test case ends.

### Running Tests

- [performTest:](xctest/perform%28__%29.md): Executes a specific test.
- [runTest](xctest/run%28%29.md): Creates a test run instance and starts the test.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTestCase](xctestcase.md)
- [XCTestSuite](xctestsuite.md)

## See Also

### Test cases and test methods

- [Defining Test Cases and Test Methods](defining-test-cases-and-test-methods.md): Add test cases and test methods to a test target to confirm that your code performs as expected.
- [XCTestCase](xctestcase.md): The primary class for defining test cases, test methods, and performance tests.
