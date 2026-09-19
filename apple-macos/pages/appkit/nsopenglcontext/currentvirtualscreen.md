> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsopenglcontext/currentvirtualscreen

# currentVirtualScreen (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the current virtual screen for the OpenGL context.

> Please use Metal or MetalKit.

## Declaration

```swift
var currentVirtualScreen: GLint { get set }
```

<a id="return-value"></a>

## Return Value

The virtual screen number, which is a value between 0 and the number of virtual screens minus one.

# currentVirtualScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the current virtual screen for the OpenGL context.

> Please use Metal or MetalKit.

## Declaration

```objectivec
@property GLint currentVirtualScreen;
```

<a id="return-value"></a>

## Return Value

The virtual screen number, which is a value between 0 and the number of virtual screens minus one.
