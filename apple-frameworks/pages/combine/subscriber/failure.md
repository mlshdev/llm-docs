> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscriber/failure](https://developer.apple.com/documentation/combine/subscriber/failure)

# Failure

**Framework:** Combine  
**Kind:** Associated Type  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The kind of errors this subscriber might receive.

## Declaration

```swift
associatedtype Failure : Error
```

<a id="discussion"></a>

## Discussion

Use `Never` if this `Subscriber` cannot receive errors.

## See Also

### Declaring supporting types

- [Input](input.md): The kind of values this subscriber receives.
