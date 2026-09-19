> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publisher/failure

# Failure

**Framework:** Combine  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of errors this publisher might publish.

## Declaration

```swift
associatedtype Failure : Error
```

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)

<a id="discussion"></a>

## Discussion

Use `Never` if this `Publisher` does not publish errors.

## See Also

### Declaring supporting types

- [Output](output.md): The kind of values published by this publisher.
