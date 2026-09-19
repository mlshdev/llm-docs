> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/combinelatest3/output

# Publishers.CombineLatest3.Output

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of values published by this publisher.

## Declaration

```swift
typealias Output = (A.Output, B.Output, C.Output)
```

<a id="discussion"></a>

## Discussion

This publisher produces three-element tuples of the upstream publishers’ output types.

## See Also

### Declaring supporting types

- [Publishers.CombineLatest3.Failure](failure.md): The kind of errors this publisher might publish.
