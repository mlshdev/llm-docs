> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/expectation/ispassing](https://developer.apple.com/documentation/testing/expectation/ispassing)

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
