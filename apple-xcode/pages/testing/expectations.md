> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expectations](https://developer.apple.com/documentation/testing/expectations)

# Expectations and confirmations

**Framework:** Swift Testing  
**Kind:** API Collection

Check for expected values, outcomes, and asynchronous events in tests.

<a id="Overview"></a>

## Overview

Use [expect(\_:\_:sourceLocation:)](expect%28____sourcelocation_%29.md) and [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-5l63q.md) macros to validate expected outcomes. To validate that an error is thrown, or *not* thrown, the testing library provides several overloads of the macros that you can use. For more information, see [Testing for errors in Swift code](testing-for-errors-in-swift-code.md).

Use a [Confirmation](confirmation.md) to confirm the occurrence of an asynchronous event that you can’t check directly using an expectation. For more information, see [Testing asynchronous code](testing-asynchronous-code.md).

<a id="Validate-your-codes-result"></a>

### Validate your code’s result

To validate that your code produces an expected value, use [expect(\_:\_:sourceLocation:)](expect%28____sourcelocation_%29.md). This macro captures the expression you pass, and provides detailed information when the code doesn’t satisfy the expectation.

```swift
@Test func calculatingOrderTotal() {
  let calculator = OrderCalculator()
  #expect(calculator.total(of: [3, 3]) == 7)
  // Prints "Expectation failed: calculator.total(of: [3, 3]) == 7"
}
```

Your test keeps running after [expect(\_:\_:sourceLocation:)](expect%28____sourcelocation_%29.md) fails. To stop the test when the code doesn’t satisfy a requirement, use [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-5l63q.md) instead:

```swift
@Test func returningCustomerRemembersUsualOrder() throws {
  let customer = try #require(Customer(id: 123))
  // The test runner doesn't reach this line if the customer is nil.
  #expect(customer.usualOrder.countOfItems == 2)
}
```

[require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-5l63q.md) throws an instance of [ExpectationFailedError](expectationfailederror.md) when your code fails to satisfy the requirement.

## Topics

### Checking expectations

- [expect(\_:\_:sourceLocation:)](expect%28____sourcelocation_%29.md): Check that an expectation has passed after a condition has been evaluated.
- [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-5l63q.md): Check that an expectation has passed after a condition has been evaluated and throw an error if it failed.
- [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-6w9oo.md): Unwrap an optional value or, if it is `nil`, fail and throw an error.

### Checking that errors are thrown

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md): Ensure that your code handles errors in the way you expect.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-1hfms.md): Check that an expression always throws an error of a given type.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-7du1h.md): Check that an expression always throws a specific error.
- [expect(\_:sourceLocation:performing:throws:)](expect%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-7n34r.md): Check that an expression always throws an error of a given type, and throw an error if it does not.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md)
- [require(\_:sourceLocation:performing:throws:)](require%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition, and throw an error if it does not.

### Checking how processes exit

- [Exit testing](exit-testing.md): Use exit tests to test functionality that might cause a test process to exit.
- [expect(processExitsWith:observing:\_:sourceLocation:performing:)](expect%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion.
- [require(processExitsWith:observing:\_:sourceLocation:performing:)](require%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion and throw an error if it did not.
- [ExitStatus](exitstatus.md): An enumeration describing possible status a process will report on exit.
- [ExitTest](exittest.md): A type describing an exit test.

### Confirming that asynchronous events occur

- [Testing asynchronous code](testing-asynchronous-code.md): Validate whether your code causes expected events to happen.
- [confirmation(\_:expectedCount:isolation:sourceLocation:\_:)](confirmation%28__expectedcount_isolation_sourcelocation___%29-5mqz2.md): Confirm that some event occurs during the invocation of a function.
- [confirmation(\_:expectedCount:isolation:sourceLocation:\_:)](confirmation%28__expectedcount_isolation_sourcelocation___%29-l3il.md): Confirm that some event occurs during the invocation of a function.
- [Confirmation](confirmation.md): A type that can be used to confirm that an event occurs zero or more times.

### Retrieving information about checked expectations

- [Expectation](expectation.md): A type describing an expectation that has been evaluated.
- [ExpectationFailedError](expectationfailederror.md): A type describing an error thrown when an expectation fails during evaluation.

### Representing source locations

- [SourceLocation](sourcelocation.md): A type representing a location in source code.

## See Also

### Behavior validation

- [Known issues](known-issues.md): Mark issues as known when running tests.
