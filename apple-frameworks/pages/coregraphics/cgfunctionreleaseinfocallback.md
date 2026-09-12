> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfunctionreleaseinfocallback](https://developer.apple.com/documentation/coregraphics/cgfunctionreleaseinfocallback)

# CGFunctionReleaseInfoCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.

## Declaration

```swift
typealias CGFunctionReleaseInfoCallback = (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `info`: The `info` parameter passed to [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).

## See Also

### Callbacks

- [CGFunctionCallbacks](cgfunctioncallbacks.md): A structure that contains callbacks needed by a `CGFunctionRef` object.
- [CGFunctionEvaluateCallback](cgfunctionevaluatecallback.md): Performs custom operations on the supplied input data to produce output data.

# CGFunctionReleaseInfoCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.

## Declaration

```objectivec
typedef void (*)(void *) CGFunctionReleaseInfoCallback;
```

## Parameters

- `info`: The `info` parameter passed to [CGFunctionCreate](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).

## See Also

### Callbacks

- [CGFunctionCallbacks](cgfunctioncallbacks.md): A structure that contains callbacks needed by a `CGFunctionRef` object.
- [CGFunctionEvaluateCallback](cgfunctionevaluatecallback.md): Performs custom operations on the supplied input data to produce output data.
