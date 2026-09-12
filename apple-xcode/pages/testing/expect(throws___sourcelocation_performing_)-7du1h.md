> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expect(throws:_:sourcelocation:performing:)-7du1h](https://developer.apple.com/documentation/testing/expect(throws:_:sourcelocation:performing:)-7du1h)

# expect(throws:\_:sourceLocation:performing:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Check that an expression always throws a specific error.

## Declaration

```swift
@discardableResult @freestanding(expression) macro expect<E, R>(throws error: E, _ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation, performing expression: () async throws -> R) -> E? where E : Equatable, E : Error
```

## Parameters

- `error`: The error that is expected to be thrown.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.
- `expression`: The expression to be evaluated.

<a id="return-value"></a>

## Return Value

If the expectation passes, the instance of `E` that was thrown by `expression` and is equal to `error`. If the expectation fails, the result is `nil`.

## Mentioned In

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md)

<a id="overview"></a>

## Overview

Use this overload of `#expect()` when the expression `expression` *should* throw a specific error:

```swift
#expect(throws: EngineFailureError.batteryDied) {
  FoodTruck.shared.engine.batteryLevel = 0
  try FoodTruck.shared.engine.start()
}
```

If `expression` does not throw an error, or if it throws an error that is not equal to `error`, an [Issue](issue.md) is recorded for the test that is running in the current task. Any value returned by `expression` is discarded.

> **Note**

> If you use this macro with a Swift compiler version lower than 6.1, it doesn’t return a value.

If the thrown error need only be an instance of a particular type, use [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-1hfms.md) instead.

## See Also

### Checking that errors are thrown

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md): Ensure that your code handles errors in the way you expect.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-1hfms.md): Check that an expression always throws an error of a given type.
- [expect(\_:sourceLocation:performing:throws:)](expect%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-7n34r.md): Check that an expression always throws an error of a given type, and throw an error if it does not.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md)
- [require(\_:sourceLocation:performing:throws:)](require%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition, and throw an error if it does not.
