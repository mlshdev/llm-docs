> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/producticonphase/error](https://developer.apple.com/documentation/storekit/producticonphase/error)

# error

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The error value that indicates the reason a promotional image failed to load.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The [error](error.md) value is `nil` while the icon is loading, if the icon successfully loads, or if you haven’t set up a promotional image for the in-app purchase in App Store Connect. Use this value as a convenience to access the error value in code that assumes you’ve set up a promotional image.
