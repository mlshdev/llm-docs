> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsopenglcontext/cglcontextobj

# cglContextObj (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the low-level, platform-specific Core OpenGL (CGL) context object represented by the receiver.

> Please use Metal or MetalKit.

## Declaration

```swift
var cglContextObj: CGLContextObj? { get }
```

<a id="return-value"></a>

## Return Value

A pointer to the CGLContextObj data type represented by the receiver.

# CGLContextObj (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the low-level, platform-specific Core OpenGL (CGL) context object represented by the receiver.

> Please use Metal or MetalKit.

## Declaration

```objectivec
@property (readonly, nullable) CGLContextObj CGLContextObj;
```

<a id="return-value"></a>

## Return Value

A pointer to the CGLContextObj data type represented by the receiver.
