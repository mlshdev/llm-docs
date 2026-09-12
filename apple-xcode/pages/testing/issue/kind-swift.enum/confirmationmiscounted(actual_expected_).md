> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/kind-swift.enum/confirmationmiscounted(actual:expected:)](https://developer.apple.com/documentation/testing/issue/kind-swift.enum/confirmationmiscounted(actual:expected:))

# Issue.Kind.confirmationMiscounted(actual:expected:)

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

An issue due to a confirmation being confirmed the wrong number of times.

## Declaration

```swift
indirect case confirmationMiscounted(actual: Int, expected: any RangeExpression & Sendable)
```

## Parameters

- `actual`: The number of times [confirm(count:)](../../confirmation/confirm%28count_%29.md) was actually called.
- `expected`: The expected number of times [confirm(count:)](../../confirmation/confirm%28count_%29.md) should have been called.

<a id="discussion"></a>

## Discussion

This issue can occur when calling [confirmation(\_:expectedCount:isolation:sourceLocation:\_:)](../../confirmation%28__expectedcount_isolation_sourcelocation___%29-5mqz2.md) or [confirmation(\_:expectedCount:isolation:sourceLocation:\_:)](../../confirmation%28__expectedcount_isolation_sourcelocation___%29-l3il.md) when the confirmation passed to these functions’ `body` closures is confirmed too few or too many times.
