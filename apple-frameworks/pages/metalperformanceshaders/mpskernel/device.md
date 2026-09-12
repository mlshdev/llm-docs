> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskernel/device](https://developer.apple.com/documentation/metalperformanceshaders/mpskernel/device)

# device (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The device on which the kernel will be used.

## Declaration

```swift
var device: any MTLDevice { get }
```

## See Also

### Properties

- [options](options.md): The set of options used to run the kernel.
- [MPSKernelOptions](../mpskerneloptions.md): The options used when creating a kernel.
- [label](label.md): The string that identifies the kernel.

# device (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The device on which the kernel will be used.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nonnull) id<MTLDevice> device;
```

## See Also

### Properties

- [options](options.md): The set of options used to run the kernel.
- [MPSKernelOptions](../mpskerneloptions.md): The options used when creating a kernel.
- [label](label.md): The string that identifies the kernel.
