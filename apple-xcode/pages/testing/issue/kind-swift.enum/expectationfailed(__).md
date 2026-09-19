> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/issue/kind-swift.enum/expectationfailed(_:)

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
