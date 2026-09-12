> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugintexturereleasecallback](https://developer.apple.com/documentation/quartz/qcplugintexturereleasecallback)

# QCPlugInTextureReleaseCallback (Swift)

**Framework:** Quartz  
**Kind:** Type Alias  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
typealias QCPlugInTextureReleaseCallback = (CGLContextObj?, GLuint, UnsafeMutableRawPointer?) -> Void
```

## See Also

### Data Types

- [QCPlugInBufferReleaseCallback](qcpluginbufferreleasecallback.md): Deprecated.

# QCPlugInTextureReleaseCallback (Objective-C)

**Framework:** Quartz  
**Kind:** Type Alias  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
typedef void (*)(struct _CGLContextObject *, unsigned int, void *) QCPlugInTextureReleaseCallback;
```

## See Also

### Data Types

- [QCPlugInBufferReleaseCallback](qcpluginbufferreleasecallback.md): Deprecated.
