> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/issue/kind-swift.enum/valueattachmentfailed(_:)

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
