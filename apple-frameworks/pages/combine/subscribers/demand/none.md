> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/demand/none](https://developer.apple.com/documentation/combine/subscribers/demand/none)

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
