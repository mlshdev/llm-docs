> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/init(record:)](https://developer.apple.com/documentation/combine/record/init(record:))

# init(record:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher to interactively record a series of outputs and a completion.

## Declaration

```swift
init(record: (inout Record<Output, Failure>.Recording) -> Void)
```

## Parameters

- `record`: A recording instance that can be retrieved after completion to create new record publishers to replay the recording.

## See Also

### Creating a record publisher

- [init(output:completion:)](init%28output_completion_%29.md): Creates a record publisher to publish the provided elements, followed by the provided completion value.
- [init(recording:)](init%28recording_%29.md): Creates a record publisher from an existing recording.
