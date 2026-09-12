> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/switchtolatest/output](https://developer.apple.com/documentation/combine/publishers/switchtolatest/output)

# Publishers.SwitchToLatest.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = P.Output
```

<a id="discussion"></a>

## Discussion

This publisher produces elements of the type produced by the upstream publisher-of-publishers.

## See Also

### Declaring supporting types

- [Publishers.SwitchToLatest.Failure](failure.md): The kind of errors this publisher might publish.
