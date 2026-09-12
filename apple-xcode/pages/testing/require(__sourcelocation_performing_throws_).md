> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/require(_:sourcelocation:performing:throws:)](https://developer.apple.com/documentation/testing/require(_:sourcelocation:performing:throws:))

# require(\_:sourceLocation:performing:throws:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** Swift 6.0+ · Xcode 16.0+

Check that an expression always throws an error matching some condition, and throw an error if it does not.

> Examine the result of [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-7du1h.md) or [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-1hfms.md) instead:
>
> ```swift
> let error = try #require(throws: FoodTruckError.self) {
>   ...
> }
> #expect(error.napkinCount == 0)
> ```

## Declaration

```swift
@discardableResult @freestanding(expression) macro require<R>(_ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation, performing expression: () async throws -> R, throws errorMatcher: (any Error) async throws -> Bool) -> any Error
```

## Parameters

- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.
- `expression`: The expression to be evaluated.
- `errorMatcher`: A closure to invoke when `expression` throws an error that indicates if it matched or not.

<a id="return-value"></a>

## Return Value

The error that was thrown by `expression`.

<a id="overview"></a>

## Overview

> **Throws**

> An instance of [ExpectationFailedError](expectationfailederror.md) if `expression` does not throw a matching error. The error thrown by `expression` is not rethrown.

Use this overload of `#require()` when the expression `expression` *should* throw an error, but the logic to determine if the error matches is complex:

```swift
#expect {
  FoodTruck.shared.engine.batteryLevel = 0
  try FoodTruck.shared.engine.start()
} throws: { error in
  return error == EngineFailureError.batteryDied
    || error == EngineFailureError.stillCharging
}
```

If `expression` does not throw an error, if it throws an error that is not matched by `errorMatcher`, or if `errorMatcher` throws an error (including the error passed to it), an [Issue](issue.md) is recorded for the test that is running in the current task and an instance of [ExpectationFailedError](expectationfailederror.md) is thrown. Any value returned by `expression` is discarded.

If the thrown error need only be an instance of a particular type, use [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-7n34r.md) instead. If the thrown error need only equal another instance of [Error](https://developer.apple.com/documentation/swift/error), use [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md) instead.

If `expression` should *never* throw, simply invoke the code without using this macro. The test will then fail if an error is thrown.

## See Also

### Checking that errors are thrown

- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md): Ensure that your code handles errors in the way you expect.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-1hfms.md): Check that an expression always throws an error of a given type.
- [expect(throws:\_:sourceLocation:performing:)](expect%28throws___sourcelocation_performing_%29-7du1h.md): Check that an expression always throws a specific error.
- [expect(\_:sourceLocation:performing:throws:)](expect%28__sourcelocation_performing_throws_%29.md): Deprecated. Check that an expression always throws an error matching some condition.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-7n34r.md): Check that an expression always throws an error of a given type, and throw an error if it does not.
- [require(throws:\_:sourceLocation:performing:)](require%28throws___sourcelocation_performing_%29-4djuw.md)
