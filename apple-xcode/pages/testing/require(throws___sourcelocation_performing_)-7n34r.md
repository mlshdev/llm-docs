> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/require(throws:_:sourcelocation:performing:)-7n34r](https://developer.apple.com/documentation/testing/require(throws:_:sourcelocation:performing:)-7n34r)

# require(throws:\_:sourceLocation:performing:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Check that an expression always throws an error of a given type, and throw an error if it does not.

## Declaration

```swift
@discardableResult @freestanding(expression) macro require<E, R>(throws errorType: E.Type, _ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation, performing expression: () async throws -> R) -> E where E : Error
```

## Parameters

- `errorType`: The type of error that is expected to be thrown. If `expression` could throw *any* error, or the specific type of thrown error is unimportant, pass `(any Error).self`.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.
- `expression`: The expression to be evaluated.

<a id="return-value"></a>

## Return Value

The instance of `errorType` that was thrown by `expression`.

## Mentioned In

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md)

<a id="overview"></a>

## Overview

> **Throws**

> An instance of [ExpectationFailedError](expectationfailederror.md) if `expression` does not throw a matching error. The error thrown by `expression` is not rethrown.

Use this overload of `#require()` when the expression `expression` *should* throw an error of a given type:

```swift
try #require(throws: EngineFailureError.self) {
  FoodTruck.shared.engine.batteryLevel = 0
  try FoodTruck.shared.engine.start()
}
```

If `expression` does not throw an error, or if it throws an error that is not an instance of `errorType`, an [Issue](issue.md) is recorded for the test that is running in the current task and an instance of [ExpectationFailedError](expectationfailederror.md) is thrown. Any value returned by `expression` is discarded.

> **Note**

> If you use this macro with a Swift compiler version lower than 6.1, it doesn’t return a value.

If the thrown error need only equal another instance of [Error](https://developer.apple.com/documentation/swift/error), use [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md) instead.

If `expression` should *never* throw, simply invoke the code without using this macro. The test will then fail if an error is thrown.

## See Also

### Checking that errors are thrown

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md): Ensure that your code handles errors in the way you expect.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-1hfms.md): Check that an expression always throws an error of a given type.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-7du1h.md): Check that an expression always throws a specific error.
- [expect(\_:sourceLocation:performing:throws:)](expect%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md)
- [require(\_:sourceLocation:performing:throws:)](require%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition, and throw an error if it does not.
