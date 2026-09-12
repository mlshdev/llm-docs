> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mergemany/failure](https://developer.apple.com/documentation/combine/publishers/mergemany/failure)

# Publishers.MergeMany.Failure

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of errors this publisher might publish.

## Declaration

```swift
typealias Failure = Upstream.Failure
```

<a id="discussion"></a>

## Discussion

This publisher uses its upstream publishers’ common failure type.

## See Also

### Declaring supporting types

- [Publishers.MergeMany.Output](output.md): The kind of values published by this publisher.
