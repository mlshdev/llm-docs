> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel/devicearchitecturename](https://developer.apple.com/documentation/coreai/aimodel/devicearchitecturename)

# deviceArchitectureName

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The Core AI architecture name of the current device.

## Declaration

```swift
static var deviceArchitectureName: String { get }
```

## Mentioned In

- [Compiling Core AI models ahead of time](../compiling-core-ai-models-ahead-of-time.md)

<a id="discussion"></a>

## Discussion

When compiling model assets ahead of time with `xcrun coreai-build compile`, the toolchain produces artifacts for specific device architectures. Use this property to discover which compiled asset matches the current device.

## See Also

### Inspecting a model

- [bookmarkData](bookmarkdata.md): Create a bookmark for this AIModel’s cached specialized asset entry as serialized data.
