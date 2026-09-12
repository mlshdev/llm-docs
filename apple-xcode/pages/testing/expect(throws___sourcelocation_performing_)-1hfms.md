> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expect(throws:_:sourcelocation:performing:)-1hfms](https://developer.apple.com/documentation/testing/expect(throws:_:sourcelocation:performing:)-1hfms)

# expect(throws:\_:sourceLocation:performing:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Check that an expression always throws an error of a given type.

## Declaration

```swift
@discardableResult @freestanding(expression) macro expect<E, R>(throws errorType: E.Type, _ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation, performing expression: () async throws -> R) -> E? where E : Error
```

## Parameters

- `errorType`: The type of error that is expected to be thrown. If `expression` could throw *any* error, or the specific type of thrown error is unimportant, pass `(any Error).self`.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.
- `expression`: The expression to be evaluated.

<a id="return-value"></a>

## Return Value

If the expectation passes, the instance of `errorType` that was thrown by `expression`. If the expectation fails, the result is `nil`.

## Mentioned In

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md)

<a id="overview"></a>

## Overview

Use this overload of `#expect()` when the expression `expression` *should* throw an error of a given type:

```swift
#expect(throws: EngineFailureError.self) {
  FoodTruck.shared.engine.batteryLevel = 0
  try FoodTruck.shared.engine.start()
}
```

If `expression` does not throw an error, or if it throws an error that is not an instance of `errorType`, an [Issue](issue.md) is recorded for the test that is running in the current task. Any value returned by `expression` is discarded.

> **Note**

> If you use this macro with a Swift compiler version lower than 6.1, it doesn’t return a value.

If the thrown error need only equal another instance of [Error](https://developer.apple.com/documentation/swift/error), use [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-7du1h.md) instead.

<a id="Expressions-that-should-never-throw"></a>

## Expressions that should never throw

If the expression `expression` should *never* throw any error, you can pass [Never.self](https://developer.apple.com/documentation/swift/never):

```swift
#expect(throws: Never.self) {
  FoodTruck.shared.engine.batteryLevel = 100
  try FoodTruck.shared.engine.start()
}
```

If `expression` throws an error, an [Issue](issue.md) is recorded for the test that is running in the current task. Any value returned by `expression` is discarded.

Test functions can be annotated with `throws` and can throw errors which are then recorded as issues when the test runs. If the intent is for a test to fail when an error is thrown by `expression`, rather than to explicitly check that an error is *not* thrown by it, do not use this macro. Instead, simply call the code in question and allow it to throw an error naturally.

## See Also

### Checking that errors are thrown

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md): Ensure that your code handles errors in the way you expect.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-7du1h.md): Check that an expression always throws a specific error.
- [expect(\_:sourceLocation:performing:throws:)](expect%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-7n34r.md): Check that an expression always throws an error of a given type, and throw an error if it does not.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md)
- [require(\_:sourceLocation:performing:throws:)](require%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition, and throw an error if it does not.
