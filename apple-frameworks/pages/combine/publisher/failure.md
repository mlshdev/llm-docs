> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/failure](https://developer.apple.com/documentation/combine/publisher/failure)

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
