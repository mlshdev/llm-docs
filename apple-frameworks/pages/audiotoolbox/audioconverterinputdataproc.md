> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audioconverterinputdataproc

# AudioConverterInputDataProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Deprecated. Use [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) instead.

## Declaration

```swift
typealias AudioConverterInputDataProc = (AudioConverterRef, UnsafeMutablePointer<UInt32>, UnsafeMutablePointer<UnsafeMutableRawPointer>, UnsafeMutableRawPointer?) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAudioConverterInputDataProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This deprecated callback supplies input data to the [AudioConverterFillBuffer](audioconverterfillbuffer.md) function. Use [AudioConverterComplexInputDataProc](audioconvertercomplexinputdataproc.md) instead.

## See Also

### Callbacks

- [AudioConverterComplexInputDataProc](audioconvertercomplexinputdataproc.md): Supplies input data to the [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) function.

# AudioConverterInputDataProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Deprecated. Use [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) instead.

## Declaration

```objectivec
typedef int (*)(struct OpaqueAudioConverter *, unsigned int *, void **, void *) AudioConverterInputDataProc;
```

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAudioConverterInputDataProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

This deprecated callback supplies input data to the [AudioConverterFillBuffer](audioconverterfillbuffer.md) function. Use [AudioConverterComplexInputDataProc](audioconvertercomplexinputdataproc.md) instead.

## See Also

### Callbacks

- [AudioConverterComplexInputDataProc](audioconvertercomplexinputdataproc.md): Supplies input data to the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function.
