> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/device](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device instance that created the pipeline state.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

This compute state instance is only usable on the device set in this property.

## See Also

### Identifying a pipeline state

- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
- [label](label.md): A string that helps you identify the compute pipeline state during debugging.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device instance that created the pipeline state.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

This compute state instance is only usable on the device set in this property.

## See Also

### Identifying a pipeline state

- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
- [label](label.md): A string that helps you identify the compute pipeline state during debugging.
