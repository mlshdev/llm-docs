> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/combinelatest4/output](https://developer.apple.com/documentation/combine/publishers/combinelatest4/output)

# Publishers.CombineLatest4.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = (A.Output, B.Output, C.Output, D.Output)
```

<a id="discussion"></a>

## Discussion

This publisher produces four-element tuples of the upstream publishers’ output types.

## See Also

### Declaring supporting types

- [Publishers.CombineLatest4.Failure](failure.md): The kind of errors this publisher might publish.
