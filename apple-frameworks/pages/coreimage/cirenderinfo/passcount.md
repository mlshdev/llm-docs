> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderinfo/passcount](https://developer.apple.com/documentation/coreimage/cirenderinfo/passcount)

# passCount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of passes the render took.

## Declaration

```swift
var passCount: Int { get }
```

## See Also

### Instance Properties

- [kernelExecutionTime](kernelexecutiontime.md): The amount of time a render spent executing kernels.
- [pixelsProcessed](pixelsprocessed.md): The number of pixels the render produced executing kernels.
- [kernelCompileTime](kernelcompiletime.md)

# passCount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of passes the render took.

## Declaration

```objectivec
@property (readonly) NSInteger passCount;
```

## See Also

### Instance Properties

- [kernelExecutionTime](kernelexecutiontime.md): The amount of time a render spent executing kernels.
- [pixelsProcessed](pixelsprocessed.md): The number of pixels the render produced executing kernels.
- [kernelCompileTime](kernelcompiletime.md)
