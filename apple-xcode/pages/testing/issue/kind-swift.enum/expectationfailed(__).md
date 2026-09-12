> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/kind-swift.enum/expectationfailed(_:)](https://developer.apple.com/documentation/testing/issue/kind-swift.enum/expectationfailed(_:))

# Issue.Kind.expectationFailed(\_:)

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

An issue due to a failed expectation, such as those produced by [expect(\_:\_:sourceLocation:)](../../expect%28____sourcelocation_%29.md).

## Declaration

```swift
indirect case expectationFailed(Expectation)
```

## Parameters

- `expectation`: The expectation that failed.
