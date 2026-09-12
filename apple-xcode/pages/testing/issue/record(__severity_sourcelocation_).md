> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/record(_:severity:sourcelocation:)](https://developer.apple.com/documentation/testing/issue/record(_:severity:sourcelocation:))

# record(\_:severity:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** Swift 6.3+ · Xcode 26.4+

Records an issue that a test encounters while it’s running.

## Declaration

```swift
@discardableResult static func record(_ comment: Comment? = nil, severity: Issue.Severity = .error, sourceLocation: SourceLocation = #_sourceLocation) -> Issue
```

## Parameters

- `comment`: A comment describing the expectation.
- `severity`: The severity level of the issue.  The testing library marks the test as failed if the severity is greater than [Issue.Severity.warning](severity-swift.enum/warning.md). The default is [Issue.Severity.error](severity-swift.enum/error.md).
- `sourceLocation`: The source location to which the issue should be attributed.

<a id="return-value"></a>

## Return Value

The issue that was recorded.

## Mentioned In

- [Migrating a test from XCTest](../migratingfromxctest.md)

<a id="discussion"></a>

## Discussion

Use this function if, while running a test, an issue occurs that cannot be represented as an expectation (using the [expect(\_:\_:sourceLocation:)](../expect%28____sourcelocation_%29.md) or [require(\_:\_:sourceLocation:)](../require%28____sourcelocation_%29-5l63q.md) macros.)
