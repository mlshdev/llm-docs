> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/cglcontextobj](https://developer.apple.com/documentation/appkit/nsopenglcontext/cglcontextobj)

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
