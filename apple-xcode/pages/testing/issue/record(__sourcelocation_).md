> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/record(_:sourcelocation:)](https://developer.apple.com/documentation/testing/issue/record(_:sourcelocation:))

# record(\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Records an issue that a test encounters while it’s running.

> Use record(\_:severity:sourceLocation:) instead.

## Declaration

```swift
@discardableResult static func record(_ comment: Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation) -> Issue
```

## Parameters

- `comment`: A comment describing the expectation.
- `sourceLocation`: The source location to which the issue should be attributed.

<a id="return-value"></a>

## Return Value

The issue that was recorded.

<a id="discussion"></a>

## Discussion

Use this function if, while running a test, an issue occurs that cannot be represented as an expectation (using the [expect(\_:\_:sourceLocation:)](../expect%28____sourcelocation_%29.md) or [require(\_:\_:sourceLocation:)](../require%28____sourcelocation_%29-5l63q.md) macros.)
