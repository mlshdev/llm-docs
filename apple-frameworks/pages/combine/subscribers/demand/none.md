> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subscribers/demand/none

# none

**Framework:** Combine  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A request for no elements from the publisher.

## Declaration

```swift
static let none: Subscribers.Demand
```

<a id="discussion"></a>

## Discussion

This is equivalent to `Demand.max(0)`.

## See Also

### Using special demands

- [unlimited](unlimited.md): A request for as many values as the publisher can produce.
