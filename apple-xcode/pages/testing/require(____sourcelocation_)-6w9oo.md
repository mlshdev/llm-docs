> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/require(_:_:sourcelocation:)-6w9oo](https://developer.apple.com/documentation/testing/require(_:_:sourcelocation:)-6w9oo)

# require(\_:\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Unwrap an optional value or, if it is `nil`, fail and throw an error.

## Declaration

```swift
@freestanding(expression) macro require<T>(_ optionalValue: T?, _ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation) -> T
```

## Parameters

- `optionalValue`: The optional value to be unwrapped.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.

<a id="return-value"></a>

## Return Value

The unwrapped value of `optionalValue`.

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)

<a id="overview"></a>

## Overview

> **Throws**

> An instance of [ExpectationFailedError](expectationfailederror.md) if `optionalValue` is `nil`.

If `optionalValue` is `nil`, an [Issue](issue.md) is recorded for the test that is running in the current task and an instance of [ExpectationFailedError](expectationfailederror.md) is thrown.

## See Also

### Checking expectations

- [expect(\_:\_:sourceLocation:)](expect%28____sourcelocation_%29.md): Check that an expectation has passed after a condition has been evaluated.
- [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-5l63q.md): Check that an expectation has passed after a condition has been evaluated and throw an error if it failed.
