> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/expectation/ispassing

# isPassing

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Whether the expectation passed or failed.

## Declaration

```swift
var isPassing: Bool
```

<a id="discussion"></a>

## Discussion

An expectation is considered to pass when its condition evaluates to `true`. If it evaluates to `false`, it fails instead.
