> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/empty/completeimmediately](https://developer.apple.com/documentation/combine/empty/completeimmediately)

# completeImmediately

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the publisher immediately sends a completion.

## Declaration

```swift
let completeImmediately: Bool
```

<a id="discussion"></a>

## Discussion

If `true`, the publisher finishes immediately after sending a subscription to the subscriber. If `false`, it never completes.
