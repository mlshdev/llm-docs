> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/label](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A string that helps you identify the compute pipeline state during debugging.

## Declaration

```swift
var label: String? { get }
```

<a id="discussion"></a>

## Discussion

Labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying a pipeline state

- [device](device.md): The device instance that created the pipeline state.
- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A string that helps you identify the compute pipeline state during debugging.

## Declaration

```objectivec
@property (readonly, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying a pipeline state

- [device](device.md): The device instance that created the pipeline state.
- [gpuResourceID](gpuresourceid.md): An unique identifier that represents the pipeline state, which you can add to an argument buffer.
