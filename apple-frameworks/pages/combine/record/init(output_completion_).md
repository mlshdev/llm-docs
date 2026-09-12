> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/init(output:completion:)](https://developer.apple.com/documentation/combine/record/init(output:completion:))

# init(output:completion:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a record publisher to publish the provided elements, followed by the provided completion value.

## Declaration

```swift
init(output: [Output], completion: Subscribers.Completion<Failure>)
```

## Parameters

- `output`: An array of output elements to publish.
- `completion`: The completion value with which to end publishing.

## See Also

### Creating a record publisher

- [init(record:)](init%28record_%29.md): Creates a publisher to interactively record a series of outputs and a completion.
- [init(recording:)](init%28recording_%29.md): Creates a record publisher from an existing recording.
