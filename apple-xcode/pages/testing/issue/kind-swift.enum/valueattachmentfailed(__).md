> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/kind-swift.enum/valueattachmentfailed(_:)](https://developer.apple.com/documentation/testing/issue/kind-swift.enum/valueattachmentfailed(_:))

# Issue.Kind.valueAttachmentFailed(\_:)

**Framework:** Swift Testing  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

An issue due to an `Error` being thrown while attempting to save an attachment to a test report or to disk.

## Declaration

```swift
case valueAttachmentFailed(any Error)
```

## Parameters

- `error`: The error which was associated with this issue.
