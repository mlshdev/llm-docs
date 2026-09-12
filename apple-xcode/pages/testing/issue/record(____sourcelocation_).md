> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/record(_:_:sourcelocation:)](https://developer.apple.com/documentation/testing/issue/record(_:_:sourcelocation:))

# record(\_:\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Record a new issue when a running test unexpectedly catches an error.

## Declaration

```swift
@discardableResult static func record(_ error: any Error, _ comment: Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation) -> Issue
```

## Parameters

- `error`: The error that caused the issue.
- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which the issue should be attributed.

<a id="return-value"></a>

## Return Value

The issue that was recorded.

<a id="discussion"></a>

## Discussion

This function can be used if an unexpected error is caught while running a test and it should be treated as a test failure. If an error is thrown from a test function, it is automatically recorded as an issue and this function does not need to be used.
