> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/collect/output](https://developer.apple.com/documentation/combine/publishers/collect/output)

# Publishers.Collect.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = [Upstream.Output]
```

<a id="discussion"></a>

## Discussion

This publisher publishes arrays of its upstream publisher’s output type.

## See Also

### Declaring supporting types

- [Publishers.Collect.Failure](failure.md): The kind of errors this publisher might publish.
