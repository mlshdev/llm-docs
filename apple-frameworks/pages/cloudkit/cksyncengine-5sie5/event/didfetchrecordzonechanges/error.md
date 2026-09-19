> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/didfetchrecordzonechanges/error

# error

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An error that describes the cause of a failed fetch operation.

## Declaration

```swift
let error: CKError?
```

<a id="discussion"></a>

## Discussion

A `nil` value indicates a successful fetch.
