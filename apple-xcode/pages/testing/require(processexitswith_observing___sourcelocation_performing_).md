> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/require(processexitswith:observing:_:sourcelocation:performing:)](https://developer.apple.com/documentation/testing/require(processexitswith:observing:_:sourcelocation:performing:))

# require(processExitsWith:observing:\_:sourceLocation:performing:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** Swift 6.2+ · Xcode 26.0+

Check that an expression causes the process to terminate in a given fashion and throw an error if it did not.

## Declaration

```swift
@discardableResult @freestanding(expression) macro require(processExitsWith expectedExitCondition: ExitTest.Condition, observing observedValues: [any PartialKeyPath<ExitTest.Result> & Sendable] = [], _ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation, performing expression: @escaping @Sendable () async throws -> Void) -> ExitTest.Result
```

## Parameters

- `expectedExitCondition`: The expected exit condition.
- `observedValues`: An array of key paths representing results from within the exit test that should be observed and returned by this macro. The [exitStatus](exittest/result/exitstatus.md) property is always returned.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.
- `expression`: The expression to be evaluated.

<a id="return-value"></a>

## Return Value

An instance of [ExitTest.Result](exittest/result.md) describing the state of the exit test when it exited.

## Mentioned In

- [Exit testing](exit-testing.md)

<a id="overview"></a>

## Overview

> **Throws**

> An instance of [ExpectationFailedError](expectationfailederror.md) if the exit condition of the child process does not equal `expectedExitCondition`.

Use this overload of `#require()` when an expression will cause the current process to terminate and the nature of that termination will determine if the test passes or fails. For example, to test that calling `fatalError()` causes a process to terminate:

```swift
try await #require(processExitsWith: .failure) {
  fatalError()
}
```

## See Also

### Checking how processes exit

- [Exit testing](exit-testing.md): Use exit tests to test functionality that might cause a test process to exit.
- [expect(processExitsWith:observing:\_:sourceLocation:performing:)](expect%28processexitswith_observing___sourcelocation_performing_%29.md): Check that an expression causes the process to terminate in a given fashion.
- [ExitStatus](exitstatus.md): An enumeration describing possible status a process will report on exit.
- [ExitTest](exittest.md): A type describing an exit test.
