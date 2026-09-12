> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/device](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device instance that creates the pipeline state.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

You can only use the pipeline state object with this device object.

## See Also

### Identifying a pipeline state

- [label](label.md): A string that helps you identify the render pipeline state during debugging.
- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device instance that creates the pipeline state.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

You can only use the pipeline state object with this device object.

## See Also

### Identifying a pipeline state

- [label](label.md): A string that helps you identify the render pipeline state during debugging.
- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
