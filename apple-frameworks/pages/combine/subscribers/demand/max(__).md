> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subscribers/demand/max(_:)

# max(\_:)

**Framework:** Combine  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a demand for the given maximum number of elements.

## Declaration

```swift
static func max(_ value: Int) -> Subscribers.Demand
```

## Parameters

- `value`: The maximum number of elements. Providing a negative value for this parameter results in a fatal error.

<a id="discussion"></a>

## Discussion

The publisher is free to send fewer than the requested maximum number of elements.
