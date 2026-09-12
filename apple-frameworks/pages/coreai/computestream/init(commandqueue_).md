> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/computestream/init(commandqueue:)](https://developer.apple.com/documentation/coreai/computestream/init(commandqueue:))

# init(commandQueue:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initialize a compute stream which will encode its work to the provided command queue.

## Declaration

```swift
init(commandQueue: any MTLCommandQueue)
```

## Parameters

- `commandQueue`: The queue which inference will be encoded to when running [encode(inputs:states:outputViews:to:)](../inferencefunction/encode%28inputs_states_outputviews_to_%29.md).

<a id="discussion"></a>

## Discussion

You can use this to encode inferences to your own metal queue.

## See Also

### Creating a stream

- [init()](init%28%29.md): Initialize an empty compute stream.
