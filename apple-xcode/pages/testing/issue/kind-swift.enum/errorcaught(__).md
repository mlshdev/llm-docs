> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/kind-swift.enum/errorcaught(_:)](https://developer.apple.com/documentation/testing/issue/kind-swift.enum/errorcaught(_:))

# Issue.Kind.errorCaught(\_:)

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

An issue due to an `Error` being thrown by a test function and caught by the testing library.

## Declaration

```swift
indirect case errorCaught(any Error)
```

## Parameters

- `error`: The error which was associated with this issue.
