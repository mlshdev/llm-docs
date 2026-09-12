> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/init(recording:)](https://developer.apple.com/documentation/combine/record/init(recording:))

# init(recording:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a record publisher from an existing recording.

## Declaration

```swift
init(recording: Record<Output, Failure>.Recording)
```

## Parameters

- `recording`: A previously-recorded recording of published elements and a completion.

## See Also

### Creating a record publisher

- [init(output:completion:)](init%28output_completion_%29.md): Creates a record publisher to publish the provided elements, followed by the provided completion value.
- [init(record:)](init%28record_%29.md): Creates a publisher to interactively record a series of outputs and a completion.
