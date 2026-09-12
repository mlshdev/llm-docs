> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/label](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A string that helps you identify the render pipeline state during debugging.

## Declaration

```swift
var label: String? { get }
```

## See Also

### Identifying a pipeline state

- [device](device.md): The device instance that creates the pipeline state.
- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A string that helps you identify the render pipeline state during debugging.

## Declaration

```objectivec
@property (readonly, nullable) NSString * label;
```

## See Also

### Identifying a pipeline state

- [device](device.md): The device instance that creates the pipeline state.
- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
