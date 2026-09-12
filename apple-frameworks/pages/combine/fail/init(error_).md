> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/fail/init(error:)](https://developer.apple.com/documentation/combine/fail/init(error:))

# init(error:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that immediately terminates with the specified failure.

## Declaration

```swift
init(error: Failure)
```

## Parameters

- `error`: The failure to send when terminating the publisher.

## See Also

### Creating a fail publisher

- [init(outputType:failure:)](init%28outputtype_failure_%29.md): Creates publisher with the given output type, that immediately terminates with the specified failure.
