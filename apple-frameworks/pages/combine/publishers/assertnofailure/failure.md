> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/assertnofailure/failure

# Publishers.AssertNoFailure.Failure

**Framework:** Combine  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of errors this publisher might publish.

## Declaration

```swift
typealias Failure = Never
```

<a id="discussion"></a>

## Discussion

This publisher never produces errors.

## See Also

### Declaring supporting types

- [Publishers.AssertNoFailure.Output](output.md): The kind of values published by this publisher.
