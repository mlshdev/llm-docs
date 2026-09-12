> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/empty/init(completeimmediately:outputtype:failuretype:)](https://developer.apple.com/documentation/combine/empty/init(completeimmediately:outputtype:failuretype:))

# init(completeImmediately:outputType:failureType:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an empty publisher with the given completion behavior and output and failure types.

## Declaration

```swift
init(completeImmediately: Bool = true, outputType: Output.Type, failureType: Failure.Type)
```

## Parameters

- `completeImmediately`: A Boolean value that indicates whether the publisher should immediately finish.
- `outputType`: The output type exposed by this publisher.
- `failureType`: The failure type exposed by this publisher.

<a id="discussion"></a>

## Discussion

Use this initializer to connect the empty publisher to subscribers or other publishers that have specific output and failure types.

## See Also

### Creating an empty publisher

- [init(completeImmediately:)](init%28completeimmediately_%29.md): Creates an empty publisher.
