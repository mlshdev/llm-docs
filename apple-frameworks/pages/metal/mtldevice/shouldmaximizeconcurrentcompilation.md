> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtldevice/shouldmaximizeconcurrentcompilation

# shouldMaximizeConcurrentCompilation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

A Boolean value that indicates whether the device uses additional CPU threads for compilation tasks.

## Declaration

```swift
var shouldMaximizeConcurrentCompilation: Bool { get set }
```

## Mentioned In

- [Using the Metal 4 compilation API](../using-the-metal-4-compilation-api.md)

<a id="discussion"></a>

## Discussion

The property’s default value is [false](https://developer.apple.com/documentation/swift/false). You can retrieve the number of concurrent CPU threads the device is currently using by checking the [maximumConcurrentCompilationTaskCount](maximumconcurrentcompilationtaskcount.md) property.

> **Note**

> The number of additional CPU threads automatically scales with the system’s hardware capabilities.

# shouldMaximizeConcurrentCompilation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

A Boolean value that indicates whether the device uses additional CPU threads for compilation tasks.

## Declaration

```objectivec
@property (atomic) BOOL shouldMaximizeConcurrentCompilation;
```

## Mentioned In

- [Using the Metal 4 compilation API](../using-the-metal-4-compilation-api.md)

<a id="discussion"></a>

## Discussion

The property’s default value is [false](https://developer.apple.com/documentation/swift/false). You can retrieve the number of concurrent CPU threads the device is currently using by checking the [maximumConcurrentCompilationTaskCount](maximumconcurrentcompilationtaskcount.md) property.

> **Note**

> The number of additional CPU threads automatically scales with the system’s hardware capabilities.
