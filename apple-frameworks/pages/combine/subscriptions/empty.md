> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subscriptions/empty

# empty

**Framework:** Combine  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the “empty” subscription.

## Declaration

```swift
static var empty: any Subscription { get }
```

<a id="discussion"></a>

## Discussion

Use the empty subscription when you need a [Subscription](../subscription.md) that ignores requests and cancellation.
