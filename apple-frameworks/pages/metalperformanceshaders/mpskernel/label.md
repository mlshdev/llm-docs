> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpskernel/label

# label (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The string that identifies the kernel.

## Declaration

```swift
var label: String? { get set }
```

## See Also

### Properties

- [options](options.md): The set of options used to run the kernel.
- [MPSKernelOptions](../mpskerneloptions.md): The options used when creating a kernel.
- [device](device.md): The device on which the kernel will be used.

# label (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The string that identifies the kernel.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

## See Also

### Properties

- [options](options.md): The set of options used to run the kernel.
- [MPSKernelOptions](../mpskerneloptions.md): The options used when creating a kernel.
- [device](device.md): The device on which the kernel will be used.
