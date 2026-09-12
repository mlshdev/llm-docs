> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/zip/output](https://developer.apple.com/documentation/combine/publishers/zip/output)

# Publishers.Zip.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = (A.Output, B.Output)
```

<a id="discussion"></a>

## Discussion

This publisher produces two-element tuples, whose members’ types correspond to the types produced by the upstream publishers.

## See Also

### Declaring supporting types

- [Publishers.Zip.Failure](failure.md): The kind of errors this publisher might publish.
