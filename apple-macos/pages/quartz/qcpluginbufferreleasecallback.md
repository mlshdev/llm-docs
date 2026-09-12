> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginbufferreleasecallback](https://developer.apple.com/documentation/quartz/qcpluginbufferreleasecallback)

# QCPlugInBufferReleaseCallback (Swift)

**Framework:** Quartz  
**Kind:** Type Alias  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
typealias QCPlugInBufferReleaseCallback = (UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## See Also

### Data Types

- [QCPlugInTextureReleaseCallback](qcplugintexturereleasecallback.md): Deprecated.

# QCPlugInBufferReleaseCallback (Objective-C)

**Framework:** Quartz  
**Kind:** Type Alias  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
typedef void (*)(const void *, void *) QCPlugInBufferReleaseCallback;
```

## See Also

### Data Types

- [QCPlugInTextureReleaseCallback](qcplugintexturereleasecallback.md): Deprecated.
