> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderinfo/kernelexecutiontime](https://developer.apple.com/documentation/coreimage/cirenderinfo/kernelexecutiontime)

# kernelExecutionTime (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The amount of time a render spent executing kernels.

## Declaration

```swift
var kernelExecutionTime: TimeInterval { get }
```

## See Also

### Instance Properties

- [passCount](passcount.md): The number of passes the render took.
- [pixelsProcessed](pixelsprocessed.md): The number of pixels the render produced executing kernels.
- [kernelCompileTime](kernelcompiletime.md)

# kernelExecutionTime (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The amount of time a render spent executing kernels.

## Declaration

```objectivec
@property (readonly) NSTimeInterval kernelExecutionTime;
```

## See Also

### Instance Properties

- [passCount](passcount.md): The number of passes the render took.
- [pixelsProcessed](pixelsprocessed.md): The number of pixels the render produced executing kernels.
- [kernelCompileTime](kernelcompiletime.md)
