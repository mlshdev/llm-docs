> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expect(_:_:sourcelocation:)](https://developer.apple.com/documentation/testing/expect(_:_:sourcelocation:))

# expect(\_:\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Check that an expectation has passed after a condition has been evaluated.

## Declaration

```swift
@freestanding(expression) macro expect(_ condition: Bool, _ comment: @autoclosure () -> Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation)
```

## Parameters

- `condition`: The condition to be evaluated.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which recorded expectations and issues should be attributed.

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)
- [Describing and reflecting values](describing-values.md)
- [Testing for errors in Swift code](testing-for-errors-in-swift-code.md)

<a id="overview"></a>

## Overview

If `condition` evaluates to `false`, an [Issue](issue.md) is recorded for the test that is running in the current task.

## See Also

### Checking expectations

- [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-5l63q.md): Check that an expectation has passed after a condition has been evaluated and throw an error if it failed.
- [require(\_:\_:sourceLocation:)](require%28____sourcelocation_%29-6w9oo.md): Unwrap an optional value or, if it is `nil`, fail and throw an error.
