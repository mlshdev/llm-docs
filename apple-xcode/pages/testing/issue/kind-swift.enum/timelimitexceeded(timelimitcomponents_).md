> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/kind-swift.enum/timelimitexceeded(timelimitcomponents:)](https://developer.apple.com/documentation/testing/issue/kind-swift.enum/timelimitexceeded(timelimitcomponents:))

# Issue.Kind.timeLimitExceeded(timeLimitComponents:)

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

An issue due to a test reaching its time limit and timing out.

## Declaration

```swift
indirect case timeLimitExceeded(timeLimitComponents: (seconds: Int64, attoseconds: Int64))
```

## Parameters

- `timeLimitComponents`: The time limit reached by the test.

## Mentioned In

- [Limiting the running time of tests](../../limitingexecutiontime.md)
