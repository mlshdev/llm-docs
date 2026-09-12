> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/fail/init(outputtype:failure:)](https://developer.apple.com/documentation/combine/fail/init(outputtype:failure:))

# init(outputType:failure:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates publisher with the given output type, that immediately terminates with the specified failure.

## Declaration

```swift
init(outputType: Output.Type, failure: Failure)
```

## Parameters

- `outputType`: The output type exposed by this publisher.
- `failure`: The failure to send when terminating the publisher.

<a id="discussion"></a>

## Discussion

Use this initializer to create a `Fail` publisher that can work with subscribers or publishers that expect a given output type.

## See Also

### Creating a fail publisher

- [init(error:)](init%28error_%29.md): Creates a publisher that immediately terminates with the specified failure.
