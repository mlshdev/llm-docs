> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/deferred/createpublisher

# createPublisher

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The closure to execute when this deferred publisher receives a subscription.

## Declaration

```swift
let createPublisher: () -> DeferredPublisher
```

<a id="discussion"></a>

## Discussion

The publisher returned by this closure immediately receives the incoming subscription.
