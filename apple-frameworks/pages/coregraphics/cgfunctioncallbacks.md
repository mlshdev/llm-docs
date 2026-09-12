> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfunctioncallbacks](https://developer.apple.com/documentation/coregraphics/cgfunctioncallbacks)

# CGFunctionCallbacks (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains callbacks needed by a `CGFunctionRef` object.

## Declaration

```swift
struct CGFunctionCallbacks
```

## Topics

### Initializers

- [init()](cgfunctioncallbacks/init%28%29.md)
- [init(version:evaluate:releaseInfo:)](cgfunctioncallbacks/init%28version_evaluate_releaseinfo_%29.md)

### Instance Properties

- [evaluate](cgfunctioncallbacks/evaluate.md): The callback that evaluates the function.
- [releaseInfo](cgfunctioncallbacks/releaseinfo.md): If non-`NULL`,the callback used to release the `info` parameterpassed to [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).
- [version](cgfunctioncallbacks/version.md): The structure version number. For this structure,the version should be `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Callbacks

- [CGFunctionEvaluateCallback](cgfunctionevaluatecallback.md): Performs custom operations on the supplied input data to produce output data.
- [CGFunctionReleaseInfoCallback](cgfunctionreleaseinfocallback.md): Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.

# CGFunctionCallbacks (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains callbacks needed by a `CGFunctionRef` object.

## Declaration

```objectivec
struct CGFunctionCallbacks;
```

## Topics

### Instance Properties

- [evaluate](cgfunctioncallbacks/evaluate.md): The callback that evaluates the function.
- [releaseInfo](cgfunctioncallbacks/releaseinfo.md): If non-`NULL`,the callback used to release the `info` parameterpassed to [CGFunctionCreate](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).
- [version](cgfunctioncallbacks/version.md): The structure version number. For this structure,the version should be `0`.

## See Also

### Callbacks

- [CGFunctionEvaluateCallback](cgfunctionevaluatecallback.md): Performs custom operations on the supplied input data to produce output data.
- [CGFunctionReleaseInfoCallback](cgfunctionreleaseinfocallback.md): Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.
